'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import QRCode from 'qrcode';
import {
  Award,
  Share2,
  Download,
  CheckCircle2,
  Printer,
  Copy,
  ArrowLeft,
  GraduationCap,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Check,
  Zap,
  QrCode,
} from 'lucide-react';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const OFFICIAL_COURSES = [
  {
    id: 'c_programming',
    title: 'C Programming & Systems Architecture',
    code: 'CS-101-C',
    domain: 'Computer Science',
    modulesCount: 15,
    questionsCount: 249,
    color: '#3B82F6',
  },
  {
    id: 'html_fundamentals',
    title: 'HTML5 & Web Semantics Architecture',
    code: 'WEB-102-HTML',
    domain: 'Web Development',
    modulesCount: 15,
    questionsCount: 138,
    color: '#E44D26',
  },
  {
    id: 'css3_fundamentals',
    title: 'CSS3 & Modern Stylesheets',
    code: 'WEB-103-CSS',
    domain: 'Web Development',
    modulesCount: 15,
    questionsCount: 450,
    color: '#2563EB',
  },
  {
    id: 'lto_drivers_exam_ph',
    title: "LTO Driver's Licensing Reviewer",
    code: 'GOV-301-LTO',
    domain: 'Traffic Laws & Safety',
    modulesCount: 15,
    questionsCount: 450,
    color: '#10B981',
  },
];

