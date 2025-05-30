import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Oswald } from 'next/font/google';
import { Heebo } from 'next/font/google';
import "./flaticon.css";
import Head from "next/head";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  weight: ['400', '700'], // adjust weights as needed
  subsets: ['latin'],
});
const heebo = Heebo({
  weight: ['400'],
  subsets: ['latin'],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "Lahiru Harshan Portfolio";
const description = "Explore the professional portfolio of Lahiru Harshan, a [Your Profession/Specialty, e.g., Full-Stack Developer, UI/UX Designer]. Discover innovative projects, technical skills, and experience in [mention key technologies/areas e.g., React, Next.js, Node.js].";
const keywords = [
  "Lahiru Harshan",
  "portfolio",
  "web developer", // Adjust to your profession
  "software engineer", // Adjust to your profession
  "Next.js developer", // Add specific skills
  "React developer",
  "Sri Lanka", // Add your location if relevant for local SEO
  // Add more relevant keywords for your skills and services
];
const siteUrl = "https://yourdomain.com"; // **IMPORTANT: Replace with your actual domain**

export const metadata: Metadata = {
  // Title: Can be customized per page, but this is a good default for the homepage
  title: {
    default: siteName,
    template: `%s | ${siteName}`, // For other pages: "Page Title | Lahiru Harshan Portfolio"
  },
  description: description,
  keywords: keywords,
  authors: [{ name: "Lahiru Harshan", url: siteUrl }], // Link to your site or social profile
  creator: "Lahiru Harshan",
  publisher: "Lahiru Harshan",

  // Favicon: Assumes favicon.ico, apple-touch-icon.png, etc., are in your /public directory
  icons: {
    icon: "/favicon.ico", // Standard favicon
    shortcut: "/favicon-16x16.png", // Or your preferred shortcut icon
    apple: "/apple-touch-icon.png", // For Apple devices
    // You can add more sizes or types if needed
  },

  // Open Graph (for social media sharing - Facebook, LinkedIn, etc.)
  openGraph: {
    title: siteName,
    description: description,
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/og-image.png`, // **IMPORTANT: Create an engaging OG image (1200x630px) and place it in /public**
        width: 1200,
        height: 630,
        alt: `Preview of ${siteName}`,
      },
    ],
    locale: "en_US", // Adjust if your primary audience has a different locale
    type: "website", // Or "profile" if it's more of a personal profile page
  },

  // Twitter Card (for sharing on Twitter)
  twitter: {
    card: "summary_large_image", // Use "summary_large_image" for a more visual card
    title: siteName,
    description: description,
    // siteId: "@yourTwitterHandle", // If you have a Twitter Site ID
    creator: "@yourTwitterHandle", // **IMPORTANT: Replace with your Twitter handle**
    images: [`${siteUrl}/twitter-image.png`], // **IMPORTANT: Create a Twitter-specific image (e.g., 1200x675px or use the OG image) and place it in /public**
  },

  // Robots: Controls search engine crawling behavior
  robots: {
    index: true, // Allow indexing of this page
    follow: true, // Allow following links from this page
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL: Helps prevent duplicate content issues
  // Set this globally if your site is always served from one primary URL (e.g., https://yourdomain.com)
  // For dynamic pages, you'd set this in the page's generateMetadata function
  alternates: {
    canonical: siteUrl,
  },

  // Manifest (for Progressive Web App features, optional but good for user experience)
  // manifest: `${siteUrl}/manifest.json`, // Create a manifest.json file in /public

  // Verification (if you need to verify ownership with search consoles)
  // verification: {
  //   google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  //   yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  //   other: {
  //     me: ["your-email@example.com", siteUrl],
  //   },
  // },

  // Other useful metadata
  applicationName: siteName,
  appleWebApp: {
    title: siteName,
    statusBarStyle: "default",
    capable: true,
  },
  formatDetection: {
    telephone: false, // Set to true if you have clickable phone numbers
  },
  // assets: [`${siteUrl}/assets`], // If you have a dedicated assets folder you want to declare
  // category: 'technology', // If your portfolio fits a specific category
};

// --- VIEWPORT SETTINGS ---
export const viewport: Viewport = {
  themeColor: "#ffffff", // **Change to your site's primary theme color**
  colorScheme: "light", // Or "dark" or "light dark" if you support both
  width: "device-width",
  initialScale: 1,
  // maximumScale: 1, // Optional: uncomment if you want to prevent zooming
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en">

      {/*
        The <Head> component from `next/head` is not needed here for metadata
        as we are using the `metadata` export.
        The Google Font link for Heebo is also removed as `next/font/google` handles it.
      */}
<body className={`${geistSans.variable} ${geistMono.variable} ${oswald.className} antialiased`}>





{children}

</body>
    </html>
  );
}