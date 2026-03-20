import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Stats from '@/components/sections/Stats'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Fintech Platform for Faster Finance | Shortcut Finance",
  description: "Shortcut Finance simplifies financial services with smart technology. Manage payments, access financing, and handle finances faster — no complexity. Try today.",
  openGraph: {
    title: "Fintech Solutions for Faster, Smarter Finance",
    description: "Shortcut Finance helps individuals and businesses manage payments, access financing, and handle financial operations with ease. No complexity — just results.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fintech Solutions for Faster, Smarter Finance",
    description: "Shortcut Finance helps individuals and businesses manage payments, access financing, and handle financial operations with ease. No complexity — just results.",
  },
}

// @lpg: This is the 1-page layout — sections scroll vertically.
// Add section IDs, adjust order if needed, remove any unused sections.
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <About />
      <Stats />
      <CTA />
      <Footer />
    </main>
  )
}
