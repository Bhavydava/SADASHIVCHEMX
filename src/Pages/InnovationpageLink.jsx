import React from 'react'
import Hero from './../Components/Hero Card/Hero';
import InnovationInfoSection from './../Components/InnovationInfoSection';
import RequestSection from './../Components/RequestSection';
import { InnovationheroSlides } from '../allconst/heroimg';


const InnovationpageLink = () => {
  return (
    <>
      <Hero slides={InnovationheroSlides} sectionId="innovation-hero" />
      <InnovationInfoSection />
      <RequestSection sectionId="innovation-request" />
    </>
  )
}

export default InnovationpageLink
