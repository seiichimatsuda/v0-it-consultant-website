import Hero from "@/components/hero"
import Services from "@/components/services"
import Expertise from "@/components/expertise"
import CaseStudies from "@/components/case-studies"
import Team from "@/components/team"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Services />
      <Expertise />
      <CaseStudies />
      <Team />
      <Contact />
    </main>
  )
}
