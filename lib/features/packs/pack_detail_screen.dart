import 'dart:math' as math;
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../providers.dart';
import '../../db/app_database.dart';
import '../../db/daos/progress_dao.dart';
import '../../theme/app_theme.dart';
import '../lessons/lessons_screen.dart';
import '../reviews/reviews_screen.dart';
import '../cram/cram_screen.dart';
import '../drills/tag_drill_screen.dart';
import '../mock_exam/mock_exam_screen.dart';
import '../home/module_mastery_panel.dart';
import '../../services/badge_service.dart';

class PackDetailScreen extends ConsumerWidget {
  const PackDetailScreen({super.key, required this.pack});
  final Pack pack;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final cs = Theme.of(context).colorScheme;
    final db = ref.watch(dbProvider);
    final color = _parseColor(pack.color);

    return Scaffold(
      backgroundColor: SynapseColors.surface,
      body: FutureBuilder<(SrsStageCounts, int, DateTime?)>(
        future: Future.wait([
          db.progressDao.getStageCounts(pack.packId),
          db.progressDao.getDueReviewsForPack(pack.packId),
          db.progressDao.getEarliestUpcomingReview(pack.packId),
        ]).then((res) => (
          res[0] as SrsStageCounts,
          (res[1] as List<UserProgressData>).length,
          res[2] as DateTime?,
        )),
        builder: (context, snap) {
          final counts = snap.data?.$1;
          final dueCount = snap.data?.$2 ?? 0;
          final earliestUpcoming = snap.data?.$3;
          return CustomScrollView(
            slivers: [
              // Hero App Bar
              SliverAppBar(
                expandedHeight: 180,
                pinned: true,
                backgroundColor: SynapseColors.surface,
                flexibleSpace: FlexibleSpaceBar(
                  title: Text(pack.name, style: const TextStyle(fontWeight: FontWeight.bold)),
                  background: Container(
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        colors: [color.withAlpha(80), SynapseColors.surface],
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                      ),
                    ),
                    child: Center(
                      child: Icon(_iconData(pack.iconName), size: 70, color: color.withAlpha(180)),
                    ),
                  ),
                ),
              ),

              SliverToBoxAdapter(
                child: Padding(
                  padding: const EdgeInsets.all(20),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      // SRS Donut
                      if (counts != null) ...[
                        _SrsDonutCard(counts: counts, color: color),
                        const SizedBox(height: 16),
                        _PackBadgeStrip(packId: pack.packId, color: color),
                        const SizedBox(height: 20),
                      ],

                      // Core SRS Actions
                      Text('SRS Core Queue', style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold, color: cs.onSurface)),
                      const SizedBox(height: 10),
                      Row(
                        children: [
                          Expanded(
                            child: _ActionButton(
                              label: 'Lessons',
                              subtitle: '${counts?.available ?? 0} available',
                              icon: Icons.school_rounded,
                              color: SynapseColors.primary,
                              onTap: () => Navigator.of(context).push(MaterialPageRoute(
                                builder: (_) => LessonsScreen(packId: pack.packId),
                              )).then((_) => ref.invalidate(installedPacksProvider)),
                            ),
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                            child: _ActionButton(
                              label: 'Reviews',
                              subtitle: dueCount > 0
                                  ? '$dueCount due now'
                                  : earliestUpcoming != null
                                      ? '0 due (${_formatTiming(earliestUpcoming)})'
                                      : '0 due',
                              icon: Icons.replay_rounded,
                              color: dueCount > 0 ? SynapseColors.secondary : SynapseColors.apprentice,
                              onTap: () => Navigator.of(context).push(MaterialPageRoute(
                                builder: (_) => ReviewsScreen(packId: pack.packId),
                              )).then((_) => ref.invalidate(installedPacksProvider)),
                            ),
                          ),
                        ],
                      ),

                      const SizedBox(height: 20),

                      // Practice & Assessment Modes
                      Text('Extra Practice & Exams', style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold, color: cs.onSurface)),
                      const SizedBox(height: 10),
                      Row(
                        children: [
                          Expanded(
                            child: _ActionButton(
                              label: 'Cram Mode',
                              subtitle: 'Freestyle all cards',
                              icon: Icons.bolt_rounded,
                              color: SynapseColors.burned,
                              onTap: () => Navigator.of(context).push(MaterialPageRoute(
                                builder: (_) => CramScreen(packId: pack.packId, packName: pack.name),
                              )),
                            ),
                          ),
                          const SizedBox(width: 10),
                          Expanded(
                            child: _ActionButton(
                              label: 'Topic Drills',
                              subtitle: 'Filter by chapter',
                              icon: Icons.filter_list_rounded,
                              color: SynapseColors.secondary,
                              onTap: () => Navigator.of(context).push(MaterialPageRoute(
                                builder: (_) => TagDrillScreen(packId: pack.packId, packName: pack.name),
                              )),
                            ),
                          ),
                          const SizedBox(width: 10),
                          Expanded(
                            child: _ActionButton(
                              label: 'Mock Exam',
                              subtitle: 'Timed test',
                              icon: Icons.timer_rounded,
                              color: SynapseColors.guru,
                              onTap: () => Navigator.of(context).push(MaterialPageRoute(
                                builder: (_) => MockExamScreen(packId: pack.packId, packName: pack.name),
                              )),
                            ),
                          ),
                        ],
                      ),

                      const SizedBox(height: 24),

                      // Stage breakdown
                      Text('Stage Breakdown', style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold, color: cs.onSurface)),
                      const SizedBox(height: 12),
                      if (counts != null) _StageBreakdownGrid(counts: counts),
                      const SizedBox(height: 24),
                      ModuleMasteryPanel(packId: pack.packId, color: color),

                      const SizedBox(height: 30),
                    ],
                  ),
                ),
              ),
            ],
          );
        },
      ),
    );
  }

  String _formatTiming(DateTime dt) {
    final now = DateTime.now();
    final diff = dt.difference(now);
    if (diff.isNegative) return 'due now';
    if (diff.inMinutes < 60) return 'in ${diff.inMinutes + 1}m';
    if (diff.inHours < 24) return 'in ${diff.inHours}h';
    return 'in ${diff.inDays}d';
  }

  Color _parseColor(String hex) {
    try {
      return Color(int.parse(hex.replaceAll('#', '0xFF')));
    } catch (_) {
      return SynapseColors.primary;
    }
  }

  IconData _iconData(String name) {
    return switch (name) {
      'science' => Icons.science_rounded,
      'code' => Icons.code_rounded,
      'functions' => Icons.functions_rounded,
      'terminal' => Icons.terminal_rounded,
      'grid_view' => Icons.grid_view_rounded,
      _ => Icons.school_rounded,
    };
  }
}

