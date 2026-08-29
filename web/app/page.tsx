import Link from 'next/link';
import {
  Zap,
  Download,
  Smartphone,
  Monitor,
  Code2,
  FileCode2,
  BookOpen,
  BrainCircuit,
  Timer,
  BarChart3,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  ExternalLink,
  Github,
} from 'lucide-react';

const SRS_STAGES = [
  { stage: 'Stage 0: Available', interval: 'Unstudied', color: '#64748B', desc: 'Fresh cards waiting in your subject curriculum.' },
  { stage: 'Stage 1: Apprentice I', interval: '4 Hours', color: '#EF5350', desc: 'First study pass completed. Initial retention threshold.' },
  { stage: 'Stage 2: Apprentice II', interval: '8 Hours', color: '#EF5350', desc: 'Quick memory reinforcement checkpoint.' },
  { stage: 'Stage 3: Apprentice III', interval: '24 Hours (1 Day)', color: '#EF5350', desc: 'Daily consolidation test.' },
  { stage: 'Stage 4: Apprentice IV', interval: '48 Hours (2 Days)', color: '#EF5350', desc: 'Final short-term memory verification.' },
  { stage: 'Stage 5: Guru I', interval: '1 Week (168h)', color: '#7C4DFF', desc: 'Medium-term storage established.' },
  { stage: 'Stage 6: Guru II', interval: '2 Weeks (336h)', color: '#7C4DFF', desc: 'Reinforced conceptual retention.' },
  { stage: 'Stage 7: Master', interval: '1 Month (720h)', color: '#1565C0', desc: 'Long-term mastery verified.' },
  { stage: 'Stage 8: Burned', interval: 'Permanent Mastery ♾', color: '#F59E0B', desc: 'Archived from active review queue.' },
];

