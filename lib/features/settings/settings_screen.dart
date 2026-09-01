import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../providers.dart';
import '../../theme/app_theme.dart';
import '../../constants/app_version.dart';

class SettingsScreen extends ConsumerStatefulWidget {
  const SettingsScreen({super.key});

  @override
  ConsumerState<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends ConsumerState<SettingsScreen> {
  int _versionTapCount = 0;
  DateTime? _lastTapTime;

  void _handleVersionTap(SettingsService settings) async {
    final now = DateTime.now();
    if (_lastTapTime == null || now.difference(_lastTapTime!) > const Duration(seconds: 2)) {
      _versionTapCount = 1;
    } else {
      _versionTapCount++;
    }
    _lastTapTime = now;

    if (_versionTapCount >= 7) {
      _versionTapCount = 0;
      final newStatus = !settings.isDevMode;
      await settings.setDevMode(newStatus);
      setState(() {});
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              newStatus
                  ? '🛠️ Developer Mode Enabled! Fast-forward tools are now unlocked.'
                  : '🔒 Developer Mode Disabled.',
            ),
            behavior: SnackBarBehavior.floating,
            backgroundColor: newStatus ? SynapseColors.burned : SynapseColors.card,
          ),
        );
      }
    } else if (_versionTapCount >= 4) {
      final remaining = 7 - _versionTapCount;
      ScaffoldMessenger.of(context).clearSnackBars();
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Tap $remaining more times to toggle Developer Mode.'),
          duration: const Duration(milliseconds: 700),
          behavior: SnackBarBehavior.floating,
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final cs = Theme.of(context).colorScheme;
    final settings = ref.watch(settingsServiceProvider);
    final db = ref.watch(dbProvider);
    final packsAsync = ref.watch(installedPacksProvider);

    return Scaffold(
      backgroundColor: SynapseColors.surface,
      appBar: AppBar(
        title: Text(settings.isDevMode ? 'Settings & Dev Tools' : 'Settings'),
        backgroundColor: SynapseColors.surface,
      ),
      body: ListView(
        padding: const EdgeInsets.all(20),
        children: [
          Text('Study Preferences',
              style: TextStyle(color: cs.onSurfaceVariant, fontSize: 13, fontWeight: FontWeight.bold)),
          const SizedBox(height: 10),
          Container(
            decoration: BoxDecoration(
              color: cs.surfaceContainerHigh,
              borderRadius: BorderRadius.circular(16),
            ),
            child: Column(
              children: [
                ListTile(
                  leading: const Icon(Icons.tune_rounded, color: SynapseColors.primary),
                  title: const Text('Daily Lesson Cap'),
                  subtitle: Text('${settings.dailyLessonCap} cards per session'),
                  trailing: DropdownButton<int>(
                    value: settings.dailyLessonCap,
                    underline: const SizedBox(),
                    dropdownColor: SynapseColors.card,
                    items: [5, 10, 15, 20, 30]
                        .map((v) => DropdownMenuItem(value: v, child: Text('$v')))
                        .toList(),
                    onChanged: (val) async {
                      if (val != null) {
                        await settings.setDailyLessonCap(val);
                        setState(() {});
                      }
                    },
                  ),
                ),
                const Divider(height: 1),
                ListTile(
                  leading: const Icon(Icons.school_outlined, color: SynapseColors.apprentice),
                  title: const Text('Apprentice Stage Cap'),
                  subtitle: Text('${settings.apprenticeCap} maximum active cards'),
                  trailing: DropdownButton<int>(
                    value: settings.apprenticeCap,
                    underline: const SizedBox(),
                    dropdownColor: SynapseColors.card,
                    items: [50, 100, 150, 200]
                        .map((v) => DropdownMenuItem(value: v, child: Text('$v')))
                        .toList(),
                    onChanged: (val) async {
                      if (val != null) {
                        await settings.setApprenticeCap(val);
                        setState(() {});
                      }
                    },
                  ),
                ),
              ],
            ),
          ),
          if (settings.isDevMode) ...[
            const SizedBox(height: 24),
            Row(
              children: [
                const Text('Fast-Forward Developer Tools', style: TextStyle(color: SynapseColors.burned, fontSize: 13, fontWeight: FontWeight.bold)),
                const Spacer(),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                  decoration: BoxDecoration(
                    color: SynapseColors.burned.withAlpha(40),
                    borderRadius: BorderRadius.circular(6),
                    border: Border.all(color: SynapseColors.burned.withAlpha(120), width: 0.5),
                  ),
                  child: const Text('DEV MODE', style: TextStyle(color: SynapseColors.burned, fontSize: 10, fontWeight: FontWeight.bold, letterSpacing: 0.5)),
                ),
              ],
            ),
            const SizedBox(height: 10),
            Container(
              decoration: BoxDecoration(
                color: cs.surfaceContainerHigh,
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: SynapseColors.burned.withAlpha(80)),
              ),
              child: Column(
                children: [
                  ListTile(
                    leading: const Icon(Icons.check_circle_outline_rounded, color: SynapseColors.secondary),
                    title: const Text('Pass All Currently Due Reviews'),
                    subtitle: const Text('Answers all pending reviews correctly and promotes their SRS stage'),
                    onTap: () async {
                      final count = await db.progressDao.answerAllDueCorrectly();
                      if (context.mounted) {
                        ref.invalidate(installedPacksProvider);
                        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                          content: Text('⚡ Fast-forwarded $count due reviews to the next stage.'),
                          behavior: SnackBarBehavior.floating,
                        ));
                      }
                    },
                  ),
                  const Divider(height: 1),
                  packsAsync.when(
                    data: (packs) => Column(
                      children: [
                        ...packs.map((p) => Column(
                              children: [
                                ListTile(
                                  leading: const Icon(Icons.fast_forward_rounded, color: SynapseColors.primary),
                                  title: Text('Pass 5 Lessons (${p.name})'),
                                  subtitle: const Text('Instantly promotes 5 new cards to Apprentice 1'),
                                  onTap: () async {
                                    final count = await db.progressDao.promoteToApprentice(p.packId, limit: 5);
                                    if (context.mounted) {
                                      ref.invalidate(installedPacksProvider);
                                      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                                        content: Text('⚡ Promoted $count cards in ${p.name} to Apprentice 1.'),
                                        behavior: SnackBarBehavior.floating,
                                      ));
                                    }
                                  },
                                ),
                                const Divider(height: 1),
                                ListTile(
                                  leading: const Icon(Icons.fast_forward_rounded, color: SynapseColors.guru),
                                  title: Text('Pass 10 Lessons (${p.name})'),
                                  subtitle: const Text('Instantly promotes 10 new cards to Apprentice 1'),
                                  onTap: () async {
                                    final count = await db.progressDao.promoteToApprentice(p.packId, limit: 10);
                                    if (context.mounted) {
                                      ref.invalidate(installedPacksProvider);
                                      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                                        content: Text('⚡ Promoted $count cards in ${p.name} to Apprentice 1.'),
                                        behavior: SnackBarBehavior.floating,
                                      ));
                                    }
                                  },
                                ),
                                const Divider(height: 1),
                                ListTile(
                                  leading: const Icon(Icons.all_inclusive_rounded, color: SynapseColors.apprentice),
                                  title: Text('Pass ALL Lessons (${p.name})'),
                                  subtitle: const Text('Promotes all remaining available cards to Apprentice 1'),
                                  onTap: () async {
                                    final count = await db.progressDao.promoteToApprentice(p.packId);
                                    if (context.mounted) {
                                      ref.invalidate(installedPacksProvider);
                                      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                                        content: Text('⚡ Promoted all $count cards in ${p.name} to Apprentice 1.'),
                                        behavior: SnackBarBehavior.floating,
                                      ));
                                    }
                                  },
                                ),
                                const Divider(height: 1),
                                ListTile(
                                  leading: const Icon(Icons.alarm_on_rounded, color: SynapseColors.burned),
                                  title: Text('Make all reviews due now (${p.name})'),
                                  subtitle: const Text('Forces all learned cards in this pack to become due immediately'),
                                  onTap: () async {
                                    final count = await db.progressDao.makeAllDueNow(p.packId);
                                    if (context.mounted) {
                                      ref.invalidate(installedPacksProvider);
                                      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                                        content: Text('⚡ Marked $count items due immediately in ${p.name}.'),
                                        behavior: SnackBarBehavior.floating,
                                      ));
                                    }
                                  },
                                ),
                              ],
                            )),
                      ],
                    ),
                    loading: () => const Padding(
                      padding: EdgeInsets.all(16),
                      child: CircularProgressIndicator(),
                    ),
                    error: (_, __) => const SizedBox(),
                  ),
                ],
              ),
            ),
          ],
          const SizedBox(height: 24),
          Text('About Synapse',
              style: TextStyle(color: cs.onSurfaceVariant, fontSize: 13, fontWeight: FontWeight.bold)),
          const SizedBox(height: 10),
          InkWell(
            borderRadius: BorderRadius.circular(16),
            onTap: () => _handleVersionTap(settings),
            child: Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: cs.surfaceContainerHigh,
                borderRadius: BorderRadius.circular(16),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      const Text('Synapse ${AppVersion.versionTag}', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                      if (settings.isDevMode) ...[
                        const SizedBox(width: 8),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                          decoration: BoxDecoration(
                            color: SynapseColors.burned.withAlpha(40),
                            borderRadius: BorderRadius.circular(4),
                          ),
                          child: const Text('DEV ACTIVE', style: TextStyle(color: SynapseColors.burned, fontSize: 9, fontWeight: FontWeight.bold)),
                        ),
                      ],
                    ],
                  ),
                  const SizedBox(height: 4),
                  Text('Universal Spaced Repetition Platform for mastering any knowledge domain.',
                      style: TextStyle(color: cs.onSurfaceVariant, fontSize: 13)),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}