"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Marketing Manager",
    company: "TechFlow SEO",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "IndexEdge transformed our link building strategy completely. We saw a 300% increase in organic traffic within 6 months. Their team understands SEO businesses like no other agency we've worked with.",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Outreach Manager",
    company: "CloudSync Solutions",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "The quality of backlinks we received was exceptional. Every link was from a high-authority, relevant site. Our domain authority increased from 35 to 52 in just 8 months.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "SEO Director",
    company: "DataVault Pro",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "Professional, transparent, and results-driven. IndexEdge doesn't just build links; they build relationships. Our rankings for competitive keywords improved dramatically.",
  },
  {
    id: 4,
    name: "David Kim",
    title: "Growth Marketing Lead",
    company: "AutoScale AI",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "ROI-focused approach that actually works. We've tried other agencies before, but IndexEdge is the only one that delivered consistent, measurable results month after month.",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    title: "Digital Marketing Manager",
    company: "SecureFlow Systems",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "Their white-label service allowed us to expand our offerings to clients seamlessly. The quality and reporting standards are exactly what we needed for our agency.",
  },
  {
    id: 6,
    name: "James Wilson",
    title: "VP of Marketing",
    company: "InnovateSEO",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "From day one, they understood our industry and target audience. The content they created for link building was so good, we started using their writers for other projects too.",
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <div className="relative">
      <Card className="bg-card border-border overflow-hidden">
        <CardContent className="p-8 md:p-12">
          <div className="flex items-center justify-center mb-6">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-emerald-400 text-emerald-400" />
            ))}
          </div>

          <blockquote className="text-xl md:text-2xl text-foreground text-center mb-8 leading-relaxed italic">
            "{testimonials[currentIndex].content}"
          </blockquote>

          <div className="flex items-center justify-center space-x-4">
            <Image
              src={testimonials[currentIndex].image || "/placeholder.svg"}
              alt={testimonials[currentIndex].name}
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="text-center">
              <h4 className="font-semibold text-foreground text-lg">{testimonials[currentIndex].name}</h4>
              <p className="text-muted-foreground">{testimonials[currentIndex].title}</p>
              <p className="text-emerald-400 text-sm">{testimonials[currentIndex].company}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-secondary/80 border-border hover:bg-secondary"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-4 w-4 text-foreground" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-secondary/80 border-border hover:bg-secondary"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4 text-foreground" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-emerald-400" : "bg-muted"
            }`}
            onClick={() => {
              setIsAutoPlaying(false)
              setCurrentIndex(index)
            }}
          />
        ))}
      </div>
    </div>
  )
}
