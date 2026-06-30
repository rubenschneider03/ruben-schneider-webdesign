import Header from '@/components/Header'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import PackagesSection from '@/components/sections/PackagesSection'
import HomelioReference from '@/components/sections/HomelioReference'
import WhyMeSection from '@/components/sections/WhyMeSection'
import ProcessSection from '@/components/sections/ProcessSection'
import AddOnsSection from '@/components/sections/AddOnsSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <PackagesSection />
        <HomelioReference />
        <WhyMeSection />
        <ProcessSection />
        <AddOnsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
