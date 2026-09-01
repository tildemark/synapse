import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://synapse.sanchez.ph'),
  title: 'Verified Academic Certificate | Synapse',
  description: 'Official Verified Academic Certificate. Cryptographically authenticated by Synapse Academic Institute.',
  openGraph: {
    title: 'Verified Certificate of Mastery | Synapse',
    description: 'Officially validated credential by Synapse Academic Institute.',
    url: 'https://synapse.sanchez.ph/verify',
    siteName: 'Synapse Academic Institute',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verified Certificate of Mastery | Synapse',
    description: 'Officially validated credential by Synapse Academic Institute.',
  },
};

export default function VerifyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
