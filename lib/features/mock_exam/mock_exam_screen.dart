import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../providers.dart';
import '../../db/app_database.dart';
import '../../theme/app_theme.dart';
import '../../widgets/question_image_card.dart';

class MockExamScreen extends ConsumerStatefulWidget {
  const MockExamScreen({super.key, required this.packId, required this.packName});
  final String packId;
  final String packName;

  @override
  ConsumerState<MockExamScreen> createState() => _MockExamScreenState();
}

class _MockExamScreenState extends ConsumerState<MockExamScreen> {
  List<Question> _questions = [];
  final Map<int, String> _userAnswers = {};
  int _currentIndex = 0;
  bool _loading = true;
  int _remainingSeconds = 600; // 10 minutes default
  Timer? _timer;
  bool _submitted = false;

  @override
  void initState() {
    super.initState();
    _loadExamQuestions();
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  Future<void> _loadExamQuestions() async {
    final db = ref.read(dbProvider);
    final allQ = await (db.select(db.questions)..where((q) => q.packId.equals(widget.packId))).get();
    final shuffled = List<Question>.from(allQ)..shuffle();
    final count = shuffled.length < 20 ? shuffled.length : 20;

    setState(() {
      _questions = shuffled.take(count).toList();
      _remainingSeconds = _questions.length * 60; // 1 minute per question
      _loading = false;
    });

    _timer = Timer.periodic(const Duration(seconds: 1), (t) {
      if (_remainingSeconds > 0) {
        setState(() {
          _remainingSeconds--;
        });
      } else {
        _timer?.cancel();
        _submitExam();
      }
    });
  }

  void _selectAnswer(String choice) {
    if (_submitted) return;
    setState(() {
      _userAnswers[_currentIndex] = choice;
    });
  }

  void _submitExam() {
    _timer?.cancel();
    int correct = 0;
    for (int i = 0; i < _questions.length; i++) {
      if (_userAnswers[i] == _questions[i].correctAnswer) {
        correct++;
      }
    }
    setState(() {
      _submitted = true;
    });

    final pct = _questions.isNotEmpty ? ((correct / _questions.length) * 100).round() : 0;
    final passed = pct >= 70;

    final settings = ref.read(settingsServiceProvider);
    settings.setMockExamScore(widget.packId, pct);
    if (pct == 100) {
      settings.setValedictorian();
    }

    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (_) => AlertDialog(
        backgroundColor: SynapseColors.card,
        title: Row(
          children: [
            Icon(passed ? Icons.check_circle_rounded : Icons.cancel_rounded,
                color: passed ? SynapseColors.secondary : Colors.red),
            const SizedBox(width: 8),
            Text(passed ? 'Exam Passed! 🎓' : 'Exam Incomplete'),
          ],
        ),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Score: $correct / ${_questions.length} ($pct%)',
                style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
            const SizedBox(height: 8),
            Text(passed
                ? 'Congratulations! You achieved passing threshold of 70%.'
                : 'Passing score is 70%. Review your study queue to strengthen mastery.'),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.of(context).pop();
              Navigator.of(context).pop();
            },
            child: const Text('Exit Exam'),
          ),
        ],
      ),
    );
  }

  String _formatTime(int totalSeconds) {
    final m = (totalSeconds ~/ 60).toString().padLeft(2, '0');
    final s = (totalSeconds % 60).toString().padLeft(2, '0');
    return '$m:$s';
  }

  @override
  Widget build(BuildContext context) {
    final cs = Theme.of(context).colorScheme;

    if (_loading) {
      return const Scaffold(body: Center(child: CircularProgressIndicator()));
    }
    if (_questions.isEmpty) {
      return Scaffold(
        appBar: AppBar(title: Text('Mock Exam: ${widget.packName}')),
        body: const Center(child: Text('No questions available for this exam.')),
      );
    }

    final current = _questions[_currentIndex];
    final selectedAnswer = _userAnswers[_currentIndex];
    final choices = [
      ('A', current.choiceA),
      ('B', current.choiceB),
      ('C', current.choiceC),
      ('D', current.choiceD),
    ];

    return Scaffold(
      backgroundColor: SynapseColors.surface,
      appBar: AppBar(
        title: Text('Mock Exam (${_currentIndex + 1}/${_questions.length})'),
        backgroundColor: SynapseColors.surface,
        actions: [
          // Fast-Forward Auto-Answer All Questions (Testing & Rapid Completion Tool)
          IconButton(
            icon: const Icon(Icons.fast_forward_rounded, size: 22),
            color: SynapseColors.secondary,
            tooltip: 'Fast-Forward (Auto-Answer All)',
            onPressed: () {
              showDialog(
                context: context,
                builder: (ctx) => AlertDialog(
                  backgroundColor: SynapseColors.card,
                  title: const Row(
                    children: [
                      Icon(Icons.fast_forward_rounded, color: SynapseColors.secondary),
                      SizedBox(width: 8),
                      Text('Fast-Forward Exam'),
                    ],
                  ),
                  content: const Text(
                    'Automatically fill and answer all questions in this mock exam to test scoring and certificate flows:',
                  ),
                  actions: [
                    TextButton(
                      onPressed: () => Navigator.of(ctx).pop(),
                      child: const Text('Cancel'),
                    ),
                    OutlinedButton(
                      onPressed: () {
                        Navigator.of(ctx).pop();
                        // 80% passing simulation
                        for (int i = 0; i < _questions.length; i++) {
                          if (i % 5 != 0) {
                            _userAnswers[i] = _questions[i].correctAnswer;
                          } else {
                            final wrongChoices = ['A', 'B', 'C', 'D'].where((c) => c != _questions[i].correctAnswer).toList();
                            _userAnswers[i] = wrongChoices.first;
                          }
                        }
                        _submitExam();
                      },
                      child: const Text('Pass (80% Score)'),
                    ),
                    FilledButton(
                      style: FilledButton.styleFrom(backgroundColor: SynapseColors.secondary),
                      onPressed: () {
                        Navigator.of(ctx).pop();
                        // 100% perfect score
                        for (int i = 0; i < _questions.length; i++) {
                          _userAnswers[i] = _questions[i].correctAnswer;
                        }
                        _submitExam();
                      },
                      child: const Text('Perfect (100% Score)', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.black)),
                    ),
                  ],
                ),
              );
            },
          ),
          // Instant Finish / Submit button
          IconButton(
            icon: const Icon(Icons.check_circle_outline_rounded, size: 20),
            color: SynapseColors.guru,
            tooltip: 'Finish & Submit Exam Now',
            onPressed: () {
              showDialog(
                context: context,
                builder: (ctx) => AlertDialog(
                  backgroundColor: SynapseColors.card,
                  title: const Text('Submit Exam?'),
                  content: Text(
                    'You have answered ${_userAnswers.length} of ${_questions.length} questions. Are you ready to submit and calculate your score?',
                  ),
                  actions: [
                    TextButton(
                      onPressed: () => Navigator.of(ctx).pop(),
                      child: const Text('Continue Test'),
                    ),
                    FilledButton(
                      style: FilledButton.styleFrom(backgroundColor: SynapseColors.secondary),
                      onPressed: () {
                        Navigator.of(ctx).pop();
                        _submitExam();
                      },
                      child: const Text('Submit Now', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.black)),
                    ),
                  ],
                ),
              );
            },
          ),
          Container(
            margin: const EdgeInsets.only(right: 14),
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
            decoration: BoxDecoration(
              color: _remainingSeconds < 120 ? Colors.red.withAlpha(30) : SynapseColors.primary.withAlpha(30),
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: _remainingSeconds < 120 ? Colors.red : SynapseColors.primary),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(Icons.timer_outlined,
                    size: 16,
                    color: _remainingSeconds < 120 ? Colors.red : SynapseColors.primary),
                const SizedBox(width: 4),
                Text(
                  _formatTime(_remainingSeconds),
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 13,
                    color: _remainingSeconds < 120 ? Colors.red : SynapseColors.primary,
                  ),
                ),
              ],
            ),
          )
        ],
      ),
      body: SafeArea(
        child: Column(
          children: [
            // Question Grid Map
            SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              child: Row(
                children: List.generate(_questions.length, (idx) {
                  final answered = _userAnswers.containsKey(idx);
                  final isCurrent = idx == _currentIndex;
                  return Padding(
                    padding: const EdgeInsets.only(right: 6),
                    child: InkWell(
                      onTap: () => setState(() => _currentIndex = idx),
                      borderRadius: BorderRadius.circular(8),
                      child: Container(
                        width: 32,
                        height: 32,
                        alignment: Alignment.center,
                        decoration: BoxDecoration(
                          color: isCurrent
                              ? SynapseColors.primary
                              : (answered ? SynapseColors.secondary.withAlpha(50) : cs.surfaceContainerHighest),
                          borderRadius: BorderRadius.circular(8),
                          border: isCurrent
                              ? Border.all(color: Colors.white, width: 1.5)
                              : (answered ? Border.all(color: SynapseColors.secondary) : null),
                        ),
                        child: Text('${idx + 1}',
                            style: TextStyle(
                              fontSize: 12,
                              fontWeight: isCurrent || answered ? FontWeight.bold : FontWeight.normal,
                              color: isCurrent ? Colors.white : cs.onSurface,
                            )),
                      ),
                    ),
                  );
                }),
              ),
            ),
            const Divider(height: 1),
            Expanded(
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
                        current.moduleName,
                        style: TextStyle(fontSize: 11, color: cs.onSurfaceVariant, fontWeight: FontWeight.w600),
                      ),
                    ),
                    const SizedBox(height: 14),
                    if (current.imageUrl != null && current.imageUrl!.isNotEmpty)
                      QuestionImageCard(imageUrl: current.imageUrl!),
                    Text(
                      current.question,
                      style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w600, height: 1.4),
                    ),
                    const SizedBox(height: 20),
                    ...choices.map((c) {
                      final letter = c.$1;
                      final text = c.$2;
                      final isSelected = selectedAnswer == letter;

                      return Padding(
                        padding: const EdgeInsets.only(bottom: 10),
                        child: InkWell(
                          borderRadius: BorderRadius.circular(12),
                          onTap: () => _selectAnswer(letter),
                          child: AnimatedContainer(
                            duration: const Duration(milliseconds: 150),
                            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                            decoration: BoxDecoration(
                              color: isSelected ? SynapseColors.primary.withAlpha(30) : cs.surfaceContainerHigh,
                              borderRadius: BorderRadius.circular(12),
                              border: Border.all(
                                color: isSelected ? SynapseColors.primary : cs.outlineVariant.withAlpha(60),
                                width: isSelected ? 2 : 1,
                              ),
                            ),
                            child: Row(
                              children: [
                                Container(
                                  width: 28,
                                  height: 28,
                                  alignment: Alignment.center,
                                  decoration: BoxDecoration(
                                    color: isSelected ? SynapseColors.primary : cs.surfaceContainerHighest,
                                    shape: BoxShape.circle,
                                  ),
                                  child: Text(
                                    letter,
                                    style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                      fontSize: 13,
                                      color: isSelected ? Colors.white : cs.onSurface,
                                    ),
                                  ),
                                ),
                                const SizedBox(width: 12),
                                Expanded(child: Text(text, style: const TextStyle(fontSize: 14, height: 1.3))),
                              ],
                            ),
                          ),
                        ),
                      );
                    }),
                    const Spacer(),
                    Row(
                      children: [
                        if (_currentIndex > 0)
                          Expanded(
                            child: OutlinedButton(
                              onPressed: () => setState(() => _currentIndex--),
                              child: const Text('Previous'),
                            ),
                          ),
                        if (_currentIndex > 0) const SizedBox(width: 12),
                        Expanded(
                          child: _currentIndex < _questions.length - 1
                              ? FilledButton(
                                  onPressed: () => setState(() => _currentIndex++),
                                  child: const Text('Next'),
                                )
                              : FilledButton(
                                  onPressed: _submitExam,
                                  style: FilledButton.styleFrom(backgroundColor: SynapseColors.secondary),
                                  child: const Text('Submit Exam'),
                                ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}