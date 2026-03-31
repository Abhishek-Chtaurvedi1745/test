import React from 'react'
import Nav from '../components/Nav'
import FeaturedProjects from '../components/Product'
import LocationSection from '../components/Dproduct'
import Asection from '../components/Asection'
import ProductionSystem from '../components/Bsection'
import Footer from '../components/Footer'
import ExcellenceSection from '../components/Bsection'
import HeroSection from '../components/Herosection'
import LogoSlider from '../components/Logo'
import PremiumSection from '../components/Nsection'
import DoctorSection from '../components/Doctor'

function Home() {
  return (
    <div>
      <Nav/>
      <LogoSlider/>
      <FeaturedProjects/>
      <LocationSection/>
      <Asection/>
     <ExcellenceSection/>
     <DoctorSection/>
      <HeroSection/>
      <PremiumSection/>
      
      <Footer/>
    </div>
  )
}

export default Home
