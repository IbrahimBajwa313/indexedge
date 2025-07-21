"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, TrendingUp, Link, Clock } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    company: "CloudTech SEO",
    industry: "Cloud Computing",
    trafficIncrease: "450%",
    trafficFrom: "10k",
    trafficTo: "55k",
    linksBuilt: 450,
    timeSpent: "18 Months + Continue",
    description: "Comprehensive link building campaign for enterprise cloud solutions",
    challenge: "Low domain authority and poor search visibility in competitive cloud computing market",
    solution: "Strategic content marketing and high-authority link acquisition from tech publications",
    results: "Achieved first page rankings for 15+ competitive keywords and 450% traffic growth",
  },
  {
    id: 2,
    company: "Email Marketing Pro",
    industry: "Email Marketing",
    trafficIncrease: "5700%",
    trafficFrom: "0.5k",
    trafficTo: "29k",
    linksBuilt: 750,
    timeSpent: "40 Months + Continue",
    description: "Long-term strategy for email verification platform",
    challenge: "New brand with zero online presence in saturated email marketing space",
    solution: "Thought leadership content and strategic partnerships with marketing influencers",
    results: "Became industry authority with 5700% traffic increase and market leadership position",
  },
  {
    id: 3,
    company: "CyberSecure Solutions",
    industry: "Cybersecurity",
    trafficIncrease: "600%",
    trafficFrom: "1k",
    trafficTo: "7k",
    linksBuilt: 150,
    timeSpent: "10 Months + Continue",
    description: "Targeted link building for cybersecurity services",
    challenge: "Highly regulated industry with strict content guidelines and compliance requirements",
    solution: "Expert-driven content strategy with focus on security publications and industry forums",
    results: "600% traffic growth while maintaining full compliance with industry regulations",
  },
  {
    id: 4,
    company: "Digital Marketing Agency",
    industry: "Digital Marketing",
    trafficIncrease: "320%",
    trafficFrom: "100",
    trafficTo: "420",
    linksBuilt: 120,
    timeSpent: "4 Months + Continue",
    description: "Rapid growth strategy for social media management platform",
    challenge: "Intense competition from established players and limited marketing budget",
    solution: "Guerrilla marketing tactics and strategic guest posting on niche marketing blogs",
    results: "320% traffic increase in just 4 months with strong ROI and lead generation",
  },
  {
    id: 5,
    company: "FinTech Solutions",
    industry: "Financial Technology",
    trafficIncrease: "280%",
    trafficFrom: "5k",
    trafficTo: "19k",
    linksBuilt: 200,
    timeSpent: "12 Months + Continue",
    description: "Strategic link building for financial technology products",
    challenge: "Complex regulatory environment and need for high-trust, authoritative backlinks",
    solution: "Partnership with financial publications and thought leadership in fintech communities",
    results: "280% traffic growth with strong conversion rates and regulatory compliance",
  },
  {
    id: 6,
    company: "HR Management Pro",
    industry: "Human Resources",
    trafficIncrease: "190%",
    trafficFrom: "8k",
    trafficTo: "23k",
    linksBuilt: 180,
    timeSpent: "15 Months + Continue",
    description: "Authority building for HR management software",
    challenge: "Traditional industry slow to adopt new technologies and digital marketing",
    solution: "Educational content strategy targeting HR professionals and industry associations",
    results: "190% traffic increase with strong B2B lead generation and industry recognition",
  },
]

export function CaseStudyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3
  const maxIndex = Math.max(0, caseStudies.length - itemsPerView)

  const goToPrevious = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex(Math.min(maxIndex, currentIndex + 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {caseStudies.map((study) => (
            <div key={study.id} className="w-1/3 flex-shrink-0 px-4">
              <Card className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{study.company}</h3>
                      <Badge variant="outline" className="text-emerald-400 border-emerald-500/20">
                        {study.industry}
                      </Badge>
                    </div>
                    <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      ↗ {study.trafficIncrease}
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm mb-6">{study.description}</p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-slate-300">
                        <TrendingUp className="h-4 w-4 mr-2 text-emerald-400" />
                        <span className="text-sm">Traffic Increase</span>
                      </div>
                      <span className="text-white font-semibold">
                        {study.trafficFrom} → {study.trafficTo}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-slate-300">
                        <Link className="h-4 w-4 mr-2 text-emerald-400" />
                        <span className="text-sm">Links Built</span>
                      </div>
                      <span className="text-white font-semibold">{study.linksBuilt}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-slate-300">
                        <Clock className="h-4 w-4 mr-2 text-emerald-400" />
                        <span className="text-sm">Time Spent</span>
                      </div>
                      <span className="text-white font-semibold text-sm">{study.timeSpent}</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-emerald-400 font-semibold">Challenge: </span>
                      <span className="text-slate-300">{study.challenge}</span>
                    </div>
                    <div>
                      <span className="text-emerald-400 font-semibold">Solution: </span>
                      <span className="text-slate-300">{study.solution}</span>
                    </div>
                    <div>
                      <span className="text-emerald-400 font-semibold">Results: </span>
                      <span className="text-slate-300">{study.results}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-slate-800/80 border-slate-600 hover:bg-slate-700"
        onClick={goToPrevious}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="h-4 w-4 text-white" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-slate-800/80 border-slate-600 hover:bg-slate-700"
        onClick={goToNext}
        disabled={currentIndex === maxIndex}
      >
        <ChevronRight className="h-4 w-4 text-white" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-emerald-400" : "bg-slate-600"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
