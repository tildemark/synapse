import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../providers.dart';
import '../../db/app_database.dart';
import '../../db/daos/progress_dao.dart';
import '../../theme/app_theme.dart';
import '../packs/pack_browser_screen.dart';
import '../packs/pack_detail_screen.dart';
import '../settings/settings_screen.dart';
import '../profile/profile_screen.dart';

class HomeScreen extends ConsumerWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final cs = Theme.of(context).colorScheme;
    final packsAsync = ref.watch(installedPacksProvider);

    return Scaffold(
      backgroundColor: SynapseColors.surface,
      body: SafeArea(
        child: CustomScrollView(
          slivers: [
            SliverAppBar(
              pinned: true,
              backgroundColor: SynapseColors.surface,
              title: Row(
                children: [
                  ClipRRect(
                    borderRadius: BorderRadius.circular(8),
                    child: Image.asset(
                      'assets/icons/logo512.png',
                      width: 32,
                      height: 32,
                      fit: BoxFit.cover,
                    ),
                  ),
                  const SizedBox(width: 10),
                  Text(
                    'Synapse',
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 22,
                      foreground: Paint()
                        ..shader = const LinearGradient(
                          colors: [SynapseColors.primary, Color(0xFF9B59B6)],
                        ).createShader(const Rect.fromLTWH(0, 0, 120, 30)),
                    ),
                  ),
                ],
              ),
              actions: [
                IconButton(
                  icon: const Icon(Icons.account_circle_outlined),
                  tooltip: 'Scholar Profile & Badges',
                  onPressed: () => Navigator.of(context).push(
                    MaterialPageRoute(builder: (_) => const ProfileScreen()),
                  ),
                ),
                IconButton(
                  icon: const Icon(Icons.settings_outlined),
                  tooltip: 'Settings & Tools',
                  onPressed: () => Navigator.of(context).push(
                    MaterialPageRoute(builder: (_) => const SettingsScreen()),
                  ),
                ),
                IconButton(
                  icon: const Icon(Icons.add_circle_outline_rounded),
                  tooltip: 'Browse Knowledge Packs',
                  onPressed: () => Navigator.of(context).push(
                    MaterialPageRoute(builder: (_) => const PackBrowserScreen()),
                  ),
                ),
                const SizedBox(width: 8),
              ],
            ),
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(20, 12, 20, 0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'What will you\nmaster today?',
                      style: TextStyle(fontSize: 26, fontWeight: FontWeight.bold, height: 1.2, color: cs.onSurface),
                    ),
                    const SizedBox(height: 4),
                    Text('Spaced repetition · Any subject · Your pace',
                        style: TextStyle(fontSize: 13, color: cs.onSurfaceVariant)),
                    const SizedBox(height: 20),
                  ],
                ),
              ),
            ),
            packsAsync.when(
              loading: () => const SliverToBoxAdapter(
                child: Center(child: Padding(padding: EdgeInsets.all(40), child: CircularProgressIndicator())),
              ),
              error: (_, __) => const SliverToBoxAdapter(child: SizedBox.shrink()),
              data: (packs) {
                if (packs.isEmpty) {
                  return SliverToBoxAdapter(
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(20, 0, 20, 20),
                      child: _EmptyPackCard(onBrowse: () => Navigator.of(context).push(
                        MaterialPageRoute(builder: (_) => const PackBrowserScreen()),
                      )),
                    ),
                  );
                }
                return SliverPadding(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  sliver: SliverList(
                    delegate: SliverChildBuilderDelegate(
                      (ctx, i) => Padding(
                        padding: const EdgeInsets.only(bottom: 14),
                        child: _PackCard(pack: packs[i]),
                      ),
                      childCount: packs.length,
                    ),
                  ),
                );
              },
            ),
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(20, 4, 20, 40),
                child: OutlinedButton.icon(
                  onPressed: () => Navigator.of(context).push(
                    MaterialPageRoute(builder: (_) => const PackBrowserScreen()),
                  ),
                  icon: const Icon(Icons.explore_rounded, size: 18),
                  label: const Text('Browse Knowledge Packs'),
                  style: OutlinedButton.styleFrom(
                      minimumSize: const Size.fromHeight(52),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14))),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _PackCard extends ConsumerWidget {
  const _PackCard({required this.pack});
  final Pack pack;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final cs = Theme.of(context).colorScheme;
    final db = ref.watch(dbProvider);
    final color = _parseColor(pack.color);

    return FutureBuilder<(SrsStageCounts, int, DateTime?)>(
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
        final masteryPct = counts != null ? '${(counts.masteryRatio * 100).round()}%' : '—';
        final apprentice = counts?.apprentice ?? 0;
        final total = counts?.total ?? pack.questionCount;

        String srsStatus = '';
        if (dueCount > 0) {
          srsStatus = '⚡ $dueCount reviews due now';
        } else if (earliestUpcoming != null) {
          final diff = earliestUpcoming.difference(DateTime.now());
          final timeStr = diff.isNegative
              ? 'due now'
              : (diff.inMinutes < 60
                  ? 'in ${diff.inMinutes + 1}m'
                  : (diff.inHours < 24 ? 'in ${diff.inHours}h' : 'in ${diff.inDays}d'));
          srsStatus = '⏳ Next review $timeStr';
        } else if (counts != null && counts.available > 0) {
          srsStatus = '📖 ${counts.available} new lessons ready';
        } else if (counts != null && counts.burned == counts.total && counts.total > 0) {
          srsStatus = '🏆 100% Mastered & Burned';
        }

        return Container(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              colors: [color.withAlpha(40), color.withAlpha(15)],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
            borderRadius: BorderRadius.circular(20),
            border: Border.all(color: color.withAlpha(80), width: 1.5),
          ),
          child: Material(
            color: Colors.transparent,
            child: InkWell(
              borderRadius: BorderRadius.circular(20),
              onTap: () => Navigator.of(context).push(
                MaterialPageRoute(builder: (_) => PackDetailScreen(pack: pack)),
              ),
              child: Padding(
                padding: const EdgeInsets.all(18),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Container(
                          padding: const EdgeInsets.all(10),
                          decoration: BoxDecoration(color: color.withAlpha(40), borderRadius: BorderRadius.circular(12)),
                          child: Icon(_iconData(pack.iconName), color: color, size: 22),
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(pack.name, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                              Text(pack.subject, style: TextStyle(fontSize: 12, color: cs.onSurfaceVariant)),
                            ],
                          ),
                        ),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                          decoration: BoxDecoration(
                            color: color.withAlpha(30),
                            borderRadius: BorderRadius.circular(10),
                            border: Border.all(color: color.withAlpha(60)),
                          ),
                          child: Text(masteryPct, style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold, color: color)),
                        ),
                      ],
                    ),
                    if (srsStatus.isNotEmpty) ...[
                      const SizedBox(height: 10),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                        decoration: BoxDecoration(
                          color: color.withAlpha(25),
                          borderRadius: BorderRadius.circular(8),
                          border: Border.all(color: color.withAlpha(50)),
                        ),
                        child: Text(
                          srsStatus,
                          style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: color),
                        ),
                      ),
                    ],
                    const SizedBox(height: 14),
                    ClipRRect(
                      borderRadius: BorderRadius.circular(6),
                      child: LinearProgressIndicator(
                        value: counts != null && total > 0 ? counts.masteredTotal / total : 0,
                        minHeight: 6,
                        backgroundColor: cs.surfaceContainerHighest,
                        valueColor: AlwaysStoppedAnimation<Color>(color),
                      ),
                    ),
                    const SizedBox(height: 10),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        _buildStatChip('${counts?.available ?? 0}', 'Available', const Color(0xFF64748B)),
                        _buildStatChip('$apprentice', 'Learning', SynapseColors.apprentice),
                        _buildStatChip('${counts?.masteredTotal ?? 0}', 'Mastered', SynapseColors.guru),
                        _buildStatChip('$total', 'Total', cs.onSurfaceVariant),
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ),
        );
      },
    );
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

