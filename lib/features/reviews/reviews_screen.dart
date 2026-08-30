import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../providers.dart';
import '../../db/app_database.dart';
import '../../theme/app_theme.dart';
import '../../widgets/question_image_card.dart';

class ReviewsScreen extends ConsumerStatefulWidget {
  const ReviewsScreen({super.key, required this.packId});
  final String packId;

  @override
  ConsumerState<ReviewsScreen> createState() => _ReviewsScreenState();
}

class _ReviewsScreenState extends ConsumerState<ReviewsScreen> {
  List<(UserProgressData, Question)> _queue = [];
  int _currentIndex = 0;
  String? _selectedAnswer;
  bool _answered = false;
  bool _loading = true;
  int _correctCount = 0;

  DateTime? _earliestUpcoming;
  int _activeLearningCount = 0;

  static const _stageNames = ['Available', 'Apprentice 1', 'Apprentice 2', 'Apprentice 3', 'Apprentice 4', 'Guru 1', 'Guru 2', 'Master', 'Burned'];

  @override
  void initState() {
    super.initState();
    _loadReviews();
  }

  Future<void> _loadReviews() async {
    final db = ref.read(dbProvider);
    final due = await db.progressDao.getDueReviewsForPack(widget.packId);
    final earliest = await db.progressDao.getEarliestUpcomingReview(widget.packId);
    final stageCounts = await db.progressDao.getStageCounts(widget.packId);
    
    final allQ = await (db.select(db.questions)..where((q) => q.packId.equals(widget.packId))).get();
    final qById = {for (final q in allQ) q.id: q};
    final pairs = due
        .where((p) => qById.containsKey(p.questionId))
        .map((p) => (p, qById[p.questionId]!))
        .toList();
    pairs.shuffle();
    
    if (mounted) {
      setState(() {
        _queue = pairs;
        _earliestUpcoming = earliest;
        _activeLearningCount = stageCounts.learnedTotal - stageCounts.burned;
        _loading = false;
      });
    }
  }

  String _formatUpcomingTime(DateTime dt) {
    final now = DateTime.now();
    final diff = dt.difference(now);
    if (diff.isNegative) return 'Ready now';
    if (diff.inMinutes < 60) return 'in ${diff.inMinutes + 1} minutes';
    if (diff.inHours < 24) {
      final hrs = diff.inHours;
      final mins = diff.inMinutes % 60;
      return 'in $hrs hr${hrs > 1 ? 's' : ''} ${mins > 0 ? '$mins min' : ''}';
    }
    final days = diff.inDays;
    return 'in $days day${days > 1 ? 's' : ''}';
  }

  (UserProgressData, Question) get _current => _queue[_currentIndex];

  void _selectAnswer(String choice) {
    if (_answered) return;
    setState(() { _selectedAnswer = choice; _answered = true; });
  }

