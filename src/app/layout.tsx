import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Velos AI - The AI Meeting Assistant That Actually Understands You",
    description: "Join thousands of professionals waiting for early access to Velos AI. Automate your meeting notes with AI that actually understands your conversations.",
    keywords: ["AI meeting assistant", "meeting transcription", "AI notetaker", "meeting automation"],
    openGraph: {
        title: "Velos AI - The AI Meeting Assistant That Actually Understands You",
        description: "Join thousands of professionals waiting for early access to Velos AI.",
        url: "https://velosai.com",
        siteName: "Velos AI",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Velos AI",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Velos AI - The AI Meeting Assistant That Actually Understands You",
        description: "Join thousands of professionals waiting for early access to Velos AI.",
        images: ["/og-image.png"],
    },
};

import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="antialiased min-h-screen bg-dark relative selection:bg-primary/30 selection:text-white">
                <AnimatedBackground />
                <div className="relative z-10">
                    {children}
                </div>
            </body>
        </html>
    );
}
