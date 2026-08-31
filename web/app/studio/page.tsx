'use client';

import React, { useState } from 'react';
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
  Info,
  Lightbulb,
  Check,
  BookOpen,
  GitPullRequest,
  MessageSquare,
} from 'lucide-react';

interface Module {
  number: number;
  name: string;
}

interface Question {
  id: string;
  question: string;
  imageUrl?: string;
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

const TEMPLATES: Record<string, PackData> = {
  cs: {
    packId: 'python_fundamentals',
    name: 'Python Fundamentals',
    subject: 'Computer Science',
    icon: 'code',
    color: '#3B82F6',
    version: 1,
    modules: [
      { number: 1, name: 'Variables & Data Types' },
      { number: 2, name: 'Control Flow & Loops' },
      { number: 3, name: 'Functions & Modules' },
      { number: 4, name: 'Data Structures' },
    ],
    questions: [
      {
        id: 'q1',
        question: 'Which built-in Python function returns the unique memory address identifier of an object?',
        a: 'type()',
        b: 'id()',
        c: 'hex()',
        d: 'address()',
        answer: 'B',
        explanation: 'id() returns the unique integer identity (memory address in CPython) of the specified object.',
        level: 1,
        module: 1,
        moduleName: 'Variables & Data Types',
      },
    ],
  },
  devops: {
    packId: 'docker_essentials',
    name: 'Docker Essentials',
    subject: 'DevOps & Systems',
    icon: 'terminal',
    color: '#10B981',
    version: 1,
    modules: [
      { number: 1, name: 'Images & Containers' },
      { number: 2, name: 'Dockerfile Directives' },
      { number: 3, name: 'Volumes & Networking' },
    ],
    questions: [
      {
        id: 'q1',
        question: 'Which Dockerfile instruction sets the default command that cannot be easily overridden by command line arguments?',
        a: 'CMD',
        b: 'RUN',
        c: 'ENTRYPOINT',
        d: 'ENV',
        answer: 'C',
        explanation: 'ENTRYPOINT specifies the primary executable for the container. CMD serves as default arguments that can be overridden at runtime.',
        level: 2,
        module: 2,
        moduleName: 'Dockerfile Directives',
      },
    ],
  },
  math: {
    packId: 'linear_algebra',
    name: 'Linear Algebra',
    subject: 'Mathematics',
    icon: 'functions',
    color: '#F59E0B',
    version: 1,
    modules: [
      { number: 1, name: 'Vectors & Dot Products' },
      { number: 2, name: 'Matrices & Determinants' },
      { number: 3, name: 'Eigenvalues & Eigenvectors' },
    ],
    questions: [
      {
        id: 'q1',
        question: 'What is the determinant of a 2x2 identity matrix?',
        a: '0',
        b: '1',
        c: '-1',
        d: '2',
        answer: 'B',
        explanation: 'For any identity matrix I, det(I) is always 1.',
        level: 1,
        module: 2,
        moduleName: 'Matrices & Determinants',
      },
    ],
  },
};

export default function StudioPage() {
  const [pack, setPack] = useState<PackData>(TEMPLATES.cs);
  const [activeTab, setActiveTab] = useState<'questions' | 'modules' | 'metadata' | 'export'>('questions');
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number>(0);
  const [copied, setCopied] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [showHelperModal, setShowHelperModal] = useState(false);

  // Auto-slugify packId based on Name
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

  // Validation Engine
  const validatePack = (): string[] => {
    const errors: string[] = [];
    if (!pack.name.trim()) errors.push('Pack Name is required.');
    if (!pack.packId.trim()) errors.push('Pack ID (slug) is required.');
    if (pack.modules.length === 0) errors.push('At least 1 Module is required.');

    pack.questions.forEach((q, idx) => {
      const qNum = idx + 1;
      if (!q.question.trim()) errors.push(`Question #${qNum}: Prompt text is missing.`);
      if (!q.a.trim()) errors.push(`Question #${qNum}: Choice A cannot be blank.`);
      if (!q.b.trim()) errors.push(`Question #${qNum}: Choice B cannot be blank.`);
      if (!q.c.trim()) errors.push(`Question #${qNum}: Choice C cannot be blank.`);
      if (!q.d.trim()) errors.push(`Question #${qNum}: Choice D cannot be blank.`);
      if (!q.explanation.trim()) errors.push(`Question #${qNum}: Explanation is recommended for effective SRS reviews.`);
    });

    return errors;
  };

  // Generate Clean Schema JSON
  const generateCleanJson = () => {
    const cleanQuestions = pack.questions.map((q) => ({
      question: q.question,
      ...(q.imageUrl ? { imageUrl: q.imageUrl } : {}),
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
    const errors = validatePack();
    if (errors.length > 0) {
      setValidationErrors(errors);
      setActiveTab('export');
      return;
    }
    setValidationErrors([]);
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
        const content = event.target?.result as string;
        const parsed = JSON.parse(content);

        // Normalize questions array from various JSON formats
        const rawQuestions = Array.isArray(parsed.questions)
          ? parsed.questions
          : Array.isArray(parsed)
          ? parsed
          : null;

        if (!rawQuestions) {
          throw new Error('JSON file must contain a "questions" list.');
        }

        // Normalize modules
        let loadedModules: Module[] = [];
        if (Array.isArray(parsed.modules) && parsed.modules.length > 0) {
          loadedModules = parsed.modules.map((m: any, i: number) => ({
            number: Number(m.number) || i + 1,
            name: String(m.name || `Module ${i + 1}`),
          }));
        } else {
          // Infer modules from question module names if not explicitly listed
          const moduleSet = new Map<number, string>();
          rawQuestions.forEach((q: any, i: number) => {
            const num = Number(q.module) || 1;
            const name = String(q.moduleName || `Module ${num}`);
            if (!moduleSet.has(num)) {
              moduleSet.set(num, name);
            }
          });

          if (moduleSet.size > 0) {
            loadedModules = Array.from(moduleSet.entries()).map(([number, name]) => ({
              number,
              name,
            }));
          } else {
            loadedModules = [{ number: 1, name: 'General' }];
          }
        }

        // Normalize questions
        const loadedQuestions: Question[] = rawQuestions.map((q: any, i: number) => {
          const rawAnswer = String(q.answer || q.correct_answer || 'A').toUpperCase().trim();
          const validAnswer: 'A' | 'B' | 'C' | 'D' = ['A', 'B', 'C', 'D'].includes(rawAnswer)
            ? (rawAnswer as 'A' | 'B' | 'C' | 'D')
            : 'A';

          const modNum = Number(q.module || q.module_number) || 1;
          const matchingMod = loadedModules.find((m) => m.number === modNum);

          return {
            id: `q_loaded_${Date.now()}_${i}`,
            question: String(q.question || q.prompt || ''),
            a: String(q.a || q.choice_a || q.choiceA || ''),
            b: String(q.b || q.choice_b || q.choiceB || ''),
            c: String(q.c || q.choice_c || q.choiceC || ''),
            d: String(q.d || q.choice_d || q.choiceD || ''),
            answer: validAnswer,
            explanation: String(q.explanation || q.rationale || ''),
            level: Number(q.level || q.difficulty_level || q.difficulty) || 1,
            module: modNum,
            moduleName: matchingMod ? matchingMod.name : String(q.moduleName || q.module_name || 'General'),
          };
        });

        const newPack: PackData = {
          packId: String(parsed.packId || parsed.pack_id || file.name.replace(/\.json$/i, '').replace(/^pack_/i, '') || 'custom_pack'),
          name: String(parsed.name || parsed.title || 'Imported Knowledge Pack'),
          subject: String(parsed.subject || parsed.category || 'General'),
          icon: String(parsed.icon || parsed.iconName || 'code'),
          color: String(parsed.color || '#6C63FF'),
          version: Number(parsed.version) || 1,
          modules: loadedModules,
          questions: loadedQuestions.length > 0 ? loadedQuestions : TEMPLATES.cs.questions,
        };

        setPack(newPack);
        setSelectedQuestionIndex(0);
        setValidationErrors([]);
        setActiveTab('questions');
      } catch (err: any) {
        setValidationErrors([`Failed to load JSON: ${err.message}`]);
      } finally {
        // Reset file input so user can re-import the same file if modified
        e.target.value = '';
      }
    };
    reader.readAsText(file);
  };

  // Open Direct GitHub Pull Request Web Flow
  const handleGitHubPR = () => {
    const errors = validatePack();
    if (errors.length > 0) {
      setValidationErrors(errors);
      setActiveTab('export');
      return;
    }
    setValidationErrors([]);
    const jsonStr = generateCleanJson();

    // Copy JSON to clipboard so user can instantly paste into the GitHub web editor
    try {
      navigator.clipboard.writeText(jsonStr);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Clipboard copy failed:', err);
    }

    // Direct link to create file under assets/packs/ in synapse repo
    const filename = `pack_${pack.packId || 'custom_pack'}.json`;
    const message = encodeURIComponent(`feat(packs): add ${pack.name} community knowledge pack`);
    const description = encodeURIComponent(
      `Adds the community-authored knowledge pack: **${pack.name}**\n\n` +
        `- **Subject:** ${pack.subject}\n` +
        `- **Questions:** ${pack.questions.length}\n` +
        `- **Modules:** ${pack.modules.map((m) => m.name).join(', ')}\n\n` +
        `Generated via Synapse Pack Studio (synapse.sanchez.ph/studio)`
    );

    const url = `https://github.com/tildemark/synapse/new/main/assets/packs?filename=${filename}&message=${message}&description=${description}`;
    window.open(url, '_blank');
  };

  // Submit via GitHub Issue
  const handleGitHubIssue = () => {
    const errors = validatePack();
    if (errors.length > 0) {
      setValidationErrors(errors);
      setActiveTab('export');
      return;
    }
    setValidationErrors([]);
    const jsonStr = generateCleanJson();

    const isLarge = jsonStr.length > 1500;
    const isHuge = jsonStr.length > 60000;

    if (isHuge) {
      handleDownload();
    } else if (isLarge) {
      try {
        navigator.clipboard.writeText(jsonStr);
      } catch (err) {
        console.error('Clipboard copy failed:', err);
      }
    }

    const title = encodeURIComponent(`[Community Pack] ${pack.name} (${pack.questions.length} questions)`);
    let bodyContent = '';

    if (isHuge) {
      bodyContent =
        `### 📦 New Community Knowledge Pack Submission\n\n` +
        `**Pack Name:** ${pack.name}\n` +
        `**Pack ID:** \`${pack.packId}\`\n` +
        `**Subject:** ${pack.subject}\n` +
        `**Question Count:** ${pack.questions.length}\n` +
        `**Modules:** ${pack.modules.map((m) => m.name).join(', ')}\n` +
        `**File Size:** ${(jsonStr.length / 1024).toFixed(1)} KB\n\n` +
        `> 📎 **Attachment:** Because this pack is over 65,536 characters, the \`pack_${pack.packId}.json\` file has been **automatically downloaded to your computer**. Please **drag and drop** the downloaded JSON file into this comment box.\n\n` +
        `*Created via Synapse Pack Studio (synapse.sanchez.ph/studio)*`;
    } else if (isLarge) {
      bodyContent =
        `### 📦 New Community Knowledge Pack Submission\n\n` +
        `**Pack Name:** ${pack.name}\n` +
        `**Pack ID:** \`${pack.packId}\`\n` +
        `**Subject:** ${pack.subject}\n` +
        `**Question Count:** ${pack.questions.length}\n` +
        `**Modules:** ${pack.modules.map((m) => m.name).join(', ')}\n\n` +
        `> 📋 **Note:** The pack JSON manifest (${(jsonStr.length / 1024).toFixed(1)} KB) has been **copied to your clipboard** automatically. Please paste it below:\n\n` +
        `\`\`\`json\n` +
        `<!-- Paste copied JSON here -->\n` +
        `\`\`\`\n\n` +
        `*Created via Synapse Pack Studio (synapse.sanchez.ph/studio)*`;
    } else {
      bodyContent =
        `### 📦 New Community Knowledge Pack Submission\n\n` +
        `**Pack Name:** ${pack.name}\n` +
        `**Pack ID:** \`${pack.packId}\`\n` +
        `**Subject:** ${pack.subject}\n` +
        `**Question Count:** ${pack.questions.length}\n` +
        `**Modules:** ${pack.modules.map((m) => m.name).join(', ')}\n\n` +
        `#### 📄 Manifest JSON:\n\`\`\`json\n${jsonStr}\n\`\`\`\n\n` +
        `*Created via Synapse Pack Studio (synapse.sanchez.ph/studio)*`;
    }

    const body = encodeURIComponent(bodyContent);
    window.open(`https://github.com/tildemark/synapse/issues/new?title=${title}&body=${body}`, '_blank');
  };

  const currentQ = pack.questions[selectedQuestionIndex] || pack.questions[0];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)', color: 'var(--text-main)', paddingBottom: '80px' }}>
      <div className="glow-backdrop" />

      <div className="container" style={{ maxWidth: '1300px', paddingTop: '24px' }}>
        {/* Header Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link href="/" className="btn btn-secondary" style={{ padding: '8px 14px' }}>
              <ArrowLeft size={16} /> Home
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src="/logo512.png"
                alt="Synapse Logo"
                width={36}
                height={36}
                style={{ borderRadius: 8, objectFit: 'contain' }}
              />
              <div>
                <h1 style={{ fontSize: '24px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Synapse Pack Studio
                  <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: 'rgba(16, 185, 129, 0.2)', color: '#10B981' }}>
                    Interactive Builder
                  </span>
                </h1>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  Author &amp; validate custom multiple-choice subject curricula with zero JSON coding
                </span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Template Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--bg-card-subtle)', padding: '4px 10px', borderRadius: '10px', border: '1px solid var(--border-card)' }}>
              <BookOpen size={14} color="var(--text-muted)" />
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Preset:</span>
              <select
                onChange={(e) => {
                  if (TEMPLATES[e.target.value]) {
                    setPack(TEMPLATES[e.target.value]);
                    setSelectedQuestionIndex(0);
                  }
                }}
                style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '12px', outline: 'none', cursor: 'pointer' }}
              >
                <option value="cs">Python Fundamentals</option>
                <option value="devops">Docker Essentials</option>
                <option value="math">Linear Algebra</option>
              </select>
            </div>

            <label className="btn btn-secondary" style={{ cursor: 'pointer', padding: '8px 14px', fontSize: '13px' }}>
              <FileUp size={16} /> Load .json
              <input type="file" accept=".json" onChange={handleImportJson} style={{ display: 'none' }} />
            </label>

            <button onClick={handleDownload} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
              <Download size={16} /> Export Pack
            </button>
          </div>
        </div>

        {/* Validation Errors Notice */}
        {validationErrors.length > 0 && (
          <div style={{ background: 'rgba(239, 83, 80, 0.12)', border: '1px solid rgba(239, 83, 80, 0.4)', padding: '16px 20px', borderRadius: '16px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', color: '#EF5350', fontWeight: 700, fontSize: '15px' }}>
              <AlertCircle size={18} />
              <span>Please resolve the following before exporting ({validationErrors.length}):</span>
            </div>
            <ul style={{ paddingLeft: '24px', fontSize: '13px', color: '#EF5350', lineHeight: 1.6 }}>
              {validationErrors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Quick Helper Banner */}
        <div style={{ background: 'rgba(108, 99, 255, 0.1)', border: '1px solid rgba(108, 99, 255, 0.25)', borderRadius: '14px', padding: '12px 18px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Lightbulb size={18} color="#A78BFA" />
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              <strong>Authoring Tip:</strong> Click any letter badge (A, B, C, or D) to mark it as the correct answer. Provide clear explanations for high-retention spaced reviews.
            </span>
          </div>
          <span style={{ fontSize: '12px', color: '#A78BFA', fontWeight: 600 }}>
            {pack.questions.length} Cards in Curriculum
          </span>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid var(--border-card)', paddingBottom: '12px' }}>
          <button
            onClick={() => setActiveTab('questions')}
            className={`btn ${activeTab === 'questions' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '8px 16px', fontSize: '13px' }}
          >
            <HelpCircle size={16} /> Question Cards ({pack.questions.length})
          </button>
          <button
            onClick={() => setActiveTab('modules')}
            className={`btn ${activeTab === 'modules' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '8px 16px', fontSize: '13px' }}
          >
            <Layers size={16} /> Modules &amp; Chapters ({pack.modules.length})
          </button>
          <button
            onClick={() => setActiveTab('metadata')}
            className={`btn ${activeTab === 'metadata' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '8px 16px', fontSize: '13px' }}
          >
            <Sparkles size={16} /> Pack Branding &amp; Info
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`btn ${activeTab === 'export' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '8px 16px', fontSize: '13px' }}
          >
            <Download size={16} /> Export &amp; Submit
          </button>
        </div>

        {/* Studio Body: Editor & Preview Split */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '24px', alignItems: 'start' }}>
          {/* Left Column: Form Editors */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: 0 }}>
            {/* TAB: QUESTIONS */}
            {activeTab === 'questions' && (
              <div className="card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div>
                    <span style={{ fontWeight: 800, fontSize: '16px' }}>
                      Card #{selectedQuestionIndex + 1} of {pack.questions.length}
                    </span>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                      Assigned to: <strong style={{ color: pack.color }}>{currentQ?.moduleName || 'General'}</strong>
                    </p>
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

                {/* Question Filter & Jump Bar for Large Packs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px', background: 'var(--bg-card-subtle)', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--border-card)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>Jump to Card:</span>
                      <select
                        value={selectedQuestionIndex}
                        onChange={(e) => setSelectedQuestionIndex(Number(e.target.value))}
                        style={{
                          background: 'var(--bg-card)',
                          border: '1px solid var(--border-card)',
                          borderRadius: '8px',
                          color: '#fff',
                          padding: '6px 10px',
                          fontSize: '12px',
                          outline: 'none',
                          cursor: 'pointer',
                          maxWidth: '240px',
                        }}
                      >
                        {pack.questions.map((q, i) => (
                          <option key={i} value={i}>
                            #{i + 1}: {q.question ? (q.question.length > 35 ? q.question.substring(0, 35) + '...' : q.question) : `[Empty Card ${i + 1}]`} (Mod {q.module})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <button
                        type="button"
                        onClick={() => setSelectedQuestionIndex(Math.max(0, selectedQuestionIndex - 1))}
                        disabled={selectedQuestionIndex === 0}
                        className="btn btn-secondary"
                        style={{ padding: '4px 10px', fontSize: '11px', opacity: selectedQuestionIndex === 0 ? 0.4 : 1 }}
                      >
                        &larr; Prev
                      </button>
                      <span style={{ fontSize: '12px', fontWeight: 700, padding: '0 4px' }}>
                        {selectedQuestionIndex + 1} / {pack.questions.length}
                      </span>
                      <button
                        type="button"
                        onClick={() => setSelectedQuestionIndex(Math.min(pack.questions.length - 1, selectedQuestionIndex + 1))}
                        disabled={selectedQuestionIndex === pack.questions.length - 1}
                        className="btn btn-secondary"
                        style={{ padding: '4px 10px', fontSize: '11px', opacity: selectedQuestionIndex === pack.questions.length - 1 ? 0.4 : 1 }}
                      >
                        Next &rarr;
                      </button>
                    </div>
                  </div>

                  {/* Filter by Module if more than 1 module exists */}
                  {pack.modules && pack.modules.length > 1 && (
                    <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
                      <button
                        type="button"
                        onClick={() => {
                          const firstInMod = 0;
                          setSelectedQuestionIndex(firstInMod);
                        }}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '11px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          background: 'transparent',
                          border: '1px solid var(--border-card)',
                          color: 'var(--text-muted)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        All ({pack.questions.length})
                      </button>
                      {pack.modules.map((m) => {
                        const countInMod = pack.questions.filter((q) => q.module === m.number).length;
                        const isCurrentModule = currentQ?.module === m.number;
                        return (
                          <button
                            key={m.number}
                            type="button"
                            onClick={() => {
                              const firstIdx = pack.questions.findIndex((q) => q.module === m.number);
                              if (firstIdx !== -1) setSelectedQuestionIndex(firstIdx);
                            }}
                            style={{
                              padding: '4px 10px',
                              borderRadius: '6px',
                              fontSize: '11px',
                              fontWeight: 600,
                              cursor: 'pointer',
                              background: isCurrentModule ? 'rgba(108, 99, 255, 0.2)' : 'transparent',
                              border: isCurrentModule ? '1px solid var(--primary)' : '1px solid var(--border-card)',
                              color: isCurrentModule ? '#fff' : 'var(--text-muted)',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            Mod {m.number}: {m.name.length > 20 ? m.name.substring(0, 20) + '...' : m.name} ({countInMod})
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Compact Scrollable / Wrap Grid of Question Numbers */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '5px',
                      flexWrap: 'wrap',
                      maxHeight: '130px',
                      overflowY: 'auto',
                      padding: '4px',
                      background: 'var(--bg-card)',
                      borderRadius: '8px',
                      border: '1px solid var(--border-card)',
                    }}
                  >
                    {pack.questions.map((q, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedQuestionIndex(i)}
                        title={`Card #${i + 1} (Module ${q.module})`}
                        style={{
                          minWidth: '32px',
                          height: '28px',
                          padding: '0 4px',
                          borderRadius: '6px',
                          border: i === selectedQuestionIndex ? '2px solid var(--primary)' : '1px solid var(--border-card)',
                          background: i === selectedQuestionIndex ? 'var(--primary)' : 'var(--bg-card-subtle)',
                          color: i === selectedQuestionIndex ? '#fff' : 'var(--text-muted)',
                          fontWeight: 'bold',
                          fontSize: '11px',
                          cursor: 'pointer',
                          transition: 'all 0.1s ease',
                        }}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {currentQ && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    {/* Question Prompt */}
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <label style={{ fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                          Question Prompt <span style={{ color: '#EF5350' }}>*</span>
                        </label>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Keep prompts clear &amp; unambiguous</span>
                      </div>
                      <textarea
                        value={currentQ.question}
                        onChange={(e) => updateCurrentQuestion('question', e.target.value)}
                        placeholder="e.g. Which of the following data structures in Python is immutable?"
                        rows={3}
                        style={{
                          width: '100%',
                          background: 'var(--bg-card-subtle)',
                          border: '1px solid var(--border-card)',
                          borderRadius: '12px',
                          color: '#fff',
                          padding: '12px 14px',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                    </div>

                    {/* Image / Diagram / Road Sign Attachment */}
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <label style={{ fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                          🖼️ Diagram / Road Sign / Image <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 400 }}>(Optional)</span>
                        </label>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Asset path, HTTPS URL, or direct upload</span>
                      </div>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <input
                          type="text"
                          value={currentQ.imageUrl || ''}
                          onChange={(e) => updateCurrentQuestion('imageUrl', e.target.value)}
                          placeholder="e.g. assets/packs/lto/stop_sign.png or https://... or paste base64"
                          style={{
                            flex: 1,
                            background: 'var(--bg-card-subtle)',
                            border: '1px solid var(--border-card)',
                            borderRadius: '10px',
                            color: '#fff',
                            padding: '10px 14px',
                            fontSize: '13px',
                            outline: 'none',
                          }}
                        />
                        <label
                          className="btn btn-secondary"
                          style={{
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '0 14px',
                            fontSize: '12px',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <FileUp size={14} /> Upload Local
                          <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onload = (event) => {
                                  if (event.target?.result) {
                                    updateCurrentQuestion('imageUrl', event.target.result as string);
                                  }
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                          />
                        </label>
                        {currentQ.imageUrl && (
                          <button
                            type="button"
                            onClick={() => updateCurrentQuestion('imageUrl', '')}
                            className="btn btn-secondary"
                            style={{ padding: '0 10px', color: '#EF5350' }}
                            title="Remove image"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Choices A, B, C, D */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <label style={{ fontSize: '13px', fontWeight: 700 }}>
                          Answer Choices <span style={{ color: '#EF5350' }}>*</span>
                        </label>
                        <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 600 }}>
                          ✓ Click A / B / C / D badge to select correct answer
                        </span>
                      </div>

                      {(['A', 'B', 'C', 'D'] as const).map((letter) => {
                        const fieldKey = letter.toLowerCase() as 'a' | 'b' | 'c' | 'd';
                        const isCorrect = currentQ.answer === letter;
                        return (
                          <div key={letter} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <button
                              type="button"
                              onClick={() => updateCurrentQuestion('answer', letter)}
                              style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '10px',
                                border: isCorrect ? '2px solid #10B981' : '1px solid var(--border-card)',
                                background: isCorrect ? '#10B981' : 'var(--bg-card-subtle)',
                                color: isCorrect ? '#000' : 'var(--text-muted)',
                                fontWeight: 800,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.15s ease',
                              }}
                              title={isCorrect ? 'Correct Answer Selected' : `Click to set ${letter} as correct answer`}
                            >
                              {letter}
                            </button>
                            <input
                              type="text"
                              value={currentQ[fieldKey]}
                              onChange={(e) => updateCurrentQuestion(fieldKey, e.target.value)}
                              placeholder={`Option ${letter} text (e.g. ${letter === 'A' ? 'Tuple' : letter === 'B' ? 'List' : letter === 'C' ? 'Dictionary' : 'Set'})...`}
                              style={{
                                flex: 1,
                                background: 'var(--bg-card-subtle)',
                                border: isCorrect ? '1.5px solid rgba(16, 185, 129, 0.5)' : '1px solid var(--border-card)',
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
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                          Topic / Module
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
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                          Difficulty Tier
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
                          <option value={1}>Level 1: Foundational / Definitions</option>
                          <option value={2}>Level 2: Standard Application</option>
                          <option value={3}>Level 3: Multi-Step / Tricky</option>
                          <option value={4}>Level 4: Advanced Scenarios</option>
                          <option value={5}>Level 5: Edge-Cases &amp; Deep Nuance</option>
                        </select>
                      </div>
                    </div>

                    {/* Explanation */}
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <label style={{ fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                          Post-Answer Explanation <span style={{ color: '#EF5350' }}>*</span>
                        </label>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Shown after the user responds in SRS review</span>
                      </div>
                      <textarea
                        value={currentQ.explanation}
                        onChange={(e) => updateCurrentQuestion('explanation', e.target.value)}
                        placeholder="Explain why the correct answer is right and clarify why other options are incorrect..."
                        rows={3}
                        style={{
                          width: '100%',
                          background: 'var(--bg-card-subtle)',
                          border: '1px solid var(--border-card)',
                          borderRadius: '12px',
                          color: '#fff',
                          padding: '12px 14px',
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
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Subject Modules &amp; Chapters</h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                      Modules group related concepts for targeted drills, module mastery tracking, and lesson pacing.
                    </p>
                  </div>
                  <button onClick={addModule} className="btn btn-primary" style={{ padding: '6px 14px', fontSize: '13px' }}>
                    <Plus size={14} /> Add Module
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {pack.modules.map((m, idx) => (
                    <div key={m.number} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ width: '32px', height: '32px', borderRadius: '8px', background: pack.color, color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '13px' }}>
                        {m.number}
                      </span>
                      <input
                        type="text"
                        value={m.name}
                        onChange={(e) => updateModule(idx, e.target.value)}
                        placeholder="e.g. Module 1: Memory Management & Pointers"
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
              <div className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '4px' }}>Pack Branding &amp; Details</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    Defines how your Knowledge Pack appears in the Synapse browser and dashboard cards.
                  </p>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                    Knowledge Pack Display Name <span style={{ color: '#EF5350' }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={pack.name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    placeholder="e.g. Linux Shell & Command Line Mastery"
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
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginTop: '4px' }}>
                    Auto-generated identifier: <code style={{ color: '#A78BFA' }}>pack_{pack.packId}.json</code>
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
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
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                      Subject Category
                    </label>
                    <input
                      type="text"
                      value={pack.subject}
                      onChange={(e) => setPack((prev) => ({ ...prev, subject: e.target.value }))}
                      placeholder="e.g. Computer Science, Mathematics, DevOps"
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
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
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
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                      Icon Symbol
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
                        fontSize: '13px',
                      }}
                    >
                      <option value="code">code (Programming / Software)</option>
                      <option value="terminal">terminal (DevOps / Systems)</option>
                      <option value="functions">functions (Math / Physics)</option>
                      <option value="science">science (Natural Sciences)</option>
                      <option value="grid_view">grid_view (Spreadsheets &amp; Data)</option>
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
                    Export your Knowledge Pack JSON for immediate offline testing in the Synapse mobile/desktop app or submit it to the official open-source repository.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                    <button onClick={handleDownload} className="btn btn-primary" style={{ justifyContent: 'center', fontSize: '13px', padding: '10px 14px' }}>
                      <Download size={15} /> Download JSON
                    </button>
                    <button
                      onClick={handleGitHubPR}
                      className="btn btn-secondary"
                      style={{ justifyContent: 'center', borderColor: '#10B981', color: '#10B981', fontSize: '13px', padding: '10px 14px' }}
                      title="Opens GitHub Web Editor to create a Pull Request directly"
                    >
                      <GitPullRequest size={15} /> Open Web PR
                    </button>
                    <button
                      onClick={handleGitHubIssue}
                      className="btn btn-secondary"
                      style={{ justifyContent: 'center', borderColor: '#8B5CF6', color: '#C084FC', fontSize: '13px', padding: '10px 14px' }}
                      title="Submit pack via GitHub Issue with automatic metadata & file attachment"
                    >
                      <MessageSquare size={15} /> Submit via Issue
                    </button>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '11.5px', color: 'var(--text-muted)' }}>
                    <span>💡 <strong>Web PR:</strong> Copies JSON &amp; opens GitHub web editor in <code>assets/packs/</code>.</span>
                    <span>💡 <strong>Issue:</strong> Opens an issue template and downloads file if &gt;65KB for easy drag-and-drop.</span>
                  </div>
                </div>

                <div style={{ minWidth: 0, width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 700 }}>Canonical Schema Output (Validated)</label>
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
                      maxHeight: '380px',
                      overflowX: 'auto',
                      overflowY: 'auto',
                      maxWidth: '100%',
                      boxSizing: 'border-box',
                      color: '#A78BFA',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                    }}
                  >
                    {generateCleanJson()}
                  </pre>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Live In-App Card Simulator */}
          <div style={{ minWidth: 0 }}>
            <div style={{ position: 'sticky', top: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '13px', fontWeight: 600 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Eye size={16} /> Live In-App Simulator
                </span>
                <span style={{ fontSize: '11px', color: '#10B981', background: 'rgba(16, 185, 129, 0.15)', padding: '2px 8px', borderRadius: '4px' }}>
                  Card #{selectedQuestionIndex + 1}
                </span>
              </div>

              {/* Phone Frame Simulator */}
              <div
                style={{
                  background: 'linear-gradient(180deg, #151528 0%, #0F0F1A 100%)',
                  border: `2px solid ${pack.color}`,
                  borderRadius: '28px',
                  padding: '24px',
                  boxShadow: `0 20px 40px rgba(0, 0, 0, 0.6), 0 0 24px ${pack.color}25`,
                }}
              >
                {/* Pack Header Pill */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: `${pack.color}35`, color: pack.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '12px' }}>
                      ⚡
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 700 }}>{pack.name || 'Untitled Pack'}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{currentQ?.moduleName || 'Module Name'}</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: `${pack.color}25`, color: pack.color }}>
                    Level {currentQ?.level || 1}
                  </span>
                </div>

                {/* Question Prompt */}
                {currentQ?.imageUrl && (
                  <div
                    style={{
                      width: '100%',
                      maxHeight: '140px',
                      marginBottom: '14px',
                      background: 'rgba(0,0,0,0.5)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      padding: '8px',
                    }}
                  >
                    <img
                      src={currentQ.imageUrl}
                      alt="Question Diagram"
                      style={{ maxHeight: '120px', maxWidth: '100%', objectFit: 'contain', borderRadius: '6px' }}
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
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
                    <strong style={{ color: '#A78BFA', display: 'block', marginBottom: '4px' }}>💡 Post-Answer Explanation:</strong>
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
