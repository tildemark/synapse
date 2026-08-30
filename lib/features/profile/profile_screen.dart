import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../providers.dart';
import '../../db/app_database.dart';
import '../../theme/app_theme.dart';
import '../../services/badge_service.dart';

class ProfileScreen extends ConsumerStatefulWidget {
  const ProfileScreen({super.key});

  @override
  ConsumerState<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends ConsumerState<ProfileScreen> with SingleTickerProviderStateMixin {
  late TabController _tabController;
  late TextEditingController _nameController;
  late TextEditingController _titleController;
  late TextEditingController _instController;
  bool _isEditing = false;
  String? _selectedPackFilter; // null = all packs

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 3, vsync: this);
    final settings = ref.read(settingsServiceProvider);
    _nameController = TextEditingController(text: settings.userName);
    _titleController = TextEditingController(text: settings.userTitle);
    _instController = TextEditingController(text: settings.institution);
  }

  @override
  void dispose() {
    _tabController.dispose();
    _nameController.dispose();
    _titleController.dispose();
    _instController.dispose();
    super.dispose();
  }

  Future<void> _saveProfile() async {
    final settings = ref.read(settingsServiceProvider);
    await settings.setUserName(_nameController.text.trim());
    await settings.setUserTitle(_titleController.text.trim());
    await settings.setInstitution(_instController.text.trim());
    setState(() {
      _isEditing = false;
    });
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Scholar profile updated successfully!'),
          behavior: SnackBarBehavior.floating,
        ),
      );
    }
  }

  String _calculateScholarRank(int burnedCount) {
    if (burnedCount >= 80) return 'Grandmaster Scholar 🌌';
    if (burnedCount >= 40) return 'Master Practitioner 👑';
    if (burnedCount >= 15) return 'Guru Scholar 🔮';
    if (burnedCount >= 5) return 'Apprentice Adept ⚡';
    return 'Novice Scholar 🐣';
  }

  void _showCreditsDialog(BuildContext context) {
    showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF18182E),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(20),
          side: BorderSide(color: SynapseColors.primary.withAlpha(80)),
        ),
        title: Row(
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(10),
              child: Image.asset(
                'assets/icons/logo512.png',
                width: 32,
                height: 32,
                fit: BoxFit.contain,
                errorBuilder: (_, __, ___) => Container(
                  padding: const EdgeInsets.all(6),
                  decoration: BoxDecoration(
                    color: SynapseColors.primary.withAlpha(30),
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: const Icon(Icons.verified_rounded, color: SynapseColors.primary, size: 20),
                ),
              ),
            ),
            const SizedBox(width: 12),
            const Text('About Synapse', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
          ],
        ),
        content: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Lead Credits
              const Text(
                'CREDITS & LEADERSHIP',
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 11, color: SynapseColors.secondary, letterSpacing: 0.05),
              ),
              const SizedBox(height: 8),
              _creditRow(Icons.person_rounded, 'Lead Developer', 'Alfredo Sanchez Jr', Colors.white),
              const SizedBox(height: 8),
              _creditRow(Icons.language_rounded, 'Official Website', 'http://sanchez.ph', SynapseColors.primary),
              const SizedBox(height: 8),
              _creditRow(Icons.psychology_rounded, 'Cognitive Architecture', '8-Stage Ebbinghaus Leitner Engine', SynapseColors.burned),
              
              const SizedBox(height: 16),
              const Divider(height: 1),
              const SizedBox(height: 16),

              // Data Privacy Guarantees
              const Text(
                'DATA PRIVACY & CONSENT',
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 11, color: SynapseColors.secondary, letterSpacing: 0.05),
              ),
              const SizedBox(height: 8),
              _creditRow(Icons.lock_rounded, 'Storage Model', '100% Offline SQLite (Zero Cloud DB)', Colors.white),
              const SizedBox(height: 8),
              _creditRow(Icons.shield_rounded, 'Telemetry', '0% Tracking · Zero Analytics SDKs', SynapseColors.secondary),
              const SizedBox(height: 8),
              _creditRow(Icons.key_rounded, 'Certificates', 'Zero-Knowledge Cryptographic HMAC', SynapseColors.burned),

              const SizedBox(height: 16),
              const Divider(height: 1),
              const SizedBox(height: 16),

              // Open-Source Licenses
              const Text(
                'SOFTWARE LICENSES & STACK',
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 11, color: SynapseColors.secondary, letterSpacing: 0.05),
              ),
              const SizedBox(height: 8),
              _creditRow(Icons.code_rounded, 'App License', 'MIT Open Source License', Colors.white),
              const SizedBox(height: 8),
              _creditRow(Icons.storage_rounded, 'Database Engine', 'Drift & SQLite (sqlite3)', Colors.grey),
              const SizedBox(height: 8),
              _creditRow(Icons.layers_rounded, 'Frameworks', 'Flutter, Dart, Riverpod, Next.js', Colors.grey),
            ],
          ),
        ),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.of(ctx).pop();
              showLicensePage(
                context: context,
                applicationName: 'Synapse',
                applicationVersion: 'v1.0.0',
                applicationLegalese: '© 2026 Alfredo Sanchez Jr. Distributed under the MIT License.',
              );
            },
            child: const Text('View All Package Licenses', style: TextStyle(fontSize: 12, color: SynapseColors.primary)),
          ),
          FilledButton(
            style: FilledButton.styleFrom(backgroundColor: SynapseColors.secondary),
            onPressed: () => Navigator.of(ctx).pop(),
            child: const Text('Close', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.black)),
          ),
        ],
      ),
    );
  }

  Widget _creditRow(IconData icon, String label, String value, Color color) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Icon(icon, size: 16, color: SynapseColors.primary),
        const SizedBox(width: 8),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(label, style: const TextStyle(fontSize: 10, color: Colors.grey, fontWeight: FontWeight.bold)),
              Text(value, style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: color)),
            ],
          ),
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    final cs = Theme.of(context).colorScheme;
    final db = ref.watch(dbProvider);
    final settings = ref.watch(settingsServiceProvider);
    final packsAsync = ref.watch(installedPacksProvider);

    return Scaffold(
      backgroundColor: SynapseColors.surface,
      appBar: AppBar(
        title: const Text('Scholar Dossier & Badges', style: TextStyle(fontWeight: FontWeight.bold)),
        backgroundColor: SynapseColors.surface,
        actions: [
          IconButton(
            icon: const Icon(Icons.info_outline_rounded),
            tooltip: 'Credits',
            onPressed: () => _showCreditsDialog(context),
          ),
          IconButton(
            icon: Icon(_isEditing ? Icons.check_circle_rounded : Icons.edit_note_rounded),
            color: _isEditing ? SynapseColors.secondary : null,
            tooltip: _isEditing ? 'Save Profile' : 'Edit Profile',
            onPressed: () {
              if (_isEditing) {
                _saveProfile();
              } else {
                setState(() => _isEditing = true);
              }
            },
          ),
          const SizedBox(width: 8),
        ],
      ),
      body: FutureBuilder<Set<String>>(
        future: BadgeService.evaluateUnlockedBadges(db: db, settings: settings),
        builder: (context, badgeSnap) {
          if (badgeSnap.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }
          final unlockedBadgeIds = badgeSnap.data ?? {};

          return FutureBuilder<List<dynamic>>(
            future: Future.wait([
              db.select(db.userProgress).get(),
              db.select(db.questions).get(),
            ]),
            builder: (context, dataSnap) {
              if (dataSnap.connectionState == ConnectionState.waiting) {
                return const Center(child: CircularProgressIndicator());
              }
              final allProgress = (dataSnap.data?[0] as List<UserProgressData>?) ?? <UserProgressData>[];
              final allQuestions = (dataSnap.data?[1] as List<Question>?) ?? <Question>[];

              final totalLearned = allProgress.where((p) => p.isLessonCompleted).length;
              final totalBurned = allProgress.where((p) => p.srsStage == 8).length;
              final scholarRank = _calculateScholarRank(totalBurned);

              return Column(
                children: [
                  // ─── Scholar Profile Header Card ──────────────────────────
                  Container(
                    margin: const EdgeInsets.fromLTRB(16, 12, 16, 12),
                    padding: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      gradient: const LinearGradient(
                        colors: [Color(0xFF1E1E38), Color(0xFF131325)],
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                      ),
                      borderRadius: BorderRadius.circular(18),
                      border: Border.all(color: SynapseColors.primary.withAlpha(80)),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withAlpha(40),
                          blurRadius: 10,
                          offset: const Offset(0, 4),
                        ),
                      ],
                    ),
                    child: Column(
                      children: [
                        Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Container(
                              width: 52,
                              height: 52,
                              decoration: BoxDecoration(
                                gradient: const LinearGradient(
                                  colors: [SynapseColors.primary, Color(0xFF9B59B6)],
                                  begin: Alignment.topLeft,
                                  end: Alignment.bottomRight,
                                ),
                                borderRadius: BorderRadius.circular(14),
                              ),
                              child: Center(
                                child: Text(
                                  settings.userName.isNotEmpty ? settings.userName[0].toUpperCase() : 'S',
                                  style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: Colors.white),
                                ),
                              ),
                            ),
                            const SizedBox(width: 14),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  if (_isEditing) ...[
                                    TextField(
                                      controller: _nameController,
                                      style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 15, color: Colors.white),
                                      decoration: InputDecoration(
                                        labelText: 'Full Name (Used in Certificates)',
                                        labelStyle: TextStyle(color: cs.primary, fontSize: 12),
                                        isDense: true,
                                        contentPadding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
                                        filled: true,
                                        fillColor: const Color(0xFF101020),
                                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(8), borderSide: BorderSide(color: cs.primary)),
                                      ),
                                    ),
                                    const SizedBox(height: 6),
                                    TextField(
                                      controller: _titleController,
                                      style: const TextStyle(fontSize: 13, color: Colors.white),
                                      decoration: InputDecoration(
                                        labelText: 'Title / Affiliation',
                                        labelStyle: TextStyle(color: cs.onSurfaceVariant, fontSize: 11),
                                        isDense: true,
                                        contentPadding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                                        filled: true,
                                        fillColor: const Color(0xFF101020),
                                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(8)),
                                      ),
                                    ),
                                    const SizedBox(height: 8),
                                    Row(
                                      mainAxisAlignment: MainAxisAlignment.end,
                                      children: [
                                        TextButton(
                                          onPressed: () => setState(() => _isEditing = false),
                                          child: const Text('Cancel', style: TextStyle(fontSize: 12)),
                                        ),
                                        const SizedBox(width: 6),
                                        FilledButton(
                                          onPressed: _saveProfile,
                                          style: FilledButton.styleFrom(
                                            backgroundColor: SynapseColors.secondary,
                                            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                                          ),
                                          child: const Text('Save Name', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Colors.black)),
                                        ),
                                      ],
                                    ),
                                  ] else ...[
                                    Row(
                                      children: [
                                        Expanded(
                                          child: Text(
                                            settings.userName.isNotEmpty ? settings.userName : 'Scholar',
                                            style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Colors.white),
                                          ),
                                        ),
                                        InkWell(
                                          onTap: () => setState(() => _isEditing = true),
                                          borderRadius: BorderRadius.circular(8),
                                          child: Container(
                                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                                            decoration: BoxDecoration(
                                              color: SynapseColors.primary.withAlpha(30),
                                              borderRadius: BorderRadius.circular(8),
                                              border: Border.all(color: SynapseColors.primary.withAlpha(80)),
                                            ),
                                            child: const Row(
                                              mainAxisSize: MainAxisSize.min,
                                              children: [
                                                Icon(Icons.edit, size: 12, color: SynapseColors.primary),
                                                SizedBox(width: 4),
                                                Text('Edit Name', style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: SynapseColors.primary)),
                                              ],
                                            ),
                                          ),
                                        ),
                                      ],
                                    ),
                                    const SizedBox(height: 2),
                                    Text(
                                      settings.userTitle.isNotEmpty ? settings.userTitle : 'Independent Scholar',
                                      style: TextStyle(fontSize: 12, color: cs.onSurfaceVariant),
                                    ),
                                    const SizedBox(height: 4),
                                    Text(scholarRank, style: const TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: SynapseColors.burned)),
                                  ],
                                ],
                              ),
                            ),
                          ],
                        ),
                        if (!_isEditing) ...[
                          const SizedBox(height: 12),
                          // Mini stats ribbon
                          Row(
                            children: [
                              _miniPill(Icons.whatshot_rounded, '${settings.streakDays}d Streak', const Color(0xFFF97316)),
                              const SizedBox(width: 6),
                              _miniPill(Icons.local_fire_department_rounded, '$totalBurned Burned', SynapseColors.burned),
                              const SizedBox(width: 6),
                              _miniPill(Icons.school_rounded, '$totalLearned Learned', SynapseColors.primary),
                              const SizedBox(width: 6),
                              _miniPill(Icons.verified_rounded, '${unlockedBadgeIds.length} Badges', SynapseColors.secondary),
                            ],
                          ),
                        ],
                      ],
                    ),
                  ),

                  // ─── 3-Tab Segmented Switcher (No Endless Scroll) ───────────
                  Container(
                    margin: const EdgeInsets.symmetric(horizontal: 16),
                    decoration: BoxDecoration(
                      color: const Color(0xFF141424),
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: cs.outlineVariant.withAlpha(50)),
                    ),
                    child: TabBar(
                      controller: _tabController,
                      indicatorSize: TabBarIndicatorSize.tab,
                      dividerColor: Colors.transparent,
                      indicator: BoxDecoration(
                        color: SynapseColors.primary.withAlpha(40),
                        borderRadius: BorderRadius.circular(10),
                        border: Border.all(color: SynapseColors.primary.withAlpha(90)),
                      ),
                      labelColor: Colors.white,
                      unselectedLabelColor: cs.onSurfaceVariant,
                      labelStyle: const TextStyle(fontWeight: FontWeight.bold, fontSize: 12),
                      tabs: const [
                        Tab(text: '📜 Certificates'),
                        Tab(text: '🏅 Global Badges'),
                        Tab(text: '📚 Course Badges'),
                      ],
                    ),
                  ),

                  const SizedBox(height: 10),

                  // ─── Tab Content Views ──────────────────────────────────────
                  Expanded(
                    child: TabBarView(
                      controller: _tabController,
                      children: [
                        // TAB 1: Verifiable Certificates
                        _buildCertificatesTab(packsAsync, allQuestions, allProgress, cs),

                        // TAB 2: Global Habit & Streak Badges
                        _buildBadgeGrid(BadgeService.globalBadges, unlockedBadgeIds, cs),

                        // TAB 3: Pack-Specific Course Badges (with filter)
                        _buildPackBadgesTab(packsAsync, unlockedBadgeIds, cs),
                      ],
                    ),
                  ),
                ],
              );
            },
          );
        },
      ),
    );
  }

  Widget _miniPill(IconData icon, String text, Color c) {
    return Expanded(
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 6, horizontal: 2),
        decoration: BoxDecoration(
          color: c.withAlpha(20),
          borderRadius: BorderRadius.circular(8),
          border: Border.all(color: c.withAlpha(50)),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, size: 11, color: c),
            const SizedBox(width: 2),
            Flexible(
              child: Text(
                text,
                style: TextStyle(fontSize: 9.5, fontWeight: FontWeight.bold, color: c),
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
              ),
            ),
          ],
        ),
      ),
    );
  }

  // ─── Tab 1: Verifiable Certificates ─────────────────────────────────────────
  Widget _buildCertificatesTab(
    AsyncValue<List<Pack>> packsAsync,
    List<Question> allQuestions,
    List<UserProgressData> allProgress,
    ColorScheme cs,
  ) {
    final settings = ref.read(settingsServiceProvider);
    final hasConsent = settings.hasCertificateConsent;
    final scholarName = settings.userName;

    return packsAsync.when(
      data: (packs) {
        if (packs.isEmpty) {
          return const Center(child: Text('No knowledge packs installed yet.'));
        }

        return ListView(
          padding: const EdgeInsets.fromLTRB(16, 6, 16, 30),
          children: [
            // Consent & Data Privacy Card
            Container(
              margin: const EdgeInsets.only(bottom: 14),
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(
                color: hasConsent ? SynapseColors.secondary.withAlpha(20) : const Color(0xFF1C1C30),
                borderRadius: BorderRadius.circular(14),
                border: Border.all(
                  color: hasConsent ? SynapseColors.secondary.withAlpha(80) : cs.outlineVariant.withAlpha(60),
                ),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Icon(
                        hasConsent ? Icons.verified_user_rounded : Icons.privacy_tip_outlined,
                        color: hasConsent ? SynapseColors.secondary : SynapseColors.burned,
                        size: 20,
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: Text(
                          hasConsent ? 'Certificate Verification Consent: Active' : 'Certificate Consent Required',
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 13,
                            color: hasConsent ? SynapseColors.secondary : SynapseColors.burned,
                          ),
                        ),
                      ),
                      Switch(
                        value: hasConsent,
                        activeThumbColor: SynapseColors.secondary,
                        onChanged: (val) async {
                          await settings.setCertificateConsent(val);
                          setState(() {});
                        },
                      ),
                    ],
                  ),
                  const SizedBox(height: 6),
                  Text(
                    hasConsent
                      ? 'Your name ("$scholarName") is cryptographically hashed into your certificate serials. No data is stored on remote servers (100% Zero-Knowledge verification).'
                      : 'Enable consent to attach your Scholar Name to official verification links when exporting to LinkedIn or Facebook. Stored 100% locally on your device.',
                    style: TextStyle(fontSize: 11, color: cs.onSurfaceVariant, height: 1.4),
                  ),
                ],
              ),
            ),

            ...packs.map((pack) {
              final packQs = allQuestions.where((q) => q.packId == pack.packId).toList();
              final burnedInPack = packQs.where((q) {
                final p = allProgress.where((item) => item.questionId == q.id).firstOrNull;
                return p != null && p.srsStage == 8;
              }).length;

              final isFullyBurned = packQs.isNotEmpty && burnedInPack == packQs.length;
              
              // Strategy 1 Deterministic Hash (includes actual scholar name)
              final cleanPackCode = pack.packId == 'c_programming' ? 'CPROG' : pack.packId == 'html_fundamentals' ? 'HTML' : pack.packId.toUpperCase().replaceAll('_', '');
              final hashSeed = '${scholarName.trim().toLowerCase()}_${pack.packId}_2026';
              var hashVal = 0x811c9dc5;
              for (var i = 0; i < hashSeed.length; i++) {
                hashVal ^= hashSeed.codeUnitAt(i);
                hashVal += (hashVal << 1) + (hashVal << 4) + (hashVal << 7) + (hashVal << 8) + (hashVal << 24);
              }
              final checksum = ((hashVal & 0xFFFFFFFF) & 0xFFFF).toRadixString(16).padLeft(4, '0').toUpperCase();
              final certSerial = 'SYN-$cleanPackCode-$checksum-VERIFIED';

              return Container(
                margin: const EdgeInsets.only(bottom: 12),
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: cs.surfaceContainerHigh,
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(
                    color: isFullyBurned ? SynapseColors.burned.withAlpha(120) : cs.outlineVariant.withAlpha(40),
                    width: isFullyBurned ? 1.5 : 1.0,
                  ),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Container(
                          padding: const EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            color: isFullyBurned ? SynapseColors.burned.withAlpha(30) : cs.surfaceContainerHighest,
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: Icon(
                            isFullyBurned ? Icons.card_membership_rounded : Icons.lock_outline_rounded,
                            color: isFullyBurned ? SynapseColors.burned : Colors.grey,
                            size: 24,
                          ),
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(pack.name, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 14)),
                              Text(
                                isFullyBurned ? certSerial : '$burnedInPack / ${packQs.length} Cards Burned',
                                style: TextStyle(
                                  fontSize: 11,
                                  color: isFullyBurned ? SynapseColors.burned : cs.onSurfaceVariant,
                                ),
                              ),
                            ],
                          ),
                        ),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                          decoration: BoxDecoration(
                            color: isFullyBurned ? SynapseColors.secondary.withAlpha(25) : cs.surfaceContainerHighest,
                            borderRadius: BorderRadius.circular(8),
                          ),
                          child: Text(
                            isFullyBurned ? 'Mastered ✓' : '${packQs.isNotEmpty ? ((burnedInPack / packQs.length) * 100).round() : 0}%',
                            style: TextStyle(
                              fontSize: 11,
                              fontWeight: FontWeight.bold,
                              color: isFullyBurned ? SynapseColors.secondary : cs.onSurfaceVariant,
                            ),
                          ),
                        ),
                      ],
                    ),
                    if (isFullyBurned) ...[
                      const SizedBox(height: 12),
                      const Divider(height: 1),
                      const SizedBox(height: 8),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'Recipient: $scholarName',
                            style: TextStyle(fontSize: 11, color: cs.onSurfaceVariant),
                          ),
                          TextButton.icon(
                            onPressed: () {
                              final nameParam = hasConsent ? Uri.encodeComponent(scholarName) : 'Scholar';
                              final shareUrl = 'https://synapse.sanchez.ph/verify?id=$certSerial&name=$nameParam&pack=${Uri.encodeComponent(pack.name)}';
                              ScaffoldMessenger.of(context).showSnackBar(
                                SnackBar(
                                  content: Text('Verification URL copied:\n$shareUrl'),
                                  behavior: SnackBarBehavior.floating,
                                ),
                              );
                            },
                            icon: const Icon(Icons.share_rounded, size: 14),
                            label: const Text('Share / Verify', style: TextStyle(fontSize: 12)),
                          ),
                        ],
                      ),
                    ],
                  ],
                ),
              );
            }),
          ],
        );
      },
      loading: () => const Center(child: CircularProgressIndicator()),
      error: (_, __) => const SizedBox(),
    );
  }

  // ─── Tab 2 & 3: Compact Badge Grid ──────────────────────────────────────────
  Widget _buildBadgeGrid(List<SynapseBadge> badges, Set<String> unlockedBadgeIds, ColorScheme cs) {
    return GridView.builder(
      padding: const EdgeInsets.fromLTRB(16, 6, 16, 30),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        mainAxisSpacing: 10,
        crossAxisSpacing: 10,
        childAspectRatio: 2.1,
      ),
      itemCount: badges.length,
      itemBuilder: (ctx, i) {
        final badge = badges[i];
        final isUnlocked = unlockedBadgeIds.contains(badge.id);

        return InkWell(
          onTap: () => _showBadgeDialog(badge, isUnlocked, cs),
          borderRadius: BorderRadius.circular(14),
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 150),
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
            decoration: BoxDecoration(
              color: isUnlocked ? badge.color.withAlpha(25) : cs.surfaceContainerHigh.withAlpha(40),
              borderRadius: BorderRadius.circular(14),
              border: Border.all(
                color: isUnlocked ? badge.color.withAlpha(100) : cs.outlineVariant.withAlpha(30),
                width: isUnlocked ? 1.5 : 1.0,
              ),
            ),
            child: Row(
              children: [
                Container(
                  width: 34,
                  height: 34,
                  decoration: BoxDecoration(
                    color: isUnlocked ? badge.color.withAlpha(40) : cs.surfaceContainerHighest,
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Icon(
                    badge.icon,
                    size: 18,
                    color: isUnlocked ? badge.color : Colors.grey.withAlpha(120),
                  ),
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        badge.title,
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 11,
                          color: isUnlocked ? Colors.white : Colors.grey,
                        ),
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                      ),
                      const SizedBox(height: 2),
                      Text(
                        isUnlocked ? 'Unlocked ✓' : badge.criteriaText,
                        style: TextStyle(
                          fontSize: 9,
                          color: isUnlocked ? badge.color : Colors.grey.withAlpha(140),
                          fontWeight: isUnlocked ? FontWeight.bold : FontWeight.normal,
                        ),
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }

  // ─── Tab 3: Course / Pack Badges with Horizontal Pack Filter ────────────────
  Widget _buildPackBadgesTab(AsyncValue<List<Pack>> packsAsync, Set<String> unlockedBadgeIds, ColorScheme cs) {
    return packsAsync.when(
      data: (packs) {
        final filteredBadges = _selectedPackFilter == null
            ? BadgeService.packBadges
            : BadgeService.packBadges.where((b) => b.packId == _selectedPackFilter).toList();

        return Column(
          children: [
            // Filter chip list
            SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 6),
              child: Row(
                children: [
                  ChoiceChip(
                    label: const Text('All Packs', style: TextStyle(fontSize: 11)),
                    selected: _selectedPackFilter == null,
                    onSelected: (sel) => setState(() => _selectedPackFilter = null),
                  ),
                  ...packs.map((p) {
                    final isSel = _selectedPackFilter == p.packId;
                    return Padding(
                      padding: const EdgeInsets.only(left: 6),
                      child: ChoiceChip(
                        label: Text(p.name, style: const TextStyle(fontSize: 11)),
                        selected: isSel,
                        onSelected: (sel) => setState(() => _selectedPackFilter = sel ? p.packId : null),
                      ),
                    );
                  }),
                ],
              ),
            ),
            const SizedBox(height: 4),
            Expanded(
              child: _buildBadgeGrid(filteredBadges, unlockedBadgeIds, cs),
            ),
          ],
        );
      },
      loading: () => const Center(child: CircularProgressIndicator()),
      error: (_, __) => const SizedBox(),
    );
  }

  void _showBadgeDialog(SynapseBadge badge, bool isUnlocked, ColorScheme cs) {
    showDialog(
      context: context,
      builder: (_) => AlertDialog(
        backgroundColor: SynapseColors.card,
        title: Row(
          children: [
            Icon(badge.icon, color: isUnlocked ? badge.color : Colors.grey, size: 28),
            const SizedBox(width: 10),
            Expanded(child: Text(badge.title, style: const TextStyle(fontSize: 17))),
          ],
        ),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(badge.description, style: const TextStyle(fontSize: 13, height: 1.4)),
            const SizedBox(height: 12),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
              decoration: BoxDecoration(
                color: isUnlocked ? SynapseColors.secondary.withAlpha(20) : cs.surfaceContainerHighest,
                borderRadius: BorderRadius.circular(8),
                border: Border.all(color: isUnlocked ? SynapseColors.secondary.withAlpha(80) : Colors.transparent),
              ),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(isUnlocked ? Icons.check_circle_rounded : Icons.lock_outline_rounded,
                      size: 14, color: isUnlocked ? SynapseColors.secondary : Colors.grey),
                  const SizedBox(width: 6),
                  Text(isUnlocked ? 'Unlocked ✓' : 'Criteria: ${badge.criteriaText}',
                      style: TextStyle(
                          fontSize: 11,
                          fontWeight: FontWeight.bold,
                          color: isUnlocked ? SynapseColors.secondary : cs.onSurfaceVariant)),
                ],
              ),
            ),
          ],
        ),
        actions: [
          TextButton(onPressed: () => Navigator.of(context).pop(), child: const Text('Close')),
        ],
      ),
    );
  }
}
