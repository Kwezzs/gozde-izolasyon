import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gozdeizolasyon.com.tr'),
  title: {
    default: 'Gözde İzolasyon | Kayseri Su ve Çatı Yalıtım Çözümleri',
    template: '%s | Gözde İzolasyon',
  },
  description:
    'Kayseri ve çevre illerde profesyonel çatı izolasyonu, su yalıtımı, temel ve perde beton uygulamaları. Ücretsiz keşif ve garantili yalıtım hizmeti.',
  keywords: [
    'Kayseri izolasyon',
    'Kayseri su yalıtımı',
    'Kayseri çatı tamiri',
    'Kayseri çatı izolasyonu',
    'temel yalıtımı Kayseri',
    'teras yalıtımı',
    'perde beton yalıtımı',
    'Gözde İzolasyon',
  ],
  authors: [{ name: 'Gözde İzolasyon' }],
  creator: 'Gözde İzolasyon',
  publisher: 'Gözde İzolasyon',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.gozdeizolasyon.com.tr',
    title: 'Gözde İzolasyon | Kayseri Su ve Çatı Yalıtım Çözümleri',
    description:
      'Kayseri ve çevre illerde profesyonel çatı izolasyonu, su yalıtımı, temel ve perde beton uygulamaları.',
    siteName: 'Gözde İzolasyon',
  },
  alternates: {
    canonical: 'https://www.gozdeizolasyon.com.tr',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Google'ın işletmeyi tanıması için Schema.org Yerel İşletme Verisi
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Gözde İzolasyon',
    image: 'https://www.gozdeizolasyon.com.tr/logo.png',
    '@id': 'https://www.gozdeizolasyon.com.tr',
    url: 'https://www.gozdeizolasyon.com.tr',
    telephone: ['+905358799830', '+905318683846'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kayseri',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.7312,
      longitude: 35.4787,
    },
    areaServed: {
      '@type': 'City',
      name: 'Kayseri',
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:00',
        closes: '19:00',
      },
    ],
  };

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}