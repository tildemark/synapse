import 'dart:io';
import 'package:drift/drift.dart';
import 'package:drift/native.dart';
import 'package:path_provider/path_provider.dart';
import 'package:path/path.dart' as p;

import 'daos/progress_dao.dart';
import 'daos/pack_dao.dart';

part 'app_database.g.dart';

// ─────────────────────────────────────────────────────────────────────────────
// Tables
// ─────────────────────────────────────────────────────────────────────────────

/// Installed Knowledge Packs (subjects).
class Packs extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get packId => text().unique()();
  TextColumn get name => text()();
  TextColumn get subject => text()();
  TextColumn get iconName => text().withDefault(const Constant('science'))();
  TextColumn get color => text().withDefault(const Constant('#6C63FF'))();
  IntColumn get version => integer().withDefault(const Constant(1))();
  IntColumn get questionCount => integer().withDefault(const Constant(0))();
  DateTimeColumn get installedAt => dateTime().withDefault(currentDateAndTime)();
}

/// Questions for any installed pack.
class Questions extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get packId => text()();
  TextColumn get question => text()();
  TextColumn get choiceA => text()();
  TextColumn get choiceB => text()();
  TextColumn get choiceC => text()();
  TextColumn get choiceD => text()();
  TextColumn get correctAnswer => text()(); // 'A', 'B', 'C', or 'D'
  TextColumn get explanation => text()();
  IntColumn get difficultyLevel => integer().withDefault(const Constant(1))();
  IntColumn get moduleNumber => integer().withDefault(const Constant(1))();
  TextColumn get moduleName => text().withDefault(const Constant('General'))();
}

/// Per-question SRS progress for the current user.
class UserProgress extends Table {
  IntColumn get id => integer().autoIncrement()();
  IntColumn get questionId => integer().unique()();
  IntColumn get srsStage => integer().withDefault(const Constant(0))();
  DateTimeColumn get nextReviewTime => dateTime().nullable()();
  IntColumn get mistakeCount => integer().withDefault(const Constant(0))();
  BoolColumn get isLessonCompleted => boolean().withDefault(const Constant(false))();
  DateTimeColumn get lastReviewedAt => dateTime().nullable()();
}

/// Tags (module names, topic labels) for filtering.
class Tags extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get name => text().unique()();
}

/// Many-to-many: Question ↔ Tags.
class QuestionTags extends Table {
  IntColumn get questionId => integer()();
  IntColumn get tagId => integer()();

  @override
  Set<Column> get primaryKey => {questionId, tagId};
}

// ─────────────────────────────────────────────────────────────────────────────
// Database
// ─────────────────────────────────────────────────────────────────────────────

@DriftDatabase(
  tables: [Packs, Questions, UserProgress, Tags, QuestionTags],
  daos: [ProgressDao, PackDao],
)
class AppDatabase extends _$AppDatabase {
  AppDatabase([QueryExecutor? executor]) : super(executor ?? _openConnection());

  @override
  int get schemaVersion => 1;

  static QueryExecutor _openConnection() {
    return LazyDatabase(() async {
      final dbFolder = await getApplicationDocumentsDirectory();
      final file = File(p.join(dbFolder.path, 'synapse.sqlite'));
      return NativeDatabase.createInBackground(file);
    });
  }
}