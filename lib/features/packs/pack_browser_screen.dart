import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../providers.dart';
import '../../theme/app_theme.dart';

// Registry of all available Knowledge Packs (bundled)
const _kAvailablePacks = [
  _PackMeta(
    packId: 'c_programming',
    name: 'C Programming',
    subject: 'Computer Science',
    description: 'Master C fundamentals: pointers, memory management, structs, I/O, and systems programming.',
    iconName: 'code',
    color: '#3B82F6',
    questionCount: 120,
    assetPath: 'assets/packs/pack_c_programming.json',
  ),
  _PackMeta(
    packId: 'linux_commands',
    name: 'Linux Commands',
    subject: 'Systems & DevOps',
    description: 'Essential Bash commands, file permissions, process management, networking, and shell scripting.',
    iconName: 'terminal',
    color: '#10B981',
    questionCount: 100,
    assetPath: 'assets/packs/pack_linux_commands.json',
  ),
  _PackMeta(
    packId: 'algebra_fundamentals',
    name: 'Algebra Fundamentals',
    subject: 'Mathematics',
    description: 'Expressions, equations, inequalities, functions, polynomials, and systems of equations.',
    iconName: 'functions',
    color: '#F59E0B',
    questionCount: 90,
    assetPath: 'assets/packs/pack_algebra.json',
  ),
  _PackMeta(
    packId: 'physics_fundamentals',
    name: 'Physics Fundamentals',
    subject: 'Natural Sciences',
    description: 'Mechanics, thermodynamics, electromagnetism, waves, optics, and modern physics.',
    iconName: 'science',
    color: '#8B5CF6',
    questionCount: 110,
    assetPath: 'assets/packs/pack_physics.json',
  ),
  _PackMeta(
    packId: 'excel_mastery',
    name: 'Excel Mastery',
    subject: 'Productivity',
    description: 'Formulas, VLOOKUP, pivot tables, charts, Power Query, and data analysis skills.',
    iconName: 'grid_view',
    color: '#EF4444',
    questionCount: 80,
    assetPath: 'assets/packs/pack_excel.json',
  ),
];

class PackBrowserScreen extends ConsumerWidget {
  const PackBrowserScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final packsAsync = ref.watch(installedPacksProvider);

    return Scaffold(
      backgroundColor: SynapseColors.surface,
      appBar: AppBar(
        title: const Text('Knowledge Packs', style: TextStyle(fontWeight: FontWeight.bold)),
        backgroundColor: SynapseColors.surface,
      ),
      body: packsAsync.when(
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (_, __) => const Center(child: Text('Error loading packs')),
        data: (installed) {
          final installedIds = installed.map((p) => p.packId).toSet();
          return ListView.separated(
            padding: const EdgeInsets.fromLTRB(20, 8, 20, 40),
            itemCount: _kAvailablePacks.length,
            separatorBuilder: (_, __) => const SizedBox(height: 14),
            itemBuilder: (ctx, i) {
              final meta = _kAvailablePacks[i];
              final isInstalled = installedIds.contains(meta.packId);
              return _PackBrowserCard(
                meta: meta,
                isInstalled: isInstalled,
                onInstall: () => _installPack(context, ref, meta),
                onUninstall: () => _uninstallPack(context, ref, meta),
              );
            },
          );
        },
      ),
    );
  }

  Future<void> _installPack(BuildContext context, WidgetRef ref, _PackMeta meta) async {
    final packService = ref.read(packServiceProvider);
    try {
      await packService.installIfAbsent(meta.assetPath);
      ref.invalidate(installedPacksProvider);
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
          content: Text('"${meta.name}" installed successfully!'),
          behavior: SnackBarBehavior.floating,
        ));
      }
    } catch (e) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
          content: Text('Failed to install "${meta.name}": $e'),
          behavior: SnackBarBehavior.floating,
        ));
      }
    }
  }

  Future<void> _uninstallPack(BuildContext context, WidgetRef ref, _PackMeta meta) async {
    final db = ref.read(dbProvider);
    await db.packDao.uninstallPack(meta.packId);
    ref.invalidate(installedPacksProvider);
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
        content: Text('"${meta.name}" uninstalled.'),
        behavior: SnackBarBehavior.floating,
      ));
    }
  }
}

