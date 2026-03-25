import React from 'react'
import AboutpageInfo from '../Components/AboutpageInfo';
import AboutBusinessSection from './../Components/AboutBusinessSection';
import TeamSection from '../Components/TeamSection';
// import OurBranding from './../Components/OurBranding';
import RequestSection from './../Components/RequestSection';
import Hero from './../Components/Hero Card/Hero';
import { AboutheroSlides } from '../allconst/heroimg'

const AboutpageLink = () => {
  return (
    <>
      <Hero slides={AboutheroSlides} sectionId="about-hero" />
      <AboutpageInfo sectionId="about-intro" />
      <AboutBusinessSection sectionId="about-business" />
      <TeamSection sectionId="about-team" />
      {/* <OurBranding sectionId="about-branding" /> */}
      <RequestSection sectionId="about-request" />
    </>
  )
}

export default AboutpageLink