import 'package:flutter/material.dart';
import '../db/app_database.dart';
import '../services/settings_service.dart';

enum BadgeCategory {
  mastery,
  streak,
  circadian,
  multidisciplinary,
  accuracy,
  creator,
  packSpecific,
}

class SynapseBadge {
  const SynapseBadge({
    required this.id,
    required this.title,
    required this.description,
    required this.icon,
    required this.color,
    required this.category,
    required this.criteriaText,
    this.packId,
  });

  final String id;
  final String title;
  final String description;
  final IconData icon;
  final Color color;
  final BadgeCategory category;
  final String criteriaText;
  final String? packId;
}

class BadgeService {
  // ─── Global Habit, Streak & System Badges ───────────────────────────────────
  static const List<SynapseBadge> globalBadges = [
    SynapseBadge(
      id: 'first_spark',
      title: 'First Spark',
      description: 'Promoted your very first card from Unstudied to Apprentice 1.',
      icon: Icons.bolt_rounded,
      color: Color(0xFF6C63FF),
      category: BadgeCategory.mastery,
      criteriaText: 'Complete 1 lesson pass',
    ),
    SynapseBadge(
      id: 'single_pack_burn',
      title: 'Single Pack Inferno',
      description: 'Successfully burned 100% of all questions in a Knowledge Pack.',
      icon: Icons.local_fire_department_rounded,
      color: Color(0xFFF59E0B),
      category: BadgeCategory.mastery,
      criteriaText: 'Burn 100% of 1 Pack',
    ),
    SynapseBadge(
      id: 'triple_burn',
      title: 'Triple Burn Sovereign',
      description: 'Burned 100% of all questions across 3 distinct Knowledge Packs.',
      icon: Icons.military_tech_rounded,
      color: Color(0xFFEAB308),
      category: BadgeCategory.mastery,
      criteriaText: 'Burn 100% of 3 Packs',
    ),
    SynapseBadge(
      id: 'pantheon_mastery',
      title: 'Pantheon of Mastery',
      description: 'Achieved 100% permanent burned status across 5 Knowledge Packs.',
      icon: Icons.workspace_premium_rounded,
      color: Color(0xFFEC4899),
      category: BadgeCategory.mastery,
      criteriaText: 'Burn 100% of 5 Packs',
    ),
    SynapseBadge(
      id: 'streak_3_days',
      title: '3-Day Hat-Trick',
      description: 'Maintained an active study session for 3 consecutive days.',
      icon: Icons.whatshot_rounded,
      color: Color(0xFFF97316),
      category: BadgeCategory.streak,
      criteriaText: '3-day study streak',
    ),
    SynapseBadge(
      id: 'streak_5_days',
      title: '5-Day Momentum',
      description: 'Sustained active spaced reviews for 5 consecutive days.',
      icon: Icons.local_fire_department_rounded,
      color: Color(0xFFEF4444),
      category: BadgeCategory.streak,
      criteriaText: '5-day study streak',
    ),
    SynapseBadge(
      id: 'streak_14_days',
      title: '14-Day Fortnight',
      description: 'Proven habit consolidation across 14 consecutive study days.',
      icon: Icons.shield_rounded,
      color: Color(0xFF8B5CF6),
      category: BadgeCategory.streak,
      criteriaText: '14-day study streak',
    ),
    SynapseBadge(
      id: 'streak_30_days',
      title: '30-Day Centurion',
      description: 'Permanent learning lifestyle verified over 30 continuous days.',
      icon: Icons.diamond_rounded,
      color: Color(0xFF06B6D4),
      category: BadgeCategory.streak,
      criteriaText: '30-day study streak',
    ),
    SynapseBadge(
      id: 'midnight_scholar',
      title: 'Midnight Scholar',
      description: 'Completed a focused study session between 12:00 AM – 4:00 AM.',
      icon: Icons.nightlight_round,
      color: Color(0xFF7C4DFF),
      category: BadgeCategory.circadian,
      criteriaText: 'Study between 12 AM – 4 AM',
    ),
    SynapseBadge(
      id: 'dawn_consolidation',
      title: 'Dawn Consolidation',
      description: 'Completed a morning review session between 5:00 AM – 8:00 AM.',
      icon: Icons.wb_sunny_rounded,
      color: Color(0xFFF59E0B),
      category: BadgeCategory.circadian,
      criteriaText: 'Study between 5 AM – 8 AM',
    ),
    SynapseBadge(
      id: 'polymath_3_packs',
      title: 'Polymath (3 Packs)',
      description: 'Actively studying and reviewing cards across 3 packs simultaneously.',
      icon: Icons.auto_awesome_mosaic_rounded,
      color: Color(0xFF10B981),
      category: BadgeCategory.multidisciplinary,
      criteriaText: '3 packs actively in review',
    ),
    SynapseBadge(
      id: 'flawless_review',
      title: 'Flawless Review',
      description: 'Completed a review session of 15+ cards with 100% perfect accuracy.',
      icon: Icons.track_changes_rounded,
      color: Color(0xFF10B981),
      category: BadgeCategory.accuracy,
      criteriaText: '100% correct in 15+ reviews',
    ),
    SynapseBadge(
      id: 'valedictorian',
      title: 'Valedictorian',
      description: 'Scored 90% or higher on a timed Timed Mock Exam.',
      icon: Icons.psychology_alt_rounded,
      color: Color(0xFF3B82F6),
      category: BadgeCategory.accuracy,
      criteriaText: 'Score ≥90% on Mock Exam',
    ),
    SynapseBadge(
      id: 'curriculum_architect',
      title: 'Curriculum Architect',
      description: 'Created and exported a custom Knowledge Pack in the Pack Studio.',
      icon: Icons.design_services_rounded,
      color: Color(0xFF10B981),
      category: BadgeCategory.creator,
      criteriaText: 'Export 1 Pack from Studio',
    ),
  ];

