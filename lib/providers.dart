import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'db/app_database.dart';
import 'services/settings_service.dart';
import 'services/pack_service.dart';

// ─── Database ─────────────────────────────────────────────────────────────────
final dbProvider = Provider<AppDatabase>((ref) {
  final db = AppDatabase();
  ref.onDispose(db.close);
  return db;
});

// ─── Settings ─────────────────────────────────────────────────────────────────
final settingsServiceProvider = Provider<SettingsService>((ref) {
  throw UnimplementedError('Override in ProviderScope');
});

// ─── Pack Service ─────────────────────────────────────────────────────────────
final packServiceProvider = Provider<PackService>((ref) {
  final db = ref.watch(dbProvider);
  return PackService(db);
});

// ─── Installed Packs Stream ───────────────────────────────────────────────────
final installedPacksProvider = StreamProvider((ref) {
  final db = ref.watch(dbProvider);
  return db.packDao.watchInstalledPacks();
});

// ─── Active Pack ──────────────────────────────────────────────────────────────
final activePackIdProvider = StateProvider<String?>((ref) {
  final settings = ref.watch(settingsServiceProvider);
  return settings.activePackId;
});