function computeChecksum(name: string, packId: string): string {
  const seed = `${name.trim().toLowerCase()}_${packId}_2026`;
  let hash = 0x811c9dc5;
  for (let i = 0; i < seed.length; i++) {
    hash ^= seed.charCodeAt(i);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return ((hash >>> 0) & 0xffff).toString(16).toUpperCase().padStart(4, '0');
}

function CertificateContent() {
  const searchParams = useSearchParams();
  const urlName = searchParams.get('name');
  const urlId = searchParams.get('id');
  const urlPack = searchParams.get('pack');

  // Determine initial course from URL if provided
  const initialCourse = OFFICIAL_COURSES.find((c) => {
    if (urlPack && c.title.toLowerCase().includes(urlPack.toLowerCase())) return true;
    if (urlId) {
      const parts = urlId.toUpperCase().split('-');
      if (parts.length > 1) {
        if (parts[1] === 'CPROG' && c.id === 'c_programming') return true;
        if (parts[1] === 'HTML' && c.id === 'html_fundamentals') return true;
        if (parts[1] === 'CSS3' && c.id === 'css3_fundamentals') return true;
        if (parts[1] === 'LTOPH' && c.id === 'lto_drivers_exam_ph') return true;
      }
    }
    return false;
  }) || OFFICIAL_COURSES[0];

  const [studentName, setStudentName] = useState(urlName || 'Distinguished Scholar');
  const [selectedCourseId, setSelectedCourseId] = useState(initialCourse.id);
  const [issueDate, setIssueDate] = useState('August 30, 2026');
  const [copied, setCopied] = useState(false);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');

  // Synchronize state if URL query params arrive dynamically
  useEffect(() => {
    if (urlName) setStudentName(urlName);
  }, [urlName]);

  const course = OFFICIAL_COURSES.find((c) => c.id === selectedCourseId) || OFFICIAL_COURSES[0];
  const cleanCode = selectedCourseId === 'c_programming' ? 'CPROG' : selectedCourseId === 'html_fundamentals' ? 'HTML' : selectedCourseId === 'css3_fundamentals' ? 'CSS3' : selectedCourseId === 'lto_drivers_exam_ph' ? 'LTOPH' : selectedCourseId.toUpperCase().slice(0, 5);
  const checksum = computeChecksum(studentName, selectedCourseId);
  const certSerial = urlId && urlId.startsWith('SYN-') ? urlId : `SYN-${cleanCode}-${checksum}-VERIFIED`;

  const verificationUrl = `https://synapse.sanchez.ph/verify?id=${encodeURIComponent(certSerial)}&name=${encodeURIComponent(
    studentName
  )}&pack=${encodeURIComponent(course.title)}`;

  // Generate dynamic QR Code for instant mobile scanning
  useEffect(() => {
    QRCode.toDataURL(verificationUrl, {
      width: 160,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#FFFFFF',
      },
    })
      .then((url) => setQrCodeDataUrl(url))
      .catch((err) => console.error('QR generation error:', err));
  }, [verificationUrl]);

  // LinkedIn Certification URL Format
  const linkedInCertUrl = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(
    `${course.title} (Mastery)`
  )}&organizationName=${encodeURIComponent(
    'Synapse Spaced Repetition Platform'
  )}&issueYear=2026&issueMonth=8&certUrl=${encodeURIComponent(
    verificationUrl
  )}&certId=${encodeURIComponent(certSerial)}`;

  // LinkedIn Feed Share URL
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    verificationUrl
  )}`;

  // Facebook Share URL
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    verificationUrl
  )}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(verificationUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cert-page-wrapper" style={{ minHeight: '100vh', background: 'var(--bg-main)', color: 'var(--text-main)', paddingBottom: '80px' }}>
      <div className="glow-backdrop" />
      <div className="academic-grid-pattern" />

      <div className="container cert-page-container" style={{ maxWidth: '1100px', paddingTop: '30px' }}>
        {/* Navigation / Header */}
        <div className="no-print" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Link href="/" className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: '13px' }}>
              <ArrowLeft size={16} /> Home
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Image
                src="/logo512.png"
                alt="Synapse Logo"
                width={38}
                height={38}
                style={{ borderRadius: 10, objectFit: 'contain' }}
              />
              <div>
                <h1 style={{ fontSize: '24px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Award size={24} style={{ color: '#F59E0B' }} />
                  Academic Certificate of Mastery
                </h1>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  Official verifiable credentials with dynamic QR validation &amp; LinkedIn 1-tap sync
                </span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <button onClick={handlePrint} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
              <Printer size={16} /> Print / Save as PDF
            </button>
            <button onClick={handleCopyLink} className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '13px' }}>
              {copied ? <Check size={16} color="#10B981" /> : <Copy size={16} />}
              {copied ? 'Verification Copied!' : 'Copy Verification URL'}
            </button>
          </div>
        </div>

        {/* Customization Bar */}
        <div className="card no-print" style={{ padding: '20px', marginBottom: '30px', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
          <div style={{ fontSize: '13px', fontWeight: 800, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={16} /> Customize Graduate Credential Parameters:
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '6px' }}>
                Graduate / Scholar Full Name:
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="e.g. Marie Curie, PhD"
                style={{
                  width: '100%',
                  background: 'var(--bg-card-subtle)',
                  border: '1px solid var(--border-card)',
                  borderRadius: '10px',
                  color: '#fff',
                  padding: '10px 14px',
                  fontSize: '14px',
                  fontWeight: 600,
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '6px' }}>
                Official Knowledge Curriculum:
              </label>
              <select
                value={selectedCourseId}
                onChange={(e) => setSelectedCourseId(e.target.value)}
                style={{
                  width: '100%',
                  background: 'var(--bg-card-subtle)',
                  border: '1px solid var(--border-card)',
                  borderRadius: '10px',
                  color: '#fff',
                  padding: '10px 14px',
                  fontSize: '14px',
                  fontWeight: 600,
                  outline: 'none',
                }}
              >
                {OFFICIAL_COURSES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title} ({c.domain})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '6px' }}>
                Conferral Date:
              </label>
              <input
                type="text"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                style={{
                  width: '100%',
                  background: 'var(--bg-card-subtle)',
                  border: '1px solid var(--border-card)',
                  borderRadius: '10px',
                  color: '#fff',
                  padding: '10px 14px',
                  fontSize: '14px',
                  fontWeight: 600,
                  outline: 'none',
                }}
              />
            </div>
          </div>
        </div>

        {/* Certificate Display Frame */}
        <div className="cert-frame" style={{ marginBottom: '32px', position: 'relative' }}>
          <div className="cert-corner-decor cert-tl" />
          <div className="cert-corner-decor cert-tr" />
          <div className="cert-corner-decor cert-bl" />
          <div className="cert-corner-decor cert-br" />

          {/* Certificate Header */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
              <div style={{ padding: '6px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '16px', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                <Image
                  src="/logo512.png"
                  alt="Synapse Official Crest"
                  width={56}
                  height={56}
                  style={{ borderRadius: 12, objectFit: 'contain' }}
                />
              </div>
            </div>
            <div className="cert-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 16px', borderRadius: '100px', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.4)', color: '#F59E0B', fontSize: '12px', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
              <Award size={15} /> Official Verified Credential
            </div>
            <h2 className="cert-title" style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.02em', background: 'linear-gradient(135deg, #FFFFFF 0%, #F59E0B 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '4px' }}>
              SYNAPSE ACADEMIC INSTITUTE
            </h2>
            <p className="cert-subtitle" style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Cognitive Retention &amp; Spaced Repetition Registry &bull; Protocol v1.0.0
            </p>
          </div>

          {/* Recipient */}
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 24px' }}>
            <p className="cert-body-intro" style={{ fontSize: '14px', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '6px' }}>
              This certifies that
            </p>
            <div className="cert-student-name" style={{ fontSize: '34px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.01em', borderBottom: '2px solid rgba(245, 158, 11, 0.5)', paddingBottom: '6px', marginBottom: '14px' }}>
              {studentName || 'Distinguished Scholar'}
            </div>
            <p className="cert-body-text" style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '8px' }}>
              has satisfied all rigorous requirements and demonstrated verified 100% active recall retention across all core modules in the curriculum of:
            </p>
            <div className="cert-course-name" style={{ fontSize: '24px', fontWeight: 800, color: course.color, marginBottom: '10px' }}>
              {course.title}
            </div>
            <p className="cert-body-subtext" style={{ fontSize: '12px', color: 'var(--text-dim)', lineHeight: 1.5 }}>
              All {course.questionsCount} curriculum questions were successfully promoted through the 8-Stage Leitner active recall hierarchy (Apprentice → Guru → Master → Burned) in accordance with Ebbinghaus memory stabilization standards.
            </p>
          </div>

          {/* Verification Bar with Live QR Code */}
          <div className="cert-verify-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', borderTop: '1px solid rgba(245, 158, 11, 0.2)', borderBottom: '1px solid rgba(245, 158, 11, 0.2)', padding: '20px 20px', margin: '0 auto 24px', maxWidth: '850px' }}>
            <div style={{ textAlign: 'left', minWidth: '180px' }}>
              <div className="cert-meta-label" style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>Credential Serial</div>
              <div className="mono-font cert-serial" style={{ fontSize: '13px', fontWeight: 700, color: '#F59E0B', marginTop: '3px' }}>{certSerial}</div>
              <div className="cert-meta-desc" style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>Curriculum: {course.code} &bull; {issueDate}</div>
              <div className="cert-status-tag" style={{ fontSize: '11px', color: '#10B981', fontWeight: 600, marginTop: '4px' }}>Status: Authenticated ✓</div>
            </div>

            {/* Center Seal */}
            <div className="cert-seal">
              <Award size={38} />
            </div>

            {/* QR Code Validation Box */}
            <a
              href={verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-qr-link"
              title="Click or scan to verify on Synapse Ledger"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '8px 12px',
                borderRadius: '12px',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              {qrCodeDataUrl ? (
                <div style={{ background: '#ffffff', padding: '4px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={qrCodeDataUrl} alt="Scan QR to verify" width={68} height={68} style={{ display: 'block' }} />
                </div>
              ) : (
                <div style={{ width: 68, height: 68, background: '#222', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <QrCode size={28} color="#F59E0B" />
                </div>
              )}
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#F59E0B', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Scan to Verify <ExternalLink size={11} />
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-dim)', maxWidth: '110px', marginTop: '2px', lineHeight: 1.3 }}>
                  Instant zero-knowledge public verification
                </div>
              </div>
            </a>
          </div>

          {/* Signatures & Academic Accreditation Footer */}
          <div className="cert-signatures-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', maxWidth: '780px', margin: '0 auto', fontSize: '12px', color: 'var(--text-muted)', flexWrap: 'wrap', gap: '20px' }}>
            <div className="cert-sig-left" style={{ minWidth: '220px' }}>
              <div className="cert-sig-name-left" style={{ fontFamily: 'var(--font-mono, monospace)', color: '#D8B4FE', fontWeight: 700, fontSize: '14px', marginBottom: '2px' }}>
                Alfredo Sanchez Jr.
              </div>
              <div className="cert-sig-line-left" style={{ borderTop: '1px solid rgba(255,255,255,0.25)', paddingTop: '4px', color: 'var(--text-dim)' }}>
                Lead Architect &amp; Creator &bull; <a href="http://sanchez.ph" target="_blank" rel="noopener noreferrer" style={{ color: '#D8B4FE', textDecoration: 'none' }}>sanchez.ph</a>
              </div>
            </div>

            <div className="cert-sig-right" style={{ textAlign: 'right', minWidth: '220px' }}>
              <div className="cert-sig-name-right" style={{ fontFamily: 'var(--font-mono, monospace)', color: '#10B981', fontWeight: 700, fontSize: '14px', marginBottom: '2px' }}>
                Synapse Academic Board
              </div>
              <div className="cert-sig-line-right" style={{ borderTop: '1px solid rgba(255,255,255,0.25)', paddingTop: '4px', color: 'var(--text-dim)' }}>
                Office of Curriculum &amp; Assessment
              </div>
            </div>
          </div>
        </div>

        {/* Social & Professional Sharing Action Center */}
        <div className="card no-print" style={{ padding: '30px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
            Publish &amp; Showcase Your Verified Credential
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto 24px' }}>
            Add your achievement directly into your LinkedIn profile licenses or share on your social timelines with cryptographic verification metadata and live QR validation.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href={linkedInCertUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-linkedin"
              style={{ padding: '14px 24px', fontSize: '14px' }}
            >
              <Award size={18} /> Add to LinkedIn Licenses &amp; Certifications
            </a>

            <a
              href={linkedInShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '14px 22px', fontSize: '14px', borderColor: 'rgba(10, 102, 194, 0.4)' }}
            >
              <Share2 size={18} color="#0A66C2" /> Share on LinkedIn Feed
            </a>

            <a
              href={facebookShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-facebook"
              style={{ padding: '14px 22px', fontSize: '14px' }}
            >
              <Share2 size={18} /> Post to Facebook Timeline
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CertificatePage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: 'var(--bg-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>Loading Academic Certificate...</div>}>
      <CertificateContent />
    </Suspense>
  );
}
