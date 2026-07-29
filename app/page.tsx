import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroContent from './components/HeroCarousel'
import LogosSection from './components/LogosSection'
import Features from './components/Features'
import Working from './components/Working'
import About from './components/About'
import Email from './components/Email'
import Team from './components/Team'
import ProjectDisplay from './components/ProjectDisplay'


export default function Home() {
  return (
    <>

      <Navbar />
      <HeroContent />
      <LogosSection />
      <Features />
      <Working />
      {/* <About /> */}
      {/* <Team /> */}
      {/* <ProjectDisplay /> */}
      <Email />

    
      <Footer />

    </>
  )
}
