import 'dart:convert';
import 'package:flutter/services.dart';
import '../db/app_database.dart';

/// Loads Knowledge Packs bundled in assets/packs/ and installs them into the DB.
class PackService {
  PackService(this._db);
  final AppDatabase _db;

  static const _bundledPacks = [
    'assets/packs/pack_c_programming.json',
  ];

  /// Returns list of asset paths for all bundled packs.
  List<String> get bundledPackPaths => _bundledPacks;

  /// Install a bundled pack by asset path if not already installed, or update if newer version/count.
  Future<void> installIfAbsent(String assetPath) async {
    try {
      final raw = await rootBundle.loadString(assetPath);
      final manifest = json.decode(raw) as Map<String, dynamic>;
      final packId = manifest['packId'] as String;
      final version = (manifest['version'] as int?) ?? 1;
      final questions = (manifest['questions'] as List<dynamic>?) ?? [];
      
      final currentPack = await (_db.select(_db.packs)..where((p) => p.packId.equals(packId))).getSingleOrNull();
      if (currentPack == null || currentPack.version < version || currentPack.questionCount < questions.length) {
        await _db.packDao.installPack(manifest);
      }
    } catch (e) {
      // Silently skip missing or malformed packs in production
    }
  }

  /// Boot: ensure all bundled packs are installed.
  Future<void> ensureBundledPacksInstalled() async {
    for (final path in _bundledPacks) {
      await installIfAbsent(path);
    }
  }
}