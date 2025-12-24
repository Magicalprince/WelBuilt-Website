import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "WelBuilt AI Solutions | Futuristic Web & Mobile Development",
  description:
    "Transform your digital vision into reality with WelBuilt AI Solutions. We specialize in cutting-edge websites, mobile apps, AI solutions, and SaaS products.",
  keywords: [
    "web development",
    "mobile app development",
    "AI solutions",
    "SaaS",
    "digital agency",
    "WelBuilt AI",
    "software development",
    "machine learning",
  ],
  authors: [{ name: "WelBuilt AI Solutions Pvt Ltd" }],
  openGraph: {
    title: "WelBuilt AI Solutions | Futuristic Web & Mobile Development",
    description:
      "Transform your digital vision into reality with cutting-edge AI-powered solutions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-[#0a0a0a] text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
