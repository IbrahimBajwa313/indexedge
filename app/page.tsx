import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, TrendingUp, Users, Award, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-slate-600/10 -skew-y-1 transform origin-top-left"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="px-4 py-2 text-blue-600 border-blue-200">
              🚀 Dubai's Leading SEO Agency
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-slate-800 bg-clip-text text-transparent">
              IndexEdge.com
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 font-medium">Rank with Confidence</p>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Transform your online presence with data-driven SEO strategies. We help Dubai businesses dominate search
              results and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Get a Free SEO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-transparent">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="text-blue-600 border-blue-200">
                About IndexEdge
              </Badge>
              <h2 className="text-4xl font-bold text-slate-800">Dubai's Premier SEO Experts</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Based in the heart of Dubai, IndexEdge.com is your trusted partner for comprehensive SEO solutions. We
                combine cutting-edge technology with deep market insights to deliver results that matter.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">500+ Projects</h3>
                    <p className="text-sm text-slate-500">Successfully completed</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">200+ Clients</h3>
                    <p className="text-sm text-slate-500">Across UAE & GCC</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="IndexEdge team in Dubai office"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-slate-800">Google Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-blue-600 border-blue-200">
              Pricing Plans
            </Badge>
            <h2 className="text-4xl font-bold text-slate-800">Choose Your Growth Plan</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Scale your SEO efforts as your business grows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="relative border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-slate-800">Starter</CardTitle>
                <div className="text-4xl font-bold text-blue-600">
                  $99<span className="text-lg text-slate-500">/month</span>
                </div>
                <CardDescription className="text-slate-600">
                  Perfect for small businesses starting their SEO journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700">Basic SEO Audit</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700">Keyword Research</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700">1 Blog Post</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="relative border-2 border-blue-500 hover:border-blue-600 transition-all duration-300 hover:shadow-xl scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-slate-800">Professional</CardTitle>
                <div className="text-4xl font-bold text-blue-600">
                  $299<span className="text-lg text-slate-500">/month</span>
                </div>
                <CardDescription className="text-slate-600">
                  Ideal for growing businesses ready to scale
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700">Everything in Starter</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700">On-page SEO</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700">4 Blog Posts</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-slate-800">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-blue-600">
                  $599<span className="text-lg text-slate-500">/month</span>
                </div>
                <CardDescription className="text-slate-600">
                  Complete SEO solution for established businesses
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700">Everything in Professional</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700">Technical SEO</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700">Monthly Reports</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700">Dedicated Manager</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-blue-600 border-blue-200">
              Client Success Stories
            </Badge>
            <h2 className="text-4xl font-bold text-slate-800">What Our Clients Say</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what businesses across Dubai say about working with IndexEdge.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "IndexEdge transformed our online presence completely. Our organic traffic increased by 300% in just 6
                  months. Their team truly understands the Dubai market."
                </p>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Sarah Al-Mansouri"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-800">Sarah Al-Mansouri</h4>
                    <p className="text-sm text-slate-500">CEO, Dubai Tech Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "Professional, reliable, and results-driven. IndexEdge helped us rank #1 for our target keywords. The
                  ROI has been incredible for our e-commerce business."
                </p>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Ahmed Hassan"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-800">Ahmed Hassan</h4>
                    <p className="text-sm text-slate-500">Founder, Emirates Online Store</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "The team at IndexEdge is exceptional. They don't just deliver results; they educate you throughout
                  the process. Our local SEO has never been stronger."
                </p>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Maria Rodriguez"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-800">Maria Rodriguez</h4>
                    <p className="text-sm text-slate-500">Director, Gulf Marketing Agency</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
