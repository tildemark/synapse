'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Zap,
  Download,
  Smartphone,
  Monitor,
  Code2,
  BookOpen,
  BrainCircuit,
  Timer,
  BarChart3,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  Github,
  Award,
  Share2,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  Activity,
  Cpu,
  Layers,
  Check,
  ExternalLink,
  BookCheck,
  Flame,
  BadgePercent,
  GraduationCap,
  FileCheck2,
  Terminal,
  Database,
  GitBranch,
  FileCode,
  Server,
  Network,
  Compass,
  Lock,
  Boxes,
  Globe,
  Palette,
} from 'lucide-react';

// ─── SRS Stages & Cognitive Intervals ──────────────────────────────────────────
const SRS_STAGES = [
  {
    stage: 0,
    name: 'Stage 0: Unstudied',
    label: 'Available',
    interval: '0 Hours',
    halfLife: '0.5h',
    retentionStability: 'S = 0.1',
    decayFactor: '100% Decay in 4h',
    color: '#64748B',
    desc: 'Unlearned seed questions awaiting initial lesson pass.',
    formula: 'R(t) = e^{-t / 0.1}',
  },
  {
    stage: 1,
    name: 'Stage 1: Apprentice I',
    label: 'Apprentice I',
    interval: '4 Hours',
    halfLife: '4.2h',
    retentionStability: 'S = 0.4',
    decayFactor: 'Immediate Consolidation',
    color: '#EF5350',
    desc: 'First study pass completed. Initial working memory threshold.',
    formula: 'R(t) = e^{-t / 0.4}',
  },
  {
    stage: 2,
    name: 'Stage 2: Apprentice II',
    label: 'Apprentice II',
    interval: '8 Hours',
    halfLife: '8.8h',
    retentionStability: 'S = 0.8',
    decayFactor: '2.0x Memory Trace Strengthening',
    color: '#EF5350',
    desc: 'Short-interval active recall checkpoint.',
    formula: 'R(t) = e^{-t / 0.8}',
  },
  {
    stage: 3,
    name: 'Stage 3: Apprentice III',
    label: 'Apprentice III',
    interval: '24 Hours (1 Day)',
    halfLife: '28h',
    retentionStability: 'S = 2.4',
    decayFactor: 'Circadian Sleep Consolidation Pass',
    color: '#EF5350',
    desc: 'First overnight synaptic consolidation verification.',
    formula: 'R(t) = e^{-t / 2.4}',
  },
  {
    stage: 4,
    name: 'Stage 4: Apprentice IV',
    label: 'Apprentice IV',
    interval: '48 Hours (2 Days)',
    halfLife: '56h',
    retentionStability: 'S = 4.8',
    decayFactor: 'Short-Term Memory Solidified',
    color: '#EF5350',
    desc: 'Final short-term verification before promotion to intermediate mastery.',
    formula: 'R(t) = e^{-t / 4.8}',
  },
  {
    stage: 5,
    name: 'Stage 5: Guru I',
    label: 'Guru I',
    interval: '1 Week (168 Hours)',
    halfLife: '210h',
    retentionStability: 'S = 16.8',
    decayFactor: 'Intermediate Cortical Storage',
    color: '#7C4DFF',
    desc: 'Medium-term conceptual schema established in long-term memory.',
    formula: 'R(t) = e^{-t / 16.8}',
  },
  {
    stage: 6,
    name: 'Stage 6: Guru II',
    label: 'Guru II',
    interval: '2 Weeks (336 Hours)',
    halfLife: '420h',
    retentionStability: 'S = 33.6',
    decayFactor: 'High-Resistance Memory Trace',
    color: '#7C4DFF',
    desc: 'Reinforced neural encoding across broad associative networks.',
    formula: 'R(t) = e^{-t / 33.6}',
  },
  {
    stage: 7,
    name: 'Stage 7: Master',
    label: 'Master',
    interval: '1 Month (720 Hours)',
    halfLife: '960h',
    retentionStability: 'S = 72.0',
    decayFactor: 'Long-Term Structural Mastery',
    color: '#1565C0',
    desc: 'Long-term cognitive mastery proven with zero prompt cues.',
    formula: 'R(t) = e^{-t / 72.0}',
  },
  {
    stage: 8,
    name: 'Stage 8: Burned',
    label: 'Burned ♾',
    interval: 'Permanent Retention ♾',
    halfLife: '∞',
    retentionStability: 'S = ∞',
    decayFactor: 'Asymptotic Retrieval Equilibrium',
    color: '#F59E0B',
    desc: 'Permanently acquired knowledge. Removed from active review queue.',
    formula: 'R(t) \\to 1.00',
  },
];

// ─── Active & Launch Curriculum Packs ──────────────────────────────────────────
const OFFICIAL_PACKS = [
  {
    id: 'c_programming',
    name: 'C Systems Programming',
    subject: 'Computer Science',
    modulesCount: 15,
    questionsCount: 101,
    color: '#3B82F6',
    iconLetter: 'C',
    level5Proofs: true,
    description: 'Comprehensive 15-module curriculum based on official W3Schools standards: Pointers, Memory Allocation (malloc/realloc), Structs, Enums, File I/O, Architecture, and Level-5 Undefined Behavior Diagnostics.',
    award: 'SYN-CPROG-8F39 Verifiable Mastery Credential',
    status: 'Active & Bundled',
  },
  {
    id: 'html_fundamentals',
    name: 'HTML5 & Web Architecture',
    subject: 'Web Development',
    modulesCount: 15,
    questionsCount: 138,
    color: '#E44D26',
    iconLetter: '<>',
    level5Proofs: true,
    description: 'Full 15-module web foundations bank: Document Structure, Semantic HTML, Forms & Controls, Media & Streams, Canvas & SVG Graphics, Web Storage APIs, and WCAG/ARIA 2.1 Accessibility.',
    award: 'SYN-HTML-9B41 Web Semantics Sovereign Credential',
    status: 'Active & Bundled',
  },
];