// ─── SRS Donut Card ────────────────────────────────────────────────────────────
class _SrsDonutCard extends StatelessWidget {
  const _SrsDonutCard({required this.counts, required this.color});
  final SrsStageCounts counts;
  final Color color;

  @override
  Widget build(BuildContext context) {
    final cs = Theme.of(context).colorScheme;
    final total = counts.total;
    final segments = <(int, Color, String)>[
      (counts.available, const Color(0xFF64748B), 'Available'),
      (counts.apprentice, SynapseColors.apprentice, 'Apprentice'),
      (counts.guru, SynapseColors.guru, 'Guru'),
      (counts.master, SynapseColors.master, 'Master'),
      (counts.burned, SynapseColors.burned, 'Burned'),
    ].where((s) => s.$1 > 0).toList();

    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: cs.surfaceContainerHigh,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: cs.outlineVariant.withAlpha(60)),
      ),
      child: Row(
        children: [
          SizedBox(
            width: 100,
            height: 100,
            child: CustomPaint(
              painter: _DonutPainter(counts: counts, total: total),
              child: Center(
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text('${(counts.masteryRatio * 100).round()}%',
                        style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
                    const Text('mastery', style: TextStyle(fontSize: 9, color: Colors.grey)),
                  ],
                ),
              ),
            ),
          ),
          const SizedBox(width: 20),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: segments
                  .map((s) => Padding(
                        padding: const EdgeInsets.only(bottom: 6),
                        child: Row(
                          children: [
                            Container(width: 10, height: 10, decoration: BoxDecoration(color: s.$2, shape: BoxShape.circle)),
                            const SizedBox(width: 8),
                            Text(s.$3, style: const TextStyle(fontSize: 12)),
                            const Spacer(),
                            Text('${s.$1}', style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                          ],
                        ),
                      ))
                  .toList(),
            ),
          ),
        ],
      ),
    );
  }
}

