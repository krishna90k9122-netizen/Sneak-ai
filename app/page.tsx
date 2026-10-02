import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ClaritySection } from "@/components/clarity-section"
import { Workflow } from "@/components/workflow"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="sneak-outer min-h-screen w-full">
      <div className="sneak-canvas w-full overflow-x-clip">
        <Navbar />
        <main>
          <Hero />
          <ClaritySection />
          <Workflow />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}
