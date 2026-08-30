import 'package:drift/drift.dart';
import '../app_database.dart';

part 'pack_dao.g.dart';

@DriftAccessor(tables: [Packs, Questions, Tags, QuestionTags, UserProgress])
class PackDao extends DatabaseAccessor<AppDatabase> with _$PackDaoMixin {
  PackDao(super.db);

  /// All installed packs.
  Future<List<Pack>> getInstalledPacks() => select(packs).get();

  /// Watch installed packs for live UI updates.
  Stream<List<Pack>> watchInstalledPacks() => select(packs).watch();

  /// Check if a pack is installed.
  Future<bool> isPackInstalled(String packId) async {
    final row = await (select(packs)..where((p) => p.packId.equals(packId))).getSingleOrNull();
    return row != null;
  }

  /// Install a pack from its decoded JSON manifest.
  Future<void> installPack(Map<String, dynamic> manifest) async {
    final packId = manifest['packId'] as String;
    final name = manifest['name'] as String;
    final subject = manifest['subject'] as String;
    final iconName = (manifest['icon'] as String?) ?? 'science';
    final color = (manifest['color'] as String?) ?? '#6C63FF';
    final version = (manifest['version'] as int?) ?? 1;
    final questions = manifest['questions'] as List<dynamic>;

    // Upsert pack row
    await into(packs).insertOnConflictUpdate(
      PacksCompanion.insert(
        packId: packId,
        name: name,
        subject: subject,
        iconName: Value(iconName),
        color: Value(color),
        version: Value(version),
        questionCount: Value(questions.length),
      ),
    );

    // Insert questions
    for (final q in questions) {
      final qMap = q as Map<String, dynamic>;
      await into(db.questions).insertOnConflictUpdate(
        QuestionsCompanion.insert(
          packId: packId,
          question: qMap['question'] as String,
          choiceA: qMap['a'] as String,
          choiceB: qMap['b'] as String,
          choiceC: qMap['c'] as String,
          choiceD: qMap['d'] as String,
          correctAnswer: qMap['answer'] as String,
          explanation: qMap['explanation'] as String,
          imageUrl: Value((qMap['imageUrl'] ?? qMap['image']) as String?),
          difficultyLevel: Value((qMap['level'] as int?) ?? 1),
          moduleNumber: Value((qMap['module'] as int?) ?? 1),
          moduleName: Value((qMap['moduleName'] as String?) ?? 'General'),
        ),
      );
    }
  }

  /// Uninstall a pack and its questions.
  Future<void> uninstallPack(String packId) async {
    // Remove questions
    await (delete(db.questions)..where((q) => q.packId.equals(packId))).go();
    // Remove pack
    await (delete(packs)..where((p) => p.packId.equals(packId))).go();
  }
}