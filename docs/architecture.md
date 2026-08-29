# Synapse Architecture

## Overview

Synapse is an **offline-first, multi-subject spaced repetition learning platform** built with Flutter. Its core premise is that the SRS engine and UI shell are completely **subject-agnostic** — any domain of knowledge can be loaded as a self-contained **Knowledge Pack**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Flutter (Dart) — Android, iOS, Windows |
| State Management | Riverpod 2.x (`flutter_riverpod`, `riverpod_annotation`) |
| Database | Drift (SQLite via `drift_flutter`, `sqlite3_flutter_libs`) |
| Code Generation | `drift_dev` + `build_runner` + `riverpod_generator` |
| Persistence (Settings) | `shared_preferences` |
| File I/O | `path_provider`, `path` |

---

## Project Structure

```
lib/
├── main.dart                        # App entry point, boot sequence, ProviderScope
├── providers.dart                   # Top-level Riverpod providers
├── db/
│   ├── app_database.dart            # Drift @DriftDatabase declaration + connection
│   ├── app_database.g.dart          # Generated
│   └── daos/
│       ├── progress_dao.dart        # SRS logic: lessons, reviews, stage counts
│       ├── progress_dao.g.dart      # Generated
│       ├── pack_dao.dart            # Pack install / uninstall
│       └── pack_dao.g.dart          # Generated
├── services/
│   ├── app_time.dart                # Centralized time source (mockable for tests)
│   ├── pack_service.dart            # Loads bundled JSON packs, calls pack_dao
│   └── settings_service.dart       # SharedPreferences wrapper (caps, theme, etc.)
├── theme/
│   └── app_theme.dart               # ThemeData + SynapseColors brand palette
├── features/
│   ├── home/
│   │   └── home_screen.dart         # Dashboard: installed packs, global stats
│   ├── lessons/
│   │   └── lessons_screen.dart      # Lesson flow: card → answer → explanation
│   ├── reviews/
│   │   └── reviews_screen.dart      # Review queue: SRS grading loop
│   └── packs/
│       ├── pack_browser_screen.dart # Browse & install/uninstall Knowledge Packs
│       └── pack_detail_screen.dart  # Per-pack: SRS donut, stage grid, action CTAs
assets/
└── packs/
    └── pack_c_programming.json      # C Programming Knowledge Pack seed (15 Qs)
docs/
├── architecture.md                  # This file
└── agents.md                        # AI agent onboarding + continuation guide
.github/
└── workflows/
    └── release.yml                  # CI/CD: Android APK + Windows ZIP on git tag
```

---

## Database Schema (Drift)

### `packs`
Installed Knowledge Pack metadata.

| Column | Type | Notes |
|--------|------|-------|
| `id` | INTEGER PK | autoincrement |
| `pack_id` | TEXT UNIQUE | e.g. `"c_programming"` |
| `name` | TEXT | Display name |
| `subject` | TEXT | Subject category |
| `icon_name` | TEXT | Maps to Material icon name |
| `color` | TEXT | Hex color e.g. `"#3B82F6"` |
| `version` | INTEGER | Pack version |
| `question_count` | INTEGER | Total questions in pack |
| `installed_at` | DATETIME | Auto-set on install |

### `questions`
All questions across all installed packs.

| Column | Type | Notes |
|--------|------|-------|
| `id` | INTEGER PK | autoincrement |
| `pack_id` | TEXT | FK → `packs.pack_id` |
| `question` | TEXT | Question text |
| `choice_a/b/c/d` | TEXT | Answer choices |
| `correct_answer` | TEXT | `"A"`, `"B"`, `"C"`, or `"D"` |
| `explanation` | TEXT | Shown after answering |
| `difficulty_level` | INTEGER | 1 (easy) → 5 (expert) |
| `module_number` | INTEGER | Topic grouping index |
| `module_name` | TEXT | Human-readable topic name |

### `user_progress`
Per-question SRS state for the current user.

| Column | Type | Notes |
|--------|------|-------|
| `id` | INTEGER PK | autoincrement |
| `question_id` | INTEGER UNIQUE | FK → `questions.id` |
| `srs_stage` | INTEGER | 0 (new) → 8 (burned) |
| `next_review_time` | DATETIME? | When item becomes due |
| `mistake_count` | INTEGER | Cumulative wrong answers |
| `is_lesson_completed` | BOOLEAN | `true` once first seen in lessons |
| `last_reviewed_at` | DATETIME? | Last interaction time |

### `tags` + `question_tags`
Many-to-many tag system for drill filtering (Phase 4).

---

## SRS Engine

### Stage Model (8 stages)

```
Stage 0  — Available    (not yet seen in lessons)
Stage 1  — Apprentice 1 → next review: +4h
Stage 2  — Apprentice 2 → next review: +8h
Stage 3  — Apprentice 3 → next review: +24h
Stage 4  — Apprentice 4 → next review: +48h
Stage 5  — Guru 1      → next review: +168h (1 week)
Stage 6  — Guru 2      → next review: +336h (2 weeks)
Stage 7  — Master      → next review: +720h (1 month)
Stage 8  — Burned      ♾ (no more reviews)
```

