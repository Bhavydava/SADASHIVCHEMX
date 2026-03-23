
import React from 'react'
import SustainabilityInfoSection from './../Components/SustainabilityInfoSection';
import RequestSection from './../Components/RequestSection';
import Hero from './../Components/Hero Card/Hero';
import { SustainabilityheroSlides } from '../allconst/heroimg';

const SustainabilitypageLink = () => {
  return (
    <>
        <Hero slides={SustainabilityheroSlides} />
        <SustainabilityInfoSection />
        <RequestSection />
    </>
  )
}

export default SustainabilitypageLink