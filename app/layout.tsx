import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

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

export const metadata: Metadata = {
  title: "Kova — Desktop utility for productivity & system control",
  description:
    "Fast, lightweight tray utility for system monitoring, clipboard history, quick actions, and disk cleanup. Local-first. Windows & macOS.",
  openGraph: {
    title: "Kova — Your workspace, one menu away",
    description:
      "Native desktop utility built with Tauri and Rust. Monitor, clip, launch, and clean — from the system tray.",
    type: "website",
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

        <GoogleAnalytics gaId="G-3LMLQNKWSR" />
      </body>
    </html>
  );
}
