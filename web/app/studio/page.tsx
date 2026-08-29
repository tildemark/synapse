'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Plus,
  Trash2,
  Download,
  Copy,
  Github,
  CheckCircle2,
  Sparkles,
  Layers,
  HelpCircle,
  Eye,
  FileUp,
  AlertCircle,
} from 'lucide-react';

interface Module {
  number: number;
  name: string;
}

interface Question {
  id: string;
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  level: number;
  module: number;
  moduleName: string;
}

interface PackData {
  packId: string;
  name: string;
  subject: string;
  icon: string;
  color: string;
  version: number;
  modules: Module[];
  questions: Question[];
}

const DEFAULT_PACK: PackData = {
  packId: 'custom_subject',
  name: 'My Knowledge Pack',
  subject: 'Computer Science',
  icon: 'code',
  color: '#6C63FF',
  version: 1,
  modules: [
    { number: 1, name: 'Module 1: Fundamentals' },
    { number: 2, name: 'Module 2: Advanced Topics' },
  ],
  questions: [
    {
      id: 'q1',
      question: 'What is the primary benefit of spaced repetition learning?',
      a: 'Instant memorization without practice',
      b: 'Long-term retention by testing memory decay thresholds',
      c: 'Decreasing study frequency over time without reviews',
      d: 'Eliminating the need for sleep and memory consolidation',
      answer: 'B',
      explanation:
        'Spaced repetition schedules reviews at expanding intervals right before forgetting occurs, shifting short-term knowledge to long-term memory.',
      level: 1,
      module: 1,
      moduleName: 'Module 1: Fundamentals',
    },
  ],
};

