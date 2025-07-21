"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
    alert("Thank you for subscribing to our newsletter!")
  }

  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto max-w-6xl px-4 py-16">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold">Stay Updated with SEO Insights</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Get the latest SEO tips, industry trends, and exclusive strategies delivered to your inbox every week.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold text-lg">IE</div>
              <span className="font-bold text-xl">IndexEdge.com</span>
            </div>
            <p className="text-slate-300">
              Dubai's premier SEO agency helping businesses rank with confidence and achieve sustainable online growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-slate-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-slate-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/blog" className="block text-slate-300 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="block text-slate-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <div className="space-y-2">
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">
                SEO Audit
              </a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">
                Local SEO
              </a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">
                Technical SEO
              </a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">
                Content Marketing
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">Downtown Dubai, UAE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+971551234567" className="text-slate-300 hover:text-white transition-colors">
                  +971-55-123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:ceo@indexedge.com" className="text-slate-300 hover:text-white transition-colors">
                  ceo@indexedge.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto max-w-6xl px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} IndexEdge.com. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