// ─── Upcoming Knowledge Packs Roadmap ──────────────────────────────────────────
const UPCOMING_MODULES = [
  {
    id: 'css_mastery',
    name: 'CSS3 & Modern Layouts',
    category: 'Frontend Engineering',
    color: '#264DE4',
    icon: Palette,
    modules: 'Flexbox, CSS Grid, Custom Properties, Animations, Subgrid, Media & Container Queries',
    eta: 'Q3 2026',
    badge: 'CSS Style Architect',
  },
  {
    id: 'javascript_deep_dive',
    name: 'JavaScript (ES2026+)',
    category: 'Core Programming',
    color: '#F7DF1E',
    icon: FileCode,
    modules: 'Event Loop, Closures, Prototypal Inheritance, Promises/Async-Await, Generators, V8 Optimizations',
    eta: 'Q3 2026',
    badge: 'JS Runtime Adept',
  },
  {
    id: 'git_internals',
    name: 'Git & Version Control',
    category: 'DevOps & Tooling',
    color: '#F05032',
    icon: GitBranch,
    modules: 'Object Database (Blobs/Trees/Commits), Rebase Interactive, Bisect, Merkle DAGs, Plumbing vs Porcelain',
    eta: 'Q3 2026',
    badge: 'Git Merkle Master',
  },
  {
    id: 'python_mastery',
    name: 'Python 3 Systems & Data',
    category: 'Core Programming',
    color: '#3776AB',
    icon: Terminal,
    modules: 'Dunder Methods, Metaclasses, Asyncio, Memory Model & GIL, Typing System, Struct & CTypes',
    eta: 'Q4 2026',
    badge: 'Pythonic Alchemist',
  },
  {
    id: 'sql_databases',
    name: 'SQL & Relational Databases',
    category: 'Data Architecture',
    color: '#00758F',
    icon: Database,
    modules: 'B-Tree & Hash Indexing, Query Optimization, Window Functions, ACID Transactions, Isolation Levels',
    eta: 'Q4 2026',
    badge: 'Relational Query Sovereign',
  },
  {
    id: 'java_enterprise',
    name: 'Java & JVM Internals',
    category: 'Enterprise Systems',
    color: '#EA2D2E',
    icon: CoffeeIcon,
    modules: 'JVM Memory (Heap/Metaspace), Garbage Collection Tuning (ZGC/G1), Virtual Threads, Reflection & Bytecode',
    eta: 'Q4 2026',
    badge: 'JVM Bytecode Specialist',
  },
  {
    id: 'dsa_algorithms',
    name: 'Data Structures & Algorithms',
    category: 'Computer Science',
    color: '#8B5CF6',
    icon: Boxes,
    modules: 'Red-Black Trees, Graph Traversal (Dijkstra/A*), Dynamic Programming, Amortized Analysis, Disjoint Sets',
    eta: 'Q4 2026',
    badge: 'Algorithmic Grandmaster',
  },
  {
    id: 'php_modern',
    name: 'PHP 8.3+ Systems',
    category: 'Backend Engineering',
    color: '#777BB4',
    icon: Server,
    modules: 'JIT Compilation, Attributes, Enums, Fibers, OPcache, WeakMaps, High-Performance FPM Architectures',
    eta: 'Q1 2027',
    badge: 'PHP Modern Vanguard',
  },
  {
    id: 'react_internals',
    name: 'React 19 & Server Components',
    category: 'Frontend Engineering',
    color: '#61DAFB',
    icon: Code2,
    modules: 'Fiber Architecture, Concurrent Mode, React Server Components (RSC), Suspense, Custom Hooks, Actions',
    eta: 'Q1 2027',
    badge: 'React Fiber Architect',
  },
  {
    id: 'linux_systems',
    name: 'Linux & POSIX Systems',
    category: 'Systems & OS',
    color: '#FCC624',
    icon: Terminal,
    modules: 'Kernel Syscalls, Process Lifecycle & Signals, IPC & Pipes, Filesystem Hierarchy, cgroups, eBPF',
    eta: 'Q1 2027',
    badge: 'POSIX Kernel Sovereign',
  },
];

function CoffeeIcon(props: any) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
      <line x1="6" y1="2" x2="6" y2="4"/>
      <line x1="10" y1="2" x2="10" y2="4"/>
      <line x1="14" y1="2" x2="14" y2="4"/>
    </svg>
  );
}

