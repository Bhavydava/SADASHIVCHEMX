import React from "react";
import "swiper/css";
import LogoLoop from '../UI/LogoLoop/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import BrandingImg1 from '../assets/Cilent/client_1_white.png';
import BrandingImg2 from '../assets/Cilent/client_2_white.png';
import BrandingImg3 from '../assets/Cilent/client_3_white.png';
import BrandingImg4 from '../assets/Cilent/client_4_white.png';
import BrandingImg5 from '../assets/Cilent/client_5_white.png';
import BrandingImg6 from '../assets/Cilent/client_6_white.png';
import BrandingImg7 from '../assets/Cilent/client_7_white.png';
import BrandingImg8 from '../assets/Cilent/client_8_white.png';


const OurBranding = ({ sectionId }) => {
  // ... logos setup ...
  const imageLogos = [
    { src: BrandingImg1, alt: 'Branding 1', href: '#' },
    { src: BrandingImg2, alt: 'Branding 2', href: '#' },
    { src: BrandingImg3, alt: 'Branding 3', href: '#' },
    { src: BrandingImg4, alt: 'Branding 4', href: '#' },
    { src: BrandingImg5, alt: 'Branding 5', href: '#' },
    { src: BrandingImg6, alt: 'Branding 6', href: '#' },
    { src: BrandingImg7, alt: 'Branding 7', href: '#' },
    { src: BrandingImg8, alt: 'Branding 8', href: '#' },
  ];

  return (
    <section id={sectionId} className=" py-10 md:py-17 overflow-hidden">
      <div className="space-y-10 ml-mr">
        <div className="space-y-4 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="w-12 h-0.5 bg-[var(--button-bg-color)]"></div>
            <h4 className="text-[var(--button-bg-color)] font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs">
              Industrial Network
            </h4>
          </div>
          <h2 className="lg:text-left text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
            Corporate Alliances, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Validated by Trust.
            </span>
          </h2>
        </div>


      </div>

      <div className="relative mt-12 md:mt-20">
        <LogoLoop
          logos={imageLogos}
          speed={120}
          direction="left"
          logoHeight={window.innerWidth < 768 ? 40 : 60}
          gap={window.innerWidth < 768 ? 40 : 80}
          hoverSpeed={0}
          scaleOnHover
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
};

export default OurBranding;
