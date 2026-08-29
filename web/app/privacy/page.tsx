import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="container" style={{ maxWidth: '800px', padding: '60px 24px' }}>
      <Link href="/" className="btn btn-secondary" style={{ marginBottom: '32px' }}>
        <ArrowLeft size={16} /> Back to Synapse
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Shield size={24} />
        </div>
        <h1 style={{ fontSize: '32px', fontWeight: 800 }}>Privacy Policy</h1>
      </div>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '15px', color: 'var(--text-muted)' }}>
        <p><strong style={{ color: 'var(--text-main)' }}>100% Offline &amp; Privacy-by-Design Guarantee:</strong></p>
        <p>Synapse is designed from the ground up as a strictly offline, local-first application. We believe your study progress, flashcard mastery, and usage habits belong exclusively to you.</p>
        
        <h3 style={{ color: 'var(--text-main)', fontSize: '18px', marginTop: '10px' }}>1. Zero Data Collection &amp; Telemetry</h3>
        <p>Synapse does not collect, transmit, or store any personal data, device identifiers, IP addresses, usage statistics, or telemetry on external servers. There are no tracking scripts, third-party analytics SDKs, or advertising libraries embedded in the application.</p>

        <h3 style={{ color: 'var(--text-main)', fontSize: '18px', marginTop: '10px' }}>2. Local Storage Exclusively</h3>
        <p>All user progress, SRS stage intervals, mistake counts, and installed Knowledge Packs are stored locally on your device in an embedded SQLite database using Drift.</p>

        <h3 style={{ color: 'var(--text-main)', fontSize: '18px', marginTop: '10px' }}>3. Network Usage</h3>
        <p>Synapse operates with zero network connectivity required. All bundled Knowledge Packs are pre-packaged within the local binary.</p>

        <h3 style={{ color: 'var(--text-main)', fontSize: '18px', marginTop: '10px' }}>4. Open Source Transparency</h3>
        <p>Synapse is fully open source under the MIT license. Anyone can inspect and verify our source code repository on GitHub.</p>
      </div>
    </div>
  );
}
