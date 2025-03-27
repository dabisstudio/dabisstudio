import type { Metadata } from "next";
import { inter, matter } from "./fonts";
import "./globals.css";
import Link from "next/link";
import CustomCursor from "@/components/ui/custom-cursor";
import PageTransition from "@/components/ui/page-transition";
import MobileMenu from "@/components/ui/mobile-menu";

export const metadata: Metadata = {
  title: "Studio Gusto - Creative Agency",
  description: "Gusto IDS aka dabisstudio is an international creative agency. We are recognized as a boutique agency focused on excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${matter.variable} min-h-screen bg-black text-white font-matter`}>
        <CustomCursor />
        <PageTransition />

        <header className="dabisstudio-container py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="mr-1">hello!</span>
              <span className="font-medium">dabisstudio</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/works" className="nav-link">Works</Link>
            <Link href="/studio" className="nav-link">Studio</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>
          <MobileMenu />
        </header>

        <main>
          {children}
        </main>

        <footer className="dabisstudio-container mt-20 py-8 border-t border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src="https://ext.same-assets.com/1247681252/1359854810.png" alt="Gusto Italian Design Studio" className="h-12 mb-4" />
              <p className="text-sm">Gusto Italian Design Studio Srl</p>
            </div>
            <div>
              <p className="text-sm">cf 02994940548</p>
              <Link href="https://www.iubenda.com/privacy-policy/69889674/full-legal" className="text-sm block mt-2">Privacy Policy</Link>
            </div>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/gusto.ids/" className="text-sm">Facebook</Link>
              <Link href="https://www.instagram.com/gustoids/" className="text-sm">Instagram</Link>
              <Link href="https://www.linkedin.com/company/gusto-italian-design-studio/" className="text-sm">LinkedIn</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
