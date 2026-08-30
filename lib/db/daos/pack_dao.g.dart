// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'pack_dao.dart';

// ignore_for_file: type=lint
mixin _$PackDaoMixin on DatabaseAccessor<AppDatabase> {
  $PacksTable get packs => attachedDatabase.packs;
  $QuestionsTable get questions => attachedDatabase.questions;
  $TagsTable get tags => attachedDatabase.tags;
  $QuestionTagsTable get questionTags => attachedDatabase.questionTags;
  $UserProgressTable get userProgress => attachedDatabase.userProgress;
  PackDaoManager get managers => PackDaoManager(this);
}

class PackDaoManager {
  final _$PackDaoMixin _db;
  PackDaoManager(this._db);
  $$PacksTableTableManager get packs =>
      $$PacksTableTableManager(_db.attachedDatabase, _db.packs);
  $$QuestionsTableTableManager get questions =>
      $$QuestionsTableTableManager(_db.attachedDatabase, _db.questions);
  $$TagsTableTableManager get tags =>
      $$TagsTableTableManager(_db.attachedDatabase, _db.tags);
  $$QuestionTagsTableTableManager get questionTags =>
      $$QuestionTagsTableTableManager(_db.attachedDatabase, _db.questionTags);
  $$UserProgressTableTableManager get userProgress =>
      $$UserProgressTableTableManager(_db.attachedDatabase, _db.userProgress);
}
