import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="container" style={{ maxWidth: '800px', padding: '60px 24px' }}>
      <Link href="/" className="btn btn-secondary" style={{ marginBottom: '32px' }}>
        <ArrowLeft size={16} /> Back to Synapse
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(108, 99, 255, 0.15)', color: '#6C63FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FileText size={24} />
        </div>
        <h1 style={{ fontSize: '32px', fontWeight: 800 }}>Terms of Service</h1>
      </div>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '15px', color: 'var(--text-muted)' }}>
        <p><strong style={{ color: 'var(--text-main)' }}>Open Source Educational Tool:</strong></p>
        <p>Synapse is an open-source educational software platform distributed under the MIT License.</p>
        
        <h3 style={{ color: 'var(--text-main)', fontSize: '18px', marginTop: '10px' }}>1. Educational Purpose</h3>
        <p>Synapse and its bundled Knowledge Packs are provided as study and self-assessment aids. Content is provided for educational and revision purposes.</p>

        <h3 style={{ color: 'var(--text-main)', fontSize: '18px', marginTop: '10px' }}>2. MIT License Disclaimer</h3>
        <p>THE SOFTWARE IS PROVIDED &ldquo;AS IS&rdquo;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.</p>
      </div>
    </div>
  );
}
