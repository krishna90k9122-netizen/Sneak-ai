import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Storytelling } from "@/components/storytelling"
import { IntelligentResponse } from "@/components/intelligent-response"
import { ChapterInvisible } from "@/components/chapter-invisible"
import { ClaritySection } from "@/components/clarity-section"
import { Workflow } from "@/components/workflow"
import { Pricing } from "@/components/pricing"
import { FinalBrandExperience } from "@/components/final-brand-experience"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="sneak-outer min-h-screen w-full bg-[#03050C]">
      <div className="sneak-canvas w-full overflow-x-clip">
        <Navbar />
        <main>
          <Hero />
          <Storytelling />
          <IntelligentResponse />
          <ChapterInvisible />
          <ClaritySection />
          <Workflow />
          <Pricing />
          <FinalBrandExperience />
        </main>
        <Footer />
      </div>
    </div>
  )
}
