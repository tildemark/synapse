import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../providers.dart';
import '../../db/app_database.dart';
import '../../theme/app_theme.dart';

class ModuleProgressStats {
  ModuleProgressStats({
    required this.moduleNumber,
    required this.moduleName,
    required this.total,
    required this.available,
    required this.apprentice,
    required this.guru,
    required this.master,
    required this.burned,
  });

  final int moduleNumber;
  final String moduleName;
  final int total;
  final int available;
  final int apprentice;
  final int guru;
  final int master;
  final int burned;

  int get mastered => guru + master + burned;
  double get progressRatio => total > 0 ? (apprentice + mastered) / total : 0.0;
  double get masteryRatio => total > 0 ? mastered / total : 0.0;
}

class ModuleMasteryPanel extends ConsumerWidget {
  const ModuleMasteryPanel({super.key, required this.packId, required this.color});
  final String packId;
  final Color color;

  Future<List<ModuleProgressStats>> _fetchModuleStats(AppDatabase db) async {
    final questions = await (db.select(db.questions)..where((q) => q.packId.equals(packId))).get();
    final progressList = await db.select(db.userProgress).get();
    final progressMap = {for (final p in progressList) p.questionId: p.srsStage};

    final Map<int, List<Question>> grouped = {};
    for (final q in questions) {
      grouped.putIfAbsent(q.moduleNumber, () => []).add(q);
    }

    final sortedKeys = grouped.keys.toList()..sort();
    final List<ModuleProgressStats> stats = [];

    for (final modNum in sortedKeys) {
      final modQuestions = grouped[modNum]!;
      final modName = modQuestions.first.moduleName;
      int available = 0;
      int apprentice = 0;
      int guru = 0;
      int master = 0;
      int burned = 0;

      for (final q in modQuestions) {
        final stage = progressMap[q.id] ?? 0;
        if (stage == 0) {
          available++;
        } else if (stage <= 4) {
          apprentice++;
        } else if (stage <= 6) {
          guru++;
        } else if (stage == 7) {
          master++;
        } else {
          burned++;
        }
      }

      stats.add(ModuleProgressStats(
        moduleNumber: modNum,
        moduleName: modName,
        total: modQuestions.length,
        available: available,
        apprentice: apprentice,
        guru: guru,
        master: master,
        burned: burned,
      ));
    }

    return stats;
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final cs = Theme.of(context).colorScheme;
    final db = ref.watch(dbProvider);

    return FutureBuilder<List<ModuleProgressStats>>(
      future: _fetchModuleStats(db),
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const Center(child: Padding(padding: EdgeInsets.all(20), child: CircularProgressIndicator()));
        }

        final modules = snapshot.data ?? [];
        if (modules.isEmpty) {
          return const SizedBox.shrink();
        }

        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text('Module Mastery Breakdown',
                    style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold, color: cs.onSurface)),
                Text('${modules.length} Modules',
                    style: TextStyle(fontSize: 12, color: cs.onSurfaceVariant, fontWeight: FontWeight.w600)),
              ],
            ),
            const SizedBox(height: 12),
            ...modules.map((m) => _ModuleMasteryCard(stats: m, color: color)),
          ],
        );
      },
    );
  }
}

class _ModuleMasteryCard extends StatelessWidget {
  const _ModuleMasteryCard({required this.stats, required this.color});
  final ModuleProgressStats stats;
  final Color color;

  @override
  Widget build(BuildContext context) {
    final cs = Theme.of(context).colorScheme;
    final pct = (stats.masteryRatio * 100).round();

    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: cs.surfaceContainerHigh,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: cs.outlineVariant.withAlpha(50)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                width: 24,
                height: 24,
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  color: color.withAlpha(30),
                  borderRadius: BorderRadius.circular(6),
                ),
                child: Text('${stats.moduleNumber}',
                    style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: color)),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Text(
                  stats.moduleName,
                  style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 13),
                ),
              ),
              Text('$pct%',
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 13,
                    color: pct > 0 ? color : cs.onSurfaceVariant,
                  )),
            ],
          ),
          const SizedBox(height: 10),
          // Multi-segmented progress bar
          ClipRRect(
            borderRadius: BorderRadius.circular(4),
            child: SizedBox(
              height: 6,
              child: Row(
                children: [
                  if (stats.mastered > 0)
                    Expanded(
                      flex: stats.mastered,
                      child: Container(color: SynapseColors.guru),
                    ),
                  if (stats.apprentice > 0)
                    Expanded(
                      flex: stats.apprentice,
                      child: Container(color: SynapseColors.apprentice),
                    ),
                  if (stats.available > 0)
                    Expanded(
                      flex: stats.available,
                      child: Container(color: cs.surfaceContainerHighest),
                    ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 8),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              _subStat('${stats.available}', 'New', const Color(0xFF64748B)),
              _subStat('${stats.apprentice}', 'Apprentice', SynapseColors.apprentice),
              _subStat('${stats.mastered}', 'Guru+', SynapseColors.guru),
              _subStat('${stats.total}', 'Total', cs.onSurfaceVariant),
            ],
          ),
        ],
      ),
    );
  }

  Widget _subStat(String count, String label, Color c) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(width: 6, height: 6, decoration: BoxDecoration(color: c, shape: BoxShape.circle)),
        const SizedBox(width: 4),
        Text('$count $label', style: const TextStyle(fontSize: 10, color: Colors.grey)),
      ],
    );
  }
}