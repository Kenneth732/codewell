import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import LuxuryTestimonials from '../components/LuxuryTestimonials'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

function HomePage() {
  return (
    <div>
      <Hero/>
      <About />
      <Services />
      <Portfolio />
      <LuxuryTestimonials />
      <Contact />
      <Footer/>
    </div>
  )
}

export default HomePage
