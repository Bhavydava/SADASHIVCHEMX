import React from "react";
import Hero from "../Components/Hero Card/Hero";
import { HomeheroSlides } from "../allconst/heroimg";
import AboutSection from "../Components/AboutSection";
import ProductSection from "../Components/ProductSection";
import ServicesSection from "../Components/ServicesSection";
import WhychooseSection from "../Components/WhychooseSection";
import HomeBlogSection from "../Components/HomeBlogSection";
import ContactSection from "../Components/ContactSection";
// import OurBranding from "../Components/OurBranding";
import RequestSection from "../Components/RequestSection";



const HomepageLink = () => {
  return (
    <>
      <Hero slides={HomeheroSlides} />
      <AboutSection />
      <ProductSection />
      <ServicesSection />
      <WhychooseSection />
      {/* <OurBranding /> */}
      <HomeBlogSection />
      <ContactSection />
      <RequestSection />
    </>
  );
};

export default HomepageLink;
