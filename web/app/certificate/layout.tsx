import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://synapse.sanchez.ph'),
  title: 'Academic Certificate of Mastery | Synapse',
  description: 'Official Verified Academic Certificate. Validated by Synapse Academic Institute.',
  openGraph: {
    title: 'Academic Certificate of Mastery | Synapse',
    description: 'Official Mastery Credential validated by Synapse Academic Institute.',
    url: 'https://synapse.sanchez.ph/certificate',
    siteName: 'Synapse Academic Institute',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Academic Certificate of Mastery | Synapse',
    description: 'Official Mastery Credential validated by Synapse Academic Institute.',
  },
};

export default function CertificateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
