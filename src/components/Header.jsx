import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaPhoneAlt, 
  FaAmbulance, 
  FaEnvelope, 
  FaClock, 
  FaBars, 
  FaTimes, 
  FaChevronRight 
} from 'react-icons/fa';

// Import your new torch logo image asset
import logoImg from '../assets/logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Toggle solid background based on scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Comprehensive link catalog used explicitly for the Mobile Drawer
  const allNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Departments', path: '/departments' },
    { name: 'Services', path: '/services' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' }
  ];

  // Segmented links for the clean Desktop Layout
  const primaryDesktopLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Departments', path: '/departments' },
    { name: 'Services', path: '/services' }
  ];

  const secondaryDesktopLinks = [
    { name: 'Facilities', path: '/facilities' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Careers', path: '/careers' }
  ];

  return (
    <header className="w-full z-50">
      {/* 1. STICKY INFORMATION BAR (Optimized & Reduced Footprint) */}
      <div className="bg-medical-dark text-white text-xs py-1.5 px-3 md:px-6 flex flex-wrap justify-between items-center gap-2 border-b border-white/10">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          {/* <a href="tel:+919030757575" className="flex items-center gap-1.5 hover:text-emerald-accent transition-colors">
            <FaPhoneAlt className="text-emerald-accent" />
            <span className="font-semibold">Emergency:</span> +91 903 075 7575
          </a> */}
          <a href="tel:108" className="flex items-center gap-1.5 hover:text-red-400 transition-colors animate-pulse">
            <FaAmbulance className="text-red-500" />
            <span className="font-semibold text-red-400">Emergency:</span> +91 903 075 7575
          </a>
          <span className="hidden sm:flex items-center gap-1.5">
            <FaClock className="text-medical-sky" />
            <span>Mon - Sun: 9am - 9pm</span>
          </span>
          <a href="mailto:care@vindhyahealthcare.in" className="hidden lg:flex items-center gap-1.5 hover:text-medical-sky transition-colors">
            <FaEnvelope className="text-medical-sky" />
            <span>care@vindhyahealthcare.in</span>
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="tel:+919030757575" className="bg-emerald-accent/20 text-emerald-accent px-3 py-1 rounded-full font-semibold border border-emerald-accent/30 hover:bg-emerald-accent hover:text-white transition-all text-[11px]">
            Call Now
          </a>
          <Link to="/appointment" className="text-white hover:text-emerald-accent font-semibold transition-colors text-[11px]">
            Book Appointment
          </Link>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'fixed top-0 bg-white shadow-lg py-3 border-b border-slate-100 text-slate-800' 
          : isHomePage
            ? 'absolute bg-gradient-to-b from-black/50 to-transparent py-5 text-white'
            : 'bg-white shadow-sm py-4 border-b border-slate-100 text-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          
          {/* Logo Wrapper */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logoImg} 
              alt="Vindhya Healthcare Logo" 
              className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
            />
            <div className="flex flex-col justify-center">
              <span className={`block font-black text-lg md:text-xl tracking-tight leading-none group-hover:text-emerald-accent transition-colors ${
                !isScrolled && isHomePage ? 'text-white' : 'text-slate-900'
              }`}>
                VINDHYA
              </span>
              <span className={`block text-[10px] tracking-widest font-bold mt-0.5 ${
                !isScrolled && isHomePage ? 'text-slate-300' : 'text-slate-500'
              }`}>
                HEALTHCARE
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (Compact Multi-Dropdown Architecture) */}
          <div className="hidden xl:flex items-center gap-1">
            {primaryDesktopLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-xs font-bold rounded-lg transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-emerald-accent/10 text-emerald-accent font-extrabold'
                      : !isScrolled && isHomePage
                        ? 'hover:bg-white/10 hover:text-white text-slate-100'
                        : 'hover:bg-slate-100 hover:text-medical-blue text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Hover-Triggered Secondary Dropdown */}
            <div className="relative group px-3 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-200 text-slate-600 hover:bg-slate-100/10">
              <span className={`whitespace-nowrap flex items-center gap-1 ${
                !isScrolled && isHomePage ? 'text-slate-100 group-hover:text-emerald-accent' : 'text-slate-600 group-hover:text-medical-blue'
              }`}>
                Explore More <span className="text-[9px] opacity-70">▼</span>
              </span>
              
              {/* Dropdown Container */}
              <div className="absolute left-0 mt-2 w-52 bg-white border border-slate-100 rounded-xl shadow-xl opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 origin-top-left z-50 p-1.5">
                {secondaryDesktopLinks.map((subLink) => {
                  const isSubActive = location.pathname === subLink.path;
                  return (
                    <Link
                      key={subLink.path}
                      to={subLink.path}
                      className={`block px-4 py-2.5 text-xs rounded-lg transition-colors text-left ${
                        isSubActive 
                          ? 'bg-emerald-accent/10 text-emerald-accent font-bold' 
                          : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-accent'
                      }`}
                    >
                      {subLink.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Anchor Dropdown Split Boundary for Contact Us */}
            <Link
              to="/contact"
              className={`px-3 py-2 text-xs font-bold rounded-lg transition-all duration-200 whitespace-nowrap ${
                location.pathname === '/contact'
                  ? 'bg-emerald-accent/10 text-emerald-accent font-extrabold'
                  : !isScrolled && isHomePage
                    ? 'hover:bg-white/10 hover:text-white text-slate-100'
                    : 'hover:bg-slate-100 hover:text-medical-blue text-slate-600'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Action Button & Menu Button */}
          <div className="flex items-center gap-3">
            <Link 
              to="/appointment" 
              className={`hidden md:inline-flex items-center gap-2 text-xs font-extrabold px-5 py-2.5 rounded-full shadow-md transition-all duration-300 hover:-translate-y-0.5 ${
                !isScrolled && isHomePage
                  ? 'bg-white text-medical-dark hover:bg-emerald-accent hover:text-white shadow-white/5'
                  : 'bg-emerald-accent text-white hover:bg-emerald-dark hover:shadow-emerald-accent/30'
              }`}
            >
              Book Appointment
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`xl:hidden p-2 rounded-lg transition-colors ${
                !isScrolled && isHomePage && !isMobileMenuOpen
                  ? 'text-white hover:bg-white/10'
                  : 'text-slate-800 hover:bg-slate-100'
              }`}
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer (Renders all 12 items comprehensively) */}
        <div className={`fixed inset-0 z-40 bg-medical-dark transition-all duration-300 xl:hidden ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-full pointer-events-none'
        }`} style={{ top: '0px', height: '100vh' }}>
          <div className="flex flex-col h-full bg-white text-slate-800 p-6 pt-24 overflow-y-auto">
            
            {/* Mobile Drawer Top Heading Line */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center border-b border-slate-100 pb-4">
              <Link to="/" className="flex items-center gap-2.5" onClick={() => setIsMobileMenuOpen(false)}>
                <img 
                  src={logoImg} 
                  alt="Vindhya Healthcare Logo" 
                  className="h-9 w-auto object-contain" 
                />
                <div className="flex flex-col justify-center">
                  <span className="block font-black text-base leading-none text-slate-900">VINDHYA</span>
                  <span className="block text-[8px] tracking-widest text-slate-500 font-bold mt-0.5">HEALTHCARE</span>
                </div>
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Scrollable Mobile Link Loop */}
            <div className="flex flex-col gap-1 mt-6">
              {allNavLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-emerald-accent/10 text-emerald-accent'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span>{link.name}</span>
                    <FaChevronRight size={10} className={isActive ? 'text-emerald-accent' : 'text-slate-400'} />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Footer Action Handles */}
            <div className="mt-8 space-y-4 border-t border-slate-100 pt-6">
              <Link
                to="/appointment"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center bg-emerald-accent text-white font-bold py-3.5 rounded-xl shadow-md shadow-emerald-accent/15 hover:bg-emerald-dark transition-all"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+919030757575"
                className="block text-center border border-slate-200 text-slate-700 font-semibold py-3.5 rounded-xl hover:bg-slate-50 transition-all"
              >
                Emergency Call: +91 903 075 7575
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}