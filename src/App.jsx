import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomepageLink from "./Pages/HomepageLink";
import AboutpageLink from "./Pages/AboutpageLink";
import ContactpageLink from "./Pages/ContactpageLink";
import BlogPageLink from "./Pages/BlogPageLink";
import SingleBlogpageLink from "./Pages/SingleBlogpageLink";
import SingleProductpageLink from "./Pages/SingleProductpageLink";
import PolicypageLink from "./Pages/PolicypageLink";
import BackToTop from "./Components/Backtotop";
import WhatsappButton from "./Components/WhatsappButton";
import Navbar from "./Components/Navbar";
import FooterSection from "./Components/FooterSection";
import InnovationpageLink from "./Pages/InnovationpageLink";
import SustainabilitypageLink from "./Pages/SustainabilitypageLink";
import RequestpageLink from "./Pages/RequestpageLink";
import Preloader from "./Components/Preloader";
import ScrollToTop from "./Components/ScrollToTop";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <>
      <Preloader />
      
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomepageLink />} />
          <Route path="/AboutpageLink" element={<AboutpageLink />} />
          <Route path="/InnovationpageLink" element={<InnovationpageLink />} />
          <Route path="/SustainabilitypageLink" element={<SustainabilitypageLink />} />

          <Route path="/RequestpageLink" element={<RequestpageLink />} />
          <Route path="/ContactpageLink" element={<ContactpageLink />} />


          <Route path="/BlogPageLink" element={<BlogPageLink />} />
          <Route path="/SingleBlogpageLink" element={<SingleBlogpageLink />} />
          <Route path="/SingleProductpageLink" element={<SingleProductpageLink />} />
          <Route path="/PolicypageLink" element={<PolicypageLink />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        
        <WhatsappButton />
        <BackToTop />
        
        <FooterSection />
      </Router>
    </>
  );
}

export default App;
