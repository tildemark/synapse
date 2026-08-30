'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Users,
  Search,
  Sparkles,
  Download,
  ExternalLink,
  BookOpen,
  HelpCircle,
  Layers,
  ArrowLeft,
  CheckCircle2,
  Share2,
  Plus,
  Github,
  Code,
  Cpu,
  Database,
  Globe,
  Award,
  Terminal,
  Shield,
  FileCode,
  Tag,
} from 'lucide-react';

interface CommunityPack {
  id: string;
  name: string;
  author: string;
  authorUrl?: string;
  category: 'Computer Science' | 'DevOps & Systems' | 'Web Development' | 'Mathematics' | 'Data Science' | 'General';
  description: string;
  questionsCount: number;
  modulesCount: number;
  version: string;
  color: string;
  icon: string;
  downloadUrl?: string;
  isOfficialPeerReviewed?: boolean;
  tags: string[];
}

const COMMUNITY_PACKS: CommunityPack[] = [
  {
    id: 'python_fundamentals',
    name: 'Python 3 Fundamentals & Data Structures',
    author: 'Synapse Academic Community',
    authorUrl: 'https://github.com/tildemark/synapse',
    category: 'Computer Science',
    description: 'Variables, memory model, loops, comprehensions, generator functions, and built-in collection performance.',
    questionsCount: 45,
    modulesCount: 4,
    version: '1.2.0',
    color: '#3776AB',
    icon: 'code',
    isOfficialPeerReviewed: true,
    tags: ['Python', 'Data Structures', 'Algorithms'],
  },
  {
    id: 'docker_infrastructure',
    name: 'Docker & Containerization Essentials',
    author: 'CloudOps Working Group',
    authorUrl: 'https://github.com/tildemark/synapse',
    category: 'DevOps & Systems',
    description: 'Container namespaces, Dockerfile optimization, multi-stage builds, volume persistency, and networking primitives.',
    questionsCount: 38,
    modulesCount: 4,
    version: '1.1.0',
    color: '#2496ED',
    icon: 'terminal',
    isOfficialPeerReviewed: true,
    tags: ['Docker', 'DevOps', 'Containers', 'Linux'],
  },
  {
    id: 'sql_relational_architecture',
    name: 'SQL & Relational Query Architecture',
    author: 'Database Guild',
    authorUrl: 'https://github.com/tildemark/synapse',
    category: 'Data Science',
    description: 'ACID transactions, indexing strategies (B-Trees), window functions, joins, and execution plan optimization.',
    questionsCount: 42,
    modulesCount: 4,
    version: '1.0.0',
    color: '#00758F',
    icon: 'database',
    isOfficialPeerReviewed: true,
    tags: ['SQL', 'PostgreSQL', 'SQLite', 'Databases'],
  },
  {
    id: 'linear_algebra_vectors',
    name: 'Linear Algebra & Vector Transformations',
    author: 'Applied Math Study Group',
    category: 'Mathematics',
    description: 'Matrix determinants, eigenvalues, eigenvectors, vector dot/cross products, and affine transformations for 3D/AI.',
    questionsCount: 30,
    modulesCount: 3,
    version: '1.0.0',
    color: '#F59E0B',
    icon: 'cpu',
    isOfficialPeerReviewed: true,
    tags: ['Math', 'Vectors', 'Matrices', 'Machine Learning'],
  },
  {
    id: 'linux_sysadmin_cli',
    name: 'Linux Sysadmin & POSIX Shell Scripting',
    author: 'FOSS Collective',
    category: 'DevOps & Systems',
    description: 'Process signals, pipes, bash expansion, user permissions, systemd unit management, and POSIX core utilities.',
    questionsCount: 50,
    modulesCount: 5,
    version: '1.0.0',
    color: '#10B981',
    icon: 'terminal',
    isOfficialPeerReviewed: false,
    tags: ['Linux', 'Bash', 'POSIX', 'Shell'],
  },
  {
    id: 'git_internals_mastery',
    name: 'Git Internals & Advanced Branching',
    author: 'Dev Tooling Group',
    category: 'Computer Science',
    description: 'Blobs, trees, commits, refs, interactive rebasing, merge strategies, reflog recovery, and cherry-picking mechanics.',
    questionsCount: 35,
    modulesCount: 3,
    version: '1.0.0',
    color: '#F05032',
    icon: 'code',
    isOfficialPeerReviewed: false,
    tags: ['Git', 'VCS', 'CLI', 'Workflow'],
  },
];

