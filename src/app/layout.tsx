import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Oswald, Heebo } from 'next/font/google';
import './globals.css';
import './flaticon.css';
import {
  siteConfig,
  getPersonStructuredData,
  getWebsiteStructuredData,
  getProfessionalServiceStructuredData,
} from '@/lib/seo-config';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const oswald = Oswald({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
});

const heebo = Heebo({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

// Comprehensive Metadata for SEO
export const metadata: Metadata = {
  // Base URL for resolving relative URLs in metadata
  metadataBase: new URL(siteConfig.siteUrl),

  // Title configuration
  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.name}`,
  },

  // Description
  description: siteConfig.description,

  // Keywords
  keywords: siteConfig.keywords,

  // Authors
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  // Favicon and Icons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    title: siteConfig.siteName,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.jobTitle}`,
        type: 'image/png',
      },
      {
        url: `${siteConfig.siteUrl}/dp.png`,
        width: 400,
        height: 400,
        alt: siteConfig.name,
        type: 'image/png',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.siteName,
    description: siteConfig.shortDescription,
    creator: siteConfig.social.twitter,
    site: siteConfig.social.twitter,
    images: {
      url: `${siteConfig.siteUrl}/og-image.png`,
      alt: `${siteConfig.name} - ${siteConfig.jobTitle}`,
    },
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: siteConfig.siteUrl,
    languages: {
      'en-US': siteConfig.siteUrl,
    },
  },

  // Application info
  applicationName: siteConfig.name,
  referrer: 'origin-when-cross-origin',
  generator: 'Next.js',

  // Apple Web App
  appleWebApp: {
    title: siteConfig.name,
    statusBarStyle: 'black-translucent',
    capable: true,
  },

  // Format detection
  formatDetection: {
    telephone: true,
    date: true,
    email: true,
    address: true,
  },

  // Manifest
  manifest: '/manifest.json',

  // Category
  category: 'technology',

  // Other metadata
  other: {
    'msapplication-TileColor': siteConfig.themeColor,
  },

  // Google Search Console Verification
  verification: {
    google: 'google38510a47657f038b',
  },
};

// Viewport settings
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: siteConfig.themeColor },
    { media: '(prefers-color-scheme: dark)', color: siteConfig.themeColor },
  ],
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Prepare JSON-LD structured data
  const personStructuredData = getPersonStructuredData();
  const websiteStructuredData = getWebsiteStructuredData();
  const serviceStructuredData = getProfessionalServiceStructuredData();

  return (
    <html lang={siteConfig.language}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceStructuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}