// ─── Pack Browser Card ─────────────────────────────────────────────────────────

class _PackBrowserCard extends StatelessWidget {
  const _PackBrowserCard({
    required this.meta,
    required this.isInstalled,
    required this.onInstall,
    required this.onUninstall,
  });
  final _PackMeta meta;
  final bool isInstalled;
  final VoidCallback onInstall;
  final VoidCallback onUninstall;

  @override
  Widget build(BuildContext context) {
    final cs = Theme.of(context).colorScheme;
    final color = _parseColor(meta.color);

    return Container(
      decoration: BoxDecoration(
        color: cs.surfaceContainerHigh,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(
          color: isInstalled ? color.withAlpha(100) : cs.outlineVariant.withAlpha(60),
          width: isInstalled ? 1.8 : 1.0,
        ),
      ),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(10),
                  decoration: BoxDecoration(
                    color: color.withAlpha(35),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Icon(_iconData(meta.iconName), color: color, size: 22),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(meta.name, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 15)),
                      Text(meta.subject, style: TextStyle(fontSize: 12, color: cs.onSurfaceVariant)),
                    ],
                  ),
                ),
                if (isInstalled)
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                    decoration: BoxDecoration(
                      color: SynapseColors.secondary.withAlpha(25),
                      borderRadius: BorderRadius.circular(8),
                      border: Border.all(color: SynapseColors.secondary.withAlpha(80)),
                    ),
                    child: const Text('Installed', style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: SynapseColors.secondary)),
                  ),
              ],
            ),
            const SizedBox(height: 10),
            Text(meta.description, style: TextStyle(fontSize: 13, color: cs.onSurfaceVariant, height: 1.4)),
            const SizedBox(height: 4),
            Text('${meta.questionCount} questions', style: TextStyle(fontSize: 12, color: color, fontWeight: FontWeight.w600)),
            const SizedBox(height: 12),
            SizedBox(
              width: double.infinity,
              child: isInstalled
                  ? OutlinedButton.icon(
                      onPressed: onUninstall,
                      icon: const Icon(Icons.delete_outline_rounded, size: 16),
                      label: const Text('Uninstall', style: TextStyle(fontSize: 13)),
                      style: OutlinedButton.styleFrom(
                        foregroundColor: cs.error,
                        side: BorderSide(color: cs.error.withAlpha(80)),
                        padding: const EdgeInsets.symmetric(vertical: 10),
                      ),
                    )
                  : FilledButton.icon(
                      onPressed: onInstall,
                      icon: const Icon(Icons.download_rounded, size: 16),
                      label: const Text('Install Pack', style: TextStyle(fontSize: 13)),
                      style: FilledButton.styleFrom(
                        backgroundColor: color,
                        padding: const EdgeInsets.symmetric(vertical: 10),
                      ),
                    ),
            ),
          ],
        ),
      ),
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
      'science'    => Icons.science_rounded,
      'code'       => Icons.code_rounded,
      'functions'  => Icons.functions_rounded,
      'terminal'   => Icons.terminal_rounded,
      'grid_view'  => Icons.grid_view_rounded,
      _            => Icons.school_rounded,
    };
  }
}

// ─── Pack Metadata ────────────────────────────────────────────────────────────
class _PackMeta {
  const _PackMeta({
    required this.packId,
    required this.name,
    required this.subject,
    required this.description,
    required this.iconName,
    required this.color,
    required this.questionCount,
    required this.assetPath,
  });
  final String packId;
  final String name;
  final String subject;
  final String description;
  final String iconName;
  final String color;
  final int questionCount;
  final String assetPath;
}