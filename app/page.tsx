import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroContent from './components/HeroCarousel'
import LogosSection from './components/LogosSection'
import Features from './components/Features'
import Working from './components/Working'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Email from './components/Email'
import Team from './components/Team'
import Services from './components/Services'
import ProjectDisplay from './components/ProjectDisplay'
import Steps from './components/Steps'

export default function Home() {
  return (
    <>

      <Navbar />
      <HeroContent />
      <LogosSection />
      <Features />
      <Working />
      {/* <About /> */}
      <Services />
      {/* <Team /> */}
      <Steps />
      {/* <ProjectDisplay /> */}
      <Testimonials />
      <Email />
    
      <Footer />

    </>
  )
}
