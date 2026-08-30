import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../providers.dart';
import '../../db/app_database.dart';
import '../../theme/app_theme.dart';
import '../../widgets/question_image_card.dart';

class CramScreen extends ConsumerStatefulWidget {
  const CramScreen({super.key, required this.packId, required this.packName});
  final String packId;
  final String packName;

  @override
  ConsumerState<CramScreen> createState() => _CramScreenState();
}

class _CramScreenState extends ConsumerState<CramScreen> {
  List<Question> _questions = [];
  int _currentIndex = 0;
  String? _selectedAnswer;
  bool _answered = false;
  bool _loading = true;
  int _correctCount = 0;

  @override
  void initState() {
    super.initState();
    _loadCramQuestions();
  }

  Future<void> _loadCramQuestions() async {
    final db = ref.read(dbProvider);
    final allQ = await (db.select(db.questions)..where((q) => q.packId.equals(widget.packId))).get();
    final shuffled = List<Question>.from(allQ)..shuffle();
    setState(() {
      _questions = shuffled;
      _loading = false;
    });
  }

  Question get _current => _questions[_currentIndex];

  void _selectAnswer(String choice) {
    if (_answered) return;
    setState(() {
      _selectedAnswer = choice;
      _answered = true;
      if (choice == _current.correctAnswer) {
        _correctCount++;
      }
    });
  }

  void _next() {
    if (_currentIndex < _questions.length - 1) {
      setState(() {
        _currentIndex++;
        _selectedAnswer = null;
        _answered = false;
      });
    } else {
      if (mounted) {
        showDialog(
          context: context,
          barrierDismissible: false,
          builder: (_) => AlertDialog(
            backgroundColor: SynapseColors.card,
            title: const Text('Cram Session Finished! ⚡'),
            content: Text('Score: $_correctCount / ${_questions.length}\n\nCram mode does not modify your SRS review schedule.'),
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
        appBar: AppBar(title: Text('Cram: ${widget.packName}')),
        body: const Center(child: Text('No questions available in this pack.')),
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
        title: Text('Cram: ${_currentIndex + 1}/${_questions.length}'),
        backgroundColor: SynapseColors.surface,
        actions: [
          Container(
            margin: const EdgeInsets.only(right: 16),
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
            decoration: BoxDecoration(
              color: SynapseColors.burned.withAlpha(30),
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: SynapseColors.burned.withAlpha(80)),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Icon(Icons.bolt, color: SynapseColors.burned, size: 16),
                const SizedBox(width: 4),
                Text('$_correctCount / ${_currentIndex + (_answered ? 1 : 0)}',
                    style: const TextStyle(fontWeight: FontWeight.bold, color: SynapseColors.burned, fontSize: 12)),
              ],
            ),
          )
        ],
        bottom: PreferredSize(
          preferredSize: const Size.fromHeight(4),
          child: LinearProgressIndicator(
            value: (_currentIndex + 1) / _questions.length,
            backgroundColor: cs.surfaceContainerHighest,
            valueColor: const AlwaysStoppedAnimation<Color>(SynapseColors.burned),
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
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(
                  color: cs.surfaceContainerHighest,
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Text(
                  _current.moduleName,
                  style: TextStyle(fontSize: 11, color: cs.onSurfaceVariant, fontWeight: FontWeight.w600),
                ),
              ),
              const SizedBox(height: 14),
              if (_current.imageUrl != null && _current.imageUrl!.isNotEmpty)
                QuestionImageCard(imageUrl: _current.imageUrl!),
              Text(
                _current.question,
                style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w600, height: 1.4),
              ),
              const SizedBox(height: 20),
              ...choices.map((c) {
                final letter = c.$1;
                final text = c.$2;
                final isSelected = _selectedAnswer == letter;
                final isCorrect = letter == _current.correctAnswer;
                Color borderColor = cs.outline.withAlpha(80);
                Color bgColor = cs.surfaceContainerHigh;
                if (_answered) {
                  if (isCorrect) {
                    bgColor = SynapseColors.secondary.withAlpha(25);
                    borderColor = SynapseColors.secondary;
                  } else if (isSelected) {
                    bgColor = cs.error.withAlpha(25);
                    borderColor = cs.error;
                  }
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
                        border: Border.all(
                            color: borderColor, width: isSelected || (_answered && isCorrect) ? 2 : 1),
                      ),
                      child: Row(
                        children: [
                          Container(
                            width: 28,
                            height: 28,
                            alignment: Alignment.center,
                            decoration: BoxDecoration(
                              color: isSelected || (_answered && isCorrect)
                                  ? borderColor
                                  : cs.surfaceContainerHighest,
                              shape: BoxShape.circle,
                            ),
                            child: Text(
                              letter,
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 13,
                                color: isSelected || (_answered && isCorrect)
                                    ? Colors.white
                                    : cs.onSurface,
                              ),
                            ),
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                              child: Text(text,
                                  style: const TextStyle(fontSize: 14, height: 1.3))),
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
                      const Text('Explanation',
                          style: TextStyle(fontWeight: FontWeight.bold, fontSize: 13)),
                      const SizedBox(height: 4),
                      Text(_current.explanation,
                          style: TextStyle(
                              fontSize: 13, color: cs.onSurfaceVariant, height: 1.4)),
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
                      backgroundColor: SynapseColors.burned,
                      minimumSize: const Size.fromHeight(52),
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(14)),
                    ),
                    child: Text(_currentIndex < _questions.length - 1 ? 'Next Question' : 'Finish Cram'),
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}