  // ─── Pack-Specific Subject Accreditation Badges ────────────────────────────
  static const List<SynapseBadge> packBadges = [
    // C Programming Badges
    SynapseBadge(
      id: 'c_syntax_initiate',
      packId: 'c_programming',
      title: 'C Syntax Initiate',
      description: 'Mastered foundational C syntax, standard I/O, variables, and operators (Modules 1–3).',
      icon: Icons.terminal_rounded,
      color: Color(0xFF3B82F6),
      category: BadgeCategory.packSpecific,
      criteriaText: 'Pass C Modules 1–3',
    ),
    SynapseBadge(
      id: 'c_pointer_adept',
      packId: 'c_programming',
      title: 'Memory & Pointer Adept',
      description: 'Mastered pointers, pointer arithmetic, memory addresses, and malloc/free allocation (Module 11).',
      icon: Icons.memory_rounded,
      color: Color(0xFF818CF8),
      category: BadgeCategory.packSpecific,
      criteriaText: 'Master C Module 11 (Pointers)',
    ),
    SynapseBadge(
      id: 'c_diagnostic_specialist',
      packId: 'c_programming',
      title: 'Diagnostic Specialist',
      description: 'Correctly resolved all Level-5 Expert Proof questions on undefined behavior and strict aliasing (Module 15).',
      icon: Icons.verified_user_rounded,
      color: Color(0xFFA855F7),
      category: BadgeCategory.packSpecific,
      criteriaText: 'Pass C Level-5 Proofs',
    ),
    SynapseBadge(
      id: 'c_systems_sovereign',
      packId: 'c_programming',
      title: 'C Systems Sovereign',
      description: 'Burned 100% of all 101 questions in the complete C Programming curriculum.',
      icon: Icons.workspace_premium_rounded,
      color: Color(0xFFF59E0B),
      category: BadgeCategory.packSpecific,
      criteriaText: 'Burn 100% of C Pack (101 Qs)',
    ),

    // HTML Fundamentals Badges
    SynapseBadge(
      id: 'html_tag_architect',
      packId: 'html_fundamentals',
      title: 'HTML Tag Architect',
      description: 'Mastered foundational HTML5 document structure, meta tags, and text formatting.',
      icon: Icons.code_rounded,
      color: Color(0xFFE44D26),
      category: BadgeCategory.packSpecific,
      criteriaText: 'Master HTML5 Structure',
    ),
    SynapseBadge(
      id: 'html_a11y_champion',
      packId: 'html_fundamentals',
      title: 'Accessibility Champion',
      description: 'Mastered modern HTML5 semantic elements, ARIA attributes, and accessible forms.',
      icon: Icons.accessibility_new_rounded,
      color: Color(0xFFF97316),
      category: BadgeCategory.packSpecific,
      criteriaText: 'Master HTML5 Semantics & ARIA',
    ),
    SynapseBadge(
      id: 'html_semantics_sovereign',
      packId: 'html_fundamentals',
      title: 'Web Semantics Sovereign',
      description: 'Burned 100% of all questions in the HTML Fundamentals curriculum.',
      icon: Icons.public_rounded,
      color: Color(0xFFF59E0B),
      category: BadgeCategory.packSpecific,
      criteriaText: 'Burn 100% of HTML Pack',
    ),
  ];

  static List<SynapseBadge> get allBadges => [...globalBadges, ...packBadges];

