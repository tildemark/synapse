import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../providers.dart';
import '../../db/app_database.dart';
import '../../theme/app_theme.dart';
import '../../widgets/question_image_card.dart';

enum CramFilterType {
  everything,
  learnedOnly,
  troubledOnly,
  specificModule,
}

class CramScreen extends ConsumerStatefulWidget {
  const CramScreen({super.key, required this.packId, required this.packName});
  final String packId;
  final String packName;

  @override
  ConsumerState<CramScreen> createState() => _CramScreenState();
}

class _CramScreenState extends ConsumerState<CramScreen> {
  List<Question> _allQuestions = [];
  List<UserProgressData> _allProgress = [];
  List<String> _modules = [];

  CramFilterType _filterType = CramFilterType.everything;
  String? _selectedModule;
  int _questionLimit = 0; // 0 means all matching

  bool _isConfiguring = true;
  List<Question> _questions = [];
  int _currentIndex = 0;
  String? _selectedAnswer;
  bool _answered = false;
  bool _loading = true;
  int _correctCount = 0;

  @override
  void initState() {
    super.initState();
    _loadInitialData();
  }

  Future<void> _loadInitialData() async {
    final db = ref.read(dbProvider);
    final allQ = await (db.select(db.questions)..where((q) => q.packId.equals(widget.packId))).get();
    final allP = await selectAllProgressForPack(db, widget.packId);

    final moduleSet = <String>{};
    for (final q in allQ) {
      if (q.moduleName.trim().isNotEmpty) {
        moduleSet.add(q.moduleName);
      }
    }
    final modules = moduleSet.toList()..sort();

    setState(() {
      _allQuestions = allQ;
      _allProgress = allP;
      _modules = modules;
      if (modules.isNotEmpty) {
        _selectedModule = modules.first;
      }
      _loading = false;
    });
  }

  Future<List<UserProgressData>> selectAllProgressForPack(AppDatabase db, String packId) async {
    final allQ = await (db.select(db.questions)..where((q) => q.packId.equals(packId))).get();
    final qIds = allQ.map((q) => q.id).toList();
    if (qIds.isEmpty) return [];
    return (db.select(db.userProgress)..where((p) => p.questionId.isIn(qIds))).get();
  }

