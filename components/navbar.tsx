"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "next-themes";

const whatsappNumber = "+966580156192";
const whatsappMessage =
  "Hi! I'm interested in your link building services. Can we discuss my project?";

const openWhatsApp = () => {
  const url = `https://wa.me/${whatsappNumber.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(url, "_blank");
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true); // Avoid SSR hydration mismatch
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {mounted && (
              <Image
                src={resolvedTheme === "light" ? "/image.png" : "/logo.png"}
                alt="LOGO"
                width={35}
                height={35}
              />
            )}
            <span className="font-bold text-xl text-foreground">
              IndexEdge.com
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </Link>
            <ThemeToggle />
            <Button
              onClick={openWhatsApp}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-card py-4 border-t border-border">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button
                onClick={openWhatsApp}
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full rounded-full"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
