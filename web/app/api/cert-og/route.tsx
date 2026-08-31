import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name') || 'Distinguished Scholar';
    const course = searchParams.get('course') || 'Comprehensive Academic Syllabus';
    const id = searchParams.get('id') || 'SYN-9999-VERIFIED';
    const date = searchParams.get('date') || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#090D16',
            backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.15) 0%, transparent 60%)',
            padding: '40px 50px',
            fontFamily: 'sans-serif',
            color: '#FFFFFF',
            border: '8px solid #F59E0B',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#F59E0B',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                ★ OFFICIAL VERIFIED ACADEMIC CREDENTIAL
              </div>
              <div style={{ fontSize: 28, fontWeight: 900, color: '#FFFFFF', marginTop: 4 }}>
                SYNAPSE ACADEMIC INSTITUTE
              </div>
            </div>
            
            <div
              style={{
                background: 'rgba(245, 158, 11, 0.15)',
                border: '2px solid #F59E0B',
                borderRadius: 12,
                padding: '8px 16px',
                fontSize: 14,
                fontWeight: 700,
                color: '#FDE047',
              }}
            >
              Registry ID: {id}
            </div>
          </div>

          {/* Certificate Body */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              margin: '20px 0',
            }}
          >
            <div style={{ fontSize: 18, color: '#9CA3AF', marginBottom: 12 }}>
              This officially certifies that
            </div>
            <div
              style={{
                fontSize: 48,
                fontWeight: 900,
                color: '#FDE68A',
                borderBottom: '3px solid #D97706',
                paddingBottom: 8,
                marginBottom: 16,
                letterSpacing: '-0.02em',
              }}
            >
              {name}
            </div>
            <div style={{ fontSize: 18, color: '#D1D5DB', maxWidth: 800 }}>
              has successfully satisfied all syllabus requirements and demonstrated verified mastery in:
            </div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 800,
                color: '#60A5FA',
                marginTop: 10,
              }}
            >
              {course}
            </div>
          </div>

          {/* Footer Metadata */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              borderTop: '1px solid rgba(245, 158, 11, 0.3)',
              paddingTop: 16,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 13, color: '#9CA3AF' }}>Conferred on: {date}</div>
              <div style={{ fontSize: 13, color: '#10B981', fontWeight: 700, marginTop: 2 }}>
                Status: Cryptographically Authenticated &bull; Synapse Protocol v1.1.0
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                color: '#000000',
                padding: '8px 20px',
                borderRadius: 30,
                fontSize: 15,
                fontWeight: 800,
              }}
            >
              ✓ Synapse Verified Scholar
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch {
    return new Response(`Failed to generate the certificate image`, {
      status: 500,
    });
  }
}
