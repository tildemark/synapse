# Synapse — Agent Continuation Guide

This file gives an AI coding agent full context to continue development of the **Synapse** Flutter app without any prior conversation history. Read this entire file before touching any code.

---

## What Is Synapse?

Synapse is a **multi-subject spaced repetition system (SRS)** learning app — a spin-off of a previous app called "DPA Mastery". Users install **Knowledge Packs** (subject-specific question libraries) and master them through Lessons and Reviews using an 8-stage SRS model (Apprentice → Guru → Master → Burned).

Target platforms: **Android**, **Windows** (iOS future).

---

## Repository Root

```
C:\code\synapse\
```

---

## Key Files to Read First

Before making any changes, read these files in order:

1. `docs/architecture.md` — full DB schema, SRS model, provider map, pack JSON format
2. `lib/db/app_database.dart` — Drift table definitions
3. `lib/db/daos/progress_dao.dart` — SRS engine core
4. `lib/providers.dart` — Riverpod provider graph
5. `lib/main.dart` — boot sequence

---

## Development Workflow

### Required after any DB/provider change:
```powershell
dart run build_runner build --delete-conflicting-outputs
```

### Before committing:
```powershell
flutter analyze
# Must show: No issues found!
```

### Running the app:
```powershell
flutter run   # default device / emulator
```

---

## Coding Conventions

- **Dart style**: Follow `analysis_options.yaml` + `flutter_lints`. No errors, no warnings before committing.
- **Curly braces**: All `if`/`else` blocks MUST use `{}` even for single-line bodies.
- **Colors**: Always use `SynapseColors.*` constants from `lib/theme/app_theme.dart`. Never hardcode hex in widgets.
- **Theme**: Dark glassmorphism. Use `cs.surfaceContainerHigh` for cards. Use `SynapseColors.primary` for primary actions.
- **Providers**: Put new global providers in `lib/providers.dart`. Feature-scoped providers go inside the feature folder.
- **No BuildContext across async gaps**: Always check `if (context.mounted)` before using `context` after `await`.
- **PowerShell**: The dev machine uses **PowerShell** (not bash). Use `;` not `&&` to chain commands. Do not use `$home` as a variable name (it is a PowerShell reserved variable).

---

## How Knowledge Packs Work

Packs are JSON files in `assets/packs/`. They are read by `PackService` at app boot and installed into the Drift DB if not already present.

### Adding a new pack:
1. Create `assets/packs/pack_<id>.json` — see schema in `docs/architecture.md`
2. Add the path to `_bundledPacks` list in `lib/services/pack_service.dart`
3. Add a `_PackMeta(...)` entry in `lib/features/packs/pack_browser_screen.dart`

No `build_runner` step needed — packs are read at runtime via `rootBundle.loadString`.

---

## Current Phase Status

| Phase | Feature | Status |
|-------|---------|--------|
| 1 | Flutter shell, SRS engine, Drift DB, theming | ✅ Complete |
| 2 | Lessons screen, Reviews screen | ✅ Complete |
| 3 | Pack browser + bundled seed packs (C Programming & HTML) | ✅ Complete |
| 4 | Cram Mode, Tag Drills, Module Mastery panel | ✅ Complete |
| 5 | Mock Exam (timed), Fast-Forward dev tools | ✅ Complete |
| 6 | Settings screen, full CI/CD, landing page | ✅ Complete |

---

## Pending Work (Phase 3 continuation)

### Expand Seed Packs
Create full JSON packs for the remaining subjects. Each should have:
- **~80–120 questions** spread across **5–7 modules**
- Questions balanced across difficulty levels 1–3 (easy/medium/hard)
- `answer` field must be `"A"`, `"B"`, `"C"`, or `"D"` (capital letter)

Files to create:
- `assets/packs/pack_linux_commands.json` — packId: `linux_commands`
- `assets/packs/pack_algebra.json` — packId: `algebra_fundamentals`
- `assets/packs/pack_physics.json` — packId: `physics_fundamentals`
- `assets/packs/pack_excel.json` — packId: `excel_mastery`

