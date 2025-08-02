"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaWhatsapp } from "react-icons/fa";
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    toast.success("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto max-w-6xl px-4 py-16">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Stay Updated with Link Building Insights
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Get the latest link building strategies, case studies, and
              industry insights delivered to your inbox.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 rounded-full"
              />
              <Button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 rounded-full"
              >
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
              <Image
                src="/logo.png"
                alt="LOGO"
                width={35}
                height={35}
                // style={{ border: "1px solid white" }}
              />
              <span className="font-bold text-xl text-white">
                IndexEdge.com
              </span>
            </div>
            <p className="text-slate-300">
              Dubai's premier link building agency helping SaaS companies
              dominate search results with strategic, high-quality backlinks.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Services</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-slate-300 hover:text-emerald-400 transition-colors"
              >
                SaaS Link Building
              </a>
              <a
                href="#"
                className="block text-slate-300 hover:text-emerald-400 transition-colors"
              >
                White Label Services
              </a>
              <a
                href="#"
                className="block text-slate-300 hover:text-emerald-400 transition-colors"
              >
                End-to-End SEO
              </a>
              <a
                href="#"
                className="block text-slate-300 hover:text-emerald-400 transition-colors"
              >
                Content Marketing
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Company</h4>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-slate-300 hover:text-emerald-400 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="block text-slate-300 hover:text-emerald-400 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block text-slate-300 hover:text-emerald-400 transition-colors"
              >
                Contact
              </Link>
              <a
                href="#"
                className="block text-slate-300 hover:text-emerald-400 transition-colors"
              >
                Case Studies
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-12 w-12 text-emerald-400" />
                <span className="text-slate-300">
                  Al Rumaila Near Umar bin Khatab Road, Ajman, United Arab
                  Emirates
                </span>
              </div>
              {/* <div className="flex items-center space-x-3">
                <FaWhatsapp className="h-5 w-5 text-emerald-400" />
                <a
                  href="tel:+971556618406"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  +971556618406
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto max-w-6xl px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} IndexEdge.com. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
