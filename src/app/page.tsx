import Header from '@/components/Header'
import HeroSection from '@/components/sections/HeroSection'
import WhatYouGetSection from '@/components/sections/WhatYouGetSection'
import PackagesSection from '@/components/sections/PackagesSection'
import HomelioReference from '@/components/sections/HomelioReference'
import WhyMeSection from '@/components/sections/WhyMeSection'
import ProcessSection from '@/components/sections/ProcessSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhatYouGetSection />
        <PackagesSection />
        <HomelioReference />
        <WhyMeSection />
        <ProcessSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
