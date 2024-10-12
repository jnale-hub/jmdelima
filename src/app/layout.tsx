import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StarsCanvas from "./components/StarBackground";
import Glow from "./components/Glow";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "./config";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    alternates: {
        canonical: siteConfig.url,
    },
    openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        type: "website",
        siteName: siteConfig.title,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased bg-background text-slate-100`}
            >
                <StarsCanvas />
                <Glow />
                {children}
            </body>
            <Analytics />
            <GoogleAnalytics
                gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""}
            />
        </html>
    );
}
