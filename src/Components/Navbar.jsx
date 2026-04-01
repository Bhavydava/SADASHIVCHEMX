import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Navlogo from "../assets/Nav_Img.png";
import handleScrollTop from "../allconst/ScrollTop";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const location = useLocation();

  // Navigation Links Data
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/AboutpageLink" },

    {
      name: "Innovation",
      path: "/InnovationpageLink",
      dropdown: [
        { name: "Technical Research", path: "/InnovationpageLink#innovation-hub" },
        { name: "Areas of Excellence", path: "/InnovationpageLink#innovation-excellence" },
      ],
    },
    {
      name: "Sustainability",
      path: "/SustainabilitypageLink",
      dropdown: [
        { name: "Molecular Integrity", path: "/SustainabilitypageLink#molecular-integrity" },
        { name: "Responsible Practices", path: "/SustainabilitypageLink#responsible-practices" },
        { name: "Scientific Foundation", path: "/SustainabilitypageLink#scientific-foundation" },
        { name: "Health & Safety", path: "/SustainabilitypageLink#health-safety" },
      ],
    },
    { name: "Blog", path: "/BlogPageLink" },
    { name: "Contact", path: "/ContactpageLink" },
  ];

  const activeNavIndex = navLinks.findIndex((link) => location.pathname === link.path);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const toggleMobileDropdown = (idx) => {
    if (activeDropdown === idx) {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    } else {
      setActiveDropdown(idx);
      setActiveSubDropdown(null);
    }
  };

  const handleLinkNavigation = (path, isMobile = false) => {
    if (isMobile) {
      closeMenu();
    }

    if (!path.includes("#")) {
      handleScrollTop();
    }
  };

  return (
    <>
      {/* Premium Full-Width Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] py-4 transition-all duration-500 border-b border-white/5 group/nav ${scrolled
          ? "bg-[#0b0c10]/90 backdrop-blur-3xl shadow-2xl border-white/10"
          : "bg-[#0b0c10]/40 backdrop-blur-md border-transparent"
          }`}
      >
        <div className="flex items-center justify-between ml-mr">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center pl-0">
            <Link
              to="/"
              onClick={handleScrollTop}
              className="relative z-10 transition-all duration-500 hover:opacity-80 active:scale-95 block"
            >
              <img 
                src={Navlogo} 
                alt="Sadashiv Chemx" 
                className="h-14 sm:h-16 md:h-17 lg:h-18 xl:h-19 w-auto object-contain" 
              />
            </Link>
          </div>

          {/* Center Navigation - Capsule Design */}
          <div className="hidden lg:flex flex-1 items-center justify-end lg:pr-2 xl:pr-4">
            <div className="flex items-center gap-1.5 bg-[#14151b]/80 px-2.5 py-2.5 rounded-full border border-white/5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
              {navLinks.map((link, idx) => (
                <div
                  key={idx}
                  className="relative group/link"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="flex items-center px-0.5">
                    <Link
                      to={link.path}
                      onClick={() => handleLinkNavigation(link.path)}
                      className={`flex items-center gap-1.5 text-[12px] xl:text-[14px] font-semibold tracking-normal px-4 xl:px-6 py-3 xl:py-3.5 rounded-full transition-all duration-500 relative whitespace-nowrap overflow-hidden group/text ${location.pathname === link.path
                        ? "text-white bg-[#2a2d37] shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
                        : "text-gray-400 hover:text-white"
                        }`}
                    >
                      <span className="relative z-10">{link.name}</span>
                      
                      {link.dropdown && (
                        <ChevronDown
                          className={`w-4 h-4 text-gray-400 transition-transform duration-500 relative z-10 ${activeDropdown === idx ? "rotate-180 text-white" : ""
                            }`}
                        />
                      )}

                      {/* Sub-item hover background */}
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/text:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </div>

                  {/* Dropdown with Matched Styling */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute left-1/2 -translate-x-1/2 mt-5 pt-2 z-[1100]"
                      >
                        <div className="w-64 bg-[#0f1115] border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_60px_-5px_rgba(0,0,0,0.8)] backdrop-blur-3xl p-1.5">
                          {link.dropdown.map((item, i) => (
                            <Link
                              key={i}
                              to={item.path}
                              onClick={() => handleLinkNavigation(item.path)}
                              className="flex items-center justify-between px-5 py-3.5 text-[13px] font-semibold text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group/sub"
                            >
                              <span>{item.name}</span>
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all duration-300" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Action Hub - Professional Outline Style restored */}
          <div className="flex items-center pr-1 sm:pr-3 md:pr-4 lg:pr-4 xl:pr-7">

            {/* Kinetic Mobile Toggle Section */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative p-3 text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all active:scale-90 z-[2100]"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <motion.div
                  animate={{ opacity: isOpen ? 0 : 1, rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isOpen ? 1 : 0, rotate: isOpen ? 0 : -90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <X className="w-6 h-6 text-red-500" />
                </motion.div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Synchronized Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[1900] lg:hidden"
            />

            <motion.div
              initial={{ x: "100%", skewX: 5 }}
              animate={{ x: 0, skewX: 0 }}
              exit={{ x: "100%", skewX: 2 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#060918] z-[2000] lg:hidden shadow-[-20px_0_60px_rgba(0,0,0,0.8)] border-l border-white/10 flex flex-col"
            >
              <div className="p-8 border-b border-white/5 flex items-center justify-between bg-gradient-to-br from-black/40 to-transparent">
                <Link to="/" onClick={closeMenu}>
                  <img src={Navlogo} alt="Logo" className="h-20 w-auto object-contain" />
                </Link>
                <button
                  onClick={closeMenu}
                  className="p-3 text-white bg-white/5 hover:bg-red-500/20 rounded-2xl border border-white/10 transition-all active:scale-95"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6 custom-scrollbar">
                <div className="space-y-4">
                  {navLinks.map((link, idx) => (
                    <div key={idx} className="group/mob">
                      <div className="flex items-center justify-between transition-all">
                        <Link
                          to={link.path}
                          onClick={() => handleLinkNavigation(link.path, true)}
                          className={`flex-1 text-lg font-semibold py-2 tracking-normal transition-all ${location.pathname === link.path ? "text-[var(--button-bg-color)]" : "text-white/60 hover:text-white"
                            }`}
                        >
                          {link.name}
                        </Link>
                        {link.dropdown && (
                          <button
                            onClick={() => toggleMobileDropdown(idx)}
                            className="p-3 text-white/40 hover:text-white transition-colors"
                          >
                            <ChevronDown
                              className={`w-6 h-6 transition-transform duration-500 ${activeDropdown === idx ? "rotate-180 text-[var(--button-bg-color)]" : ""
                                }`}
                            />
                          </button>
                        )}
                      </div>
                      
                      <AnimatePresence>
                        {activeDropdown === idx && link.dropdown && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mt-2 ml-4 border-l-2 border-white/10"
                          >
                            {link.dropdown.map((item, i) => (
                              <div key={i} className="py-1">
                                <Link
                                  to={item.path}
                                  onClick={() => handleLinkNavigation(item.path, true)}
                                  className="block py-2 px-4 text-base font-bold text-gray-400 hover:text-white transition-colors"
                                >
                                  {item.name}
                                </Link>
                                {item.children && (
                                  <div className="ml-4 mt-1 space-y-1">
                                    {item.children.map((child, ci) => (
                                      <Link
                                        key={ci}
                                        to={child.path}
                                        onClick={() => handleLinkNavigation(child.path, true)}
                                        className="block py-1 px-4 text-sm font-medium text-gray-500 hover:text-white transition-colors"
                                      >
                                        • {child.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 space-y-6 bg-black/30 border-t border-white/5">
                <Link
                  to="/RequestpageLink"
                  onClick={() => handleLinkNavigation("/RequestpageLink", true)}
                  className="flex items-center justify-center gap-3 w-full py-5 border border-white/10 text-white font-semibold rounded-2xl hover:bg-white hover:text-[#060918] transition-all duration-500 shadow-xl tracking-widest uppercase group overflow-hidden relative"
                >
                  <span className="relative z-10">Request Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-500 relative z-10" />
                </Link>
                <p className="text-[10px] text-center text-gray-600 font-medium uppercase tracking-[0.3em]">
                  Sadashiv Chemx © {new Date().getFullYear()}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
