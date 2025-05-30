import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Lahiru Harshan Portfolio",
  description: "Lahiru Harshan Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

        <Head>
        <link rel="icon" href="data:," /> 
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
<body className={`${geistSans.variable} ${geistMono.variable} ${oswald.className} antialiased`}>


        {children}
      </body>
    </html>
  );
}
