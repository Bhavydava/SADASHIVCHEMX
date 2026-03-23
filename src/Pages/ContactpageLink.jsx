import Hero from './../Components/Hero Card/Hero';
import { ContactheroSlides } from './../allconst/heroimg';
import Contactpageform from './../Components/Contactpageform';
import RequestSection from './../Components/RequestSection';

const ContactpageLink = () => {
  
  return (
    <>
        <Hero slides={ContactheroSlides} />
        <Contactpageform />
        <RequestSection />
    </>
  )
}

export default ContactpageLink