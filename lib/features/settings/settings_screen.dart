import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../providers.dart';
import '../../theme/app_theme.dart';

class SettingsScreen extends ConsumerStatefulWidget {
  const SettingsScreen({super.key});

  @override
  ConsumerState<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends ConsumerState<SettingsScreen> {
  @override
  Widget build(BuildContext context) {
    final cs = Theme.of(context).colorScheme;
    final settings = ref.watch(settingsServiceProvider);
    final db = ref.watch(dbProvider);
    final packsAsync = ref.watch(installedPacksProvider);

    return Scaffold(
      backgroundColor: SynapseColors.surface,
      appBar: AppBar(
        title: const Text('Settings & Tools'),
        backgroundColor: SynapseColors.surface,
      ),
      body: ListView(
        padding: const EdgeInsets.all(20),
        children: [
          Text('Study Preferences', style: TextStyle(color: cs.onSurfaceVariant, fontSize: 13, fontWeight: FontWeight.bold)),
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
                    items: [5, 10, 15, 20, 30].map((v) => DropdownMenuItem(value: v, child: Text('$v'))).toList(),
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
                    items: [50, 100, 150, 200].map((v) => DropdownMenuItem(value: v, child: Text('$v'))).toList(),
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
          const SizedBox(height: 24),
          Text('Developer & Testing Tools', style: TextStyle(color: cs.onSurfaceVariant, fontSize: 13, fontWeight: FontWeight.bold)),
          const SizedBox(height: 10),
          Container(
            decoration: BoxDecoration(
              color: cs.surfaceContainerHigh,
              borderRadius: BorderRadius.circular(16),
            ),
            child: Column(
              children: [
                ListTile(
                  leading: const Icon(Icons.bolt, color: SynapseColors.burned),
                  title: const Text('Answer All Due Reviews Correctly'),
                  subtitle: const Text('Fast-forwards currently due cards to next SRS tier'),
                  onTap: () async {
                    final count = await db.progressDao.answerAllDueCorrectly();
                    if (context.mounted) {
                      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                        content: Text('Advanced $count due items to next SRS stage.'),
                        behavior: SnackBarBehavior.floating,
                      ));
                    }
                  },
                ),
                const Divider(height: 1),
                packsAsync.when(
                  data: (packs) => Column(
                    children: packs.map((p) => ListTile(
                      leading: const Icon(Icons.fast_forward_rounded, color: SynapseColors.primary),
                      title: Text('Make all reviews due now (${p.name})'),
                      subtitle: const Text('Forces all learned cards to become due immediately'),
                      onTap: () async {
                        final count = await db.progressDao.makeAllDueNow(p.packId);
                        if (context.mounted) {
                          ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                            content: Text('Marked $count items due in ${p.name}.'),
                            behavior: SnackBarBehavior.floating,
                          ));
                        }
                      },
                    )).toList(),
                  ),
                  loading: () => const SizedBox(),
                  error: (_, __) => const SizedBox(),
                ),
              ],
            ),
          ),
          const SizedBox(height: 24),
          Text('About Synapse', style: TextStyle(color: cs.onSurfaceVariant, fontSize: 13, fontWeight: FontWeight.bold)),
          const SizedBox(height: 10),
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: cs.surfaceContainerHigh,
              borderRadius: BorderRadius.circular(16),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('Synapse v1.0.0', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                const SizedBox(height: 4),
                Text('Universal Spaced Repetition Platform for mastering any knowledge domain.',
                    style: TextStyle(color: cs.onSurfaceVariant, fontSize: 13)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}