After adding each file, also update:
- `lib/services/pack_service.dart` → `_bundledPacks` list
- `lib/features/packs/pack_browser_screen.dart` → `_kAvailablePacks` list (already has stubs for these 4)

---

## Phase 4 Plan: Cram Mode, Tag Drills, Module Mastery

### Files to create:

#### `lib/features/cram/cram_screen.dart`
- Freestyle practice mode: user picks a pack, then answers cards in any order
- No SRS stage changes — for self-testing only
- Show running score at top

#### `lib/features/drills/tag_drill_screen.dart`
- Filter questions by `module_name` (or tag) for focused practice
- User selects a module from a dropdown/chip list
- Same card UI as lessons/reviews but module-scoped

#### `lib/features/home/module_mastery_panel.dart`
- Show per-module breakdown for an installed pack
- For each module: count of Available / Apprentice / Mastered items
- Use small segmented progress bars per module row
- Accessible from `PackDetailScreen` via an "Modules" tab or expandable section

---

## Phase 5 Plan: Mock Exam + Fast Forward

### Files to create:

#### `lib/features/mock_exam/mock_exam_screen.dart`
- 50-question timed exam (configurable per pack)
- Timer countdown in AppBar
- Show score + wrong answers at the end
- Does NOT affect SRS stage

#### `lib/engine/mock_exam_service.dart`
- Randomly samples questions by module (balanced sampling)
- Returns a `List<Question>` of the desired length

### Dev Fast-Forward (add to `PackDetailScreen` or Settings)
`ProgressDao` already has these dev-only methods:
- `promoteToApprentice(packId, limit)` — batch lesson-complete N items
- `makeAllDueNow(packId)` — force all reviews due immediately
- `answerAllDueCorrectly()` — pass all due reviews

Add a developer panel (visible only in debug builds) in `PackDetailScreen`:
```dart
if (kDebugMode) _DevToolsSection(packId: pack.packId)
```

---

## Phase 6 Plan: Settings + Release

### `lib/features/settings/settings_screen.dart`
Should expose:
- Daily lesson cap (default: 10)
- Apprentice cap (default: 100)
- Reset progress for a specific pack
- Uninstall a pack
- Dark/light theme toggle (theme currently hardcoded dark)

### GitHub Release
`.github/workflows/release.yml` is already complete. To trigger a release:
```powershell
git tag v1.1.0
git push origin v1.1.0
```
This produces:
- `synapse_v1.1.0_android.apk`
- `synapse_v1.1.0_windows_x64.zip`

---

## SRS Stage Color Mapping

Always use this mapping consistently across all SRS visualizations:

```dart
Color _stageColor(int stage) {
  if (stage == 0) return const Color(0xFF64748B);  // slate — available
  if (stage <= 4) return SynapseColors.apprentice;  // coral
  if (stage <= 6) return SynapseColors.guru;        // purple
  if (stage == 7) return SynapseColors.master;      // blue
  return SynapseColors.burned;                      // gold
}
```

---

## Common Gotchas

- **`$home` in PowerShell** is a reserved env variable. Use `$homeContent`, `$homeScreen`, etc. instead.
- **Drift generated files** (`*.g.dart`) are committed to git. Re-run `build_runner` after any table/DAO/provider annotation change.
- **Pack install idempotency**: `installPack()` uses `insertOnConflictUpdate` — safe to call multiple times.
- **Review queue is global across packs**: `getDueReviews()` returns items from ALL installed packs. Filter by `packId` in the UI if showing pack-specific reviews.
- **Asset declaration**: All files in `assets/packs/` are automatically included via the `assets/packs/` directory declaration in `pubspec.yaml`. Adding a new `.json` file there does NOT require a pubspec change.

---

## CI/CD Notes

- Build runs on push of `v*.*.*` tags only
- Android uses `ubuntu-latest`, Windows uses `windows-latest`
- Code generation (`dart run build_runner build`) runs as a CI step — generated files in git serve as a fallback/cache
- The `softprops/action-gh-release@v2` action creates the GitHub Release with auto-generated release notes