class _DonutPainter extends CustomPainter {
  _DonutPainter({required this.counts, required this.total});
  final SrsStageCounts counts;
  final int total;

  @override
  void paint(Canvas canvas, Size size) {
    if (total == 0) return;
    final rect = Rect.fromLTWH(8, 8, size.width - 16, size.height - 16);
    final segments = [
      (counts.available, const Color(0xFF64748B)),
      (counts.apprentice, SynapseColors.apprentice),
      (counts.guru, SynapseColors.guru),
      (counts.master, SynapseColors.master),
      (counts.burned, SynapseColors.burned),
    ];
    double startAngle = -math.pi / 2;
    for (final seg in segments) {
      if (seg.$1 == 0) continue;
      final sweep = (seg.$1 / total) * 2 * math.pi;
      canvas.drawArc(
        rect,
        startAngle,
        sweep,
        false,
        Paint()
          ..color = seg.$2
          ..style = PaintingStyle.stroke
          ..strokeWidth = 12
          ..strokeCap = StrokeCap.butt,
      );
      startAngle += sweep;
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => true;
}

// ─── Stage Breakdown Grid ──────────────────────────────────────────────────────
class _StageBreakdownGrid extends StatelessWidget {
  const _StageBreakdownGrid({required this.counts});
  final SrsStageCounts counts;

  @override
  Widget build(BuildContext context) {
    final stages = [
      ('Available', counts.available, const Color(0xFF64748B), Icons.inbox_rounded),
      ('Apprentice', counts.apprentice, SynapseColors.apprentice, Icons.school_rounded),
      ('Guru', counts.guru, SynapseColors.guru, Icons.auto_awesome_rounded),
      ('Master', counts.master, SynapseColors.master, Icons.workspace_premium_rounded),
      ('Burned', counts.burned, SynapseColors.burned, Icons.local_fire_department_rounded),
    ];
    return Wrap(
      spacing: 10,
      runSpacing: 10,
      children: stages.map((s) {
        return Container(
          width: (MediaQuery.of(context).size.width - 60) / 2,
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
          decoration: BoxDecoration(
            color: s.$3.withAlpha(20),
            borderRadius: BorderRadius.circular(14),
            border: Border.all(color: s.$3.withAlpha(60)),
          ),
          child: Row(
            children: [
              Icon(s.$4, size: 20, color: s.$3),
              const SizedBox(width: 8),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('${s.$2}', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: s.$3)),
                    Text(s.$1, style: const TextStyle(fontSize: 11, color: Colors.grey)),
                  ],
                ),
              ),
            ],
          ),
        );
      }).toList(),
    );
  }
}