  Future<void> _next() async {
    final db = ref.read(dbProvider);
    final settings = ref.read(settingsServiceProvider);
    final correct = _selectedAnswer == _current.$2.correctAnswer;
    if (correct) _correctCount++;
    await db.progressDao.recordAnswer(_current.$2.id, correct: correct);
    await settings.incrementReviewsCount();
    await settings.recordStudyEvent();

    if (_currentIndex < _queue.length - 1) {
      setState(() { _currentIndex++; _selectedAnswer = null; _answered = false; });
    } else {
      if (mounted) {
        showDialog(
          context: context,
          barrierDismissible: false,
          builder: (_) => AlertDialog(
            backgroundColor: SynapseColors.card,
            title: const Text('Reviews Complete! 🎉'),
            content: Text('Correct: $_correctCount / ${_queue.length}'),
            actions: [
              TextButton(
                onPressed: () { Navigator.of(context).pop(); Navigator.of(context).pop(); },
                child: const Text('Done'),
              ),
            ],
          ),
        );
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final cs = Theme.of(context).colorScheme;

    if (_loading) return const Scaffold(body: Center(child: CircularProgressIndicator()));

    if (_queue.isEmpty) {
      return Scaffold(
        appBar: AppBar(title: const Text('SRS Reviews')),
        body: Center(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  padding: const EdgeInsets.all(20),
                  decoration: BoxDecoration(
                    color: SynapseColors.secondary.withAlpha(25),
                    shape: BoxShape.circle,
                  ),
                  child: const Icon(Icons.check_circle_outline_rounded, size: 56, color: SynapseColors.secondary),
                ),
                const SizedBox(height: 20),
                const Text('All Caught Up!', style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold)),
                const SizedBox(height: 8),
                Text(
                  'No reviews currently due for this subject.',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: cs.onSurfaceVariant, fontSize: 14),
                ),
                const SizedBox(height: 24),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
                  decoration: BoxDecoration(
                    color: cs.surfaceContainerHigh,
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: cs.outlineVariant.withAlpha(50)),
                  ),
                  child: Column(
                    children: [
                      Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          const Icon(Icons.timer_outlined, size: 18, color: SynapseColors.apprentice),
                          const SizedBox(width: 8),
                          Text(
                            _earliestUpcoming != null
                              ? 'Next review due: ${_formatUpcomingTime(_earliestUpcoming!)}'
                              : 'No upcoming reviews scheduled',
                            style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 14),
                          ),
                        ],
                      ),
                      if (_activeLearningCount > 0) ...[
                        const SizedBox(height: 6),
                        Text(
                          '$_activeLearningCount items active in your SRS memory pipeline',
                          style: TextStyle(fontSize: 12, color: cs.onSurfaceVariant),
                        ),
                      ],
                    ],
                  ),
                ),
                const SizedBox(height: 32),
                OutlinedButton.icon(
                  onPressed: () => Navigator.of(context).pop(),
                  icon: const Icon(Icons.arrow_back_rounded, size: 18),
                  label: const Text('Back to Pack Overview'),
                ),
              ],
            ),
          ),
        ),
      );
    }

    final progress = _current.$1;
    final question = _current.$2;
    final stageName = progress.srsStage < _stageNames.length ? _stageNames[progress.srsStage] : 'Burned';
    final stageColor = _stageColor(progress.srsStage);
    final choices = [('A', question.choiceA), ('B', question.choiceB), ('C', question.choiceC), ('D', question.choiceD)];

    return Scaffold(
      backgroundColor: SynapseColors.surface,
      appBar: AppBar(
        title: Text('Review ${_currentIndex + 1} / ${_queue.length}'),
        backgroundColor: SynapseColors.surface,
        bottom: PreferredSize(
          preferredSize: const Size.fromHeight(4),
          child: LinearProgressIndicator(
            value: (_currentIndex + 1) / _queue.length,
            backgroundColor: cs.surfaceContainerHighest,
            valueColor: AlwaysStoppedAnimation<Color>(stageColor),
            minHeight: 4,
          ),
        ),
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(
                      color: stageColor.withAlpha(25),
                      borderRadius: BorderRadius.circular(8),
                      border: Border.all(color: stageColor.withAlpha(80)),
                    ),
                    child: Text(stageName, style: TextStyle(fontSize: 11, color: stageColor, fontWeight: FontWeight.w600)),
                  ),
                  const SizedBox(width: 8),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                    decoration: BoxDecoration(
                      color: cs.surfaceContainerHighest,
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: Text(question.moduleName, style: TextStyle(fontSize: 11, color: cs.onSurfaceVariant)),
                  ),
                ],
              ),
              const SizedBox(height: 16),
              if (question.imageUrl != null && question.imageUrl!.isNotEmpty)
                QuestionImageCard(imageUrl: question.imageUrl!),
              Text(question.question, style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w600, height: 1.4)),
              const SizedBox(height: 24),
              ...choices.map((c) {
                final letter = c.$1;
                final text = c.$2;
                final isSelected = _selectedAnswer == letter;
                final isCorrect = letter == question.correctAnswer;
                Color borderColor = cs.outline.withAlpha(80);
                Color bgColor = cs.surfaceContainerHigh;
                if (_answered) {
                  if (isCorrect) { bgColor = SynapseColors.secondary.withAlpha(25); borderColor = SynapseColors.secondary; }
                  else if (isSelected) { bgColor = cs.error.withAlpha(25); borderColor = cs.error; }
                }
                return Padding(
                  padding: const EdgeInsets.only(bottom: 10),
                  child: InkWell(
                    borderRadius: BorderRadius.circular(12),
                    onTap: () => _selectAnswer(letter),
                    child: AnimatedContainer(
                      duration: const Duration(milliseconds: 200),
                      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                      decoration: BoxDecoration(
                        color: bgColor,
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(color: borderColor, width: isSelected || (_answered && isCorrect) ? 2 : 1),
                      ),
                      child: Row(
                        children: [
                          Container(
                            width: 28, height: 28,
                            alignment: Alignment.center,
                            decoration: BoxDecoration(
                              color: isSelected || (_answered && isCorrect) ? borderColor : cs.surfaceContainerHighest,
                              shape: BoxShape.circle,
                            ),
                            child: Text(letter, style: TextStyle(fontWeight: FontWeight.bold, fontSize: 13, color: isSelected || (_answered && isCorrect) ? Colors.white : cs.onSurface)),
                          ),
                          const SizedBox(width: 12),
                          Expanded(child: Text(text, style: const TextStyle(fontSize: 14, height: 1.3))),
                        ],
                      ),
                    ),
                  ),
                );
              }),
              if (_answered) ...[
                const SizedBox(height: 8),
                Container(
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: cs.surfaceContainerHigh,
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: cs.outlineVariant.withAlpha(60)),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text('Explanation', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 13)),
                      const SizedBox(height: 4),
                      Text(question.explanation, style: TextStyle(fontSize: 13, color: cs.onSurfaceVariant, height: 1.4)),
                    ],
                  ),
                ),
              ],
              const Spacer(),
              if (_answered)
                SizedBox(
                  width: double.infinity,
                  child: FilledButton(
                    onPressed: _next,
                    style: FilledButton.styleFrom(
                      backgroundColor: stageColor,
                      minimumSize: const Size.fromHeight(52),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                    ),
                    child: Text(_currentIndex < _queue.length - 1 ? 'Next Review' : 'Finish'),
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }

  Color _stageColor(int stage) {
    if (stage <= 4) return SynapseColors.apprentice;
    if (stage <= 6) return SynapseColors.guru;
    if (stage == 7) return SynapseColors.master;
    return SynapseColors.burned;
  }
}