export default function StudioPage() {
  const [pack, setPack] = useState<PackData>(DEFAULT_PACK);
  const [activeTab, setActiveTab] = useState<'metadata' | 'modules' | 'questions' | 'export'>('questions');
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number>(0);
  const [copied, setCopied] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Auto-slugify packId based on Name if default
  const handleNameChange = (name: string) => {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
    setPack((prev) => ({
      ...prev,
      name,
      packId: slug || 'custom_pack',
    }));
  };

  // Add Module
  const addModule = () => {
    const nextNum = pack.modules.length + 1;
    const newMod: Module = { number: nextNum, name: `Module ${nextNum}: Topic Name` };
    setPack((prev) => ({ ...prev, modules: [...prev.modules, newMod] }));
  };

  // Update Module
  const updateModule = (index: number, name: string) => {
    const updated = [...pack.modules];
    updated[index] = { ...updated[index], name };
    // Also sync existing questions attached to this module
    const modNumber = updated[index].number;
    const updatedQuestions = pack.questions.map((q) =>
      q.module === modNumber ? { ...q, moduleName: name } : q
    );
    setPack((prev) => ({ ...prev, modules: updated, questions: updatedQuestions }));
  };

  // Remove Module
  const removeModule = (index: number) => {
    if (pack.modules.length <= 1) return;
    const updated = pack.modules.filter((_, i) => i !== index);
    // Renumber
    const renumbered = updated.map((m, i) => ({ ...m, number: i + 1 }));
    setPack((prev) => ({ ...prev, modules: renumbered }));
  };

  // Add Question
  const addQuestion = () => {
    const firstMod = pack.modules[0] || { number: 1, name: 'General' };
    const newQ: Question = {
      id: `q_${Date.now()}`,
      question: '',
      a: '',
      b: '',
      c: '',
      d: '',
      answer: 'A',
      explanation: '',
      level: 1,
      module: firstMod.number,
      moduleName: firstMod.name,
    };
    setPack((prev) => ({ ...prev, questions: [...prev.questions, newQ] }));
    setSelectedQuestionIndex(pack.questions.length);
  };

  // Update Current Question
  const updateCurrentQuestion = (field: keyof Question, value: any) => {
    const updated = [...pack.questions];
    if (!updated[selectedQuestionIndex]) return;

    if (field === 'module') {
      const mod = pack.modules.find((m) => m.number === Number(value));
      updated[selectedQuestionIndex] = {
        ...updated[selectedQuestionIndex],
        module: Number(value),
        moduleName: mod ? mod.name : 'General',
      };
    } else {
      updated[selectedQuestionIndex] = {
        ...updated[selectedQuestionIndex],
        [field]: value,
      };
    }
    setPack((prev) => ({ ...prev, questions: updated }));
  };

  // Remove Question
  const removeQuestion = (index: number) => {
    if (pack.questions.length <= 1) return;
    const updated = pack.questions.filter((_, i) => i !== index);
    setPack((prev) => ({ ...prev, questions: updated }));
    setSelectedQuestionIndex(Math.max(0, index - 1));
  };

  // Generate Clean Schema JSON
  const generateCleanJson = () => {
    const cleanQuestions = pack.questions.map((q) => ({
      question: q.question,
      a: q.a,
      b: q.b,
      c: q.c,
      d: q.d,
      answer: q.answer,
      explanation: q.explanation,
      level: q.level,
      module: q.module,
      moduleName: q.moduleName,
    }));

    return JSON.stringify(
      {
        packId: pack.packId,
        name: pack.name,
        subject: pack.subject,
        icon: pack.icon,
        color: pack.color,
        version: pack.version,
        modules: pack.modules,
        questions: cleanQuestions,
      },
      null,
      2
    );
  };

  // Download JSON
  const handleDownload = () => {
    const jsonStr = generateCleanJson();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pack_${pack.packId}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Copy to Clipboard
  const handleCopy = () => {
    const jsonStr = generateCleanJson();
    navigator.clipboard.writeText(jsonStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Import JSON File
  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (!parsed.packId || !parsed.questions || !Array.isArray(parsed.questions)) {
          throw new Error('Invalid Knowledge Pack JSON format');
        }
        setPack({
          packId: parsed.packId || 'imported_pack',
          name: parsed.name || 'Imported Pack',
          subject: parsed.subject || 'General',
          icon: parsed.icon || 'code',
          color: parsed.color || '#6C63FF',
          version: parsed.version || 1,
          modules: parsed.modules || [{ number: 1, name: 'General' }],
          questions: parsed.questions.map((q: any, i: number) => ({
            id: `q_imported_${i}`,
            question: q.question || '',
            a: q.a || '',
            b: q.b || '',
            c: q.c || '',
            d: q.d || '',
            answer: q.answer || 'A',
            explanation: q.explanation || '',
            level: q.level || 1,
            module: q.module || 1,
            moduleName: q.moduleName || 'General',
          })),
        });
        setSelectedQuestionIndex(0);
        setValidationError(null);
      } catch (err: any) {
        setValidationError(`Import error: ${err.message}`);
      }
    };
    reader.readAsText(file);
  };

  // Submit GitHub PR / Issue
  const handleGitHubSubmit = () => {
    const jsonStr = generateCleanJson();
    const title = encodeURIComponent(`[Community Pack] ${pack.name} (${pack.questions.length} questions)`);
    const body = encodeURIComponent(
      `### 📦 New Community Knowledge Pack Submission\n\n` +
        `**Pack Name:** ${pack.name}\n` +
        `**Pack ID:** \`${pack.packId}\`\n` +
        `**Subject:** ${pack.subject}\n` +
        `**Question Count:** ${pack.questions.length}\n` +
        `**Modules:** ${pack.modules.map((m) => m.name).join(', ')}\n\n` +
        `#### 📄 Manifest JSON:\n\`\`\`json\n${jsonStr}\n\`\`\`\n\n` +
        `*Created via Synapse Pack Studio (synapse.sanchez.ph/studio)*`
    );
    window.open(`https://github.com/tildemark/synapse/issues/new?title=${title}&body=${body}`, '_blank');
  };

  const currentQ = pack.questions[selectedQuestionIndex] || pack.questions[0];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)', color: 'var(--text-main)', paddingBottom: '80px' }}>
      <div className="glow-backdrop" />

      <div className="container" style={{ maxWidth: '1300px', paddingTop: '24px' }}>
        {/* Header Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link href="/" className="btn btn-secondary" style={{ padding: '8px 14px' }}>
              <ArrowLeft size={16} /> Home
            </Link>
            <div>
              <h1 style={{ fontSize: '24px', fontWeight: 800 }}>⚡ Synapse Pack Studio</h1>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Visual Builder &amp; Schema Generator for Community Knowledge Packs
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <label className="btn btn-secondary" style={{ cursor: 'pointer', padding: '8px 14px', fontSize: '13px' }}>
              <FileUp size={16} /> Import JSON
              <input type="file" accept=".json" onChange={handleImportJson} style={{ display: 'none' }} />
            </label>
            <button onClick={handleDownload} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
              <Download size={16} /> Export pack_{pack.packId}.json
            </button>
          </div>
        </div>

        {validationError && (
          <div style={{ background: 'rgba(239, 83, 80, 0.15)', border: '1px solid #EF5350', padding: '12px 16px', borderRadius: '12px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <AlertCircle size={18} color="#EF5350" />
            <span style={{ fontSize: '14px', color: '#EF5350' }}>{validationError}</span>
          </div>
        )}

        {/* Tab Switcher */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid var(--border-card)', paddingBottom: '12px' }}>
          <button
            onClick={() => setActiveTab('questions')}
            className={`btn ${activeTab === 'questions' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '8px 16px', fontSize: '13px' }}
          >
            <HelpCircle size={16} /> Questions ({pack.questions.length})
          </button>
          <button
            onClick={() => setActiveTab('modules')}
            className={`btn ${activeTab === 'modules' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '8px 16px', fontSize: '13px' }}
          >
            <Layers size={16} /> Modules ({pack.modules.length})
          </button>
          <button
            onClick={() => setActiveTab('metadata')}
            className={`btn ${activeTab === 'metadata' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '8px 16px', fontSize: '13px' }}
          >
            <Sparkles size={16} /> Pack Metadata &amp; Branding
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`btn ${activeTab === 'export' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '8px 16px', fontSize: '13px' }}
          >
            <Download size={16} /> Export &amp; Submit PR
          </button>
        </div>

        {/* Studio Body: Editor & Preview Split */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '24px' }}>
          {/* Left Column: Form Editors */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* TAB: QUESTIONS */}
            {activeTab === 'questions' && (
              <div className="card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontWeight: 800, fontSize: '16px' }}>Question {selectedQuestionIndex + 1} of {pack.questions.length}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={addQuestion} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>
                      <Plus size={14} /> Add Card
                    </button>
                    {pack.questions.length > 1 && (
                      <button onClick={() => removeQuestion(selectedQuestionIndex)} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px', color: '#EF5350' }}>
                        <Trash2 size={14} /> Delete
                      </button>
                    )}
                  </div>
                </div>

                {/* Horizontal Question Index Bar */}
                <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '20px' }}>
                  {pack.questions.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedQuestionIndex(i)}
                      style={{
                        minWidth: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        border: i === selectedQuestionIndex ? '2px solid var(--primary)' : '1px solid var(--border-card)',
                        background: i === selectedQuestionIndex ? 'rgba(108, 99, 255, 0.25)' : 'var(--bg-card-subtle)',
                        color: i === selectedQuestionIndex ? '#fff' : 'var(--text-muted)',
                        fontWeight: 'bold',
                        fontSize: '12px',
                        cursor: 'pointer',
                      }}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                {currentQ && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Question Prompt */}
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                        Question Prompt *
                      </label>
                      <textarea
                        value={currentQ.question}
                        onChange={(e) => updateCurrentQuestion('question', e.target.value)}
                        placeholder="e.g. Which of the following declares a pointer to an integer in C?"
                        rows={3}
                        style={{
                          width: '100%',
                          background: 'var(--bg-card-subtle)',
                          border: '1px solid var(--border-card)',
                          borderRadius: '12px',
                          color: '#fff',
                          padding: '12px',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                    </div>

                    {/* Choices A, B, C, D */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <label style={{ fontSize: '13px', fontWeight: 600 }}>Choices &amp; Correct Answer *</label>
                      {(['A', 'B', 'C', 'D'] as const).map((letter) => {
                        const fieldKey = letter.toLowerCase() as 'a' | 'b' | 'c' | 'd';
                        const isCorrect = currentQ.answer === letter;
                        return (
                          <div key={letter} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <button
                              type="button"
                              onClick={() => updateCurrentQuestion('answer', letter)}
                              style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '10px',
                                border: isCorrect ? '2px solid #10B981' : '1px solid var(--border-card)',
                                background: isCorrect ? '#10B981' : 'var(--bg-card-subtle)',
                                color: isCorrect ? '#000' : 'var(--text-muted)',
                                fontWeight: 800,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                              title="Click to set as correct answer"
                            >
                              {letter}
                            </button>
                            <input
                              type="text"
                              value={currentQ[fieldKey]}
                              onChange={(e) => updateCurrentQuestion(fieldKey, e.target.value)}
                              placeholder={`Option ${letter} text...`}
                              style={{
                                flex: 1,
                                background: 'var(--bg-card-subtle)',
                                border: isCorrect ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid var(--border-card)',
                                borderRadius: '10px',
                                color: '#fff',
                                padding: '10px 14px',
                                fontSize: '14px',
                                outline: 'none',
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>

                    {/* Module & Difficulty */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                          Module Assignment
                        </label>
                        <select
                          value={currentQ.module}
                          onChange={(e) => updateCurrentQuestion('module', e.target.value)}
                          style={{
                            width: '100%',
                            background: 'var(--bg-card-subtle)',
                            border: '1px solid var(--border-card)',
                            borderRadius: '10px',
                            color: '#fff',
                            padding: '10px',
                            fontSize: '13px',
                          }}
                        >
                          {pack.modules.map((m) => (
                            <option key={m.number} value={m.number}>
                              {m.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                          Difficulty Level (1-5)
                        </label>
                        <select
                          value={currentQ.level}
                          onChange={(e) => updateCurrentQuestion('level', Number(e.target.value))}
                          style={{
                            width: '100%',
                            background: 'var(--bg-card-subtle)',
                            border: '1px solid var(--border-card)',
                            borderRadius: '10px',
                            color: '#fff',
                            padding: '10px',
                            fontSize: '13px',
                          }}
                        >
                          <option value={1}>Level 1 (Fundamental / Easy)</option>
                          <option value={2}>Level 2 (Intermediate)</option>
                          <option value={3}>Level 3 (Advanced / Tricky)</option>
                          <option value={4}>Level 4 (Expert)</option>
                          <option value={5}>Level 5 (Mastery / Edge-Case)</option>
                        </select>
                      </div>
                    </div>

                    {/* Explanation */}
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                        Explanation (Shown after answering) *
                      </label>
                      <textarea
                        value={currentQ.explanation}
                        onChange={(e) => updateCurrentQuestion('explanation', e.target.value)}
                        placeholder="Explain why the correct answer is right and clarify common mistakes..."
                        rows={2}
                        style={{
                          width: '100%',
                          background: 'var(--bg-card-subtle)',
                          border: '1px solid var(--border-card)',
                          borderRadius: '12px',
                          color: '#fff',
                          padding: '12px',
                          fontSize: '13px',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB: MODULES */}
            {activeTab === 'modules' && (
              <div className="card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Subject Modules &amp; Chapters</h3>
                  <button onClick={addModule} className="btn btn-primary" style={{ padding: '6px 14px', fontSize: '13px' }}>
                    <Plus size={14} /> Add Module
                  </button>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  Modules group related concepts for tag drills, chapter mastery tracking, and lesson pacing.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {pack.modules.map((m, idx) => (
                    <div key={m.number} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '12px' }}>
                        {m.number}
                      </span>
                      <input
                        type="text"
                        value={m.name}
                        onChange={(e) => updateModule(idx, e.target.value)}
                        style={{
                          flex: 1,
                          background: 'var(--bg-card-subtle)',
                          border: '1px solid var(--border-card)',
                          borderRadius: '10px',
                          color: '#fff',
                          padding: '10px 14px',
                          fontSize: '14px',
                        }}
                      />
                      {pack.modules.length > 1 && (
                        <button
                          onClick={() => removeModule(idx)}
                          className="btn btn-secondary"
                          style={{ padding: '8px 12px', color: '#EF5350' }}
                          title="Delete module"
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: METADATA */}
            {activeTab === 'metadata' && (
              <div className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px' }}>Pack Metadata &amp; Branding</h3>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                    Knowledge Pack Name *
                  </label>
                  <input
                    type="text"
                    value={pack.name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    placeholder="e.g. Linux Command Line Mastery"
                    style={{
                      width: '100%',
                      background: 'var(--bg-card-subtle)',
                      border: '1px solid var(--border-card)',
                      borderRadius: '10px',
                      color: '#fff',
                      padding: '10px 14px',
                      fontSize: '14px',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      Pack Identifier (packId)
                    </label>
                    <input
                      type="text"
                      value={pack.packId}
                      onChange={(e) => setPack((prev) => ({ ...prev, packId: e.target.value }))}
                      placeholder="e.g. linux_commands"
                      style={{
                        width: '100%',
                        background: 'var(--bg-card-subtle)',
                        border: '1px solid var(--border-card)',
                        borderRadius: '10px',
                        color: '#fff',
                        padding: '10px 14px',
                        fontSize: '14px',
                        fontFamily: 'JetBrains Mono',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      Subject Category
                    </label>
                    <input
                      type="text"
                      value={pack.subject}
                      onChange={(e) => setPack((prev) => ({ ...prev, subject: e.target.value }))}
                      placeholder="e.g. Computer Science, DevOps, Mathematics"
                      style={{
                        width: '100%',
                        background: 'var(--bg-card-subtle)',
                        border: '1px solid var(--border-card)',
                        borderRadius: '10px',
                        color: '#fff',
                        padding: '10px 14px',
                        fontSize: '14px',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      Brand Hex Color
                    </label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <input
                        type="color"
                        value={pack.color}
                        onChange={(e) => setPack((prev) => ({ ...prev, color: e.target.value }))}
                        style={{ width: '42px', height: '42px', borderRadius: '10px', border: 'none', cursor: 'pointer', background: 'transparent' }}
                      />
                      <input
                        type="text"
                        value={pack.color}
                        onChange={(e) => setPack((prev) => ({ ...prev, color: e.target.value }))}
                        style={{
                          flex: 1,
                          background: 'var(--bg-card-subtle)',
                          border: '1px solid var(--border-card)',
                          borderRadius: '10px',
                          color: '#fff',
                          padding: '10px 14px',
                          fontFamily: 'JetBrains Mono',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      Icon Name (Material Icons)
                    </label>
                    <select
                      value={pack.icon}
                      onChange={(e) => setPack((prev) => ({ ...prev, icon: e.target.value }))}
                      style={{
                        width: '100%',
                        background: 'var(--bg-card-subtle)',
                        border: '1px solid var(--border-card)',
                        borderRadius: '10px',
                        color: '#fff',
                        padding: '10px',
                      }}
                    >
                      <option value="code">code (Programming / CS)</option>
                      <option value="terminal">terminal (DevOps / Linux)</option>
                      <option value="functions">functions (Math / Algebra)</option>
                      <option value="science">science (Physics / Chemistry)</option>
                      <option value="grid_view">grid_view (Excel / Productivity)</option>
                      <option value="school">school (Academic / General)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: EXPORT & PR */}
            {activeTab === 'export' && (
              <div className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px' }}>Export &amp; Community Submission</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    Your Knowledge Pack is validated and ready to be imported into the Synapse app or submitted to the official community repository.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <button onClick={handleDownload} className="btn btn-primary" style={{ justifyContent: 'center' }}>
                    <Download size={16} /> Download pack_{pack.packId}.json
                  </button>
                  <button onClick={handleGitHubSubmit} className="btn btn-secondary" style={{ justifyContent: 'center', borderColor: '#10B981', color: '#10B981' }}>
                    <Github size={16} /> Submit PR to Synapse GitHub
                  </button>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600 }}>Canonical JSON Output</label>
                    <button onClick={handleCopy} className="btn btn-secondary" style={{ padding: '4px 10px', fontSize: '12px' }}>
                      {copied ? <CheckCircle2 size={14} color="#10B981" /> : <Copy size={14} />}
                      {copied ? 'Copied!' : 'Copy JSON'}
                    </button>
                  </div>
                  <pre
                    style={{
                      background: '#07070D',
                      border: '1px solid var(--border-card)',
                      borderRadius: '12px',
                      padding: '16px',
                      fontSize: '12px',
                      maxHeight: '260px',
                      overflowY: 'auto',
                      color: '#A78BFA',
                    }}
                  >
                    {generateCleanJson()}
                  </pre>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Live In-App Card Simulator */}
          <div>
            <div style={{ position: 'sticky', top: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '13px', fontWeight: 600 }}>
                <Eye size={16} /> In-App Card Simulator (Live Preview)
              </div>

              {/* Phone Frame Simulator */}
              <div
                style={{
                  background: 'linear-gradient(180deg, #151528 0%, #0F0F1A 100%)',
                  border: `2px solid ${pack.color}`,
                  borderRadius: '28px',
                  padding: '24px',
                  boxShadow: `0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px ${pack.color}25`,
                }}
              >
                {/* Pack Header Pill */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: `${pack.color}35`, color: pack.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '12px' }}>
                      ⚡
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 700 }}>{pack.name || 'Pack Name'}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{currentQ?.moduleName || 'Module Name'}</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: `${pack.color}25`, color: pack.color }}>
                    Level {currentQ?.level || 1}
                  </span>
                </div>

                {/* Question Prompt */}
                <div style={{ fontSize: '15px', fontWeight: 700, lineHeight: 1.5, marginBottom: '20px' }}>
                  {currentQ?.question || 'Your question prompt will appear here...'}
                </div>

                {/* Choices */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  {(['A', 'B', 'C', 'D'] as const).map((letter) => {
                    const fieldKey = letter.toLowerCase() as 'a' | 'b' | 'c' | 'd';
                    const isCorrect = currentQ?.answer === letter;
                    return (
                      <div
                        key={letter}
                        style={{
                          background: isCorrect ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                          border: isCorrect ? '1.5px solid #10B981' : '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '12px',
                          padding: '10px 14px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          fontSize: '13px',
                        }}
                      >
                        <span
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '6px',
                            background: isCorrect ? '#10B981' : 'rgba(255, 255, 255, 0.1)',
                            color: isCorrect ? '#000' : '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            fontSize: '11px',
                          }}
                        >
                          {letter}
                        </span>
                        <span style={{ color: currentQ?.[fieldKey] ? '#fff' : 'var(--text-muted)' }}>
                          {currentQ?.[fieldKey] || `Option ${letter}...`}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Explanation Box */}
                {currentQ?.explanation && (
                  <div
                    style={{
                      background: 'rgba(108, 99, 255, 0.1)',
                      border: '1px solid rgba(108, 99, 255, 0.3)',
                      borderRadius: '12px',
                      padding: '12px',
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                      lineHeight: 1.5,
                    }}
                  >
                    <strong style={{ color: '#A78BFA', display: 'block', marginBottom: '4px' }}>💡 Explanation:</strong>
                    {currentQ.explanation}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
