import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IndexEdge.com - Rank with Confidence | Dubai SEO Agency",
  description:
    "Dubai's premier SEO agency helping businesses rank with confidence. Expert SEO services, local optimization, and digital marketing strategies for UAE businesses.",
  keywords:
    "SEO Dubai, Dubai SEO agency, search engine optimization UAE, digital marketing Dubai, local SEO, IndexEdge",
  authors: [{ name: "IndexEdge.com" }],
  creator: "IndexEdge.com",
  publisher: "IndexEdge.com",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://indexedge.com",
    siteName: "IndexEdge.com",
    title: "IndexEdge.com - Rank with Confidence | Dubai SEO Agency",
    description:
      "Dubai's premier SEO agency helping businesses rank with confidence. Expert SEO services and digital marketing strategies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IndexEdge.com - Dubai SEO Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IndexEdge.com - Rank with Confidence",
    description: "Dubai's premier SEO agency helping businesses achieve online success.",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
