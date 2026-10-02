import { Navbar } from "@/components/navbar"
import { Pricing } from "@/components/pricing"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="sneak-outer min-h-screen w-full">
      <div className="sneak-canvas w-full overflow-x-clip">
        <Navbar />
        <main>
          <Pricing />
        </main>
        <Footer />
      </div>
    </div>
  )
}