  void _startCramSession() {
    final progressMap = {for (final p in _allProgress) p.questionId: p};

    List<Question> filtered = [];
    switch (_filterType) {
      case CramFilterType.everything:
        filtered = List<Question>.from(_allQuestions);
        break;
      case CramFilterType.learnedOnly:
        filtered = _allQuestions.where((q) {
          final p = progressMap[q.id];
          return p != null && p.isLessonCompleted;
        }).toList();
        break;
      case CramFilterType.troubledOnly:
        filtered = _allQuestions.where((q) {
          final p = progressMap[q.id];
          return p != null && p.mistakeCount > 0;
        }).toList();
        break;
      case CramFilterType.specificModule:
        if (_selectedModule != null) {
          filtered = _allQuestions.where((q) => q.moduleName == _selectedModule).toList();
        } else {
          filtered = List<Question>.from(_allQuestions);
        }
        break;
    }

    filtered.shuffle();
    if (_questionLimit > 0 && filtered.length > _questionLimit) {
      filtered = filtered.take(_questionLimit).toList();
    }

    if (filtered.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('No questions found matching this filter criteria!'),
          behavior: SnackBarBehavior.floating,
        ),
      );
      return;
    }

    setState(() {
      _questions = filtered;
      _currentIndex = 0;
      _selectedAnswer = null;
      _answered = false;
      _correctCount = 0;
      _isConfiguring = false;
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
                  setState(() {
                    _isConfiguring = true;
                  });
                },
                child: const Text('Change Filter / Retry'),
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
    if (_allQuestions.isEmpty) {
      return Scaffold(
        appBar: AppBar(title: Text('Cram: ${widget.packName}')),
        body: const Center(child: Text('No questions available in this pack.')),
      );
    }

    if (_isConfiguring) {
      final progressMap = {for (final p in _allProgress) p.questionId: p};
      final learnedCount = _allQuestions.where((q) {
        final p = progressMap[q.id];
        return p != null && p.isLessonCompleted;
      }).length;
      final troubledCount = _allQuestions.where((q) {
        final p = progressMap[q.id];
        return p != null && p.mistakeCount > 0;
      }).length;

      return Scaffold(
        backgroundColor: SynapseColors.surface,
        appBar: AppBar(
          title: const Text('Custom Cram Mode ⚡'),
          backgroundColor: SynapseColors.surface,
        ),
        body: SafeArea(
          child: SingleChildScrollView(
            padding: const EdgeInsets.fromLTRB(20, 16, 20, 32),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: SynapseColors.card,
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: SynapseColors.burned.withAlpha(80)),
                  ),
                  child: Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.all(10),
                        decoration: BoxDecoration(
                          color: SynapseColors.burned.withAlpha(40),
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: const Icon(Icons.bolt, color: SynapseColors.burned, size: 28),
                      ),
                      const SizedBox(width: 14),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(widget.packName, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                            const SizedBox(height: 4),
                            Text(
                              'Choose your focus topic or question set. Cram mode lets you study freely without affecting your SRS spaced repetition intervals.',
                              style: TextStyle(fontSize: 12, color: cs.onSurfaceVariant, height: 1.4),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 24),
                const Text('What would you like to review?', style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold)),
                const SizedBox(height: 12),

                // Option 1: Everything
                _buildFilterOption(
                  title: 'Entire Pack (Everything)',
                  subtitle: 'Freestyle all ${_allQuestions.length} questions in random order',
                  icon: Icons.all_inclusive_rounded,
                  type: CramFilterType.everything,
                  count: _allQuestions.length,
                ),

                // Option 2: Learned Only
                _buildFilterOption(
                  title: 'Learned & Active Cards Only',
                  subtitle: 'Review only cards you have already unlocked through lessons',
                  icon: Icons.check_circle_outline_rounded,
                  type: CramFilterType.learnedOnly,
                  count: learnedCount,
                ),

                // Option 3: Troubled / Mistakes Only
                _buildFilterOption(
                  title: 'Troubled Cards (Past Mistakes)',
                  subtitle: 'Target cards where you previously recorded 1 or more mistakes',
                  icon: Icons.warning_amber_rounded,
                  type: CramFilterType.troubledOnly,
                  count: troubledCount,
                  color: SynapseColors.apprentice,
                ),

                // Option 4: Specific Module / Topic
                _buildFilterOption(
                  title: 'Specific Module / Chapter',
                  subtitle: 'Select an individual topic or chapter from the syllabus',
                  icon: Icons.folder_special_rounded,
                  type: CramFilterType.specificModule,
                  count: _selectedModule != null
                      ? _allQuestions.where((q) => q.moduleName == _selectedModule).length
                      : 0,
                ),

                if (_filterType == CramFilterType.specificModule && _modules.isNotEmpty) ...[
                  const SizedBox(height: 12),
                  Container(
                    padding: const EdgeInsets.all(14),
                    decoration: BoxDecoration(
                      color: cs.surfaceContainerHigh,
                      borderRadius: BorderRadius.circular(14),
                      border: Border.all(color: cs.outlineVariant),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text('Select Module / Topic:', style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold)),
                        const SizedBox(height: 10),
                        Wrap(
                          spacing: 8,
                          runSpacing: 8,
                          children: _modules.map((m) {
                            final isSel = m == _selectedModule;
                            final count = _allQuestions.where((q) => q.moduleName == m).length;
                            return ChoiceChip(
                              label: Text('$m ($count)'),
                              selected: isSel,
                              selectedColor: SynapseColors.burned.withAlpha(50),
                              side: BorderSide(color: isSel ? SynapseColors.burned : cs.outlineVariant),
                              onSelected: (selected) {
                                if (selected) {
                                  setState(() {
                                    _selectedModule = m;
                                  });
                                }
                              },
                            );
                          }).toList(),
                        ),
                      ],
                    ),
                  ),
                ],

                const SizedBox(height: 24),
                const Text('Session Question Limit', style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold)),
                const SizedBox(height: 10),
                Wrap(
                  spacing: 10,
                  children: [
                    _buildLimitChip(label: 'All Available', limit: 0),
                    _buildLimitChip(label: '10 Cards', limit: 10),
                    _buildLimitChip(label: '25 Cards', limit: 25),
                    _buildLimitChip(label: '50 Cards', limit: 50),
                    _buildLimitChip(label: '100 Cards', limit: 100),
                  ],
                ),

                const SizedBox(height: 32),
                FilledButton.icon(
                  onPressed: _startCramSession,
                  icon: const Icon(Icons.play_arrow_rounded),
                  label: const Text('Start Cram Session', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
                  style: FilledButton.styleFrom(
                    backgroundColor: SynapseColors.burned,
                    foregroundColor: Colors.white,
                    minimumSize: const Size.fromHeight(54),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                  ),
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
        title: Text('Cram: ${_currentIndex + 1}/${_questions.length}'),
        backgroundColor: SynapseColors.surface,
        leading: IconButton(
          icon: const Icon(Icons.tune_rounded),
          tooltip: 'Change Cram Filter',
          onPressed: () {
            setState(() {
              _isConfiguring = true;
            });
          },
        ),
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
        child: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(20, 20, 20, 32),
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
      bottomNavigationBar: _answered
          ? SafeArea(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(20, 8, 20, 16),
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
            )
          : null,
    );
  }

  Widget _buildFilterOption({
    required String title,
    required String subtitle,
    required IconData icon,
    required CramFilterType type,
    required int count,
    Color? color,
  }) {
    final cs = Theme.of(context).colorScheme;
    final isSelected = _filterType == type;
    final accentColor = color ?? SynapseColors.burned;

    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: InkWell(
        borderRadius: BorderRadius.circular(14),
        onTap: () {
          setState(() {
            _filterType = type;
          });
        },
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 150),
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
          decoration: BoxDecoration(
            color: isSelected ? accentColor.withAlpha(25) : cs.surfaceContainerHigh,
            borderRadius: BorderRadius.circular(14),
            border: Border.all(
              color: isSelected ? accentColor : cs.outlineVariant.withAlpha(80),
              width: isSelected ? 2 : 1,
            ),
          ),
          child: Row(
            children: [
              Container(
                padding: const EdgeInsets.all(8),
                decoration: BoxDecoration(
                  color: isSelected ? accentColor.withAlpha(40) : cs.surfaceContainerHighest,
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Icon(icon, color: isSelected ? accentColor : cs.onSurfaceVariant, size: 20),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      title,
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 14,
                        color: isSelected ? Colors.white : cs.onSurface,
                      ),
                    ),
                    const SizedBox(height: 2),
                    Text(
                      subtitle,
                      style: TextStyle(fontSize: 12, color: cs.onSurfaceVariant),
                    ),
                  ],
                ),
              ),
              const SizedBox(width: 10),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(
                  color: isSelected ? accentColor.withAlpha(40) : cs.surfaceContainerHighest,
                  borderRadius: BorderRadius.circular(20),
                ),
                child: Text(
                  '$count Qs',
                  style: TextStyle(
                    fontSize: 11,
                    fontWeight: FontWeight.bold,
                    color: isSelected ? accentColor : cs.onSurfaceVariant,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildLimitChip({required String label, required int limit}) {
    final cs = Theme.of(context).colorScheme;
    final isSelected = _questionLimit == limit;
    return ChoiceChip(
      label: Text(label),
      selected: isSelected,
      selectedColor: SynapseColors.burned.withAlpha(50),
      side: BorderSide(color: isSelected ? SynapseColors.burned : cs.outlineVariant),
      onSelected: (selected) {
        if (selected) {
          setState(() {
            _questionLimit = limit;
          });
        }
      },
    );
  }
}