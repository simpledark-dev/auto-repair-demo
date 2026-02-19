import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { SITE_URL, absoluteUrl } from '@/lib/seo';
import { LocaleProvider } from './providers/LocaleProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const businessDescription =
  'Expert auto repair and car repair shop in Montréal, QC offering diagnostics, brake repair, fleet maintenance, and same-day service with transparent pricing.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Garage Henriquez | Auto Repair in Montréal, QC',
    template: '%s | Garage Henriquez',
  },
  description: businessDescription,
  keywords: [
    'auto repair Montréal',
    'car repair Montréal QC',
    'mechanic Montréal',
    'garage Montréal',
    'fleet service Québec',
    'brake repair Montréal',
    'auto repair near me',
    'oil change Montréal',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Garage Henriquez | Auto Repair in Montréal, QC',
    description: businessDescription,
    siteName: 'Garage Henriquez',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garage Henriquez | Auto Repair in Montréal, QC',
    description: businessDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': `${SITE_URL}/#business`,
  name: 'Garage Henriquez',
  image: absoluteUrl('/icon-512x512.png'),
  url: SITE_URL,
  telephone: '+1-514-933-4493',
  email: 'garagehenriquez@gmail.com',
  priceRange: '$$',
  description: 'Expert auto repair and car repair mechanic in Montréal, QC. Offering diagnostics, brake repair, oil changes, fleet maintenance, and same-day service.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2001 Rue Centre',
    addressLocality: 'Montréal',
    addressRegion: 'QC',
    postalCode: 'H3K 1J1',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.4737,
    longitude: -73.5705,
  },
  areaServed: [
    { '@type': 'City', name: 'Montréal' },
    { '@type': 'AdministrativeArea', name: 'Québec' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '4',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Jason Lamarre' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Unbeatable service with very fair and honest pricing. The team took great care of all the issues with my girlfriend\'s Fiat and made the whole process easy and stress-free.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Peter Belanger' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Been dealing with Juan for over 10 years now. They are the most friendliest and honest mechanics I\'ve ever dealt with in my life.',
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '16:00',
    },
  ],
  sameAs: [
    'https://maps.google.com/?q=2001+Rue+Centre,+Montreal,+QC+H3K+1J1',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LocaleProvider>
          {children}
        </LocaleProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