// ─── Action Button ────────────────────────────────────────────────────────────
class _ActionButton extends StatelessWidget {
  const _ActionButton({
    required this.label,
    required this.subtitle,
    required this.icon,
    required this.color,
    required this.onTap,
  });
  final String label;
  final String subtitle;
  final IconData icon;
  final Color color;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    final cs = Theme.of(context).colorScheme;
    return InkWell(
      borderRadius: BorderRadius.circular(16),
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 14),
        decoration: BoxDecoration(
          color: color.withAlpha(20),
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: color.withAlpha(80), width: 1.5),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Icon(icon, color: color, size: 24),
            const SizedBox(height: 6),
            Text(label, style: TextStyle(fontWeight: FontWeight.bold, color: color, fontSize: 13), maxLines: 1),
            Text(subtitle, style: TextStyle(fontSize: 10, color: cs.onSurfaceVariant), maxLines: 1),
          ],
        ),
      ),
    );
  }
}

// ─── Pack Badge Strip ────────────────────────────────────────────────────────
class _PackBadgeStrip extends ConsumerWidget {
  const _PackBadgeStrip({required this.packId, required this.color});
  final String packId;
  final Color color;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final cs = Theme.of(context).colorScheme;
    final db = ref.watch(dbProvider);
    final settings = ref.watch(settingsServiceProvider);

    final badges = BadgeService.packBadges.where((b) => b.packId == packId).toList();
    if (badges.isEmpty) return const SizedBox.shrink();

    return FutureBuilder<Set<String>>(
      future: BadgeService.evaluateUnlockedBadges(db: db, settings: settings),
      builder: (context, snap) {
        final unlocked = snap.data ?? {};

        return Container(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(
            color: cs.surfaceContainerHigh,
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: cs.outlineVariant.withAlpha(50)),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text('Subject Accreditation Badges',
                      style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                  Text('${badges.where((b) => unlocked.contains(b.id)).length}/${badges.length} Unlocked',
                      style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: color)),
                ],
              ),
              const SizedBox(height: 10),
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: badges.map((b) {
                    final isUnlocked = unlocked.contains(b.id);
                    return Padding(
                      padding: const EdgeInsets.only(right: 8),
                      child: InkWell(
                        onTap: () {
                          showDialog(
                            context: context,
                            builder: (_) => AlertDialog(
                              backgroundColor: SynapseColors.card,
                              title: Row(
                                children: [
                                  Icon(b.icon, color: isUnlocked ? b.color : Colors.grey),
                                  const SizedBox(width: 8),
                                  Expanded(child: Text(b.title, style: const TextStyle(fontSize: 16))),
                                ],
                              ),
                              content: Column(
                                mainAxisSize: MainAxisSize.min,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(b.description, style: const TextStyle(fontSize: 13)),
                                  const SizedBox(height: 10),
                                  Text(
                                    isUnlocked ? 'Status: Unlocked ✓' : 'Criteria: ${b.criteriaText}',
                                    style: TextStyle(
                                      fontSize: 12,
                                      fontWeight: FontWeight.bold,
                                      color: isUnlocked ? SynapseColors.secondary : cs.onSurfaceVariant,
                                    ),
                                  ),
                                ],
                              ),
                              actions: [
                                TextButton(onPressed: () => Navigator.of(context).pop(), child: const Text('OK')),
                              ],
                            ),
                          );
                        },
                        borderRadius: BorderRadius.circular(10),
                        child: Container(
                          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                          decoration: BoxDecoration(
                            color: isUnlocked ? b.color.withAlpha(25) : cs.surfaceContainerHighest,
                            borderRadius: BorderRadius.circular(10),
                            border: Border.all(
                              color: isUnlocked ? b.color.withAlpha(90) : cs.outlineVariant.withAlpha(40),
                            ),
                          ),
                          child: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Icon(b.icon, size: 14, color: isUnlocked ? b.color : Colors.grey),
                              const SizedBox(width: 6),
                              Text(
                                b.title,
                                style: TextStyle(
                                  fontSize: 11,
                                  fontWeight: FontWeight.bold,
                                  color: isUnlocked ? Colors.white : Colors.grey,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    );
                  }).toList(),
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}