// ─── Sample Practice Questions For Interactive Demo ───────────────────────────
const SAMPLE_QUESTIONS = [
  {
    subject: 'Computer Science',
    topic: 'C Programming · Module 11: Pointers & Memory',
    question: 'Which of the following expressions correctly accesses the 4th integer element via pointer arithmetic for `int *ptr`?',
    choices: [
      { id: 'A', text: '*(ptr + 3)' },
      { id: 'B', text: '*ptr + 3' },
      { id: 'C', text: '&(ptr + 4)' },
      { id: 'D', text: 'ptr[4]' },
    ],
    correctAnswer: 'A',
    explanation: 'In C, array indexing is 0-based. `ptr[3]` is syntactic sugar for `*(ptr + 3)`. Note that `*ptr + 3` dereferences element 0 then adds 3 to its scalar value.',
  },
  {
    subject: 'Web Development',
    topic: 'HTML5 · Module 8: Semantics & Layout',
    question: 'Which HTML5 element semantically encloses thematic content and should ideally contain an explicit heading tag (`<h2>`-`<h6>`)?',
    choices: [
      { id: 'A', text: '<div class="content">' },
      { id: 'B', text: '<section>' },
      { id: 'C', text: '<article>' },
      { id: 'D', text: '<main>' },
    ],
    correctAnswer: 'B',
    explanation: '`<section>` represents a standalone generic section of a document. According to the W3C spec, sections should typically include an explicit heading identifier.',
  },
  {
    subject: 'Computer Science',
    topic: 'C Programming · Module 15: Expert Diagnostics',
    question: 'What is the exact result of executing `int a = 5; int b = a++ + ++a;` in ISO C standards?',
    choices: [
      { id: 'A', text: 'Always exactly 12 across all standard compilers' },
      { id: 'B', text: 'Always exactly 13 across all standard compilers' },
      { id: 'C', text: 'Undefined behavior due to multiple unsequenced modifications' },
      { id: 'D', text: 'Compile-time syntax error on arithmetic addition' },
    ],
    correctAnswer: 'C',
    explanation: 'Modifying a scalar object more than once between sequence points without intervening sequencing invokes Undefined Behavior (UB) under ISO C99 Section 6.5.',
  },
];

