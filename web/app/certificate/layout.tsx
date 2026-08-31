import type { Metadata } from 'next';

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const name = (typeof searchParams.name === 'string' ? searchParams.name : null) || 'Distinguished Scholar';
  const pack = (typeof searchParams.pack === 'string' ? searchParams.pack : null) || 'Official Academic Curriculum';
  const id = (typeof searchParams.id === 'string' ? searchParams.id : null) || 'SYN-VERIFIED';

  const ogImageUrl = `https://synapse.sanchez.ph/api/cert-og?name=${encodeURIComponent(name)}&course=${encodeURIComponent(pack)}&id=${encodeURIComponent(id)}`;

  return {
    metadataBase: new URL('https://synapse.sanchez.ph'),
    title: `Academic Certificate of Mastery — ${name} (${pack}) | Synapse`,
    description: `Official Verified Academic Certificate for ${name} in ${pack}. Validated by Synapse Academic Institute.`,
    openGraph: {
      title: `Academic Certificate of Mastery: ${name}`,
      description: `Official Mastery Credential in ${pack} by Synapse Academic Institute (Credential: ${id}).`,
      url: `https://synapse.sanchez.ph/certificate?id=${encodeURIComponent(id)}&name=${encodeURIComponent(name)}&pack=${encodeURIComponent(pack)}`,
      siteName: 'Synapse Academic Institute',
      images: [
        {
          url: ogImageUrl,
          secureUrl: ogImageUrl,
          width: 1200,
          height: 630,
          type: 'image/png',
          alt: `Synapse Verified Certificate for ${name}`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Academic Certificate of Mastery: ${name}`,
      description: `Official Mastery Credential in ${pack} by Synapse Academic Institute.`,
      images: [ogImageUrl],
    },
  };
}

export default function CertificateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
