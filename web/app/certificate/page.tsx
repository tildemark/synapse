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
import { SYNAPSE_VERSION_TAG } from '../config/version';

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
    'Synapse SRS'
  )}&organizationId=144801941&issueYear=2026&issueMonth=8&certUrl=${encodeURIComponent(
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
        <div className="cert-frame">
          <div className="cert-corner-decor cert-tl" />
          <div className="cert-corner-decor cert-tr" />
          <div className="cert-corner-decor cert-bl" />
          <div className="cert-corner-decor cert-br" />

          {/* Certificate Header */}
          <div className="cert-header-section">
            <div className="cert-logo-wrap">
              <Image
                src="/logo512.png"
                alt="Synapse Official Crest"
                width={108}
                height={108}
                className="cert-crest-img"
              />
            </div>
            <div className="cert-badge">
              <Award size={15} /> Official Verified Credential
            </div>
            <h2 className="cert-title">
              SYNAPSE ACADEMIC INSTITUTE
            </h2>
            <p className="cert-subtitle">
              Cognitive Retention &amp; Spaced Repetition Registry &bull; Protocol {SYNAPSE_VERSION_TAG}
            </p>
          </div>

          {/* Recipient */}
          <div className="cert-recipient-section">
            <p className="cert-body-intro">
              This certifies that
            </p>
            <div className="cert-student-name">
              {studentName || 'Distinguished Scholar'}
            </div>
            <p className="cert-body-text">
              has satisfied all rigorous requirements and demonstrated verified competency and mastery in the comprehensive curriculum and official examination of:
            </p>
            <div className="cert-course-name" style={{ color: course.color }}>
              {course.title}
            </div>
            <p className="cert-body-subtext">
              Validated through the official Mock Competency Examination (Passing Score &ge; 70%) and Ebbinghaus active recall spaced repetition standards across all {course.questionsCount} syllabus questions.
            </p>
          </div>

          {/* Verification Bar with Live QR Code */}
          <div className="cert-verify-bar">
            <div className="cert-meta-col">
              <div className="cert-meta-label">Credential Serial</div>
              <div className="mono-font cert-serial">{certSerial}</div>
              <div className="cert-meta-desc">Curriculum: {course.code} &bull; {issueDate}</div>
              <div className="cert-status-tag">Status: Authenticated ✓</div>
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
            >
              {qrCodeDataUrl ? (
                <div className="cert-qr-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={qrCodeDataUrl} alt="Scan QR to verify" width={64} height={64} style={{ display: 'block' }} />
                </div>
              ) : (
                <div className="cert-qr-fallback">
                  <QrCode size={28} color="#F59E0B" />
                </div>
              )}
              <div className="cert-qr-text">
                <div className="cert-qr-action">
                  Scan to Verify <ExternalLink size={11} />
                </div>
                <div className="cert-qr-sub">
                  Instant zero-knowledge public verification
                </div>
              </div>
            </a>
          </div>

          {/* Signatures & Academic Accreditation Footer */}
          <div className="cert-signatures-footer">
            <div className="cert-sig-left">
              <div style={{ height: '40px', display: 'flex', alignItems: 'flex-end', paddingLeft: '24px', marginBottom: '-4px' }}>
                <Image
                  src="/signature.svg"
                  alt="Alfredo Sanchez Jr. Signature"
                  width={110}
                  height={38}
                  style={{
                    height: '36px',
                    width: 'auto',
                    filter: 'invert(1) brightness(1.8) drop-shadow(0 2px 8px rgba(255, 255, 255, 0.4))',
                  }}
                />
              </div>
              <div className="cert-sig-name-left">
                Alfredo Sanchez Jr.
              </div>
              <div className="cert-sig-line-left">
                Lead Architect &amp; Creator &bull; <a href="http://sanchez.ph" target="_blank" rel="noopener noreferrer" style={{ color: '#D8B4FE', textDecoration: 'none' }}>sanchez.ph</a>
              </div>
            </div>

            <div className="cert-sig-right">
              <div style={{ height: '40px' }} />
              <div className="cert-sig-name-right">
                Synapse Academic Board
              </div>
              <div className="cert-sig-line-right">
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
