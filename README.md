<div align="center">
  <img src="assets/icons/logo512.png" width="120" height="120" alt="Synapse Logo" style="border-radius: 24px;" />
  <h1>Synapse ⚡</h1>
  <p><strong>Offline-First Spaced Repetition Engine for Engineering & Academic Mastery</strong></p>
  <p>
    <a href="http://sanchez.ph">Official Website</a> •
    <a href="https://synapse.sanchez.ph">Web Ledger</a> •
    <a href="https://synapse.sanchez.ph/community">Community Hub</a> •
    <a href="https://synapse.sanchez.ph/verify">Verify Credential</a> •
    <a href="https://synapse.sanchez.ph/studio">Pack Studio</a>
  </p>
</div>

---

**Synapse** is an academic-grade, offline-first **Spaced Repetition System (SRS)** learning platform built for high-retention mastery across technical and academic domains.

Built with **Flutter**, **Drift (SQLite)**, and **Riverpod**, Synapse decouples learning mechanics from curriculum data. Install modular **Knowledge Packs** for any subject — Computer Science, Systems, Mathematics, Science, Productivity, and Web Development — and achieve permanent retention through an 8-stage SRS algorithm.

---

## 🚀 Key Features

- **8-Stage Spaced Repetition Engine**:
  - Progression across 9 distinct states: `Available (0)` $\rightarrow$ `Apprentice I–IV (1–4)` $\rightarrow$ `Guru I–II (5–6)` $\rightarrow$ `Master (7)` $\rightarrow$ `Burned (8)`.
  - Research-backed review intervals: `4h`, `8h`, `24h`, `48h`, `1w` (168h), `2w` (336h), and `1mo` (720h).
  - Penalty & demotion rules: Incorrect answers demote cards by 2 stages to reinforce struggling concepts.
- **Verifiable Mastery Certificates with Dynamic QR Codes**:
  - Zero-Knowledge cryptographic HMAC validation ($100\%$ offline-compatible with zero server database).
  - One-tap publishing to **LinkedIn Licenses & Certifications** and **Facebook**.
- **Modular Knowledge Packs**:
  - DLC-style modular pack architecture loaded directly into local SQLite.
  - Browse, install, inspect, and uninstall packs instantly with zero network dependency.
- **Guided Sequential Module Progression**:
  - Sequential curriculum mastery from Module 1 through 15 preventing knowledge gaps.
- **Visual Mastery Analytics & Dossier**:
  - Scholar Dossier, streak counters, circadian badges (Midnight Scholar, Dawn Reviewer), and stage distribution graphs.
- **100% Offline-First Privacy**:
  - Embedded SQLite database via Drift. Zero data collection, zero analytics SDKs, and zero telemetry.

---

## 📦 Bundled Knowledge Packs

| Pack | Subject | Modules | Questions | Status | Credential |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **C Systems Programming** | Computer Science | 15 | **249** | Active & Bundled | `SYN-CPROG-8F39-VERIFIED` |
| **HTML5 Web Semantics** | Web Development | 15 | **138** | Active & Bundled | `SYN-HTML-9B41-VERIFIED` |
| **CSS3 & Modern Stylesheets** | Web Development | 15 | **450** | Available in Pack Store | `SYN-CSS3-7E19-VERIFIED` |
| **LTO Driver's Licensing Reviewer** | Traffic Laws & Safety | 15 | **450** | Active & Bundled | `SYN-LTOPH-4D21-VERIFIED` |

---

## 👨‍💻 Credits & Leadership

