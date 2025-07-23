"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"

const blogPosts = [
  {
    id: 1,
    slug: "vw-lemon-ad-history",
    title: "VW Lemon Ad History",
    excerpt:
      "How Volkswagen's famous 'Lemon' ad campaign revolutionized advertising and what SEO companies can learn from it.",
    image: "/Content-Scheduling-Tools.jpg?height=200&width=400",
    category: "Marketing History",
    readTime: "8 min read",
  },
  {
    id: 2,
    slug: "best-seo-affiliate-programs-2025",
    title: "12 Best SEO Affiliate Programs 2025",
    excerpt: "Discover the most lucrative SEO affiliate programs that can boost your revenue and expand your reach.",
    image: "/Best-SaaS-Affiliate-Programs.jpg?height=200&width=400",
    category: "Affiliate Marketing",
    readTime: "12 min read",
  },
  {
    id: 3,
    slug: "is-dropshipping-illegal",
    title: "Is Dropshipping Illegal?",
    excerpt:
      "Understanding the legal landscape of dropshipping and how it affects your business model and marketing strategies.",
    image: "/Is-Dropshipping-Illegal.jpg?height=200&width=400",
    category: "Legal",
    readTime: "6 min read",
  },
]

export function BlogSection() {
  return (
    <AnimatedSection className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-4">Latest Insights</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            From Our <span className="text-emerald-400">Blog</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-emerald-500 text-white">{post.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between text-sm text-slate-400 mb-3">
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="ghost" className="text-emerald-400 hover:text-emerald-300 p-0">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