### Promotion / Demotion
- **Correct answer** → stage + 1 (capped at 8)
- **Wrong answer** → stage - 2 (capped at min 1 if lesson was completed, 0 otherwise)

### Lesson Flow
`completLesson(questionId)` promotes a question from Stage 0 → Stage 1 and sets `is_lesson_completed = true`.

### Key ProgressDao Methods
| Method | Purpose |
|--------|---------|
| `getDueReviews()` | All items where `next_review_time ≤ now` |
| `recordAnswer(id, correct)` | Apply SRS promotion/demotion |
| `completLesson(id)` | Stage 0 → Apprentice 1 |
| `getAvailableForLessons(packId, limit)` | Stage-0 items, respects daily cap |
| `getStageCounts(packId)` | Returns `SrsStageCounts` aggregate |
| `promoteToApprentice(packId, limit)` | Dev fast-forward: batch lesson-complete |
| `makeAllDueNow(packId)` | Dev tool: force all reviews due immediately |
| `answerAllDueCorrectly()` | Dev tool: pass all due reviews |

---

## Knowledge Pack System

### Pack JSON Schema

```jsonc
{
  "packId": "c_programming",       // Unique identifier (snake_case)
  "name": "C Programming",         // Display name
  "subject": "Computer Science",   // Category label
  "icon": "code",                  // Material Icons name
  "color": "#3B82F6",              // Hex brand color
  "version": 1,                    // Increment on content updates
  "modules": [
    { "number": 1, "name": "Basics & Syntax" },
    { "number": 2, "name": "Pointers & Memory" }
  ],
  "questions": [
    {
      "question": "Which of the following declares a pointer to int?",
      "a": "int ptr;",
      "b": "int *ptr;",
      "c": "pointer int ptr;",
      "d": "*int ptr;",
      "answer": "B",              // Capital letter: A/B/C/D
      "explanation": "int *ptr; declares ptr as a pointer to an integer.",
      "level": 1,                 // 1-5 difficulty
      "module": 2,                // Matches modules[].number
      "moduleName": "Pointers & Memory"
    }
  ]
}
```

### Adding a New Pack
1. Create `assets/packs/pack_<subject>.json` following the schema above.
2. Add the asset path to `lib/services/pack_service.dart` in `_bundledPacks`.
3. Add a `_PackMeta(...)` entry in `lib/features/packs/pack_browser_screen.dart`.
4. Run `flutter pub get` — no build_runner step needed (JSON is read at runtime).

---

## State Management (Riverpod)

### Top-level Providers (`lib/providers.dart`)

| Provider | Type | Purpose |
|----------|------|---------|
| `dbProvider` | `Provider<AppDatabase>` | Singleton DB instance |
| `settingsServiceProvider` | `Provider<SettingsService>` | Overridden in `ProviderScope` at boot |
| `packServiceProvider` | `Provider<PackService>` | Uses `dbProvider` |
| `installedPacksProvider` | `StreamProvider<List<Pack>>` | Live stream of installed packs |
| `activePackIdProvider` | `StateProvider<String?>` | Currently active pack |

### Boot Sequence (`main.dart`)
```
WidgetsFlutterBinding.ensureInitialized()
→ SharedPreferences.getInstance()
→ SettingsService(prefs)
→ AppDatabase()
→ PackService(db).ensureBundledPacksInstalled()    ← installs JSON packs if absent
→ runApp(ProviderScope(overrides: [settingsServiceProvider]))
```

---

## Theme / Brand

File: `lib/theme/app_theme.dart` → `buildSynapseTheme()`

### `SynapseColors` palette

| Constant | Hex | Usage |
|----------|-----|-------|
| `primary` | `#6C63FF` | Brand violet — buttons, accents |
| `secondary` | `#10B981` | Emerald — success, mastered |
| `apprentice` | `#EF5350` | Coral — active learning |
| `guru` | `#7C4DFF` | Purple — guru stage |
| `master` | `#1565C0` | Blue — master stage |
| `burned` | `#F59E0B` | Gold — burned stage |
| `surface` | `#0F0F1A` | Near-black background |
| `card` | `#1A1A2E` | Card background |

---

## CI/CD (`.github/workflows/release.yml`)

Triggered on `git push` of a `v*.*.*` tag.

### Jobs
1. **android** — `ubuntu-latest`: builds APK (`flutter build apk --release --split-per-abi`), uploads `synapse_v*.apk`
2. **windows** — `windows-latest`: builds Windows (`flutter build windows --release`), zips to `synapse_v*_windows_x64.zip`
3. **release** — downloads both artifacts, creates GitHub Release with auto-generated notes

### Triggering a Release
```bash
git tag v1.0.0
git push origin v1.0.0
```

---

## Planned Phases

| Phase | Feature | Status |
|-------|---------|--------|
| 1 | Flutter shell, SRS engine, DB schema | ✅ Done |
| 2 | Lessons + Reviews screens | ✅ Done |
| 3 | Pack Browser + Bundled Seed Packs (C & HTML) | ✅ Done |
| 4 | Cram Mode, Tag Drills, Module Mastery Panel | ✅ Done |
| 5 | Mock Exam (timed), Fast-Forward dev tools | ✅ Done |
| 6 | Settings screen, full CI/CD, landing page | ✅ Done |