import React from 'react'
import Hero from './../Components/Hero Card/Hero';
import Requestpage from './../Components/Requestpage';
import { RequestheroSlides } from '../allconst/heroimg';


const RequestpageLink = () => {
  return (
    <>
        <Hero slides={RequestheroSlides} />
        <Requestpage />
    </>
  )
}

export default RequestpageLink