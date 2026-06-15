import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaUserMd, 
  FaHospital, 
  FaBed, 
  FaAward, 
  FaShieldAlt, 
  FaMoneyBillWave, 
  FaClock, 
  FaMicroscope,
  FaArrowRight, 
  FaQuoteLeft, 
  FaStar,
  FaPhoneAlt
} from 'react-icons/fa';

import HeroSlider from '../components/HeroSlider';
import DepartmentCard from '../components/DepartmentCard';
import DoctorCard from '../components/DoctorCard';
import HealthPackageCard from '../components/HealthPackageCard';

import { DEPARTMENTS, DOCTORS, HEALTH_PACKAGES, TESTIMONIALS, BLOG_POSTS } from '../data/mockData';

// Custom Auto-Increment Stat Counter
function StatCounter({ target, label, suffix = '', icon }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    if (isNaN(end)) return;
    
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 50); // tick every 50ms
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="bg-white/70 backdrop-blur-md border border-slate-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-all">
      <div className="text-emerald-accent text-3xl mb-3 flex justify-center">
        {icon}
      </div>
      <div className="text-3xl font-black text-slate-800 mb-1">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  // Select featured entities
  const featuredDepts = DEPARTMENTS.slice(0, 6);
  const featuredDocs = DOCTORS.slice(0, 4);
  const featuredPkgs = HEALTH_PACKAGES.slice(0, 3);
  const latestBlogs = BLOG_POSTS.slice(0, 3);

  // Testimonial Swiper index
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const whyChooseUsData = [
    { title: "Expert Doctors", desc: "Consult board-certified specialists with international clinical experience.", icon: <FaUserMd /> },
    { title: "Modern Technology", desc: "Equipped with advanced diagnostic units (3T Silent MRI) and robotic surgery.", icon: <FaMicroscope /> },
    { title: "24/7 Emergency Care", desc: "Instant clinical triage, advanced life-support ambulances, and fast ER routes.", icon: <FaClock /> },
    { title: "Patient-Centered Care", desc: "Dedicated attendants, spacious executive recovery rooms, and transparent billings.", icon: <FaShieldAlt /> },
    { title: "Affordable Checkups", desc: "Value-focused, comprehensive health packages for preventive care.", icon: <FaMoneyBillWave /> },
    { title: "Insurance Support", desc: "Cashless treatments supported across leading insurance providers and TPAs.", icon: <FaAward /> },
    { title: "Advanced Equipment", desc: "Laminar Flow Operation Theatres with cutting-edge HEPA air filtration.", icon: <FaHospital /> },
    { title: "Experienced Staff", desc: "Compassionate, fully-trained nurses and diagnostics technicians.", icon: <FaUserMd /> }
  ];

  return (
    <div className="w-full">
      {/* SECTION 1 - HERO SLIDER */}
      <HeroSlider />

      {/* SECTION 2 - STATISTICS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <StatCounter target="500000" label="Patients Treated" suffix="+" icon={<FaUserMd />} />
            <StatCounter target="150" label="Expert Doctors" suffix="+" icon={<FaUserMd />} />
            <StatCounter target="15" label="Specialty Departments" suffix="+" icon={<FaHospital />} />
            <StatCounter target="600" label="Inpatient Beds" suffix="+" icon={<FaBed />} />
            <StatCounter target="20" label="Years Experience" suffix="+" icon={<FaAward />} />
          </div>
        </div>
      </section>

      {/* SECTION 3 - WHY CHOOSE US */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-emerald-accent uppercase bg-emerald-accent/10 px-3.5 py-1.5 rounded-full">
              Clinical Quality
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mt-4 leading-tight">
              Why Vindhya Healthcare is the Trusted Choice
            </h2>
            <p className="text-sm text-slate-500 mt-4 leading-relaxed font-light">
              We benchmark our facilities against top global hospitals to deliver unmatched clinical accuracy, patient comfort, and successful treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyChooseUsData.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-medical-sky/10 text-medical-sky flex items-center justify-center text-xl mb-5 group-hover:bg-emerald-accent group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2.5 group-hover:text-emerald-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4 - ABOUT HOSPITAL PREVIEW */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Image Box */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-medical-sky/20 to-emerald-accent/20 rounded-3xl -rotate-3 scale-102"></div>
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800" 
                alt="Hospital Lobby" 
                className="w-full h-[350px] md:h-[450px] object-cover rounded-3xl shadow-lg relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-white border border-slate-100 rounded-2xl p-5 shadow-xl relative z-20 hidden sm:flex items-center gap-4 max-w-xs">
                <div className="bg-emerald-accent text-white p-3.5 rounded-xl">
                  <FaAward size={22} />
                </div>
                <div>
                  <span className="block font-black text-base text-slate-800">NABH Accredited</span>
                  <span className="block text-[10px] text-slate-500 font-medium leading-tight">National safety and quality hospital standards</span>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="w-full lg:w-1/2">
              <span className="text-xs font-extrabold tracking-widest text-emerald-accent uppercase bg-emerald-accent/10 px-3.5 py-1.5 rounded-full">
                About Vindhya Healthcare
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mt-4 leading-tight">
                An Institution of Trust, Care, and Clinical Excellence
              </h2>
              <p className="text-sm text-slate-500 mt-4 leading-relaxed font-light">
                Founded with a mission to bring world-class healthcare to Central India, Vindhya Healthcare is a state-of-the-art multi-specialty hospital. We integrate clinical experience with the latest technological developments to offer reliable outcomes.
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8 border-b border-slate-200">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Our Mission</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    To deliver premium-quality, patient-centric healthcare with empathy, ethical clinical standards, and clinical accuracy.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Our Vision</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    To be the leading choice in medical treatments, setting high standards of clinical outcomes, healthcare research, and patient safety.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <Link 
                  to="/about" 
                  className="bg-medical-dark hover:bg-emerald-accent text-white font-extrabold px-6 py-3.5 rounded-xl text-xs shadow-md transition-all flex items-center gap-1.5"
                >
                  Read Hospital History <FaArrowRight size={10} />
                </Link>
                <Link to="/contact" className="text-xs font-extrabold text-medical-sky hover:text-emerald-accent transition-colors">
                  Contact Helpdesk
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 - FEATURED DEPARTMENTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-emerald-accent uppercase bg-emerald-accent/10 px-3.5 py-1.5 rounded-full">
                Clinical Departments
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mt-4 leading-tight">
                Our Specialities
              </h2>
            </div>
            <Link 
              to="/departments" 
              className="bg-emerald-accent/10 text-emerald-accent hover:bg-emerald-accent hover:text-white font-extrabold px-5 py-3 rounded-xl text-xs transition-all flex items-center gap-1.5 shrink-0"
            >
              View All 14 Departments <FaArrowRight size={10} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredDepts.map((dept) => (
              <DepartmentCard key={dept.id} {...dept} />
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6 - FEATURED DOCTORS */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-emerald-accent uppercase bg-emerald-accent/10 px-3.5 py-1.5 rounded-full">
                Our Medical Panel
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mt-4 leading-tight">
                Meet Our Experienced Specialists
              </h2>
            </div>
            <Link 
              to="/doctors" 
              className="bg-emerald-accent/10 text-emerald-accent hover:bg-emerald-accent hover:text-white font-extrabold px-5 py-3 rounded-xl text-xs transition-all flex items-center gap-1.5 shrink-0"
            >
              Find All Specialists <FaArrowRight size={10} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredDocs.map((doc) => (
              <DoctorCard key={doc.id} {...doc} />
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7 - HEALTH PACKAGES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-emerald-accent uppercase bg-emerald-accent/10 px-3.5 py-1.5 rounded-full">
              Preventative Care
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mt-4 leading-tight">
              Affordable Healthcare Checkup Packages
            </h2>
            <p className="text-sm text-slate-500 mt-4 leading-relaxed font-light">
              Early detection is the key to a healthy lifestyle. Book a comprehensive, customized health review that covers primary organ function tests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPkgs.map((pkg) => (
              <HealthPackageCard key={pkg.id} {...pkg} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/health-packages" 
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold px-6 py-3.5 rounded-xl text-xs transition-all inline-flex items-center gap-1.5"
            >
              Compare All Checkup Packages <FaArrowRight size={10} />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 8 - TESTIMONIALS */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold tracking-widest text-emerald-accent uppercase bg-emerald-accent/15 px-3.5 py-1.5 rounded-full border border-emerald-accent/20">
              Patient Testimonials
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold mt-4 leading-tight">
              Stories of Recoveries and Smiles
            </h2>
          </div>

          {/* Testimonial slider showcase */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl relative">
            <FaQuoteLeft className="text-emerald-accent/20 text-6xl absolute top-8 left-8" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-10">
              {/* Photo */}
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-emerald-accent/30 overflow-hidden shrink-0">
                <img 
                  src={TESTIMONIALS[activeTestimonial].image} 
                  alt={TESTIMONIALS[activeTestimonial].name}
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Text review */}
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">
                  "{TESTIMONIALS[activeTestimonial].storyTitle}"
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light italic mb-6">
                  {TESTIMONIALS[activeTestimonial].text}
                </p>
                <div>
                  <span className="block font-bold text-sm text-emerald-accent">{TESTIMONIALS[activeTestimonial].name}</span>
                  <span className="block text-[10px] text-slate-500">Age {TESTIMONIALS[activeTestimonial].age} • Verified Patient</span>
                </div>
              </div>
            </div>

            {/* Slider controls */}
            <div className="flex items-center gap-3.5 justify-end mt-8 border-t border-white/10 pt-6">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white text-slate-400 hover:text-white flex items-center justify-center transition-all text-sm"
                aria-label="Previous Review"
              >
                ←
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white text-slate-400 hover:text-white flex items-center justify-center transition-all text-sm"
                aria-label="Next Review"
              >
                →
              </button>
            </div>

          </div>

          <div className="text-center mt-10">
            <Link 
              to="/testimonials" 
              className="text-xs font-bold text-slate-400 hover:text-emerald-accent transition-colors"
            >
              Read more stories on our Wall of Honor →
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 9 - BLOG PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-emerald-accent uppercase bg-emerald-accent/10 px-3.5 py-1.5 rounded-full">
                Medical Insights
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mt-4 leading-tight">
                Latest Health Updates &amp; Tips
              </h2>
            </div>
            <Link 
              to="/blog" 
              className="bg-emerald-accent/10 text-emerald-accent hover:bg-emerald-accent hover:text-white font-extrabold px-5 py-3 rounded-xl text-xs transition-all flex items-center gap-1.5 shrink-0"
            >
              Read All Health Articles <FaArrowRight size={10} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogs.map((post) => (
              <div 
                key={post.id}
                className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="aspect-[16/10] bg-slate-100 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-emerald-accent text-white text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold">{post.date} • By {post.author}</span>
                    <h3 className="text-base font-bold text-slate-800 mt-2 mb-3.5 leading-snug group-hover:text-emerald-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </div>
                  <Link 
                    to={`/blog?post=${post.id}`} 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-medical-sky group-hover:text-emerald-accent transition-all"
                  >
                    Read Full Article <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 10 - EMERGENCY CTA BANNER */}
      <section className="bg-red-600 text-white py-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #b91c1c 0%, #7f1d1d 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-xl md:text-3xl font-black uppercase tracking-wide">
            Emergency Medical Service Available 24 Hours
          </h2>
          <p className="text-sm text-red-200 mt-2 max-w-2xl mx-auto font-light">
            Do not delay medical complications. If you suspect emergency symptoms, connect directly with our trauma desk.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+919160854747" 
              className="bg-white text-red-700 font-extrabold text-sm px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-103 inline-flex items-center gap-2"
            >
              <FaPhoneAlt size={14} /> Emergency Dial: +91 916 085 4747
            </a>
            <a 
              href="tel:108" 
              className="bg-transparent border border-white/20 hover:bg-white/10 text-white font-bold text-sm px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2"
            >
              Ambulance Request: 108
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}
