import 'package:drift/drift.dart';
import '../app_database.dart';
import '../../services/app_time.dart';

part 'progress_dao.g.dart';

@DriftAccessor(tables: [UserProgress, Questions])
class ProgressDao extends DatabaseAccessor<AppDatabase> with _$ProgressDaoMixin {
  ProgressDao(super.db);

  // ─── SRS Review Intervals (in hours) ─────────────────────────────────────
  static const _intervals = [0, 4, 8, 24, 48, 168, 336, 720, 0]; // stage 0..8

  /// Fetch all items currently due for review.
  Future<List<UserProgressData>> getDueReviews() async {
    final now = AppTime.now();
    return (select(userProgress)
          ..where((p) =>
              p.isLessonCompleted.equals(true) &
              p.nextReviewTime.isSmallerOrEqualValue(now)))
        .get();
  }

  /// Advance or demote a question after a review answer.
  Future<void> recordAnswer(int questionId, {required bool correct}) async {
    final now = AppTime.now();
    final existing = await (select(userProgress)
          ..where((p) => p.questionId.equals(questionId)))
        .getSingleOrNull();

    if (existing == null) return;

    int newStage;
    if (correct) {
      newStage = (existing.srsStage + 1).clamp(0, 8);
    } else {
      // On wrong answer demote by 2 stages (min stage 1 if lesson completed)
      newStage = (existing.srsStage - 2).clamp(existing.isLessonCompleted ? 1 : 0, 8);
    }

    final intervalHours = newStage < _intervals.length ? _intervals[newStage] : 0;
    final nextReview = intervalHours > 0
        ? now.add(Duration(hours: intervalHours))
        : null;

    await (update(userProgress)..where((p) => p.questionId.equals(questionId))).write(
      UserProgressCompanion(
        srsStage: Value(newStage),
        nextReviewTime: Value(nextReview),
        lastReviewedAt: Value(now),
        mistakeCount: correct
            ? Value(existing.mistakeCount)
            : Value(existing.mistakeCount + 1),
      ),
    );
  }

  /// Mark a question as lesson-completed (moves to Apprentice 1).
  Future<void> completLesson(int questionId) async {
    final now = AppTime.now();
    await into(userProgress).insertOnConflictUpdate(
      UserProgressCompanion(
        questionId: Value(questionId),
        srsStage: const Value(1),
        isLessonCompleted: const Value(true),
        mistakeCount: const Value(0),
        nextReviewTime: Value(now.add(const Duration(hours: 4))),
        lastReviewedAt: Value(now),
      ),
    );
  }

  /// Initialise a stage-0 row for a question if not already tracked.
  Future<void> initProgressIfAbsent(int questionId) async {
    await into(userProgress).insert(
      UserProgressCompanion(
        questionId: Value(questionId),
        srsStage: const Value(0),
        mistakeCount: const Value(0),
        isLessonCompleted: const Value(false),
      ),
      mode: InsertMode.insertOrIgnore,
    );
  }

  /// Returns questions available for lessons (Stage 0) for a given pack.
  Future<List<Question>> getAvailableForLessons(String packId, {int limit = 10}) async {
    final allQ = await (select(db.questions)..where((q) => q.packId.equals(packId))).get();
    final allP = await select(userProgress).get();
    final stageByQid = {for (final p in allP) p.questionId: p.srsStage};

    return allQ
        .where((q) => (stageByQid[q.id] ?? 0) == 0)
        .take(limit)
        .toList();
  }

  /// SRS stage count breakdown for a pack.
  Future<SrsStageCounts> getStageCounts(String packId) async {
    final allQ = await (select(db.questions)..where((q) => q.packId.equals(packId))).get();
    final allP = await select(userProgress).get();
    final stageByQid = {for (final p in allP) p.questionId: p.srsStage};

    int available = 0, apprentice = 0, guru = 0, master = 0, burned = 0;
    for (final q in allQ) {
      final s = stageByQid[q.id] ?? 0;
      if (s == 0) { available++; }
      else if (s >= 1 && s <= 4) { apprentice++; }
      else if (s == 5 || s == 6) { guru++; }
      else if (s == 7) { master++; }
      else if (s == 8) { burned++; }
    }
    return SrsStageCounts(
      available: available,
      apprentice: apprentice,
      guru: guru,
      master: master,
      burned: burned,
    );
  }

  /// Dev tool: fast-forward N questions to Apprentice 1.
  Future<int> promoteToApprentice(String packId, {int? limit}) async {
    final available = await getAvailableForLessons(packId, limit: limit ?? 9999);
    int promoted = 0;
    for (final q in available) {
      if (limit != null && promoted >= limit) break;
      await completLesson(q.id);
      promoted++;
    }
    return promoted;
  }

  /// Dev tool: pass all due reviews correctly.
  Future<int> answerAllDueCorrectly() async {
    final due = await getDueReviews();
    for (final p in due) {
      await recordAnswer(p.questionId, correct: true);
    }
    return due.length;
  }

  /// Dev tool: make all reviews due now.
  Future<int> makeAllDueNow(String packId) async {
    final allQ = await (select(db.questions)..where((q) => q.packId.equals(packId))).get();
    final ids = allQ.map((q) => q.id).toList();
    final now = AppTime.now().subtract(const Duration(minutes: 1));
    await (update(userProgress)..where((p) => p.questionId.isIn(ids))).write(
      UserProgressCompanion(nextReviewTime: Value(now)),
    );
    return ids.length;
  }

  Stream<List<UserProgressData>> watchProgress() => select(userProgress).watch();
}

class SrsStageCounts {
  const SrsStageCounts({
    required this.available,
    required this.apprentice,
    required this.guru,
    required this.master,
    required this.burned,
  });
  final int available;
  final int apprentice;
  final int guru;
  final int master;
  final int burned;

  int get total => available + apprentice + guru + master + burned;
  int get learnedTotal => apprentice + guru + master + burned;
  int get masteredTotal => guru + master + burned;
  double get masteryRatio => total > 0 ? masteredTotal / total : 0.0;
}