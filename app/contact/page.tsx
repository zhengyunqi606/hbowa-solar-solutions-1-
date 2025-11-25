// app/contact/page.tsx
import {ContactForm} from "@/components/contact/contact-form"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <ContactForm />
      <Footer />
    </>
  )
}