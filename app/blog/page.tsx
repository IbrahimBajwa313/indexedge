import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const blogPosts = [
  {
    id: 1,
    title: "Top SEO Trends in 2025",
    excerpt:
      "Discover the latest SEO trends that will dominate 2025, from AI-powered search to voice optimization strategies that every Dubai business needs to know.",
    date: "January 15, 2025",
    image: "/placeholder.svg?height=300&width=400",
    category: "Trends",
  },
  {
    id: 2,
    title: "Why Your Dubai Business Needs Local SEO",
    excerpt:
      "Learn how local SEO can transform your Dubai business visibility and drive more foot traffic to your physical locations in the competitive UAE market.",
    date: "January 12, 2025",
    image: "/placeholder.svg?height=300&width=400",
    category: "Local SEO",
  },
  {
    id: 3,
    title: "Technical SEO Checklist for SaaS Sites",
    excerpt:
      "A comprehensive technical SEO checklist specifically designed for SaaS companies looking to improve their search engine performance and user experience.",
    date: "January 10, 2025",
    image: "/placeholder.svg?height=300&width=400",
    category: "Technical",
  },
  {
    id: 4,
    title: "Content vs Backlinks: What's More Important?",
    excerpt:
      "The eternal SEO debate settled. We analyze the impact of quality content versus backlink strategies and reveal what truly drives rankings in 2025.",
    date: "January 8, 2025",
    image: "/placeholder.svg?height=300&width=400",
    category: "Strategy",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge variant="outline" className="px-4 py-2 text-blue-600 border-blue-200 mb-6">
            📚 Knowledge Hub
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">Insights & Updates from IndexEdge</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with our latest SEO insights, industry trends, and actionable strategies to grow
            your online presence.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-2 text-sm text-slate-500 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-slate-600 text-base leading-relaxed mb-6">
                    {post.excerpt}
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 bg-transparent"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8 py-4 bg-transparent">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