Widget _buildStatChip(String value, String label, Color color) {
  return Column(
    children: [
      Text(value, style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold, color: color)),
      Text(label, style: const TextStyle(fontSize: 10, color: Colors.grey)),
    ],
  );
}

class _EmptyPackCard extends StatelessWidget {
  const _EmptyPackCard({required this.onBrowse});
  final VoidCallback onBrowse;

  @override
  Widget build(BuildContext context) {
    final cs = Theme.of(context).colorScheme;
    return Container(
      padding: const EdgeInsets.all(28),
      decoration: BoxDecoration(
        color: cs.surfaceContainerHigh,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: SynapseColors.primary.withAlpha(60)),
      ),
      child: Column(
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(14),
            child: Image.asset(
              'assets/icons/logo512.png',
              width: 56,
              height: 56,
              fit: BoxFit.cover,
            ),
          ),
          const SizedBox(height: 14),
          const Text('No Knowledge Packs Installed',
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 17), textAlign: TextAlign.center),
          const SizedBox(height: 6),
          Text('Browse available packs to start mastering a subject.',
              textAlign: TextAlign.center, style: TextStyle(color: cs.onSurfaceVariant, fontSize: 13)),
          const SizedBox(height: 18),
          FilledButton.icon(
            onPressed: onBrowse,
            icon: const Icon(Icons.explore_rounded, size: 18),
            label: const Text('Browse Packs'),
            style: FilledButton.styleFrom(backgroundColor: SynapseColors.primary, minimumSize: const Size(180, 48)),
          ),
        ],
      ),
    );
  }
}