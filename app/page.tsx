"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Target,
  CheckCircle,
  BarChart3,
  Users,
  Award,
  Zap,
  Globe,
  Link,
  Search,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { CaseStudyCarousel } from "@/components/case-study-carousel"
import { ContactSection } from "@/components/contact-section"
import { BlogSection } from "@/components/blog-section"

const whatsappNumber = "+971556618406"
const whatsappMessage = "Hi! I'm interested in your link building services. Can we discuss my project?"

const openWhatsApp = () => {
  const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsappMessage)}`
  window.open(url, "_blank")
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>

        <AnimatedSection className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
            <span className="text-emerald-400 text-sm font-medium">Let's craft a strategy that works for you.</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-white">Rank with </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              The Confidence
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            From SEO startups to scaling brands, our backlinks speak louder than words. See how we've helped clients
            boost rankings, increase traffic, and drive real growth—link by link.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
            >
              Explore More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={openWhatsApp}
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg rounded-full bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat Now
            </Button>
          </div>
        </AnimatedSection>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Case Studies Results Section */}
      {/* <AnimatedSection className="py-20 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <Image
            src="/images/case-study-results.png"
            alt="Case Study Results"
            width={1400}
            height={600}
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </AnimatedSection> */}

      {/* Trust Section */}
      <AnimatedSection className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-emerald-400">You are in good hands</span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            With over 500+ successful campaigns and partnerships with leading digital marketing companies, we've
            mastered the art of building authority through strategic link placement.
          </p>

          <Button
            onClick={openWhatsApp}
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg rounded-full mb-16"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Chat Now
          </Button>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">500+</h3>
              <p className="text-slate-400">Successful Campaigns</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">300%</h3>
              <p className="text-slate-400">Average Traffic Increase</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">98%</h3>
              <p className="text-slate-400">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
              <p className="text-slate-400">Countries Served</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-4">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Backlink Services That <span className="text-emerald-400">Scale SEO Growth</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive link building solutions designed specifically for digital marketing companies looking to
              dominate their market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="bg-emerald-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <Link className="h-8 w-8 text-emerald-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">SEO Link Building</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-base leading-relaxed mb-6">
                  Specialized link building strategies for SEO companies. We understand your unique challenges and build
                  authority in your niche through targeted, high-quality backlinks.
                </CardDescription>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    Industry-specific outreach
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    High-authority publications
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    Competitor analysis
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="bg-emerald-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <Shield className="h-8 w-8 text-emerald-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">White Label Link Building</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-base leading-relaxed mb-6">
                  Perfect for agencies looking to expand their service offerings. We work behind the scenes to deliver
                  exceptional results under your brand name.
                </CardDescription>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    Your brand, our expertise
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    Scalable solutions
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    Dedicated account manager
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="bg-emerald-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <Search className="h-8 w-8 text-emerald-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">End to End SEO Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-base leading-relaxed mb-6">
                  Complete SEO ecosystem including technical optimization, content strategy, and link building.
                  Everything you need to dominate search results.
                </CardDescription>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    Technical SEO audit
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    Content optimization
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    Link building campaigns
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Link Building is Important */}
      <AnimatedSection className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-4">Why It Matters</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Why Link Building is <span className="text-emerald-400">Critical</span> for SEO Success
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Google's algorithm considers backlinks as one of the top three ranking factors. For digital marketing
                  companies, this means that without a solid link building strategy, you're essentially invisible to
                  your potential customers.
                </p>
                <p>
                  High-quality backlinks from authoritative websites signal to search engines that your content is
                  valuable, trustworthy, and relevant. This directly translates to higher rankings, increased organic
                  traffic, and more qualified leads.
                </p>
                <p>
                  Our white-hat strategies focus on building genuine relationships and creating valuable content that
                  naturally attracts links from industry leaders, ensuring sustainable long-term growth for your
                  business.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-emerald-500/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">85%</div>
                    <div className="text-slate-300">
                      of marketers say link building is the most challenging SEO tactic
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">3x</div>
                    <div className="text-slate-300">more likely to rank on page 1 with quality backlinks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">70%</div>
                    <div className="text-slate-300">of links to top-ranking pages are from high-authority sites</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">2.5x</div>
                    <div className="text-slate-300">increase in organic traffic with strategic link building</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Case Studies Carousel */}
      {/* <AnimatedSection className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-4">Success Stories</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Real Results from Real <span className="text-emerald-400">SEO Companies</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how we've helped digital marketing companies achieve remarkable growth through strategic link building
              campaigns.
            </p>
          </div>
          <CaseStudyCarousel />
        </div>
      </AnimatedSection> */}

      {/* Pricing Section */}
      <AnimatedSection className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-4">Pricing Plans</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Choose Your <span className="text-emerald-400">Growth Plan</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. Scale your link building efforts as your business grows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-white mb-4">Starter Plan</CardTitle>
                <div className="text-4xl font-bold text-emerald-400 mb-2">
                  $1,999<span className="text-lg text-slate-400">/month</span>
                </div>
                <CardDescription className="text-slate-300">Perfect for early-stage SEO companies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>10 high-quality backlinks/month</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>Competitor analysis</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>Monthly reporting</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>Email support</span>
                  </div>
                </div>
                <Button
                  onClick={openWhatsApp}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-full"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat Now
                </Button>
              </CardContent>
            </Card>

            {/* Most Popular Plan */}
            <Card className="bg-slate-800/50 border-emerald-500 hover:border-emerald-400 transition-all duration-300 relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-emerald-500 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-white mb-4">Growth Plan</CardTitle>
                <div className="text-4xl font-bold text-emerald-400 mb-2">
                  $3,999<span className="text-lg text-slate-400">/month</span>
                </div>
                <CardDescription className="text-slate-300">Ideal for scaling SEO businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>25 high-quality backlinks/month</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>Content creation & outreach</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>Bi-weekly reporting</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>Dedicated account manager</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>Priority support</span>
                  </div>
                </div>
                <Button
                  onClick={openWhatsApp}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-full"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat Now
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-white mb-4">Enterprise Plan</CardTitle>
                <div className="text-4xl font-bold text-emerald-400 mb-2">
                  $7,999<span className="text-lg text-slate-400">/month</span>
                </div>
                <CardDescription className="text-slate-300">For established SEO companies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>50+ high-quality backlinks/month</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>Custom content strategy</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>Weekly reporting & calls</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>White-label options</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>24/7 priority support</span>
                  </div>
                </div>
                <Button
                  onClick={openWhatsApp}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-full"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat Now
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-300 mb-4">Need a custom solution for your agency?</p>
            <Button
              onClick={openWhatsApp}
              variant="outline"
              className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 rounded-full bg-transparent"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Get Custom Agency Pricing
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-4">Why Choose Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What Makes Us <span className="text-emerald-400">Different</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="bg-emerald-500/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Experts in SEO</h3>
                <p className="text-slate-300">
                  Deep understanding of SEO business models and unique link building challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="bg-emerald-500/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">ROI-Focused</h3>
                <p className="text-slate-300">
                  Every campaign is designed to deliver measurable results and positive ROI.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="bg-emerald-500/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Transparent Pricing</h3>
                <p className="text-slate-300">
                  No hidden fees, no surprises. Clear pricing with detailed monthly reports.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="bg-emerald-500/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Only Pay for Results</h3>
                <p className="text-slate-300">
                  We only charge for successfully placed, high-quality backlinks that meet our standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-4">
              Client Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What Our <span className="text-emerald-400">Clients Say</span>
            </h2>
          </div>
          <TestimonialSlider />
        </div>
      </AnimatedSection>

      {/* Blog Section */}
      <BlogSection />

      {/* FAQ Section */}
      <AnimatedSection className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-4">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Frequently Asked <span className="text-emerald-400">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-slate-800/50 border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-emerald-400 text-left">
                Why do I need a link building agency?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 leading-relaxed">
                Link building is one of the most challenging and time-consuming aspects of SEO. It requires specialized
                knowledge, industry relationships, and consistent effort. A professional agency has the expertise,
                tools, and connections to secure high-quality backlinks that would be difficult to obtain on your own,
                allowing you to focus on your core business.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-slate-800/50 border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-emerald-400 text-left">
                How long does it take to see results from link building?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 leading-relaxed">
                Typically, you'll start seeing initial improvements in rankings within 3-6 months, with more significant
                results appearing after 6-12 months. Link building is a long-term strategy that compounds over time. The
                exact timeline depends on your industry competitiveness, current domain authority, and the quality of
                links we secure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-slate-800/50 border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-emerald-400 text-left">
                What makes your link building approach different?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 leading-relaxed">
                We focus exclusively on white-hat, relationship-based link building. Our approach involves creating
                valuable content, building genuine relationships with industry publications, and securing links that
                provide real value to readers. We never use PBNs, link farms, or other black-hat techniques that could
                harm your site's reputation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-slate-800/50 border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-emerald-400 text-left">
                Do you guarantee specific ranking improvements?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 leading-relaxed">
                While we can't guarantee specific rankings (as search algorithms are constantly evolving), we do
                guarantee the quality and placement of backlinks. We provide detailed monthly reports showing all
                secured links, their metrics, and the overall impact on your domain authority and organic traffic
                growth.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </AnimatedSection>

      {/* Final CTA Banner */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-cyan-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Work Together</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Ready to dominate your market with strategic link building? Let's discuss how we can accelerate your SEO
            growth.
          </p>
          <Button
            onClick={openWhatsApp}
            size="lg"
            className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-4 text-lg rounded-full mr-4"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Chat Now
          </Button>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  )
}
