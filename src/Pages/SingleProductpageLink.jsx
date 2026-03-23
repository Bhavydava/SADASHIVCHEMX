import React from 'react';
import { useLocation } from 'react-router-dom';
import SingleProductHero from './../Components/SingleProductHero';
import ContactSection from './../Components/ContactSection';
import ProductData from '../allconst/product';

const SingleProductpageLink = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = Number(queryParams.get("product"));

  const selectedData =
    location.state?.product ||
    ProductData.find((p) => p.id === productId) ||
    ProductData[0];

  return (
    <>
      <SingleProductHero 
        product={selectedData} 
      />
      
      <ContactSection />
    </>
  );
};

export default SingleProductpageLink;
