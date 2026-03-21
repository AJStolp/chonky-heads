import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chonkyheads.com"),
  title: "Chonky Heads | Software Studio in Wisconsin",
  description:
    "Helping people read, learn, and understand land. Chonky Heads builds unChonk (text-to-speech) and BNDRYIQ (property intelligence) — tools that make complex things simple.",
  keywords: [
    "Chonky Heads",
    "unChonk",
    "BNDRYIQ",
    "text to speech",
    "property intelligence",
    "software studio",
    "Wisconsin",
    "aerial video",
    "land analysis",
    "Chrome extension",
  ],
  authors: [{ name: "Chonky Heads LLC" }],
  creator: "Chonky Heads LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://chonkyheads.com",
  },
  openGraph: {
    title: "Chonky Heads | Software Studio in Wisconsin",
    description:
      "Helping people read, learn, and understand land. Building unChonk and BNDRYIQ — tools that make complex things simple.",
    url: "https://chonkyheads.com",
    siteName: "Chonky Heads",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chonky Heads | Software Studio in Wisconsin",
    description:
      "Helping people read, learn, and understand land. Building unChonk and BNDRYIQ — tools that make complex things simple.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-gray-950 text-white font-sans">
        {children}
      </body>
    </html>
  );
}
