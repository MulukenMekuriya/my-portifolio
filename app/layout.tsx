import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Sora, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

/* ─── Font Configuration ─── */
const bebasNeue = Bebas_Neue({
  weight: ["400"],
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

/* ─── Metadata ─── */
export const metadata: Metadata = {
  metadataBase: new URL("https://mulukenmekuriya.dev"),
  title: "Muluken Mekuriya — Senior AI Software Engineer | DoD Cleared",
  description:
    "Senior AI Software Engineer with 9+ years building enterprise systems for the U.S. Department of Defense and federal agencies. Expert in RAG pipelines, multi-agent AI, and mission-critical platforms.",
  keywords: [
    "AI Software Engineer",
    "DoD Cleared Engineer",
    "Federal Contractor",
    "RAG Pipeline",
    "Multi-Agent AI",
    "Next.js",
    "TypeScript",
    "Silver Spring MD",
    "Washington DC",
    "Muluken Mekuriya",
  ],
  authors: [{ name: "Muluken Mekuriya" }],
  creator: "Muluken Mekuriya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mulukenmekuriya.dev",
    title: "Muluken Mekuriya — Senior AI Software Engineer | DoD Cleared",
    description:
      "Senior AI Software Engineer building AI-powered systems for federal agencies and defense environments — multi-agent architectures, RAG pipelines, and mission-critical platforms.",
    siteName: "Muluken Mekuriya",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muluken Mekuriya — Senior AI Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muluken Mekuriya — Senior AI Software Engineer | DoD Cleared",
    description:
      "Senior AI Software Engineer building AI-powered systems for federal agencies and defense environments.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1c" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
};

/* ─── Root Layout ─── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bebasNeue.variable} ${sora.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <head>
        {/* Analytics placeholder — replace with your tracking snippet */}
        {/* <script async src="https://your-analytics.example.com/script.js" /> */}
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
