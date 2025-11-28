import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata = {
  title: "Contact Us - HBOWA",
  description: "Get in touch with HBOWA. Share your needs with us and we will contact you shortly.",
}

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ContactHero />
      <ContactForm />
      <Footer />
    </div>
  )
}
