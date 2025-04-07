import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arctevia - Sovereign Compute for Open AI",
  description: "Run open-source AI models on Nordic GPU infrastructure — no lock-in, no surveillance.",
  openGraph: {
    title: "Arctevia – Sovereign Compute for Open AI",
    description: "Privacy-first, green infrastructure for open-source AI in Europe.",
    images: ['/social-preview.png'],
    url: "https://arctevia.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arctevia – Sovereign Compute for Open AI",
    description: "Privacy-first, green infrastructure for open-source AI in Europe.",
    images: ['/social-preview.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
