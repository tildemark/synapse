import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../providers.dart';
import '../../db/app_database.dart';
import '../../theme/app_theme.dart';
import '../../widgets/question_image_card.dart';

class TagDrillScreen extends ConsumerStatefulWidget {
  const TagDrillScreen({super.key, required this.packId, required this.packName});
  final String packId;
  final String packName;

  @override
  ConsumerState<TagDrillScreen> createState() => _TagDrillScreenState();
}

class _TagDrillScreenState extends ConsumerState<TagDrillScreen> {
  List<Question> _allQuestions = [];
  List<String> _modules = [];
  String? _selectedModule;
  List<Question> _drillQueue = [];
  int _currentIndex = 0;
  String? _selectedAnswer;
  bool _answered = false;
  bool _loading = true;
  int _correctCount = 0;

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  Future<void> _loadData() async {
    final db = ref.read(dbProvider);
    final allQ = await (db.select(db.questions)..where((q) => q.packId.equals(widget.packId))).get();
    final moduleSet = <String>{};
    for (final q in allQ) {
      moduleSet.add(q.moduleName);
    }
    final modules = moduleSet.toList()..sort();

    setState(() {
      _allQuestions = allQ;
      _modules = modules;
      if (modules.isNotEmpty) {
        _selectedModule = modules.first;
        _startDrillForModule(_selectedModule!);
      }
      _loading = false;
    });
  }

  void _startDrillForModule(String moduleName) {
    final filtered = _allQuestions.where((q) => q.moduleName == moduleName).toList()..shuffle();
    setState(() {
      _selectedModule = moduleName;
      _drillQueue = filtered;
      _currentIndex = 0;
      _selectedAnswer = null;
      _answered = false;
      _correctCount = 0;
    });
  }

  Question get _current => _drillQueue[_currentIndex];

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
    if (_currentIndex < _drillQueue.length - 1) {
      setState(() {
        _currentIndex++;
        _selectedAnswer = null;
        _answered = false;
      });
    } else {
      if (mounted) {
        showDialog(
          context: context,
          builder: (_) => AlertDialog(
            backgroundColor: SynapseColors.card,
            title: const Text('Module Drill Complete! 🎯'),
            content: Text('Module: $_selectedModule\nScore: $_correctCount / ${_drillQueue.length}'),
            actions: [
              TextButton(
                onPressed: () {
                  Navigator.of(context).pop();
                },
                child: const Text('Try Another Module'),
              ),
              FilledButton(
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
    if (_modules.isEmpty) {
      return Scaffold(
        appBar: AppBar(title: const Text('Module Drills')),
        body: const Center(child: Text('No modules available to drill.')),
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
        title: const Text('Topic Drills'),
        backgroundColor: SynapseColors.surface,
      ),
      body: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Module selector chips
            SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 8),
              child: Row(
                children: _modules.map((m) {
                  final isSelected = m == _selectedModule;
                  return Padding(
                    padding: const EdgeInsets.only(right: 8),
                    child: ChoiceChip(
                      label: Text(m, style: TextStyle(fontSize: 12, fontWeight: isSelected ? FontWeight.bold : FontWeight.normal)),
                      selected: isSelected,
                      selectedColor: SynapseColors.secondary.withAlpha(50),
                      side: BorderSide(color: isSelected ? SynapseColors.secondary : cs.outlineVariant),
                      onSelected: (selected) {
                        if (selected && m != _selectedModule) {
                          _startDrillForModule(m);
                        }
                      },
                    ),
                  );
                }).toList(),
              ),
            ),
            LinearProgressIndicator(
              value: (_currentIndex + 1) / _drillQueue.length,
              backgroundColor: cs.surfaceContainerHighest,
              valueColor: const AlwaysStoppedAnimation<Color>(SynapseColors.secondary),
              minHeight: 3,
            ),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.all(20),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text('Question ${_currentIndex + 1} of ${_drillQueue.length}',
                            style: TextStyle(fontSize: 12, color: cs.onSurfaceVariant)),
                        Text('Score: $_correctCount / ${_currentIndex + (_answered ? 1 : 0)}',
                            style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: SynapseColors.secondary)),
                      ],
                    ),
                    const SizedBox(height: 12),
                    if (_current.imageUrl != null && _current.imageUrl!.isNotEmpty)
                      QuestionImageCard(imageUrl: _current.imageUrl!),
                    Text(
                      _current.question,
                      style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w600, height: 1.4),
                    ),
                    const SizedBox(height: 18),
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
                            const Text('Explanation',
                                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 13)),
                            const SizedBox(height: 6),
                            Text(_current.explanation,
                                style: TextStyle(
                                    fontSize: 13, color: cs.onSurfaceVariant, height: 1.4)),
                          ],
                        ),
                      ),
                    ],
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: _answered
          ? SafeArea(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(20, 8, 20, 16),
                child: FilledButton(
                  onPressed: _next,
                  style: FilledButton.styleFrom(
                    backgroundColor: SynapseColors.secondary,
                    foregroundColor: Colors.white,
                    minimumSize: const Size.fromHeight(52),
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(14)),
                  ),
                  child: Text(_currentIndex < _drillQueue.length - 1 ? 'Next Drill Question' : 'Finish Drill'),
                ),
              ),
            )
          : null,
    );
  }
}