export default function HomePage() {
  // Simulator State
  const [selectedStageIdx, setSelectedStageIdx] = useState<number>(3); // Apprentice III
  const activeStage = SRS_STAGES[selectedStageIdx];

  // Interactive Quiz State
  const [quizIdx, setQuizIdx] = useState<number>(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [cardStage, setCardStage] = useState<number>(0);

  const currentQuiz = SAMPLE_QUESTIONS[quizIdx];

  const handleSelectAnswer = (choiceId: string) => {
    if (isAnswered) return;
    setSelectedChoice(choiceId);
    setIsAnswered(true);
    if (choiceId === currentQuiz.correctAnswer) {
      setCardStage((prev) => Math.min(prev + 1, 8));
    } else {
      setCardStage((prev) => Math.max(prev - 2, 1));
    }
  };

  const handleNextQuiz = () => {
    setSelectedChoice(null);
    setIsAnswered(false);
    setQuizIdx((prev) => (prev + 1) % SAMPLE_QUESTIONS.length);
  };

  return (
    <div>
      <div className="glow-backdrop" />
      <div className="academic-grid-pattern" />

      <div className="container">
        {/* Navigation */}
        <nav className="navbar">
          <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src="/logo512.png"
              alt="Synapse Logo"
              width={32}
              height={32}
              style={{ borderRadius: 8, objectFit: 'contain' }}
            />
            <span style={{ fontWeight: 800, fontSize: '18px', letterSpacing: '-0.02em' }}>Synapse</span>
          </div>
          <div className="nav-links">
            <a href="#metrics" className="nav-link">
              <Activity size={15} /> Retention Metrics
            </a>
            <a href="#srs-science" className="nav-link">
              <BrainCircuit size={15} /> Cognitive Science
            </a>
            <a href="#certification" className="nav-link">
              <Award size={15} style={{ color: '#F59E0B' }} /> Credentials
            </a>
            <a href="#packs" className="nav-link">
              <Layers size={15} /> Knowledge Packs
            </a>
            <a href="#roadmap" className="nav-link">
              <Compass size={15} style={{ color: '#C084FC' }} /> Upcoming Roadmap
            </a>
            <Link href="/studio" className="nav-link" style={{ color: '#10B981', fontWeight: 700 }}>
              <Sparkles size={15} /> Pack Studio
            </Link>
            <a href="#downloads" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '13px' }}>
              <Download size={15} /> Downloads
            </a>
            <a
              href="https://github.com/tildemark/synapse"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '8px 16px', fontSize: '13px' }}
            >
              <Github size={15} /> GitHub
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div className="badge badge-academic">
              <GraduationCap size={14} /> Academic-Grade SRS Architecture
            </div>
            <div className="badge badge-official">
              <CheckCircle2 size={14} /> 100% Offline Embedded Drift SQLite
            </div>
          </div>

          <h1>
            Engineered for <span className="gradient-text">Permanent Retention</span>.<br />
            Backed by Cognitive Mathematics.
          </h1>

          <p className="hero-subtitle">
            Synapse is an academic-grade, offline-first spaced repetition engine. Master rigorous engineering curricula with exponential Leitner intervals, modular Knowledge Packs, sequential module progression, and verifiable Mastery Credentials.
          </p>

          <div className="hero-cta-group">
            <a href="#downloads" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '15px' }}>
              <Download size={18} /> Download Synapse v1.0.0
            </a>
            <Link href="/certificate" className="btn btn-gold" style={{ padding: '14px 26px', fontSize: '15px' }}>
              <Award size={18} /> View Sample Certificate &amp; Share
            </Link>
            <Link href="/studio" className="btn btn-secondary" style={{ padding: '14px 24px', fontSize: '15px' }}>
              <Sparkles size={18} color="#10B981" /> Open Pack Studio
            </Link>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13px', color: 'var(--text-muted)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Check size={14} color="#10B981" /> 239+ Bundled Official Questions (C &amp; HTML5)
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Check size={14} color="#10B981" /> Verifiable LinkedIn &amp; Facebook Certificates
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Check size={14} color="#10B981" /> 25 Scholar Badges &amp; Progression Dossier
            </span>
          </div>
        </section>

        {/* Awesome Metrics Ribbon */}
        <section id="metrics">
          <div className="metrics-ribbon">
            <div className="metric-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="badge-formula">R(t) ≥ 88.4%</span>
                <TrendingUp size={18} color="#10B981" />
              </div>
              <div className="metric-value" style={{ color: '#10B981' }}>88.4%</div>
              <div className="metric-label">Target Retention Stability</div>
              <div className="metric-desc">Algorithmically scheduled reviews fire immediately prior to active synaptic decay threshold.</div>
            </div>

            <div className="metric-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="badge-formula">Efficiency × 4.2</span>
                <BrainCircuit size={18} color="#6C63FF" />
              </div>
              <div className="metric-value" style={{ color: '#6C63FF' }}>4.2×</div>
              <div className="metric-label">Memory Consolidation Yield</div>
              <div className="metric-desc">Compared to traditional massed practice and unstructured reading in controlled retention trials.</div>
            </div>

            <div className="metric-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="badge-formula">Latency 0.00ms</span>
                <ShieldCheck size={18} color="#3B82F6" />
              </div>
              <div className="metric-value" style={{ color: '#3B82F6' }}>100%</div>
              <div className="metric-label">Offline Local Drift SQLite</div>
              <div className="metric-desc">Zero telemetry, zero remote database queries, zero cloud lock-in. Instantaneous card switching.</div>
            </div>

            <div className="metric-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="badge-formula">Stages 0 → 8</span>
                <Award size={18} color="#F59E0B" />
              </div>
              <div className="metric-value" style={{ color: '#F59E0B' }}>8 Stages</div>
              <div className="metric-label">Leitner Mathematical Hierarchy</div>
              <div className="metric-desc">From initial lesson registration to permanent Burned status with adaptive mistake recovery (Δ - 2).</div>
            </div>
          </div>
        </section>

        {/* Cognitive Science SRS Simulator */}
        <section id="srs-science" className="section">
          <div className="section-header">
            <div className="badge badge-academic" style={{ marginBottom: '12px' }}>
              <BrainCircuit size={14} /> Cognitive Architecture &amp; Mathematical Modeling
            </div>
            <h2 className="section-title">The 8-Stage Ebbinghaus Memory Decay Engine</h2>
            <p className="section-subtitle">
              Without active recall, human memory follows exponential decay according to <code className="mono-font" style={{ color: '#A78BFA' }}>R = e^&#123;-t/S&#125;</code>. Synapse scales retention stability <code className="mono-font" style={{ color: '#10B981' }}>S</code> exponentially across 8 verified thresholds.
            </p>
          </div>

          <div className="sim-container">
            {/* Stage Selector Tabs */}
            <div style={{ marginBottom: '12px', fontSize: '13px', fontWeight: 700, color: 'var(--text-muted)' }}>
              SELECT INTERVAL STAGE TO INSPECT COGNITIVE PARAMETERS:
            </div>
            <div className="sim-stage-tabs">
              {SRS_STAGES.map((s, idx) => (
                <button
                  key={s.stage}
                  onClick={() => setSelectedStageIdx(idx)}
                  className={`sim-stage-btn ${idx === selectedStageIdx ? 'active' : ''}`}
                  style={{
                    borderColor: idx === selectedStageIdx ? s.color : undefined,
                    color: idx === selectedStageIdx ? s.color : undefined,
                  }}
                >
                  <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: s.color, marginRight: 8 }} />
                  {s.label}
                </button>
              ))}
            </div>

            {/* Visualizer Body Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '30px' }}>
              {/* Left Column: Mathematical Parameters */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: `${activeStage.color}22`, border: `1.5px solid ${activeStage.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: activeStage.color, fontWeight: 800, fontSize: '16px' }}>
                    {activeStage.stage}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 800 }}>{activeStage.name}</h3>
                    <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Scheduled Interval: <strong style={{ color: activeStage.color }}>{activeStage.interval}</strong></span>
                  </div>
                </div>

                <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.6 }}>
                  {activeStage.desc}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ background: 'var(--bg-card-subtle)', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--border-card)' }}>
                    <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>Memory Half-Life</div>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)', marginTop: '2px' }}>{activeStage.halfLife}</div>
                  </div>
                  <div style={{ background: 'var(--bg-card-subtle)', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--border-card)' }}>
                    <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>Stability Constant (S)</div>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: activeStage.color, marginTop: '2px' }}>{activeStage.retentionStability}</div>
                  </div>
                  <div style={{ background: 'var(--bg-card-subtle)', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--border-card)', gridColumn: 'span 2' }}>
                    <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>Decay Formula Function</div>
                    <div className="mono-font" style={{ fontSize: '14px', fontWeight: 700, color: '#A78BFA', marginTop: '2px' }}>{activeStage.formula}</div>
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Activity size={18} color={activeStage.color} />
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    <strong>Adaptive Logic:</strong> Correct answers yield <span style={{ color: '#10B981', fontWeight: 700 }}>+1 Stage</span>. Incorrect responses trigger adaptive back-off <span style={{ color: '#EF5350', fontWeight: 700 }}>-2 Stages</span> to consolidate vulnerable memory traces.
                  </span>
                </div>
              </div>

              {/* Right Column: Simulated Memory Retention Curve */}
              <div style={{ background: 'var(--bg-card-subtle)', border: '1px solid var(--border-card)', borderRadius: '18px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700 }}>Simulated Active Recall Decay Profile</span>
                    <span className="badge badge-formula">{activeStage.decayFactor}</span>
                  </div>

                  {/* SVG Curve Representation */}
                  <div style={{ width: '100%', height: '140px', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', padding: '12px', position: 'relative', overflow: 'hidden' }}>
                    <svg viewBox="0 0 300 100" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                      {/* Grid lines */}
                      <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.08)" strokeDasharray="3,3" />
                      <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.08)" strokeDasharray="3,3" />
                      <line x1="0" y1="80" x2="300" y2="80" stroke="rgba(255,255,255,0.08)" strokeDasharray="3,3" />

                      {/* Decaying curve (Without SRS) */}
                      <path
                        d="M 10 10 Q 70 85 290 92"
                        fill="none"
                        stroke="#EF5350"
                        strokeWidth="2"
                        strokeDasharray="4,4"
                        opacity="0.6"
                      />

                      {/* Reinforced curve (With Synapse SRS) */}
                      <path
                        d={
                          selectedStageIdx === 0
                            ? 'M 10 10 Q 50 80 290 90'
                            : selectedStageIdx <= 4
                            ? 'M 10 10 Q 120 25 290 55'
                            : selectedStageIdx <= 7
                            ? 'M 10 10 Q 180 15 290 28'
                            : 'M 10 10 L 290 10'
                        }
                        fill="none"
                        stroke={activeStage.color}
                        strokeWidth="3.5"
                      />

                      {/* Review Point Marker */}
                      <circle cx="10" cy="10" r="4" fill={activeStage.color} />
                      {selectedStageIdx > 0 && <circle cx="140" cy="20" r="4" fill={activeStage.color} />}
                      {selectedStageIdx > 4 && <circle cx="250" cy="18" r="4" fill={activeStage.color} />}
                    </svg>

                    <div style={{ position: 'absolute', bottom: '6px', left: '14px', fontSize: '10px', color: '#EF5350' }}>
                      -- Without Review (Decay)
                    </div>
                    <div style={{ position: 'absolute', bottom: '6px', right: '14px', fontSize: '10px', color: activeStage.color, fontWeight: 700 }}>
                      — Active Recall Stabilization
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-card)', paddingTop: '12px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Progress Stage</span>
                  <span style={{ fontSize: '13px', fontWeight: 800, color: activeStage.color }}>
                    {selectedStageIdx + 1} / 9 ({(Math.min(100, ((selectedStageIdx + 1) / 9) * 100)).toFixed(0)}%)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Official vs Community Badge Governance & Certification System */}
        <section id="certification" className="section">
          <div className="section-header">
            <div className="badge badge-academic" style={{ marginBottom: '12px' }}>
              <Award size={14} /> Official Accreditation &amp; Academic Credentials
            </div>
            <h2 className="section-title">Verifiable Academic Certificate of Mastery</h2>
            <p className="section-subtitle">
              Synapse guarantees the authenticity of academic achievements. Master official knowledge curricula to unlock verifiable credentials with direct one-click posting to your <strong>LinkedIn Licenses &amp; Certifications</strong> and <strong>Facebook Timeline</strong>.
            </p>
          </div>

          {/* Policy Governance Grid */}
          <div className="grid-2" style={{ marginBottom: '36px' }}>
            <div className="card" style={{ borderLeft: '4px solid #10B981' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(16, 185, 129, 0.2)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle2 size={20} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Official Knowledge Packs</h3>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                Curated by subject matter experts with rigorous question validation, standardized difficulty tiers (1–5), balanced answer lengths, and canonical explanations.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: 'var(--text-main)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={14} color="#10B981" /> <strong>Official Verified Completion Badges</strong> issued on 100% Burned milestone.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={14} color="#10B981" /> <strong>Verifiable Certificate of Mastery</strong> with unique serial &amp; checksum.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={14} color="#10B981" /> One-click synchronization to LinkedIn Certifications &amp; Facebook.
                </li>
              </ul>
            </div>

            <div className="card" style={{ borderLeft: '4px solid #F59E0B' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(245, 158, 11, 0.2)', color: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Sparkles size={20} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Community Pack Governance</h3>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                Anyone can author and distribute custom packs via the Pack Studio. To preserve academic prestige, community packs do not automatically issue official badges.
              </p>
              <div style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.25)', borderRadius: '10px', padding: '10px 14px', fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                <strong style={{ color: '#F59E0B' }}>Official Promotion Path:</strong> When a community pack is peer-reviewed and integrated into the official Synapse distribution repository, the author receives formal credits and official badge accreditation rights with explicit owner consent.
              </div>
            </div>
          </div>

          {/* Interactive Certificate Preview Canvas */}
          <div className="cert-frame">
            <div className="cert-corner-decor cert-tl" />
            <div className="cert-corner-decor cert-tr" />
            <div className="cert-corner-decor cert-bl" />
            <div className="cert-corner-decor cert-br" />

            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', borderRadius: '100px', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.35)', color: '#F59E0B', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
                <Award size={14} /> Official Certificate of Mastery
              </div>
              <h2 style={{ fontSize: '30px', fontWeight: 800, letterSpacing: '-0.01em', background: 'linear-gradient(135deg, #FFF 0%, #F59E0B 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                SYNAPSE ACADEMIC INSTITUTE
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Spaced Repetition &amp; Cognitive Retention Assessment Registry
              </p>
            </div>

            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 28px' }}>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                This is to certify that the scholar has achieved verified 100% mastery threshold in:
              </p>
              <div style={{ fontSize: '24px', fontWeight: 800, color: '#3B82F6', marginBottom: '8px' }}>
                C Systems Programming &amp; Architecture
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Having successfully progressed all 15 curriculum modules (101 verified questions) through the 8-stage active recall hierarchy (Apprentice → Guru → Master → Burned) in accordance with the Synapse Spaced Repetition Engine protocol.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px', borderTop: '1px solid rgba(245, 158, 11, 0.2)', borderBottom: '1px solid rgba(245, 158, 11, 0.2)', padding: '20px 0', margin: '0 auto 28px', maxWidth: '800px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>Credential Serial</div>
                <div className="mono-font" style={{ fontSize: '14px', fontWeight: 700, color: '#F59E0B' }}>SYN-CPROG-8F39-VERIFIED</div>
              </div>
              <div className="cert-seal">
                <Award size={36} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>Verification URL</div>
                <div className="mono-font" style={{ fontSize: '14px', fontWeight: 700, color: '#10B981' }}>synapse.sanchez.ph/verify</div>
              </div>
            </div>

            {/* Social Share & Verification Action Group */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Link
                href="/certificate"
                className="btn btn-gold"
                style={{ padding: '12px 22px', fontSize: '14px' }}
              >
                <Award size={16} /> Open &amp; Customize Certificate
              </Link>
              <a
                href="https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=C+Programming+Mastery&organizationName=Synapse+SRS&issueYear=2026&issueMonth=8&certUrl=https://synapse.sanchez.ph/verify?id=SYN-CPROG-8F39-VERIFIED"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-linkedin"
                style={{ padding: '12px 20px', fontSize: '14px' }}
              >
                <Share2 size={16} /> Add to LinkedIn Profile
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://synapse.sanchez.ph/verify?id=SYN-CPROG-8F39-VERIFIED"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-facebook"
                style={{ padding: '12px 20px', fontSize: '14px' }}
              >
                <Share2 size={16} /> Post to Facebook Timeline
              </a>
            </div>
          </div>
        </section>

        {/* Interactive In-Browser Quiz Demo */}
        <section className="section">
          <div className="section-header">
            <div className="badge badge-academic" style={{ marginBottom: '12px' }}>
              <Code2 size={14} /> Interactive Live Review Demo
            </div>
            <h2 className="section-title">Experience Spaced Recall in Action</h2>
            <p className="section-subtitle">
              Answer the question below to experience Synapse&apos;s instant feedback, stage progression logic, and contextual academic explanations.
            </p>
          </div>

          <div className="card" style={{ maxWidth: '820px', margin: '0 auto', padding: '34px', border: '1.5px solid rgba(108, 99, 255, 0.35)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <span className="badge badge-official" style={{ fontSize: '12px', marginRight: '8px' }}>
                  {currentQuiz.subject}
                </span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{currentQuiz.topic}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-dim)' }}>Simulated SRS Stage:</span>
                <span style={{ fontSize: '13px', fontWeight: 800, color: SRS_STAGES[cardStage].color, padding: '2px 8px', borderRadius: '6px', background: `${SRS_STAGES[cardStage].color}22` }}>
                  {SRS_STAGES[cardStage].label}
                </span>
              </div>
            </div>

            <h3 style={{ fontSize: '19px', fontWeight: 700, lineHeight: 1.45, marginBottom: '24px' }}>
              {currentQuiz.question}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
              {currentQuiz.choices.map((c) => {
                const isSelected = selectedChoice === c.id;
                const isCorrect = c.id === currentQuiz.correctAnswer;

                let btnBorder = 'var(--border-card)';
                let btnBg = 'var(--bg-card-subtle)';
                let textColor = 'var(--text-main)';

                if (isAnswered) {
                  if (isCorrect) {
                    btnBorder = '2px solid #10B981';
                    btnBg = 'rgba(16, 185, 129, 0.15)';
                    textColor = '#10B981';
                  } else if (isSelected) {
                    btnBorder = '2px solid #EF5350';
                    btnBg = 'rgba(239, 83, 80, 0.15)';
                    textColor = '#EF5350';
                  }
                }

                return (
                  <button
                    key={c.id}
                    onClick={() => handleSelectAnswer(c.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      background: btnBg,
                      border: btnBorder,
                      color: textColor,
                      fontSize: '14px',
                      textAlign: 'left',
                      cursor: isAnswered ? 'default' : 'pointer',
                      transition: 'all 0.18s ease',
                      outline: 'none',
                    }}
                  >
                    <span
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '8px',
                        background: isAnswered && isCorrect ? '#10B981' : isAnswered && isSelected ? '#EF5350' : 'rgba(255,255,255,0.08)',
                        color: isAnswered && (isCorrect || isSelected) ? '#000' : 'var(--text-main)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '13px',
                      }}
                    >
                      {c.id}
                    </span>
                    <span style={{ flex: 1 }}>{c.text}</span>
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-card)', borderRadius: '14px', padding: '16px 20px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: selectedChoice === currentQuiz.correctAnswer ? '#10B981' : '#EF5350', fontWeight: 800, fontSize: '14px', marginBottom: '6px' }}>
                  {selectedChoice === currentQuiz.correctAnswer ? (
                    <>
                      <CheckCircle2 size={18} /> Correct Answer! Promoted to Stage {cardStage} ({SRS_STAGES[cardStage].label})
                    </>
                  ) : (
                    <>
                      <Flame size={18} /> Incorrect. Demoted to Stage {cardStage} ({SRS_STAGES[cardStage].label})
                    </>
                  )}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {currentQuiz.explanation}
                </p>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              {isAnswered && (
                <button onClick={handleNextQuiz} className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '13px' }}>
                  Try Next Question <ChevronRight size={16} />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Modular Knowledge Packs Showcase */}
        <section id="packs" className="section">
          <div className="section-header">
            <div className="badge badge-academic" style={{ marginBottom: '12px' }}>
              <Layers size={14} /> Subject Curriculum Decoupling
            </div>
            <h2 className="section-title">Active Knowledge Pack Catalog</h2>
            <p className="section-subtitle">
              Curricula are completely decoupled from the runtime engine via clean JSON specifications. Complete full sequential modules and earn verifiable accreditation credentials.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '40px' }}>
            {/* C Programming */}
            <div className="card" style={{ borderColor: 'rgba(59, 130, 246, 0.4)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(59, 130, 246, 0.15)', color: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18px' }}>
                  C
                </div>
                <span className="badge badge-official" style={{ fontSize: '11px' }}>
                  Official · Accredited
                </span>
              </div>
              <h3 style={{ fontSize: '19px', marginBottom: '6px' }}>C Systems Programming</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-dim)', marginBottom: '14px' }}>Computer Science · 101 Questions (15 Modules)</p>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '18px', lineHeight: 1.6 }}>
                Full curriculum: Syntax, Data Types, Control Flow, Loops, Arrays, Strings, Functions, Pointers, Structs, Memory Resizing, Architecture, and Level-5 Diagnostic Proofs.
              </p>
              <div style={{ fontSize: '12px', color: '#3B82F6', fontWeight: 700, padding: '8px 12px', borderRadius: '8px', background: 'rgba(59, 130, 246, 0.1)' }}>
                Awards: C Mastery Certificate &amp; Official Badge
              </div>
            </div>

            {/* HTML Fundamentals */}
            <div className="card" style={{ borderColor: 'rgba(228, 77, 38, 0.4)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(228, 77, 38, 0.15)', color: '#E44D26', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18px' }}>
                  &lt;&gt;
                </div>
                <span className="badge badge-official" style={{ fontSize: '11px' }}>
                  Official · Accredited
                </span>
              </div>
              <h3 style={{ fontSize: '19px', marginBottom: '6px' }}>HTML5 &amp; Web Semantics</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-dim)', marginBottom: '14px' }}>Web Development · 138 Questions (15 Modules)</p>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '18px', lineHeight: 1.6 }}>
                Document structure, text formatting, forms &amp; controls, tables, semantic layouts, media streams, graphics (Canvas/SVG), Web Storage, and WCAG accessibility.
              </p>
              <div style={{ fontSize: '12px', color: '#E44D26', fontWeight: 700, padding: '8px 12px', borderRadius: '8px', background: 'rgba(228, 77, 38, 0.1)' }}>
                Awards: Web Semantics Sovereign Credential
              </div>
            </div>

            {/* Pack Studio Interactive Card */}
            <div className="card" style={{ borderColor: 'rgba(16, 185, 129, 0.4)', background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.08) 0%, rgba(20, 20, 36, 0.9) 100%)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(16, 185, 129, 0.2)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                  <Sparkles size={22} />
                </div>
                <span className="badge" style={{ fontSize: '11px', color: '#10B981', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                  Pack Studio
                </span>
              </div>
              <h3 style={{ fontSize: '19px', marginBottom: '6px' }}>Author Custom Packs</h3>
              <p style={{ fontSize: '13px', color: '#10B981', marginBottom: '14px', fontWeight: 600 }}>Visual Builder &amp; Validator</p>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.6 }}>
                Create questions with live previews, module taxonomies, difficulty tiers, and instant JSON exports. Submit pull requests to become an official pack!
              </p>
              <Link href="/studio" className="btn btn-emerald" style={{ width: '100%', justifyContent: 'center', fontSize: '13px' }}>
                Launch Pack Studio &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Upcoming Modules Roadmap Section */}
        <section id="roadmap" className="section">
          <div className="section-header">
            <div className="badge badge-upcoming" style={{ marginBottom: '12px' }}>
              <Compass size={14} /> Curriculum Engineering Pipeline
            </div>
            <h2 className="section-title">Upcoming Knowledge Packs &amp; Modules</h2>
            <p className="section-subtitle">
              We are expanding Synapse with 10 upcoming specialized curricula spanning systems engineering, web standards, data structures, and cloud tooling.
            </p>
          </div>

          <div className="roadmap-grid">
            {UPCOMING_MODULES.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.id} className="roadmap-card">
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: `${item.color}22`, border: `1px solid ${item.color}44`, color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconComp size={20} />
                      </div>
                      <span className="badge-category">
                        {item.eta}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '4px' }}>{item.name}</h3>
                    <div style={{ fontSize: '12px', color: item.color, fontWeight: 600, marginBottom: '10px' }}>
                      {item.category}
                    </div>

                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '16px' }}>
                      {item.modules}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-card)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>Upcoming Badge</span>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: item.color }}>{item.badge}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Academic Comparison Matrix */}
        <section className="section">
          <div className="section-header">
            <div className="badge badge-academic" style={{ marginBottom: '12px' }}>
              <BarChart3 size={14} /> Comparative Evaluation
            </div>
            <h2 className="section-title">Architectural Advantage</h2>
            <p className="section-subtitle">
              How Synapse compares against legacy spaced repetition software and cloud flashcard services.
            </p>
          </div>

          <div className="academic-table-wrap">
            <table className="academic-table">
              <thead>
                <tr>
                  <th>Architecture Dimension</th>
                  <th style={{ color: '#10B981' }}>⚡ Synapse</th>
                  <th>Legacy SRS (e.g. Anki)</th>
                  <th>Cloud Flashcards (e.g. Quizlet)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Data Architecture</strong></td>
                  <td style={{ color: '#10B981', fontWeight: 700 }}>100% Embedded Drift SQLite</td>
                  <td>Local SQLite + Complex sync</td>
                  <td>Remote Closed Cloud Database</td>
                </tr>
                <tr>
                  <td><strong>Curriculum Modularity</strong></td>
                  <td style={{ color: '#10B981', fontWeight: 700 }}>Self-Contained JSON Packs</td>
                  <td>Proprietary .apkg decks</td>
                  <td>Proprietary locked sets</td>
                </tr>
                <tr>
                  <td><strong>Progression Structure</strong></td>
                  <td style={{ color: '#10B981', fontWeight: 700 }}>Strict Sequential Modules (1–15)</td>
                  <td>Randomized Deck Queues</td>
                  <td>Linear Flashcard Stacks</td>
                </tr>
                <tr>
                  <td><strong>Telemetry &amp; Privacy</strong></td>
                  <td style={{ color: '#10B981', fontWeight: 700 }}>0% Tracking · Zero Logins</td>
                  <td>Minimal tracking</td>
                  <td>Aggressive user tracking &amp; ads</td>
                </tr>
                <tr>
                  <td><strong>Verifiable Certification</strong></td>
                  <td style={{ color: '#10B981', fontWeight: 700 }}>Official LinkedIn &amp; FB Certificates</td>
                  <td>None (Self-study only)</td>
                  <td>None / Unverified badges</td>
                </tr>
                <tr>
                  <td><strong>Exam &amp; Cram Modes</strong></td>
                  <td style={{ color: '#10B981', fontWeight: 700 }}>Timed Mocks + Tag Drills + Cram</td>
                  <td>Custom study filtering</td>
                  <td>Basic test modes</td>
                </tr>
                <tr>
                  <td><strong>Visual Studio &amp; Builder</strong></td>
                  <td style={{ color: '#10B981', fontWeight: 700 }}>Interactive Web Pack Studio</td>
                  <td>Desktop card editor</td>
                  <td>Web interface</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Downloads */}
        <section id="downloads" className="section">
          <div className="download-box">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '30px', fontWeight: 800, marginBottom: '8px' }}>
                Download Synapse v1.0.0
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
                100% free, open-source under MIT, self-contained with embedded native SQLite engine.
              </p>
            </div>

            <div className="download-grid">
              {/* Android Card */}
              <div className="download-card">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Smartphone size={24} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '18px' }}>Android Release</h3>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>APK (ARM64 / ARMv7) · Android 8.0+</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
                    Direct APK install with embedded SQLite database, touch-first card gestures, and zero network requirement.
                  </p>
                </div>
                <a
                  href="https://github.com/tildemark/synapse/releases/latest/download/synapse_v1.0.0_android.apk"
                  className="btn btn-emerald"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Download size={16} /> Download .APK (Direct)
                </a>
              </div>

              {/* Windows Card */}
              <div className="download-card">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(59, 130, 246, 0.15)', color: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Monitor size={24} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '18px' }}>Windows Portable</h3>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>ZIP (x64) · Windows 10 / 11</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
                    Standalone portable release with embedded native SQLite engine. No installation or administrator permissions required.
                  </p>
                </div>
                <a
                  href="https://github.com/tildemark/synapse/releases/latest/download/synapse_v1.0.0_windows_x64.zip"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Download size={16} /> Download .ZIP (x64)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Academic & Open-Source Footer */}
        <footer className="footer">
          <div className="footer-grid">
            <div>
              <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <img
                  src="/logo512.png"
                  alt="Synapse Logo"
                  width={28}
                  height={28}
                  style={{ borderRadius: 6, objectFit: 'contain' }}
                />
                <span style={{ fontWeight: 800, fontSize: '18px', letterSpacing: '-0.02em' }}>Synapse</span>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', maxWidth: '340px', lineHeight: 1.6 }}>
                Open-source, domain-agnostic spaced repetition learning platform. Built with Flutter, Riverpod, and Drift SQLite.
              </p>
            </div>
            <div className="footer-col">
              <h5>Curriculum</h5>
              <ul className="footer-links">
                <li><a href="#packs">C Systems Programming (101 Qs)</a></li>
                <li><a href="#packs">HTML5 &amp; Web Semantics (138 Qs)</a></li>
                <li><a href="#roadmap">Upcoming 10 Packs</a></li>
                <li><Link href="/studio">⚡ Pack Studio</Link></li>
                <li><a href="#certification">Academic Credentials</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Credentials &amp; App</h5>
              <ul className="footer-links">
                <li><Link href="/certificate">Certificate Preview</Link></li>
                <li><Link href="/verify">Public Verification Registry</Link></li>
                <li><a href="#downloads">Android &amp; Windows Downloads</a></li>
                <li><a href="https://github.com/tildemark/synapse" target="_blank" rel="noopener noreferrer">Community Contribution</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Legal &amp; Privacy</h5>
              <ul className="footer-links">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><span>100% Offline SQLite Storage</span></li>
                <li><span>Zero Cloud Telemetry Guarantee</span></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Alfredo Sanchez Jr &bull; Synapse. Distributed under the MIT License.</p>
            <p style={{ color: 'var(--text-dim)' }}>Engineered for High-Retention Memory Mastery.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
