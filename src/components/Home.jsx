import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import WhyStudyAbroad from "./WhyStudyAbroad"
import TopCountries from "./TopCountries"
import AdmissionProcess from "./AdmissionProcess"
import LeadForm from "./LeadForm"
import Footer from "./Footer"

const Home = () => {
  return (
    <div className='font-sans'>
      <Header />
      <HeroSection />
      <WhyStudyAbroad />
      <TopCountries />
      <AdmissionProcess />
      <LeadForm />
      <Footer />
    </div>
  )
}

export default Home