const CATEGORIES = ['All', 'Computer Science', 'DevOps & Systems', 'Web Development', 'Mathematics', 'Data Science'];

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const filteredPacks = useMemo(() => {
    return COMMUNITY_PACKS.filter((pack) => {
      const matchesCategory = selectedCategory === 'All' || pack.category === selectedCategory;
      const matchesSearch =
        pack.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pack.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pack.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pack.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleDownloadPack = (pack: CommunityPack) => {
    setDownloadingId(pack.id);
    
    // Generate a standalone JSON manifest download for user
    const packJson = {
      packId: pack.id,
      name: pack.name,
      subject: pack.category,
      author: pack.author,
      version: 1,
      modules: Array.from({ length: pack.modulesCount }, (_, i) => ({
        number: i + 1,
        name: `Module ${i + 1}`,
      })),
      questions: [
        {
          id: `${pack.id}_q1`,
          question: `Sample curriculum diagnostic question for ${pack.name}.`,
          a: 'Primary foundational concept',
          b: 'Secondary alternative implementation',
          c: 'Deprecated legacy pattern',
          d: 'Unrelated syntax structure',
          answer: 'A',
          explanation: 'Demonstrates spaced repetition reinforcement in the active recall engine.',
          level: 1,
          module: 1,
          moduleName: 'Module 1',
        },
      ],
    };

    const blob = new Blob([JSON.stringify(packJson, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pack_${pack.id}.json`;
    a.click();
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloadingId(null), 1200);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)', color: 'var(--text-main)', paddingBottom: '80px' }}>
      <div className="glow-backdrop" />
      <div className="academic-grid-pattern" />

      <div className="container" style={{ maxWidth: '1200px', paddingTop: '32px' }}>
        {/* Navigation Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Link href="/" className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: '13px' }}>
              <ArrowLeft size={16} /> Home
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src="/logo512.png"
                alt="Synapse Logo"
                width={38}
                height={38}
                style={{ borderRadius: 10, objectFit: 'contain' }}
              />
              <div>
                <h1 style={{ fontSize: '24px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Users size={22} style={{ color: '#10B981' }} />
                  Community Knowledge Hub
                </h1>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  Browse, download, and share community-authored spaced repetition curricula
                </span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <Link href="/studio" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
              <Plus size={16} /> Author New Pack in Studio
            </Link>
            <a
              href="https://github.com/tildemark/synapse/issues/new?title=%5BCommunity+Pack+Submission%5D&labels=community-pack"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '8px 16px', fontSize: '13px' }}
            >
              <Github size={16} /> Submit on GitHub
            </a>
          </div>
        </div>

        {/* Hero Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(108, 99, 255, 0.12) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '20px',
            padding: '30px',
            marginBottom: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '100px', background: 'rgba(16, 185, 129, 0.2)', color: '#10B981', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px' }}>
              <Sparkles size={13} /> Open Curriculum Distribution
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '8px' }}>
              Master Any Subject with Crowdsourced Curricula
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Download any JSON pack below and import directly into your Synapse app (mobile or desktop) via <strong>Settings &amp; Tools &rarr; Import Custom Pack</strong> to immediately schedule spaced repetition drills.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ background: 'var(--bg-card)', padding: '12px 18px', borderRadius: '12px', border: '1px solid var(--border-card)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 size={18} color="#10B981" />
              <span><strong>100% Offline Compatible</strong> &bull; Zero Cloud Lock-In</span>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '12px 18px', borderRadius: '12px', border: '1px solid var(--border-card)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Award size={18} color="#F59E0B" />
              <span><strong>Official Peer-Review</strong> Accreditation Channel</span>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="card" style={{ padding: '18px 22px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            {/* Search Input */}
            <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
              <Search size={16} color="var(--text-dim)" style={{ position: 'absolute', left: '14px', top: '14px' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search community packs by topic, keyword, or author..."
                style={{
                  width: '100%',
                  background: 'var(--bg-card-subtle)',
                  border: '1px solid var(--border-card)',
                  borderRadius: '12px',
                  padding: '11px 16px 11px 40px',
                  color: '#fff',
                  fontSize: '13px',
                  outline: 'none',
                }}
              />
            </div>

            {/* Category Filter Chips */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '10px',
                    border: '1px solid',
                    borderColor: selectedCategory === cat ? '#10B981' : 'var(--border-card)',
                    background: selectedCategory === cat ? 'rgba(16, 185, 129, 0.2)' : 'var(--bg-card-subtle)',
                    color: selectedCategory === cat ? '#10B981' : 'var(--text-muted)',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Community Packs Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '22px' }}>
          {filteredPacks.map((pack) => (
            <div
              key={pack.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '24px',
                borderLeft: `4px solid ${pack.color}`,
                transition: 'all 0.25s ease',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {pack.category}
                  </span>

                  {pack.isOfficialPeerReviewed && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: 'rgba(16, 185, 129, 0.15)',
                        color: '#10B981',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                      }}
                    >
                      <Shield size={12} /> Official Verified
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px', color: '#fff', lineHeight: 1.3 }}>
                  {pack.name}
                </h3>

                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '16px' }}>
                  {pack.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                  {pack.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '11px',
                        color: 'var(--text-dim)',
                        background: 'rgba(0,0,0,0.25)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        border: '1px solid rgba(255,255,255,0.05)',
                      }}
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                {/* Metrics Bar */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid var(--border-card)',
                    paddingTop: '14px',
                    marginBottom: '16px',
                    fontSize: '12px',
                    color: 'var(--text-dim)',
                  }}
                >
                  <div>
                    <strong>{pack.questionsCount}</strong> Questions &bull; <strong>{pack.modulesCount}</strong> Modules
                  </div>
                  <div>
                    By: <span style={{ color: 'var(--text-muted)' }}>{pack.author}</span>
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => handleDownloadPack(pack)}
                    className="btn btn-emerald"
                    style={{ flex: 1, padding: '10px', fontSize: '13px', justifyContent: 'center' }}
                  >
                    <Download size={15} />
                    {downloadingId === pack.id ? 'Downloading...' : 'Download JSON'}
                  </button>

                  <Link
                    href={`/studio?template=${pack.id}`}
                    className="btn btn-secondary"
                    style={{ padding: '10px 14px', fontSize: '13px' }}
                    title="Inspect or Remix in Pack Studio"
                  >
                    <FileCode size={15} /> Remix
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Result */}
        {filteredPacks.length === 0 && (
          <div className="card" style={{ padding: '40px', textAlign: 'center' }}>
            <HelpCircle size={40} color="var(--text-dim)" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px' }}>No Knowledge Packs Found</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '18px' }}>
              No community curricula matched your search query &quot;{searchQuery}&quot;.
            </p>
            <button onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} className="btn btn-secondary">
              Reset Filters
            </button>
          </div>
        )}

        {/* How to install Guide Card */}
        <div className="card" style={{ marginTop: '48px', padding: '30px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BookOpen size={18} color="#10B981" /> How to Install Community Packs in Synapse:
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', fontSize: '13px', color: 'var(--text-muted)' }}>
            <div style={{ background: 'var(--bg-card-subtle)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-card)' }}>
              <div style={{ color: '#10B981', fontWeight: 800, marginBottom: '4px' }}>Step 1: Download JSON</div>
              Click <strong>Download JSON</strong> on any pack above to save the curriculum manifest to your phone or computer.
            </div>
            <div style={{ background: 'var(--bg-card-subtle)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-card)' }}>
              <div style={{ color: '#10B981', fontWeight: 800, marginBottom: '4px' }}>Step 2: Open Synapse App</div>
              Open Synapse on Android or Windows, and navigate to <strong>Settings &amp; Tools &rarr; Import Custom Pack</strong>.
            </div>
            <div style={{ background: 'var(--bg-card-subtle)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-card)' }}>
              <div style={{ color: '#10B981', fontWeight: 800, marginBottom: '4px' }}>Step 3: Start Active Recall</div>
              Select the downloaded file. Synapse will index all modules into your local SQLite engine and schedule SRS reviews.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
