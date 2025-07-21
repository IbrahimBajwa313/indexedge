import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, MapPin, Users, Award, TrendingUp } from "lucide-react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="px-4 py-2 text-blue-600 border-blue-200">
              🏢 About IndexEdge
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800">
              Empowering Dubai Businesses to Rank with Confidence
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Founded in the heart of Dubai, IndexEdge.com has been at the forefront of digital transformation, helping
              businesses across the UAE and GCC region achieve unprecedented online success.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="IndexEdge team in Dubai office"
              width={800}
              height={400}
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-800">Our Story</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                IndexEdge.com was born from a simple observation: businesses in Dubai and the broader UAE region were
                struggling to compete in the digital landscape despite having world-class products and services.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our founders, seasoned digital marketing professionals with over 15 years of combined experience,
                recognized the unique challenges faced by businesses in the Middle East market. Cultural nuances,
                multilingual requirements, and local search behaviors demanded a specialized approach that generic SEO
                agencies couldn't provide.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Today, we're proud to be Dubai's premier SEO agency, having helped over 200 businesses across various
                industries achieve their digital marketing goals and establish dominant online presences.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">200+</h3>
                  <p className="text-slate-600">Happy Clients</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">500+</h3>
                  <p className="text-slate-600">Projects Completed</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">5+</h3>
                  <p className="text-slate-600">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">15+</h3>
                  <p className="text-slate-600">Countries Served</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Mission</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To empower businesses across Dubai and the UAE with cutting-edge SEO strategies that drive sustainable
                  growth, increase online visibility, and deliver measurable ROI. We believe every business deserves to
                  rank with confidence in the digital landscape.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Vision</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To become the Middle East's most trusted SEO partner, known for our innovative approaches, transparent
                  practices, and unwavering commitment to client success. We envision a future where every business in
                  the region can compete globally through strategic digital presence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Dubai & Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {/* Why Dubai */}
            <div className="text-center space-y-8">
              <h2 className="text-4xl font-bold text-slate-800">Why Dubai?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">Strategic Location</h3>
                  <p className="text-slate-600">
                    Dubai's position as a global business hub gives us unique insights into both local and international
                    markets.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">Diverse Market</h3>
                  <p className="text-slate-600">
                    The multicultural business environment in Dubai has taught us to create SEO strategies that resonate
                    across cultures.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">Innovation Hub</h3>
                  <p className="text-slate-600">
                    Being at the center of technological advancement allows us to stay ahead of SEO trends and algorithm
                    changes.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="text-center space-y-8">
              <h2 className="text-4xl font-bold text-slate-800">Why Choose IndexEdge?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold text-slate-800 mb-2">Local Expertise</h4>
                    <p className="text-sm text-slate-600">
                      Deep understanding of UAE market dynamics and search behaviors
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold text-slate-800 mb-2">Proven Results</h4>
                    <p className="text-sm text-slate-600">
                      Track record of delivering measurable ROI and ranking improvements
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold text-slate-800 mb-2">Transparent Process</h4>
                    <p className="text-sm text-slate-600">
                      Clear reporting and communication throughout every project phase
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold text-slate-800 mb-2">Cutting-edge Tools</h4>
                    <p className="text-sm text-slate-600">
                      Latest SEO technologies and analytics for optimal performance
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
