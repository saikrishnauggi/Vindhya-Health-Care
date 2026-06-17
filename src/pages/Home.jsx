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
  FaPhoneAlt,
  FaGlasses,
  FaEye
} from 'react-icons/fa';

import HeroSlider from '../components/HeroSlider';
import DepartmentCard from '../components/DepartmentCard';
import DoctorCard from '../components/DoctorCard';
import outdoor4 from '../assets/outdoor4.jpg';
import DiabeticRetinopathy from '../assets/DiabeticRetinopathy.png';
import ICL from '../assets/ICL.png';
import { DEPARTMENTS, DOCTORS, TESTIMONIALS, BLOG_POSTS } from '../data/mockData';

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
  const latestBlogs = BLOG_POSTS.slice(0, 3);

  // Solis Eye Care Advanced Treatments dataset for Section 7 grid preview
  const featuredEyeTreatments = [
    {
      id: 'cataract',
      name: 'Cataract Surgery',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=600&auto=format&fit=crop',
      desc: 'Restore clear vision with advanced cataract surgeries using AI-assisted and navigation-guided systems.',
      features: ['AI-Assisted Surgical Mapping', 'Navigation-Guided Systems', 'Clear Vision Restoration']
    },
    {
      id: 'diabetic-retinopathy',
      name: 'Diabetic Retinopathy',
      image: DiabeticRetinopathy,
      desc: 'Early detection, laser treatments, and injections to manage diabetes-related damage to the retina.',
      features: ['Micro-Aneurysm Detection', 'Targeted Laser Treatments', 'Anti-VEGF Injections']
    },
    {
      id: 'lasik',
      name: 'LASIK & ICL Surgery',
      image: ICL,
      desc: 'Experience freedom from glasses with advanced laser vision correction and implantable contact lenses tailored to your eyes.',
      features: ['Spectacle-Free Correction', 'Implantable Contact Lenses', 'Custom Wavefront Tracking']
    }
  ];

  // Testimonial Swiper index
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const whyChooseUsData = [
    { title: "Expert Eye Specialists", desc: "Consult board-certified ophthalmologists with specialized fellowship training.", icon: <FaUserMd /> },
    { title: "Modern Precision Diagnostic", desc: "Equipped with ultra-high speed 3D OCT Angiography and laser diagnostic tracking.", icon: <FaMicroscope /> },
    { title: "24/7 Ocular Emergency Care", desc: "Instant clinical triage for accidental eye injuries, trauma, or chemical burns.", icon: <FaClock /> },
    { title: "Patient-Centered Comfort", desc: "Dedicated patient coordinators, streamlined dilated waiting zones, and clear workflows.", icon: <FaShieldAlt /> },
    { title: "Preventative Screenings", desc: "Value-focused, comprehensive eye wellness profiles for diabetic and senior checkups.", icon: <FaMoneyBillWave /> },
    { title: "Advanced Vision Studio", desc: "In-house optical center with precise digital centration systems and premium eyewear brands.", icon: <FaGlasses /> },
    { title: "Insurance Support", desc: "Cashless surgical processing supported across leading insurance providers and TPAs.", icon: <FaAward /> },
    { title: "Sterile Microsurgery OTs", desc: "Dedicated operating rooms featuring vertical laminar flow systems for optimal safety.", icon: <FaHospital /> },
    { title: "Certified Optometrists", desc: "Compassionate, fully-trained refractive technicians and clinical eye drop nurses.", icon: <FaUserMd /> }
  ];

  return (
    <div className="w-full">
      {/* SECTION 1 - HERO SLIDER */}
      <HeroSlider />

      {/* SECTION 2 - STATISTICS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <StatCounter target="500000" label="Visions Restored" suffix="+" icon={<FaEye />} />
            <StatCounter target="25" label="Expert Eye Surgeons" suffix="+" icon={<FaUserMd />} />
            <StatCounter target="8" label="Specialty Eye Wings" suffix="+" icon={<FaHospital />} />
            <StatCounter target="50" label="Recovery Beds" suffix="+" icon={<FaBed />} />
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
              Why Vindhya Eye Care is the Trusted Choice
            </h2>
            <p className="text-sm text-slate-500 mt-4 leading-relaxed font-light">
              We benchmark our microsurgical facilities against top global eye institutions to deliver unmatched diagnostic precision and successful treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
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
                src={outdoor4}
                alt="Eye Clinic Consultation" 
                className="w-full h-[350px] md:h-[450px] object-cover rounded-3xl shadow-lg relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-white border border-slate-100 rounded-2xl p-5 shadow-xl relative z-20 hidden sm:flex items-center gap-4 max-w-xs">
                <div className="bg-emerald-accent text-white p-3.5 rounded-xl">
                  <FaAward size={22} />
                </div>
                <div>
                  <span className="block font-black text-base text-slate-800">NABH Accredited</span>
                  <span className="block text-[10px] text-slate-500 font-medium leading-tight">National safety and quality eye hospital standards</span>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="w-full lg:w-1/2">
              <span className="text-xs font-extrabold tracking-widest text-emerald-accent uppercase bg-emerald-accent/10 px-3.5 py-1.5 rounded-full">
                About Vindhya Eye Care
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mt-4 leading-tight">
                An Institution of Trust, Sight, and Microsurgical Excellence
              </h2>
              <p className="text-sm text-slate-500 mt-4 leading-relaxed font-light">
                Founded with a mission to bring world-class ophthalmic treatments to the region, Vindhya Eye Care is a state-of-the-art specialty facility. We integrate global clinical experience with the latest technological diagnostic modules to offer secure visual outcomes.
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8 border-b border-slate-200">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Our Mission</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    To deliver premium-quality, patient-centric ophthalmic care with empathy, ethical clinical protocols, and precise visual corrections.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Our Vision</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    To be the leading center for complete vision restoration, setting outstanding parameters in refractive research, clinical metrics, and safety.
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
                Ophthalmic Departments
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mt-4 leading-tight">
                Our Eye Specialties
              </h2>
            </div>
            <Link 
              to="/departments" 
              className="bg-emerald-accent/10 text-emerald-accent hover:bg-emerald-accent hover:text-white font-extrabold px-5 py-3 rounded-xl text-xs transition-all flex items-center gap-1.5 shrink-0"
            >
              View All Eye Departments <FaArrowRight size={10} />
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
                Meet Our Experienced Eye Specialists
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

      {/* SECTION 7 - OPHTHALMIC TREATMENT & DIAGNOSIS GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-emerald-accent uppercase bg-emerald-accent/10 px-3.5 py-1.5 rounded-full">
              Ocular Excellence
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mt-4 leading-tight">
              Advanced Eye Care Treatments &amp; Diagnosis
            </h2>
            <p className="text-sm text-slate-500 mt-4 leading-relaxed font-light">
              A Center of Excellence in Eye Care for Every Stage of Life. Experience precision micro-surgeries and highly specialized diagnostics configured with modern technology layouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEyeTreatments.map((treatment) => (
              <div 
                key={treatment.id}
                className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="aspect-[16/10] w-full bg-slate-200 overflow-hidden relative">
                  <img 
                    src={treatment.image} 
                    alt={treatment.name} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-medical-sky text-white text-[9px] font-bold px-2.5 py-1 rounded uppercase tracking-wider flex items-center gap-1 shadow-sm">
                    <FaEye size={10} /> Ocular Care
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-extrabold text-slate-800 mb-2 group-hover:text-emerald-accent transition-colors">
                      {treatment.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed mb-5">
                      {treatment.desc}
                    </p>
                    
                    <div className="border-t border-slate-200/60 pt-4 mb-6">
                      <ul className="space-y-2 text-xs text-slate-500 font-light">
                        {treatment.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent"></span>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-slate-200/60 pt-4">
                    <Link 
                      to="/appointment"
                      className="w-full text-center bg-emerald-accent hover:bg-emerald-dark text-white font-extrabold py-3 rounded-xl text-xs transition-colors shadow-sm flex items-center justify-center gap-1.5"
                    >
                      Book Consultation
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/health-packages" 
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold px-6 py-3.5 rounded-xl text-xs transition-all inline-flex items-center gap-1.5"
            >
              Explore All Specialty Eye Services <FaArrowRight size={10} />
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
                Latest Eye Health Updates &amp; Tips
              </h2>
            </div>
            <Link 
              to="/blog" 
              className="bg-emerald-accent/10 text-emerald-accent hover:bg-emerald-accent hover:text-white font-extrabold px-5 py-3 rounded-xl text-xs transition-all flex items-center gap-1.5 shrink-0"
            >
              Read All Eye Care Articles <FaArrowRight size={10} />
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
            Ocular Emergency Service Available 24 Hours
          </h2>
          <p className="text-sm text-red-200 mt-2 max-w-2xl mx-auto font-light">
            Do not delay trauma complications or sudden vision drop. Connect directly with our on-call trauma desk.
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