import Link from 'next/link';
import { Shield, ArrowLeft, Lock, CheckCircle2, EyeOff, Database } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="container" style={{ maxWidth: '820px', padding: '60px 24px' }}>
      <Link href="/" className="btn btn-secondary" style={{ marginBottom: '32px' }}>
        <ArrowLeft size={16} /> Back to Synapse
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Shield size={24} />
        </div>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: 800 }}>Privacy Policy &amp; Data Ethics</h1>
          <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Last updated: August 2026</span>
        </div>
      </div>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '15px', color: 'var(--text-muted)' }}>
        <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '14px', padding: '16px 20px', color: 'var(--text-main)' }}>
          <strong style={{ color: '#10B981', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <Lock size={16} /> 100% Offline &amp; Privacy-by-Design Guarantee
          </strong>
          Synapse operates strictly as a local-first application. We do not maintain any central user database, email list, or tracking ledger. Your study habits, questions, mistakes, and scholar credentials belong exclusively to you on your device.
        </div>
        
        <h3 style={{ color: 'var(--text-main)', fontSize: '18px', marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <EyeOff size={18} color="#6C63FF" /> 1. Zero Remote Data Collection &amp; Telemetry
        </h3>
        <p>Synapse does not collect, transmit, or store any personal data, device identifiers, IP addresses, usage statistics, or telemetry on external servers. There are zero tracking scripts, advertising trackers, or analytics SDKs embedded in the software.</p>

        <h3 style={{ color: 'var(--text-main)', fontSize: '18px', marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Database size={18} color="#3B82F6" /> 2. Scholar Profile &amp; Local SQLite Storage
        </h3>
        <p>Your Scholar Name, Title, Institution, and study progress are stored <strong>strictly locally</strong> in your device&apos;s embedded SQLite database (via Drift) or local browser memory. You may edit or delete your name at any time with zero server trace.</p>

        <h3 style={{ color: 'var(--text-main)', fontSize: '18px', marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CheckCircle2 size={18} color="#F59E0B" /> 3. Certificate Sharing &amp; Zero-Knowledge Verification
        </h3>
        <p>When you choose to share your Certificate of Mastery to LinkedIn or Facebook, your name is passed as a URL parameter generated on your client device. The public verification ledger validates the credential serial using <strong>Zero-Knowledge client-side cryptographic hashing</strong>. We never store or log your name on our web servers.</p>

        <h3 style={{ color: 'var(--text-main)', fontSize: '18px', marginTop: '10px' }}>
          4. Open Source Transparency
        </h3>
        <p>Synapse is 100% open-source under the MIT license. Anyone can inspect and verify our repository on GitHub to confirm our zero-telemetry architecture.</p>
      </div>
    </div>
  );
}