export default function HomePage() {
  return (
    <div>
      <div className="glow-backdrop" />

      <div className="container">
        {/* Navigation */}
        <nav className="navbar">
          <div className="brand">
            <div className="brand-icon">
              <Zap size={20} />
            </div>
            Synapse
          </div>
          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#srs" className="nav-link">SRS Model</a>
            <a href="#packs" className="nav-link">Packs</a>
            <a href="#downloads" className="nav-link">Downloads</a>
            <a
              href="https://github.com/tildemark/synapse"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '8px 16px', fontSize: '13px' }}
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero">
          <div className="badge">
            <Sparkles size={14} /> Universal Offline SRS Engine v1.0.0
          </div>
          <h1>
            Master Any Subject.<br />
            <span className="gradient-text">Retain Everything.</span>
          </h1>
          <p className="hero-subtitle">
            An offline-first spaced repetition platform engineered for high-retention mastery across technical and academic domains. Install modular Knowledge Packs and progress from Apprentice to Burned.
          </p>
          <div className="hero-cta-group">
            <a href="#downloads" className="btn btn-primary">
              <Download size={18} /> Download Synapse v1.0.0
            </a>
            <a href="#packs" className="btn btn-secondary">
              <BookOpen size={18} /> Explore Knowledge Packs
            </a>
          </div>
        </section>

        {/* Downloads */}
        <section id="downloads" className="section">
          <div className="download-box">
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>
                Download Synapse
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
                100% free, offline, and self-contained with embedded SQLite storage
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
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>APK (ARM64) · Android 8.0+</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>
                    Direct APK install with local SQLite persistence and touch-first review gestures.
                  </p>
                </div>
                <a
                  href="https://github.com/tildemark/synapse/releases/latest/download/synapse_v1.0.0_android.apk"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Download size={16} /> Download .APK
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
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>
                    Standalone portable release with embedded native SQLite engine. No installation required.
                  </p>
                </div>
                <a
                  href="https://github.com/tildemark/synapse/releases/latest/download/synapse_v1.0.0_windows_x64.zip"
                  className="btn btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', borderColor: 'rgba(59, 130, 246, 0.4)' }}
                >
                  <Download size={16} /> Download .ZIP
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="section">
          <h2 className="section-title">Engineered for Permanent Retention</h2>
          <p className="section-subtitle">
            Combines cognitive science algorithms with modular knowledge packaging for distraction-free learning.
          </p>

          <div className="grid-3">
            <div className="card">
              <div className="card-icon-wrap" style={{ background: 'rgba(108, 99, 255, 0.15)', color: '#6C63FF' }}>
                <BrainCircuit size={26} />
              </div>
              <h3>8-Stage SRS Engine</h3>
              <p>Adaptive scheduling algorithms time your reviews exactly as memory decay begins: 4h, 8h, 24h, 48h, 1w, 2w, and 1mo.</p>
            </div>

            <div className="card">
              <div className="card-icon-wrap" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10B981' }}>
                <Code2 size={26} />
              </div>
              <h3>Modular Knowledge Packs</h3>
              <p>Subject curricula are decoupled from the engine. Install, explore, or author custom question packs via clean JSON manifests.</p>
            </div>

            <div className="card">
              <div className="card-icon-wrap" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B' }}>
                <RotateCcw size={26} />
              </div>
              <h3>Cram Mode &amp; Tag Drills</h3>
              <p>Practice specific chapters and weak areas on demand without disrupting your active spaced repetition study schedule.</p>
            </div>

            <div className="card">
              <div className="card-icon-wrap" style={{ background: 'rgba(239, 83, 80, 0.15)', color: '#EF5350' }}>
                <Timer size={26} />
              </div>
              <h3>Timed Mock Exams</h3>
              <p>Simulate exam conditions with configurable countdowns, randomized questions, and diagnostic performance breakdowns.</p>
            </div>

            <div className="card">
              <div className="card-icon-wrap" style={{ background: 'rgba(124, 77, 255, 0.15)', color: '#7C4DFF' }}>
                <BarChart3 size={26} />
              </div>
              <h3>Granular Mastery Analytics</h3>
              <p>Live mastery percentage donuts and module-by-module stage breakdowns give you clear visibility into your progress.</p>
            </div>

            <div className="card">
              <div className="card-icon-wrap" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3B82F6' }}>
                <ShieldCheck size={26} />
              </div>
              <h3>100% Offline-First</h3>
              <p>Zero telemetry, zero logins, and zero cloud lock-in. Everything runs locally in SQLite via Drift.</p>
            </div>
          </div>
        </section>

        {/* SRS Stage Ladder */}
        <section id="srs" className="section">
          <h2 className="section-title">8-Stage SRS Progression Model</h2>
          <p className="section-subtitle">
            Scientific intervals prevent cramming and turn transient understanding into permanent knowledge.
          </p>

          <div className="srs-ladder">
            {SRS_STAGES.map((s, idx) => (
              <div key={idx} className="srs-step">
                <div className="srs-step-info">
                  <div className="srs-dot" style={{ background: s.color }} />
                  <div>
                    <strong style={{ fontSize: '15px' }}>{s.stage}</strong>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{s.desc}</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: s.color }}>
                    {s.interval}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bundled Packs Showcase */}
        <section id="packs" className="section">
          <h2 className="section-title">Bundled Launch Knowledge Packs</h2>
          <p className="section-subtitle">
            Start mastering technical disciplines right away with pre-packaged launch seeds.
          </p>

          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))' }}>
            {/* C Programming */}
            <div className="card" style={{ borderColor: 'rgba(59, 130, 246, 0.4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(59, 130, 246, 0.15)', color: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                  C
                </div>
                <div>
                  <h3 style={{ fontSize: '18px' }}>C Programming</h3>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Computer Science · 15 Questions</span>
                </div>
              </div>
              <p style={{ marginBottom: '16px' }}>
                Master C fundamentals: memory management, pointers, structs, file I/O, bitwise operators, and undefined behavior.
              </p>
              <div style={{ fontSize: '12px', color: '#3B82F6', fontWeight: 600 }}>
                Modules: Basics &amp; Syntax · Pointers &amp; Memory · Structs · File I/O · Stdlib
              </div>
            </div>

            {/* HTML Fundamentals */}
            <div className="card" style={{ borderColor: 'rgba(228, 77, 38, 0.4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(228, 77, 38, 0.15)', color: '#E44D26', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                  &lt;&gt;
                </div>
                <div>
                  <h3 style={{ fontSize: '18px' }}>HTML Fundamentals</h3>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Web Development · 15 Questions</span>
                </div>
              </div>
              <p style={{ marginBottom: '16px' }}>
                Master modern HTML5 semantics, document structure, forms, media, responsive image elements, accessibility, and SEO.
              </p>
              <div style={{ fontSize: '12px', color: '#E44D26', fontWeight: 600 }}>
                Modules: Structure &amp; Meta · Semantics · Forms · Media &amp; Picture · Accessibility &amp; SEO
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-grid">
            <div>
              <div className="brand" style={{ marginBottom: '12px' }}>
                <div className="brand-icon">
                  <Zap size={18} />
                </div>
                Synapse
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', maxWidth: '340px' }}>
                Open-source, multi-domain spaced repetition learning platform. Built with Flutter and Drift SQLite.
              </p>
            </div>
            <div className="footer-col">
              <h5>Navigation</h5>
              <ul className="footer-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#srs">SRS Intervals</a></li>
                <li><a href="#packs">Knowledge Packs</a></li>
                <li><a href="#downloads">Downloads</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Legal &amp; Privacy</h5>
              <ul className="footer-links">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><span>100% Offline SQLite Storage</span></li>
                <li><span>Zero Tracking &amp; Analytics</span></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Alfredo Sanchez Jr &bull; Synapse. Distributed under the MIT License.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