  /// Evaluates which badges are unlocked for the current user.
  static Future<Set<String>> evaluateUnlockedBadges({
    required AppDatabase db,
    required SettingsService settings,
  }) async {
    final unlocked = <String>{};

    final allProgress = await db.select(db.userProgress).get();
    final allPacks = await db.select(db.packs).get();
    final allQuestions = await db.select(db.questions).get();

    final learnedCount = allProgress.where((p) => p.isLessonCompleted).length;

    // First Spark
    if (learnedCount >= 1) unlocked.add('first_spark');

    // Count fully burned packs
    int fullyBurnedPacks = 0;
    for (final pack in allPacks) {
      final packQuestions = allQuestions.where((q) => q.packId == pack.packId).toList();
      if (packQuestions.isEmpty) continue;
      final burnedInPack = packQuestions.where((q) {
        final prog = allProgress.where((p) => p.questionId == q.id).firstOrNull;
        return prog != null && prog.srsStage == 8;
      }).length;

      if (burnedInPack == packQuestions.length && packQuestions.isNotEmpty) {
        fullyBurnedPacks++;
        if (pack.packId == 'c_programming') unlocked.add('c_systems_sovereign');
        if (pack.packId == 'html_fundamentals') unlocked.add('html_semantics_sovereign');
      }

      // Check C module-specific badges
      if (pack.packId == 'c_programming') {
        final mod1To3 = packQuestions.where((q) => q.moduleNumber <= 3).toList();
        final mod1To3Learned = mod1To3.where((q) {
          final p = allProgress.where((item) => item.questionId == q.id).firstOrNull;
          return p != null && p.isLessonCompleted;
        }).length;
        if (mod1To3.isNotEmpty && mod1To3Learned == mod1To3.length) {
          unlocked.add('c_syntax_initiate');
        }

        final mod11 = packQuestions.where((q) => q.moduleNumber == 11).toList();
        final mod11Mastered = mod11.where((q) {
          final p = allProgress.where((item) => item.questionId == q.id).firstOrNull;
          return p != null && p.srsStage >= 5;
        }).length;
        if (mod11.isNotEmpty && mod11Mastered >= mod11.length ~/ 2) {
          unlocked.add('c_pointer_adept');
        }

        final mod15 = packQuestions.where((q) => q.moduleNumber == 15).toList();
        final mod15Passed = mod15.where((q) {
          final p = allProgress.where((item) => item.questionId == q.id).firstOrNull;
          return p != null && p.srsStage >= 1;
        }).length;
        if (mod15.isNotEmpty && mod15Passed == mod15.length) {
          unlocked.add('c_diagnostic_specialist');
        }
      }

      // Check HTML module badges
      if (pack.packId == 'html_fundamentals') {
        final htmlMod1 = packQuestions.where((q) => q.moduleNumber == 1).toList();
        final htmlMod1Passed = htmlMod1.where((q) {
          final p = allProgress.where((item) => item.questionId == q.id).firstOrNull;
          return p != null && p.isLessonCompleted;
        }).length;
        if (htmlMod1.isNotEmpty && htmlMod1Passed == htmlMod1.length) {
          unlocked.add('html_tag_architect');
        }

        final htmlA11y = packQuestions.where((q) => q.moduleNumber >= 2).toList();
        final htmlA11yMastered = htmlA11y.where((q) {
          final p = allProgress.where((item) => item.questionId == q.id).firstOrNull;
          return p != null && p.srsStage >= 5;
        }).length;
        if (htmlA11y.isNotEmpty && htmlA11yMastered >= htmlA11y.length ~/ 2) {
          unlocked.add('html_a11y_champion');
        }
      }
    }

    if (fullyBurnedPacks >= 1) unlocked.add('single_pack_burn');
    if (fullyBurnedPacks >= 3) unlocked.add('triple_burn');
    if (fullyBurnedPacks >= 5) unlocked.add('pantheon_mastery');

    // Streaks
    final streak = settings.streakDays;
    if (streak >= 3) unlocked.add('streak_3_days');
    if (streak >= 5) unlocked.add('streak_5_days');
    if (streak >= 14) unlocked.add('streak_14_days');
    if (streak >= 30) unlocked.add('streak_30_days');

    // Circadian
    if (settings.hasStudiedMidnight) unlocked.add('midnight_scholar');
    if (settings.hasStudiedDawn) unlocked.add('dawn_consolidation');

    // Multi-pack active
    final activePackIds = <String>{};
    for (final p in allProgress) {
      if (p.isLessonCompleted) {
        final q = allQuestions.where((item) => item.id == p.questionId).firstOrNull;
        if (q != null) activePackIds.add(q.packId);
      }
    }

    if (activePackIds.length >= 3) unlocked.add('polymath_3_packs');

    // Accuracy
    if (settings.hasFlawlessReview) unlocked.add('flawless_review');
    if (settings.hasPassedValedictorian) unlocked.add('valedictorian');
    if (settings.hasExportedPackFromStudio) unlocked.add('curriculum_architect');

    return unlocked;
  }
}
