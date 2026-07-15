import type { Metadata, Viewport } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "J & Co. Home Services | Isanti, MN",
  description:
    "Home organizing, junk removal, yard work, cleaning, and odd jobs in Isanti, MN. Call Jacob and Jamee — we'll help with anything.",
  manifest: "/manifest.json",
  openGraph: {
    title: "J & Co. Home Services",
    description: "Whatever you need. Call us in Isanti, MN.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "J & Co. Home Services",
    description: "Whatever you need. Call us in Isanti, MN.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="bg-bg text-text font-body overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[1000] focus:px-4 focus:py-2 focus:bg-accent focus:text-bg focus:rounded font-heading font-semibold"
        >
          Skip to main content
        </a>
        <CookieBanner />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
