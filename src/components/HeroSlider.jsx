import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaPhoneAlt, FaHeartbeat } from 'react-icons/fa';
import outdoor4 from '../assets/outdoor4.jpg';
import advancedtech from '../assets/advancedtech.jpg';
import infra from '../assets/infra.jpg';
import emergency from '../assets/emergency.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function HeroSlider() {
  const slides = [
    {
      image: outdoor4,
      tagline: "VINDHYA HEALTHCARE",
      title: "World-Class Medical Excellence",
      description: "Providing compassionate, state-of-the-art medical services with advanced diagnostic facilities and top-tier clinical outcomes.",
      ctaPrimary: "Book Appointment",
      ctaPrimaryPath: "/appointment",
      ctaSecondary: "Explore Treatments",
      ctaSecondaryPath: "/treatments"
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600",
      tagline: "RENOWED SPECIALISTS",
      title: "Consult with Expert Clinicians",
      description: "Get personalized care from our panel of board-certified surgeons, interventional cardiologists, and senior pediatricians.",
      ctaPrimary: "Find A Doctor",
      ctaPrimaryPath: "/doctors",
      ctaSecondary: "Emergency Call",
      ctaSecondaryPath: "tel:+919030757575"
    },
    {
      image: advancedtech,
      tagline: "NEXT-GENERATION TECH",
      title: "Advanced Medical Technology",
      description: "Equipped with high-precision 3T Silent MRI scanners, multi-slice CT, computer-assisted Cath labs, and robotic joint replacement capabilities.",
      ctaPrimary: "Our Facilities",
      ctaPrimaryPath: "/facilities",
      ctaSecondary: "View Departments",
      ctaSecondaryPath: "/departments"
    },
    {
      image: infra,
      tagline: "HEALING IN COMFORT",
      title: "Premium Day Care Infrastructure",
      description: "Rest easy in luxury post-operative recovery suites with dedicated daytime nursing care, designed to provide a warm and calm healing environment.",
      ctaPrimary: "Book Appointment",
      ctaPrimaryPath: "/appointment",
      ctaSecondary: "Read Reviews",
      ctaSecondaryPath: "/testimonials"
    },
    {
    image: emergency,
    tagline: "9:00 AM - 9:00 PM DAY CARE TRAUMA",
    title: "Rapid Ocular Trauma & Day Care Triage",
    description: "Equipped for immediate stabilization, accidental eye injury management, and urgent foreign body removals during active operational center hours.",
    ctaPrimary: "Call Clinic Hotline",
    ctaPrimaryPath: "tel:+919030757575",
    ctaSecondary: "View Treatments",
    ctaSecondaryPath: "/treatments"
  }
  ];

  return (
    <div className="relative w-full h-[600px] md:h-[80vh] min-h-[500px] max-h-[900px] bg-medical-dark overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect={'fade'}
        speed={1000}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-full h-full relative">
            
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 select-none">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover object-center scale-105"
                style={{ filter: 'brightness(0.35)' }}
              />
            </div>

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center justify-start z-10 px-4 md:px-12 lg:px-24">
              <div className="max-w-3xl text-white">
                
                {/* Tagline */}
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block bg-emerald-accent/25 border border-emerald-accent/35 text-emerald-accent text-[11px] md:text-xs font-bold tracking-widest px-3.5 py-1.5 rounded-full mb-4 md:mb-6 uppercase"
                >
                  {slide.tagline}
                </motion.span>

                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4 md:mb-6 drop-shadow-sm font-sans"
                >
                  {slide.title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-sm md:text-base lg:text-lg text-slate-200 leading-relaxed mb-8 md:mb-10 max-w-2xl font-light"
                >
                  {slide.description}
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  {/* Primary Button */}
                  {slide.ctaPrimaryPath.startsWith('tel:') ? (
                    <a 
                      href={slide.ctaPrimaryPath}
                      className="bg-emerald-accent hover:bg-emerald-dark text-white font-extrabold text-xs md:text-sm px-6 md:px-8 py-3.5 md:py-4 rounded-xl shadow-lg shadow-emerald-accent/15 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
                    >
                      <FaPhoneAlt size={14} /> {slide.ctaPrimary}
                    </a>
                  ) : (
                    <Link 
                      to={slide.ctaPrimaryPath}
                      className="bg-emerald-accent hover:bg-emerald-dark text-white font-extrabold text-xs md:text-sm px-6 md:px-8 py-3.5 md:py-4 rounded-xl shadow-lg shadow-emerald-accent/15 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
                    >
                      <FaCalendarAlt size={14} /> {slide.ctaPrimary}
                    </Link>
                  )}

                  {/* Secondary Button */}
                  {slide.ctaSecondaryPath.startsWith('tel:') ? (
                    <a 
                      href={slide.ctaSecondaryPath}
                      className="bg-transparent border border-white/20 hover:bg-white hover:text-slate-950 hover:border-white text-white font-bold text-xs md:text-sm px-6 md:px-8 py-3.5 md:py-4 rounded-xl transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
                    >
                      <FaPhoneAlt size={14} /> {slide.ctaSecondary}
                    </a>
                  ) : (
                    <Link 
                      to={slide.ctaSecondaryPath}
                      className="bg-transparent border border-white/20 hover:bg-white hover:text-slate-950 hover:border-white text-white font-bold text-xs md:text-sm px-6 md:px-8 py-3.5 md:py-4 rounded-xl transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
                    >
                      {slide.ctaSecondary.includes('Treatments') ? <FaHeartbeat size={14} /> : null} {slide.ctaSecondary}
                    </Link>
                  )}
                </motion.div>

              </div>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
