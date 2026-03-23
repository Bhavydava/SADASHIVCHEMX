import Hero1 from "../assets/HeroImg/Hero_Img1.jpg";
import Hero2 from "../assets/HeroImg/Hero_Img2.webp";
import AboutHero1 from "../assets/AboutPage/Img01.jpg";
import InnovationHero1 from "../assets/Innovation/InnovationHero.png";
import Sustainability01 from "../assets/Sustainabilityhero.jpg";
import BlogHero from "../assets/Blog_Img.png";
import RequestHero1 from "../assets/Request-A-Sample.jpg";
import ContactHero from "../assets/Contact_Hero.jpg";

import {
  AboutheroText01,
  HomeheroText01,
  HomeheroText02,
  InnovationheroText01,
  SustainabilityheroText01,
  BlogheroText,
  RequestheroText,
  ContactheroText,
} from "./herotext";

const HomeheroSlides = [
  { image: Hero1, text: HomeheroText01 },
  { image: Hero2, text: HomeheroText02 },
];

const AboutheroSlides = [
  { image: AboutHero1, text: AboutheroText01 },
];

const InnovationheroSlides = [
  { image: InnovationHero1, text: InnovationheroText01 },
];

const SustainabilityheroSlides = [
  { image: Sustainability01, text: SustainabilityheroText01 },
];

const BlogheroSlides = [{ image: BlogHero, text: BlogheroText }];

const RequestheroSlides = [{ image: RequestHero1, text: RequestheroText }];

const ContactheroSlides = [{ image: ContactHero, text: ContactheroText }];

export {
  HomeheroSlides,
  AboutheroSlides,
  InnovationheroSlides,
  SustainabilityheroSlides,
  BlogheroSlides,
  RequestheroSlides,
  ContactheroSlides,
};