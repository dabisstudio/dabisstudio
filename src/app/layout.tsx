import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import LenisProvider from "@/components/LenisProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dabis Studio — Digital Solutions That Matter",
  description:
    "Dabis Studio designs and builds high-impact AI products, secure platforms, and modern web experiences.",
  applicationName: "Dabis Studio",
  robots: "index, follow",
  openGraph: {
    title: "Dabis Studio — Digital Solutions That Matter",
    description:
      "We empower organizations with AI that turns complex challenges into real-world outcomes.",
    url: "https://www.dabisstudio.com",
    siteName: "Dabis Studio",
    locale: "en_US",
    images: [
      {
        url: "https://www.dabisstudio.com/images/HeroOpenGraph.png",
        width: 1200,
        height: 630,
        alt: "Dabis Studio - Digital Solutions That Matter",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dabis Studio — Digital Solutions That Matter",
    description:
      "We empower organizations with AI that turns complex challenges into real-world outcomes.",
    images: ["https://www.dabisstudio.com/images/HeroOpenGraph.png"],
  },
  icons: {
    shortcut: "/icon.svg",
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "16x16" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/icon.svg", type: "image/svg+xml" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6FPMJ6P9VB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6FPMJ6P9VB');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased overflow-x-hidden bg-background text-foreground`}>
        <LenisProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
