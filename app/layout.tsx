import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#040506",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kova.app"),
  title: "Kova — Desktop utility for productivity & system control",
  description:
    "Fast, lightweight tray utility for system monitoring, clipboard history, quick actions, and disk cleanup. Local-first. Windows & macOS.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kova — Your workspace, one menu away",
    description:
      "Native desktop utility built with Tauri and Rust. Monitor, clip, launch, and clean — from the system tray.",
    type: "website",
    siteName: "Kova",
    url: "https://kova.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kova — Your workspace, one menu away",
    description:
      "Native desktop utility built with Tauri and Rust. Monitor, clip, launch, and clean — from the system tray.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-text-primary">
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
