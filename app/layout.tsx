import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "IndexEdge.com - Best Link Building Services for SaaS Companies | Dubai",
  description:
    "Transform your SaaS business with strategic link building. We help SaaS companies boost rankings, increase traffic, and drive growth through high-quality backlinks. Based in Dubai, UAE.",
  keywords:
    "link building, SaaS link building, backlinks, SEO Dubai, digital marketing, search engine optimization, SaaS marketing, IndexEdge",
  authors: [{ name: "IndexEdge.com" }],
  creator: "IndexEdge.com",
  publisher: "IndexEdge.com",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://indexedge.com",
    siteName: "IndexEdge.com",
    title: "IndexEdge.com - Best Link Building Services for SaaS Companies",
    description:
      "Transform your SaaS business with strategic link building. Boost rankings, increase traffic, and drive growth through high-quality backlinks.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IndexEdge.com - SaaS Link Building Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IndexEdge.com - Best Link Building Services for SaaS Companies",
    description:
      "Transform your SaaS business with strategic link building and high-quality backlinks.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
