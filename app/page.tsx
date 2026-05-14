import { Hero } from "@/components/hero"
import { NicheStrip } from "@/components/niche-strip"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Value } from "@/components/value"
import { Disruptor } from "@/components/disruptor"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <NicheStrip />
      <Services />
      <Projects />
      <Value />
      <Disruptor />
      <Process />
      <Testimonials />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
