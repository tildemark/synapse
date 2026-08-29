import 'package:shared_preferences/shared_preferences.dart';

class SettingsService {
  SettingsService(this._prefs);
  final SharedPreferences _prefs;

  static const _kDailyLessonCap = 'daily_lesson_cap';
  static const _kApprenticeCap = 'apprentice_cap';
  static const _kThemeMode = 'theme_mode'; // 'dark' | 'light'
  static const _kActivePackId = 'active_pack_id';

  int get dailyLessonCap => _prefs.getInt(_kDailyLessonCap) ?? 10;
  Future<void> setDailyLessonCap(int v) => _prefs.setInt(_kDailyLessonCap, v);

  int get apprenticeCap => _prefs.getInt(_kApprenticeCap) ?? 100;
  Future<void> setApprenticeCap(int v) => _prefs.setInt(_kApprenticeCap, v);

  String get themeMode => _prefs.getString(_kThemeMode) ?? 'dark';
  Future<void> setThemeMode(String v) => _prefs.setString(_kThemeMode, v);

  String? get activePackId => _prefs.getString(_kActivePackId);
  Future<void> setActivePackId(String? v) =>
      v != null ? _prefs.setString(_kActivePackId, v) : _prefs.remove(_kActivePackId);
}