- **Lead Developer & Architect**: Alfredo Sanchez Jr. ([http://sanchez.ph](http://sanchez.ph))
- **Open Source License**: MIT License

---

## 🏛️ System Architecture

```
synapse/
├── lib/
│   ├── db/                          # Drift SQLite database & DAOs
│   │   ├── app_database.dart        # @DriftDatabase declaration, tables & migrations
│   │   └── daos/
│   │       ├── progress_dao.dart    # 8-Stage SRS logic, review queues & stage metrics
│   │       └── pack_dao.dart        # Knowledge pack installer, uninstaller & upsert
│   ├── engine/                      # Core SRS rules & domain services
│   ├── features/                    # UI screens & presentation layer
│   │   ├── home/                    # Dashboard: installed pack cards, global progress
│   │   ├── packs/                   # Pack browser, pack detail & module mastery
│   │   ├── lessons/                 # Interactive lesson study & first-pass flow
│   │   ├── reviews/                 # Timed SRS review queue & grading flow
│   │   └── settings/                # Daily caps, apprentice limits & database tools
│   ├── services/                    # App time provider, pack service & settings service
│   ├── theme/                       # Modern dark glassmorphism theme & SynapseColors
│   ├── providers.dart               # Riverpod top-level state provider graph
│   └── main.dart                    # Application bootstrap & ProviderScope initialization
├── assets/
│   ├── packs/                       # Bundled canonical Knowledge Pack JSON files
│   └── icons/                       # Platform & launcher assets
├── docs/
│   ├── architecture.md              # DB schema, SRS intervals & state management
│   └── agents.md                    # AI agent continuation & developer reference
├── test/                            # Unit & widget test suites
└── .github/
    └── workflows/
        └── release.yml              # Multi-platform CI/CD: Android APK + Windows ZIP
```

---

## 🛠️ Getting Started

### Prerequisites

- [Flutter SDK](https://flutter.dev/docs/get-started/install) (3.12+ recommended, Dart 3.12+)
- Android Studio / VS Code with Flutter extension
- Windows Desktop build tools (Visual Studio C++ build tools for Windows target)

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/tildemark/synapse.git
cd synapse
flutter pub get
```

### 2. Run Code Generation (Drift & Riverpod)

```bash
dart run build_runner build --delete-conflicting-outputs
```

### 3. Run Static Analysis & Tests

```bash
flutter analyze
flutter test
```

### 4. Launch the Flutter App (Debug / Development)

**On Android device / emulator:**

```bash
flutter run
```

**On Windows Desktop:**

```powershell
flutter run -d windows
```

---

## 📦 Build for Production & Releases

### Compiled Release Binary Locations (Local Workspace)

| Platform | Target Output File | Local Workspace Path |
| :--- | :--- | :--- |
| **Android (APK)** | Release APK (ARM64) | [`build/app/outputs/flutter-apk/app-arm64-v8a-release.apk`](file:///c:/code/synapse/build/app/outputs/flutter-apk/app-arm64-v8a-release.apk) |
| **Windows (Portable ZIP)** | Standalone Portable ZIP | [`build/synapse_windows_x64.zip`](file:///c:/code/synapse/build) |

---

### Step-by-Step Release Packaging

#### 📱 1. Android Release APK

```bash
flutter build apk --release --split-per-abi
```

- **Output Location**: `build/app/outputs/flutter-apk/app-arm64-v8a-release.apk`

#### 🪟 2. Windows Desktop Standalone Release

```powershell
# 1. Compile 64-bit Windows release binary
flutter build windows --release

# 2. Package into portable standalone ZIP
Compress-Archive -Path build\windows\x64\runner\Release\* -DestinationPath build\synapse_windows_x64.zip -Force
```

#### 🚀 3. Automated CI/CD Releases (GitHub Actions)

Pushing a version tag triggers [`.github/workflows/release.yml`](.github/workflows/release.yml) to automatically compile, package, and publish both Android APK and Windows x64 ZIP release assets:

```powershell
git tag v1.0.0
git push origin v1.0.0
```

---

## 🧠 Spaced Repetition (SRS) Model

Synapse implements a 8-stage SRS model with strict interval timings:

```
Stage 0  — Available    (Unstudied seed card)
Stage 1  — Apprentice 1 ──> Review in 4 hours
Stage 2  — Apprentice 2 ──> Review in 8 hours
Stage 3  — Apprentice 3 ──> Review in 24 hours (1 day)
Stage 4  — Apprentice 4 ──> Review in 48 hours (2 days)
Stage 5  — Guru 1       ──> Review in 1 week (168 hours)
Stage 6  — Guru 2       ──> Review in 2 weeks (336 hours)
Stage 7  — Master       ──> Review in 1 month (720 hours)
Stage 8  — Burned       ──> Permanent Mastery ♾ (Archived from active review)
```

| Grade | Action | Stage Change |
| :--- | :--- | :--- |
| **Correct** | Successful recall | $+1$ Stage (Capped at Stage 8) |
| **Incorrect** | Failed recall | $-2$ Stages (Min Stage 1 if lesson completed, otherwise 0) |

---

## 📚 Knowledge Pack JSON Schema

Custom Knowledge Packs can be authored and bundled via JSON files placed in `assets/packs/`:

```jsonc
{
  "packId": "c_programming",
  "name": "C Programming",
  "subject": "Computer Science",
  "icon": "code",
  "color": "#3B82F6",
  "version": 1,
  "modules": [
    { "number": 1, "name": "Basics & Syntax" },
    { "number": 2, "name": "Pointers & Memory" }
  ],
  "questions": [
    {
      "question": "Which of the following declares a pointer to an integer in C?",
      "a": "int ptr;",
      "b": "int *ptr;",
      "c": "pointer int ptr;",
      "d": "*int ptr;",
      "answer": "B",
      "explanation": "In C, 'int *ptr;' declares a variable named 'ptr' that holds the address of an integer.",
      "level": 1,
      "module": 2,
      "moduleName": "Pointers & Memory"
    }
  ]
}
```

---

## 🔧 Troubleshooting

### ADB Device Not Detected / SuperDisplay Conflict

If `adb devices` returns an empty list or your device connection is claimed by display drivers:

1. **Stop Display Host Services**:
   ```powershell
   Stop-Service SuperDisplay
   Set-Service SuperDisplay -StartupType Disabled
   ```
2. **Reset USB Debugging**:
   - On Android device: **Developer Options** $\rightarrow$ **Revoke USB debugging authorizations**.
   - Restart ADB server:
     ```bash
     adb kill-server
     adb start-server
     adb devices
     ```

### Drift Database Code Generation Issues

If schema changes cause build errors:

```powershell
dart run build_runner clean
dart run build_runner build --delete-conflicting-outputs
```

---

## 👨‍💻 Developer & Credits

- **Developer**: Alfredo Sanchez Jr
- **Website**: [https://sanchez.ph](https://sanchez.ph)
- **Project**: Synapse — Multi-Domain Offline-First SRS Learning Platform

---

## 🛡️ Privacy Policy (100% Offline Guarantee)

**Synapse is 100% offline.**

- **Zero Telemetry / Zero Tracking**: No analytics, identifiers, or tracking tokens are collected or transmitted.
- **Local Storage Exclusively**: All user progress, mastery stages, review logs, and installed packs reside solely on your device within SQLite (`drift`).
- **Offline First**: All lessons, reviews, and bundled knowledge packs function with zero internet connectivity.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
