import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans, Space_Grotesk } from "next/font/google";
import NavigationManager from "@/components/NavigationManager";
import Aurora from "@/components/Aurora";
import SmoothScrolling from "@/components/SmoothScrolling";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio | Putra Azam",
  description: "Portfolio website of Putra Azam, software development student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${spaceGrotesk.variable} antialiased bg-black`}
      >
        <div className="fixed inset-0 z-0">
          <Aurora speed={0.5} colorStops={["#d05300", "#ff9c78", "#d05300"]} />
        </div>
        <div className="relative z-10 w-full h-full min-h-screen">
          <SmoothScrolling>{children}</SmoothScrolling>
        </div>
      </body>
    </html>
  );
}
