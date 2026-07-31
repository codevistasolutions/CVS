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
import Trusted from "./components/Trusted"
import Action from './components/Action'
import Industries from "./components/Industries"
import Questions from "./components/Questions"




export default function Home() {
  return (
    <>

      <Navbar />
      <HeroContent />
      <Trusted />
      <Action />
      <Industries />
      <Questions />
      {/* <LogosSection /> */}
      {/* <Features /> */}
      {/* <Working /> */}
      {/* <About /> */}
      {/* <Team /> */}
      {/* <ProjectDisplay /> */}
      <Email />
      <Footer />

    </>
  )
}
