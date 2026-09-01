import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

class SettingsService {
  SettingsService(this._prefs);
  final SharedPreferences _prefs;

  static const _kDailyLessonCap = 'daily_lesson_cap';
  static const _kApprenticeCap = 'apprentice_cap';
  static const _kThemeMode = 'theme_mode'; // 'dark' | 'light'
  static const _kActivePackId = 'active_pack_id';
  static const _kDevModeEnabled = 'dev_mode_enabled';

  // Scholar Profile Keys
  static const _kUserName = 'user_name';
  static const _kUserTitle = 'user_title';
  static const _kInstitution = 'user_institution';
  static const _kHasCertificateConsent = 'has_certificate_consent';
  static const _kStreakDays = 'streak_days';
  static const _kLastStudyDate = 'last_study_date';
  static const _kTotalReviewsCount = 'total_reviews_count';

  // Telemetry & Badge Milestone Triggers
  static const _kHasStudiedMidnight = 'has_studied_midnight';
  static const _kHasStudiedDawn = 'has_studied_dawn';
  static const _kHasFlawlessReview = 'has_flawless_review';
  static const _kHasPassedValedictorian = 'has_passed_valedictorian';
  static const _kHasPassedLevel5 = 'has_passed_level_5';
  static const _kHasDoneCramMarathon = 'has_done_cram_marathon';
  static const _kHasExportedPack = 'has_exported_pack';
  static const _kHasSubmittedGitHub = 'has_submitted_github';
  static const _kHasOfficialPack = 'has_official_pack';
  static const _kCertificatesCount = 'certificates_count';

  int get dailyLessonCap => _prefs.getInt(_kDailyLessonCap) ?? 10;
  Future<void> setDailyLessonCap(int v) => _prefs.setInt(_kDailyLessonCap, v);

  int get apprenticeCap => _prefs.getInt(_kApprenticeCap) ?? 100;
  Future<void> setApprenticeCap(int v) => _prefs.setInt(_kApprenticeCap, v);

  String get themeMode => _prefs.getString(_kThemeMode) ?? 'dark';
  Future<void> setThemeMode(String v) => _prefs.setString(_kThemeMode, v);

  String? get activePackId => _prefs.getString(_kActivePackId);
  Future<void> setActivePackId(String? v) =>
      v != null ? _prefs.setString(_kActivePackId, v) : _prefs.remove(_kActivePackId);

  // Developer Mode (Default true in debug mode, false in release mode unless explicitly enabled)
  bool get isDevMode => kDebugMode || (_prefs.getBool(_kDevModeEnabled) ?? false);
  bool get isDevModeOverride => _prefs.getBool(_kDevModeEnabled) ?? false;
  Future<void> setDevMode(bool enabled) => _prefs.setBool(_kDevModeEnabled, enabled);

  // Profile Getters / Setters
  String get userName => _prefs.getString(_kUserName) ?? 'Scholar';
  Future<void> setUserName(String v) => _prefs.setString(_kUserName, v);

  String get userTitle => _prefs.getString(_kUserTitle) ?? 'Spaced Repetition Practitioner';
  Future<void> setUserTitle(String v) => _prefs.setString(_kUserTitle, v);

  String get institution => _prefs.getString(_kInstitution) ?? 'Synapse Academic Institute';
  Future<void> setInstitution(String v) => _prefs.setString(_kInstitution, v);

  bool get hasCertificateConsent => _prefs.getBool(_kHasCertificateConsent) ?? false;
  Future<void> setCertificateConsent(bool v) => _prefs.setBool(_kHasCertificateConsent, v);

  int get streakDays => _prefs.getInt(_kStreakDays) ?? 1;
  Future<void> setStreakDays(int v) => _prefs.setInt(_kStreakDays, v);

  int get totalReviewsCount => _prefs.getInt(_kTotalReviewsCount) ?? 0;
  Future<void> incrementReviewsCount() =>
      _prefs.setInt(_kTotalReviewsCount, totalReviewsCount + 1);

  int get certificatesCount => _prefs.getInt(_kCertificatesCount) ?? 0;
  bool get hasUnlockedCertificate => certificatesCount > 0;
  Future<void> addCertificate() =>
      _prefs.setInt(_kCertificatesCount, certificatesCount + 1);

  bool get hasStudiedMidnight => _prefs.getBool(_kHasStudiedMidnight) ?? false;
  Future<void> setStudiedMidnight() => _prefs.setBool(_kHasStudiedMidnight, true);

  bool get hasStudiedDawn => _prefs.getBool(_kHasStudiedDawn) ?? false;
  Future<void> setStudiedDawn() => _prefs.setBool(_kHasStudiedDawn, true);

  bool get hasFlawlessReview => _prefs.getBool(_kHasFlawlessReview) ?? false;
  Future<void> setFlawlessReview() => _prefs.setBool(_kHasFlawlessReview, true);

  bool get hasPassedValedictorian => _prefs.getBool(_kHasPassedValedictorian) ?? false;
  Future<void> setValedictorian() => _prefs.setBool(_kHasPassedValedictorian, true);

  bool get hasPassedLevel5 => _prefs.getBool(_kHasPassedLevel5) ?? false;
  Future<void> setPassedLevel5() => _prefs.setBool(_kHasPassedLevel5, true);

  bool get hasDoneCramMarathon => _prefs.getBool(_kHasDoneCramMarathon) ?? false;
  Future<void> setDoneCramMarathon() => _prefs.setBool(_kHasDoneCramMarathon, true);

  bool get hasExportedPackFromStudio => _prefs.getBool(_kHasExportedPack) ?? false;
  Future<void> setExportedPack() => _prefs.setBool(_kHasExportedPack, true);

  bool get hasSubmittedToGitHub => _prefs.getBool(_kHasSubmittedGitHub) ?? false;
  Future<void> setSubmittedToGitHub() => _prefs.setBool(_kHasSubmittedGitHub, true);

  bool get hasOfficialPackIntegration => _prefs.getBool(_kHasOfficialPack) ?? false;
  Future<void> setOfficialPackIntegration() => _prefs.setBool(_kHasOfficialPack, true);

  // Mock Exam Score tracking per packId
  int getMockExamScore(String packId) => _prefs.getInt('mock_exam_score_$packId') ?? -1;
  Future<void> setMockExamScore(String packId, int pct) async {
    final cur = getMockExamScore(packId);
    if (pct > cur) {
      await _prefs.setInt('mock_exam_score_$packId', pct);
    }
  }

  /// Records a study event to update streaks and circadian achievements.
  Future<void> recordStudyEvent() async {
    final now = DateTime.now();
    final today = '${now.year}-${now.month.toString().padLeft(2, '0')}-${now.day.toString().padLeft(2, '0')}';
    final lastDate = _prefs.getString(_kLastStudyDate);

    if (lastDate == null) {
      await _prefs.setString(_kLastStudyDate, today);
      await _prefs.setInt(_kStreakDays, 1);
    } else if (lastDate != today) {
      final lastParsed = DateTime.tryParse(lastDate);
      if (lastParsed != null) {
        final diff = now.difference(lastParsed).inDays;
        if (diff == 1) {
          await _prefs.setInt(_kStreakDays, streakDays + 1);
        } else if (diff > 1) {
          await _prefs.setInt(_kStreakDays, 1);
        }
      }
      await _prefs.setString(_kLastStudyDate, today);
    }

    // Check circadian hours
    if (now.hour >= 0 && now.hour < 4) {
      await setStudiedMidnight();
    } else if (now.hour >= 5 && now.hour < 8) {
      await setStudiedDawn();
    }
  }
}