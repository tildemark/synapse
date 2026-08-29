import 'package:flutter_test/flutter_test.dart';
import 'package:drift/native.dart';
import 'package:synapse/db/app_database.dart';
import 'package:synapse/services/app_time.dart';

void main() {
  late AppDatabase db;

  setUp(() {
    db = AppDatabase(NativeDatabase.memory());
    AppTime.reset();
  });

  tearDown(() async {
    await db.close();
  });

  group('ProgressDao SRS Logic', () {
    test('completLesson sets stage to 1 (Apprentice 1) with 4h review time', () async {
      const qId = 101;
      final fixedTime = DateTime(2026, 8, 30, 10, 0);
      AppTime.mockNow(fixedTime);

      await db.progressDao.completLesson(qId);

      final row = await (db.select(db.userProgress)..where((p) => p.questionId.equals(qId))).getSingle();
      expect(row.srsStage, 1);
      expect(row.isLessonCompleted, isTrue);
      expect(row.mistakeCount, 0);
      expect(row.nextReviewTime, fixedTime.add(const Duration(hours: 4)));
    });

    test('recordAnswer with correct answer advances stage by +1', () async {
      const qId = 102;
      final t0 = DateTime(2026, 8, 30, 10, 0);
      AppTime.mockNow(t0);
      await db.progressDao.completLesson(qId); // Stage 1

      // Advance to Stage 2 (Apprentice 2, 8h)
      await db.progressDao.recordAnswer(qId, correct: true);
      var row = await (db.select(db.userProgress)..where((p) => p.questionId.equals(qId))).getSingle();
      expect(row.srsStage, 2);
      expect(row.nextReviewTime, t0.add(const Duration(hours: 8)));

      // Advance to Stage 3 (Apprentice 3, 24h)
      await db.progressDao.recordAnswer(qId, correct: true);
      row = await (db.select(db.userProgress)..where((p) => p.questionId.equals(qId))).getSingle();
      expect(row.srsStage, 3);
      expect(row.nextReviewTime, t0.add(const Duration(hours: 24)));
    });

    test('recordAnswer with incorrect answer demotes by 2 stages (clamped at stage 1)', () async {
      const qId = 103;
      await db.progressDao.completLesson(qId); // Stage 1
      await db.progressDao.recordAnswer(qId, correct: true); // Stage 2
      await db.progressDao.recordAnswer(qId, correct: true); // Stage 3

      // Incorrect answer from Stage 3 -> Stage 1
      await db.progressDao.recordAnswer(qId, correct: false);
      var row = await (db.select(db.userProgress)..where((p) => p.questionId.equals(qId))).getSingle();
      expect(row.srsStage, 1);
      expect(row.mistakeCount, 1);

      // Another incorrect answer from Stage 1 stays at Stage 1 (lesson was completed)
      await db.progressDao.recordAnswer(qId, correct: false);
      row = await (db.select(db.userProgress)..where((p) => p.questionId.equals(qId))).getSingle();
      expect(row.srsStage, 1);
      expect(row.mistakeCount, 2);
    });

    test('Stage 8 (Burned) has null nextReviewTime', () async {
      const qId = 104;
      await db.progressDao.completLesson(qId); // 1
      for (int i = 0; i < 7; i++) {
        await db.progressDao.recordAnswer(qId, correct: true); // 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
      }

      final row = await (db.select(db.userProgress)..where((p) => p.questionId.equals(qId))).getSingle();
      expect(row.srsStage, 8);
      expect(row.nextReviewTime, isNull);
    });
  });
}
