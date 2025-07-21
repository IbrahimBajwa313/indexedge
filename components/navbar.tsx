"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold text-lg">IE</div>
            <span className="font-bold text-xl text-slate-800">IndexEdge.com</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/blog" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Free Audit</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">Get Free Audit</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
