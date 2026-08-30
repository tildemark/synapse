import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../providers.dart';
import '../../db/app_database.dart';
import '../../theme/app_theme.dart';
import '../../widgets/question_image_card.dart';

class LessonsScreen extends ConsumerStatefulWidget {
  const LessonsScreen({super.key, required this.packId});
  final String packId;

  @override
  ConsumerState<LessonsScreen> createState() => _LessonsScreenState();
}

class _LessonsScreenState extends ConsumerState<LessonsScreen> {
  List<Question> _questions = [];
  int _currentIndex = 0;
  String? _selectedAnswer;
  bool _answered = false;
  bool _loading = true;
  int _completedCount = 0;

  @override
  void initState() {
    super.initState();
    _loadLessons();
  }

  Future<void> _loadLessons() async {
    final db = ref.read(dbProvider);
    final settings = ref.read(settingsServiceProvider);
    final available = await db.progressDao
        .getAvailableForLessons(widget.packId, limit: settings.dailyLessonCap);
    setState(() {
      _questions = available;
      _loading = false;
    });
  }

  Question get _current => _questions[_currentIndex];

  void _selectAnswer(String choice) {
    if (_answered) return;
    setState(() {
      _selectedAnswer = choice;
      _answered = true;
    });
  }

  Future<void> _next() async {
    final db = ref.read(dbProvider);
    final correct = _selectedAnswer == _current.correctAnswer;
    if (correct) {
      await db.progressDao.completLesson(_current.id);
      _completedCount++;
    }

    if (_currentIndex < _questions.length - 1) {
      setState(() {
        _currentIndex++;
        _selectedAnswer = null;
        _answered = false;
      });
    } else {
      // Done
      if (mounted) {
        showDialog(
          context: context,
          builder: (_) => AlertDialog(
            backgroundColor: SynapseColors.card,
            title: const Text('Lessons Complete! 🎉'),
            content: Text('You completed $_completedCount lesson${_completedCount != 1 ? "s" : ""}.'),
            actions: [
              TextButton(
                onPressed: () {
                  Navigator.of(context).pop();
                  Navigator.of(context).pop();
                },
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

    if (_loading) {
      return const Scaffold(body: Center(child: CircularProgressIndicator()));
    }
    if (_questions.isEmpty) {
      return Scaffold(
        appBar: AppBar(title: const Text('Lessons')),
        body: Center(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Icon(Icons.check_circle_rounded, size: 64, color: SynapseColors.secondary),
                const SizedBox(height: 16),
                const Text('No new lessons!', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
                const SizedBox(height: 8),
                Text(
                  'All items are either in review or already mastered.',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: cs.onSurfaceVariant),
                ),
              ],
            ),
          ),
        ),
      );
    }

    final choices = [
      ('A', _current.choiceA),
      ('B', _current.choiceB),
      ('C', _current.choiceC),
      ('D', _current.choiceD),
    ];

    return Scaffold(
      backgroundColor: SynapseColors.surface,
      appBar: AppBar(
        title: Text('Lesson ${_currentIndex + 1} / ${_questions.length}'),
        backgroundColor: SynapseColors.surface,
        bottom: PreferredSize(
          preferredSize: const Size.fromHeight(4),
          child: LinearProgressIndicator(
            value: (_currentIndex + 1) / _questions.length,
            backgroundColor: cs.surfaceContainerHighest,
            valueColor: const AlwaysStoppedAnimation<Color>(SynapseColors.primary),
            minHeight: 4,
          ),
        ),
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(20, 20, 20, 32),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Module badge
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(
                  color: SynapseColors.primary.withAlpha(25),
                  borderRadius: BorderRadius.circular(8),
                  border: Border.all(color: SynapseColors.primary.withAlpha(60)),
                ),
                child: Text(
                  _current.moduleName,
                  style: const TextStyle(fontSize: 11, color: SynapseColors.primary, fontWeight: FontWeight.w600),
                ),
              ),
              const SizedBox(height: 16),
              if (_current.imageUrl != null && _current.imageUrl!.isNotEmpty)
                QuestionImageCard(imageUrl: _current.imageUrl!),
              // Question
              Text(
                _current.question,
                style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w600, height: 1.4),
              ),
              const SizedBox(height: 24),
              // Choices
              ...choices.map((c) {
                final letter = c.$1;
                final text = c.$2;
                final isSelected = _selectedAnswer == letter;
                final isCorrect = letter == _current.correctAnswer;
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
                            child: Text(letter, style: TextStyle(
                              fontWeight: FontWeight.bold,
                              fontSize: 13,
                              color: isSelected || (_answered && isCorrect) ? Colors.white : cs.onSurface,
                            )),
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
                const SizedBox(height: 12),
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: cs.surfaceContainerHigh,
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: cs.outlineVariant.withAlpha(60)),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text('Explanation', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 13)),
                      const SizedBox(height: 6),
                      Text(_current.explanation, style: TextStyle(fontSize: 13, color: cs.onSurfaceVariant, height: 1.4)),
                    ],
                  ),
                ),
              ],
            ],
          ),
        ),
      ),
      bottomNavigationBar: _answered
          ? SafeArea(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(20, 8, 20, 16),
                child: FilledButton(
                  onPressed: _next,
                  style: FilledButton.styleFrom(
                    backgroundColor: SynapseColors.primary,
                    minimumSize: const Size.fromHeight(52),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                  ),
                  child: Text(_currentIndex < _questions.length - 1 ? 'Next' : 'Finish'),
                ),
              ),
            )
          : null,
    );
  }
}