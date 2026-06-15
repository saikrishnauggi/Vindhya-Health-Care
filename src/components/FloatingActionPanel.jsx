import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCalendarAlt, 
  FaHeartbeat, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaAmbulance, 
  FaArrowUp,
  FaPlus,
  FaTimes
} from 'react-icons/fa';

export default function FloatingActionPanel() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Monitor scroll height to show back-to-top trigger
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const actionItems = [
    {
      label: 'Book Appointment',
      icon: <FaCalendarAlt />,
      path: '/appointment',
      color: 'bg-medical-sky hover:bg-sky-600',
      isLink: true
    },
    {
      label: 'Book Health Checkup',
      icon: <FaHeartbeat />,
      path: '/health-packages',
      color: 'bg-emerald-accent hover:bg-emerald-dark',
      isLink: true
    },
    {
      label: 'Hospital Location',
      icon: <FaMapMarkerAlt />,
      path: '/contact',
      color: 'bg-amber-500 hover:bg-amber-600',
      isLink: true
    },
    {
      label: 'WhatsApp Chat',
      icon: <FaWhatsapp />,
      path: 'https://wa.me/919160854747',
      color: 'bg-green-500 hover:bg-green-600',
      isLink: false
    },
    {
      label: 'Call Hospital',
      icon: <FaPhoneAlt />,
      path: 'tel:+919160854747',
      color: 'bg-blue-600 hover:bg-blue-700',
      isLink: false
    },
    {
      label: 'Emergency Help',
      icon: <FaAmbulance />,
      path: 'tel:+919160854747',
      color: 'bg-red-600 hover:bg-red-750 animate-pulse',
      isLink: false
    }
  ];

  return (
    <div className="relative">
      
      {/* 1. DESKTOP PANEL (Fixed side panel on right edge) */}
      <div className="hidden lg:flex flex-col gap-2.5 fixed right-0 top-1/2 -translate-y-1/2 z-55 mr-0 pr-3">
        {actionItems.map((item, index) => {
          const content = (
            <div className={`flex items-center justify-end group cursor-pointer text-white`}>
              {/* Tooltip text - slides out from right */}
              <span className="bg-medical-dark text-white text-[11px] font-bold py-2 px-3 rounded-l-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-md">
                {item.label}
              </span>
              {/* Floating Circle Button */}
              <div className={`w-11 h-11 rounded-lg flex items-center justify-center text-base shadow-lg transition-all duration-300 hover:scale-110 ${item.color}`}>
                {item.icon}
              </div>
            </div>
          );

          return item.isLink ? (
            <Link key={index} to={item.path}>
              {content}
            </Link>
          ) : (
            <a key={index} href={item.path} target={item.path.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">
              {content}
            </a>
          );
        })}

        {/* Back To Top Button (Desktop) */}
        {showScrollTop && (
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-end group text-white mr-0"
            aria-label="Scroll to top"
          >
            <span className="bg-slate-700 text-white text-[11px] font-bold py-2 px-3 rounded-l-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-md">
              Back To Top
            </span>
            <div className="w-11 h-11 rounded-lg flex items-center justify-center text-sm bg-slate-800 hover:bg-slate-900 transition-all duration-300 hover:scale-110">
              <FaArrowUp />
            </div>
          </button>
        )}
      </div>

      {/* 2. MOBILE PANEL (Expandable floating circular FAB) */}
      <div className="lg:hidden fixed bottom-6 right-6 z-55 flex flex-col items-center gap-3">
        {/* Back To Top (Mobile) */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-slate-800 text-white flex items-center justify-center shadow-lg hover:bg-slate-900 transition-all"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={14} />
          </button>
        )}

        {/* Expandable options stack */}
        {isMobileOpen && (
          <div className="flex flex-col gap-2.5 mb-2 items-end">
            {actionItems.map((item, index) => {
              const content = (
                <div className="flex items-center gap-2.5">
                  <span className="bg-medical-dark text-white text-[10px] font-bold py-1.5 px-2.5 rounded-lg shadow-md">
                    {item.label}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm text-white shadow-md ${item.color}`}>
                    {item.icon}
                  </div>
                </div>
              );

              return item.isLink ? (
                <Link key={index} to={item.path} onClick={() => setIsMobileOpen(false)}>
                  {content}
                </Link>
              ) : (
                <a key={index} href={item.path} onClick={() => setIsMobileOpen(false)} target={item.path.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">
                  {content}
                </a>
              );
            })}
          </div>
        )}

        {/* Main Floating Toggle FAB */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`w-14 h-14 rounded-full text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 ${
            isMobileOpen 
              ? 'bg-red-500 rotate-45 shadow-red-500/20' 
              : 'bg-emerald-accent shadow-emerald-accent/20'
          }`}
          aria-label="Expand Quick Actions"
        >
          {isMobileOpen ? <FaTimes size={20} /> : <FaPlus size={20} />}
        </button>
      </div>

    </div>
  );
}
