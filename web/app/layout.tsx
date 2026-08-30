import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://synapse.sanchez.ph'),
  title: 'Synapse — Master Any Subject with Spaced Repetition',
  description:
    'Offline-first spaced repetition platform for mastering technical and academic subjects: C Programming, HTML5, and beyond.',
  icons: {
    icon: '/logo512.png',
    apple: '/logo512.png',
  },
  openGraph: {
    title: 'Synapse — Spaced Repetition Platform & Academic Credentials',
    description: 'Master any technical or academic subject with offline-first spaced repetition and verifiable mastery certificates.',
    url: 'https://synapse.sanchez.ph',
    siteName: 'Synapse',
    images: [
      {
        url: '/logo512.png',
        width: 512,
        height: 512,
        alt: 'Synapse Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Synapse — Spaced Repetition Platform',
    description: 'Master any technical or academic subject with verifiable mastery certificates.',
    images: ['/logo512.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
