"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"

const whatsappNumber = "+923256677769"
const whatsappMessage = "Hi! I'm interested in your link building services. Can we discuss my project?"

const openWhatsApp = () => {
  const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsappMessage)}`
  window.open(url, "_blank")
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-sm border-b border-slate-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-emerald-500 text-white px-3 py-1 rounded-lg font-bold text-lg">IE</div>
            <span className="font-bold text-xl text-white">IndexEdge.com</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium">
              About
            </Link>
            <Link href="/blog" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium">
              Contact
            </Link>
            <Button onClick={openWhatsApp} className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full">
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-800 py-4 border-t border-slate-800">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                href="/"
                className="text-slate-300 hover:text-emerald-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-slate-300 hover:text-emerald-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-slate-300 hover:text-emerald-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-slate-300 hover:text-emerald-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button
                onClick={openWhatsApp}
                className="bg-emerald-500 hover:bg-emerald-600 text-white w-full rounded-full"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
