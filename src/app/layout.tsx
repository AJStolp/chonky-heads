import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chonkyheads.com"),
  title: "Chonky Heads | Software Studio",
  description:
    "A small software studio in Wisconsin building tools for how people read, learn, and understand land.",
  openGraph: {
    title: "Chonky Heads | Software Studio",
    description:
      "A small software studio in Wisconsin building tools for how people read, learn, and understand land.",
    url: "https://chonkyheads.com",
    siteName: "Chonky Heads",
    type: "website",
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
