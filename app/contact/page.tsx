"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { ContactSection } from "@/components/contact-section"

function openWhatsApp() {
  const phoneNumber = "+971556618406" // ✅ Replace with your actual number
  const message = encodeURIComponent("Hi! I'm interested in your link building services. Can we discuss my project?")
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
}

export default function LetsWorkTogetherPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-emerald-600 to-cyan-600 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Work Together</h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Ready to dominate your market with strategic link building? Let's discuss how we can accelerate your SEO growth.
          </p>
          <Button
            onClick={openWhatsApp}
            size="lg"
            className="bg-white text-emerald-600 hover:bg-white/90 px-8 py-4 text-lg rounded-full shadow-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Chat Now
          </Button>
        </div>
      </section>

      {/* Contact Form Section (Styled separately, outside of gradient) */}
      <section className="bg-background py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <ContactSection />
        </div>
      </section>
    </main>
  )
}
