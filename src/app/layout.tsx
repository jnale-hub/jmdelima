import type { Metadata } from 'next';
import './globals.css';
import StarsCanvas from './components/StarBackground';
import Glow from './components/Glow';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import Plausible from './components/Plausible';
import { DATA } from '@/data/resume';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: DATA.title,
  description: DATA.description,
  keywords: DATA.keywords,
  alternates: {
    canonical: DATA.url,
  },
  openGraph: {
    title: DATA.title,
    description: DATA.description,
    url: DATA.url,
    type: 'website',
    siteName: DATA.title,
    locale: 'en_US',
    images: [
      {
        url: '/Portfolio.png',
        width: 1920,
        height: 1080,
        alt: 'John Mark Delima Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DATA.title,
    description: DATA.description,
    images: ['/Portfolio.png'],
  },
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.className} antialiased bg-slate-950 text-slate-100 overflow-x-hidden`}
      >
        <StarsCanvas />
        <Glow />
        <Plausible />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
