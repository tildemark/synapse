# Synapse

**Master any subject with spaced repetition.**

Synapse is a multi-domain SRS (Spaced Repetition System) learning platform. Install *Knowledge Packs* for any subject — C Programming, Physics, Algebra, Linux, Excel — and master them at your own pace.

## Features
- 📦 **Knowledge Packs** — modular DLC-style subject libraries
- 🧠 **8-Stage SRS** — Apprentice → Guru → Master → Burned
- 📊 **Module Mastery** — track progress per topic, per subject
- 🔄 **Reviews** — spaced repetition schedules based on your performance
- 📚 **Lessons** — guided first-pass through new material
- 🎯 **Pack Browser** — browse and install subjects instantly

## Available Packs
| Pack | Subject | Questions |
|------|---------|-----------|
| C Programming | Computer Science | 120 |
| Linux Commands | Systems & DevOps | 100 |
| Algebra Fundamentals | Mathematics | 90 |
| Physics Fundamentals | Natural Sciences | 110 |
| Excel Mastery | Productivity | 80 |

## Architecture

```
lib/
├── db/              # Drift database (SQLite)
│   └── daos/        # ProgressDao, PackDao
├── engine/          # SRS engine, gating, pack service
├── features/        # UI screens
│   ├── home/        # Dashboard
│   ├── lessons/     # Lesson flow
│   ├── reviews/     # Review flow
│   └── packs/       # Pack browser + detail
├── services/        # Settings, PackService, AppTime
└── theme/           # App theme & brand colors
```

## Getting Started

```bash
flutter pub get
dart run build_runner build
flutter run
```

## License
MIT