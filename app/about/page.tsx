import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, MapPin, Users, Award, TrendingUp } from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-4 bg-slate-800">
        <section className="container mx-auto max-w-5xl space-y-16">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="px-4 py-2 text-emerald-400 border-emerald-200">
              🏢 About IndexEdge
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Empowering Dubai Businesses to Rank with Confidence
            </h1>
            <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
              Founded in the heart of Dubai, IndexEdge.com has been helping businesses across the UAE and GCC achieve digital success.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/dd.jpeg?height=400&width=800"
              alt="IndexEdge team in Dubai office"
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold text-white">Our Story</h2>
              <p className="text-emerald-100">
                IndexEdge.com began with a vision to help UAE businesses thrive online. We noticed that despite having world-class services, many struggled digitally. Our founders created a tailored SEO agency that bridges the cultural and technical gap.
              </p>
              <p className="text-emerald-100">
                With over 200 successful clients and 500+ projects, we've become Dubai's leading SEO agency, building lasting impact across 15+ countries.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, label: "Happy Clients", value: "200+" },
                { icon: TrendingUp, label: "Projects Completed", value: "500+" },
                { icon: Award, label: "Years Experience", value: "5+" },
                { icon: MapPin, label: "Countries Served", value: "15+" },
              ].map((item, i) => (
                <Card key={i} className="border-0 shadow-md">
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full mb-3">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{item.value}</h3>
                    <p className="text-sm text-emerald-100">{item.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[{
              icon: Target,
              title: "Our Mission",
              text: "To empower UAE businesses with powerful SEO strategies that deliver results and build visibility."
            }, {
              icon: Eye,
              title: "Our Vision",
              text: "To be the most trusted SEO partner in the Middle East, known for transparency and innovation."
            }].map((item, i) => (
              <Card key={i} className="border-0 shadow-md hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="bg-emerald-100 p-3 rounded-full text-emerald-600 inline-block mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-emerald-100">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Why Dubai?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[{
                  icon: MapPin,
                  title: "Strategic Location",
                  desc: "Global hub offering insights into both local and international markets."
                }, {
                  icon: Users,
                  title: "Diverse Market",
                  desc: "Multicultural environment teaches us cross-cultural SEO strategies."
                }, {
                  icon: TrendingUp,
                  title: "Innovation Hub",
                  desc: "Access to latest tech helps us stay ahead in SEO trends."
                }].map((item, i) => (
                  <Card key={i} className="border-0 shadow-md text-center">
                    <CardContent className="p-6">
                      <div className="bg-emerald-100 p-3 rounded-full text-emerald-600 inline-block mb-4">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-emerald-100 mt-2">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose IndexEdge?</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {["Local Expertise", "Proven Results", "Transparent Process", "Cutting-edge Tools"].map((text, i) => (
                  <Card key={i} className="border-0 shadow-md">
                    <CardContent className="p-5 text-center">
                      <h4 className="font-semibold text-white mb-2">{text}</h4>
                      <p className="text-sm text-emerald-100">
                        {text === "Local Expertise" && "Deep knowledge of UAE market and search behavior."}
                        {text === "Proven Results" && "Demonstrated success in improving search rankings."}
                        {text === "Transparent Process" && "We keep you informed every step of the way."}
                        {text === "Cutting-edge Tools" && "Using the latest SEO tools for better results."}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
