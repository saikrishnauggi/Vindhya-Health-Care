import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUserMd, 
  FaBed, 
  FaAward, 
  FaShieldAlt, 
  FaMicroscope,
  FaArrowRight, 
  FaQuoteLeft, 
  FaStar,
  FaGlasses,
  FaBone,
  FaBaby,
  FaPills,
  FaProcedures,
  FaHeartbeat,
  FaEye,
  FaCheckCircle,
  FaHospital
} from 'react-icons/fa';

import HeroSlider from '../components/HeroSlider';
import DoctorCard from '../components/DoctorCard';
import outdoor4 from '../assets/outdoor4.jpg';
import DiabeticRetinopathy from '../assets/DiabeticRetinopathy.png';
import ICL from '../assets/ICL.png';
import { DOCTORS, TESTIMONIALS, BLOG_POSTS } from '../data/mockData';

// Custom Auto-Increment Stat Counter
function StatCounter({ target, label, suffix = '', icon }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    if (isNaN(end)) return;
    
    const duration = 2000;
    const increment = end / (duration / 50);
    
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
  const featuredDocs = DOCTORS.slice(0, 4);
  const latestBlogs = BLOG_POSTS.slice(0, 3);

  // Interactive Multi-Specialty Core Matrix
  const specialtiesData = [
    {
      id: "ophthalmology",
      name: "Ophthalmology",
      icon: <FaEye />,
      tagline: "Advanced Eye Care & Micro-Surgery Unit",
      description: "Comprehensive visual ecosystem managing everything from basic refraction updates to complex multi-tier laser corrections and posterior segment surgeries.",
      subDepartments: [
        { title: "Cataract Services", details: "Micro-incision stitchless surgeries using phacoemulsification technology along with premium multi-focal IOL implants." },
        { title: "LASIK & Refractive Surgeries", details: "Spectacle-free advanced solutions featuring customized standard LASIK, PRK, Topography-guided systems (Contoura), SMILE Pro, and Phakic IOL / ICL / IPCL alternatives." },
        { title: "Retina & Vitreous Care", details: "Advanced medical and surgical management of diabetic retinopathy, retinal tears, floaters, and vitreoretinal path dynamics." },
        { title: "Glaucoma Services", details: "Preventive peripheral field profiling, automated tonometry pressure tracking, and Selective Laser Trabeculoplasty (SLT)." },
        { title: "Cornea Services & Treatments", details: "Expert care for corneal surface diseases, structural dystrophies, specialized collagen cross-linking (C3R), and dry-eye remediation." },
        { title: "Squint & Pediatric Eye Services", details: "Dedicated infantile evaluation plans, lazy eye (amblyopia) therapies, and binocular structural alignment corrections." },
        { title: "Opticals & Spectacles", details: "Precision in-house digital vision measurements with a designer collection of protective lenses and premium frame brands." }
      ]
    },
    {
      id: "orthopedics",
      name: "Orthopedics",
      icon: <FaBone />,
      tagline: "Musculoskeletal & Joint Reconstruction Unit",
      description: "State-of-the-art diagnostic and day-care surgical interventions for chronic bone, auto-immune joint conditions, and complex physical trauma.",
      subDepartments: [
        { title: "Osteoarthritis Management", details: "Targeted joint preservation strategies, specialized cartilage mapping, and lubricating intra-articular injections." },
        { title: "Osteoporosis Care", details: "Advanced bone mineral density audits, lifestyle profiling, and preventive structural therapy tracks." },
        { title: "Knee Replacement", details: "High-precision unicondylar or total knee arthroplasty configurations ensuring quick post-op restoration paths." },
        { title: "Hip Joint Replacement", details: "Advanced joint restoration routines utilizing minimally invasive approaches for faster outpatient mobilization." },
        { title: "Sports Medicine", details: "Arthroscopic repairs for complex ligament tears (ACL/MCL), joint stabilization, and focused speed rehabilitation plans." },
        { title: "Pain Management Clinic", details: "Interventional spine blocks, chronic neural assemblies treatment, and multi-modal therapeutic strategies." },
        { title: "Trauma Clinic", details: "Rapid intervention workflows handling complex fractures, dislocations, and bone-graft alignment metrics." }
      ]
    },
    {
      id: "gynecology",
      name: "Gynecology & Infertility",
      icon: <FaBaby />,
      tagline: "Comprehensive Women's Health & Fertility Studio",
      description: "Full-spectrum support handling routine health milestones, reproductive endocrinology pathways, and micro-invasive diagnostic procedures.",
      subDepartments: [
        { title: "General Women's Health Issues", details: "Clinical protocols managing menstrual dysregulation, hormonal setups, and continuous physical vitals monitoring." },
        { title: "Infertility & Reproductive Health", details: "Advanced fertility profiling, follicular monitoring assays, and structural path planning for prospective couples." },
        { title: "High-Risk Obstetrics Tracking", details: "Comprehensive prenatal tracking grids, fetal growth monitoring, and continuous maternal metabolic wellness oversight." },
        { title: "PCOS & Endometriosis Control", details: "Customized medical management systems to reverse metabolic imbalances and arrest progressive pelvic conditions." },
        { title: "Laparoscopic Keyhole Surgeries", details: "Minimally invasive cystectomies and hysteroscopic evaluations requiring minimized day-care recovery intervals." },
        { title: "Preventive Screening Frameworks", details: "Routine wellness updates featuring periodic Pap smears, digital pelvic imaging, and regular diagnostic sweeps." }
      ]
    }
  ];

  // Active Main tab tracking hook
  const [activeTab, setActiveTab] = useState("ophthalmology");

  const currentSpecialty = specialtiesData.find(spec => spec.id === activeTab) || specialtiesData[0];

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

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const whyChooseUsData = [
    { title: "Expert Specialists", desc: "Consult board-certified ophthalmologists and gynecologists with specialized fellowship training.", icon: <FaUserMd /> },
    { title: "Modern Precision Diagnostics", desc: "Equipped with ultra-high speed 3D OCT Angiography and laser diagnostic tracking.", icon: <FaMicroscope /> },
    { title: "Day Care Surgery Centre", desc: "Efficient, state-of-the-art day care procedures allowing patients to recover comfortably at home same-day.", icon: <FaProcedures /> },
    { title: "Advanced Orthopedics", desc: "Comprehensive bone, joint, and spine care managed by experienced musculoskeletal specialists.", icon: <FaBone /> },
    { title: "Comprehensive Gynecology", desc: "Dedicated women's health wing covering routine screenings, prenatal guidance, and specialized care.", icon: <FaBaby /> },
    { title: "In-House Pharmacy", desc: "Immediate access to verified ophthalmic medications, post-op scripts, and essential healthcare supplies.", icon: <FaPills /> },
    { title: "Intensive Care Capabilities", desc: "Equipped with clinical monitoring systems for stabilizing high-risk case transitions safely.", icon: <FaHeartbeat /> },
    { title: "Patient-Centered Comfort", desc: "Dedicated patient coordinators, streamlined dilated waiting zones, and clear workflows.", icon: <FaShieldAlt /> },
    { title: "Advanced Vision Studio", desc: "In-house optical center with precise digital centration systems and premium eyewear brands.", icon: <FaGlasses /> },
    { 
      title: "Empaneled Insurance & TPA Support", 
      desc: "Cashless health insurance facility available for eye surgeries. Our hospital has been recognized by the Telangana State Government for medical reimbursement.", 
      icon: <FaAward /> 
    },
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
            <StatCounter target="50000" label="Visions Restored" suffix="+" icon={<FaEye />} />
            <StatCounter target="20" label="Recovery Beds" suffix="+" icon={<FaBed />} />
            <StatCounter target="15" label="Years Experience" suffix="+" icon={<FaAward />} />
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center h-full min-h-[160px]">
              <div className="text-emerald-accent text-3xl mb-4">
                <FaUserMd />
              </div>
              <p className="text-slate-600 font-bold text-[11px] md:text-xs tracking-widest uppercase leading-snug max-w-[150px]">
                Day Care Center
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center h-full min-h-[160px]">
              <div className="text-emerald-accent text-3xl mb-4">
                <FaUserMd />
              </div>
              <p className="text-slate-600 font-bold text-[11px] md:text-xs tracking-widest uppercase leading-snug max-w-[150px]">
                Board-Certified Expert Eye Surgeons
              </p>
            </div>
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
              We benchmark our microsurgical facilities against top global eye institutions to deliver unmatched diagnostic precision and successful treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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

            <div className="w-full lg:w-1/2">
              <span className="text-xs font-extrabold tracking-widest text-emerald-accent uppercase bg-emerald-accent/10 px-3.5 py-1.5 rounded-full">
                About Vindhya Healthcare
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mt-4 leading-tight">
                An Institution of Trust, Sight, and Microsurgical Excellence
              </h2>
              <p className="text-sm text-slate-500 mt-4 leading-relaxed font-light">
                Founded with a mission to bring world-class ophthalmic and multi-specialty daycare treatments to the region, Vindhya Healthcare integrates global clinical experience with the latest technological modules to offer secure patient outcomes.
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8 border-b border-slate-200">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Our Mission</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    To deliver premium-quality, patient-centric healthcare with empathy, ethical clinical protocols, and precise operational metrics.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Our Vision</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    To be the leading regional hub for surgical excellence, setting outstanding benchmarks in clinical research, medical metrics, and safety.
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

      {/* SECTION 5 - FEATURED DEPARTMENTS (INCREASED TYPOGRAPHY SCALING FOR HEADERS AND BOX CONTENT) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs md:text-sm font-extrabold tracking-widest text-emerald-accent uppercase bg-emerald-accent/10 px-4 py-2 rounded-full">
              Hospital Architecture
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mt-5 tracking-tight leading-none">
              Our Specialties
            </h2>
            <p className="text-sm md:text-base text-slate-500 mt-5 leading-relaxed font-light max-w-2xl mx-auto">
              Select a primary department path below to review our highly targeted sub-specialty clinics and clinical service lines.
            </p>
          </div>

          {/* Primary Top Level Navigation Tabs (Increased Font Sizes) */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-4xl mx-auto mb-12 bg-slate-50 p-2.5 rounded-2xl border border-slate-100">
            {specialtiesData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full sm:w-auto flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-sm md:text-base font-black uppercase tracking-wider transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-emerald-accent text-white shadow-md shadow-emerald-accent/15 scale-100"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                }`}
              >
                <span className="text-base md:text-lg shrink-0">{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Sub-Specialties Render Zone (Increased text size & line spacing) */}
          <div className="border border-slate-100 rounded-3xl p-6 md:p-12 bg-slate-50/50">
            <div className="max-w-5xl mx-auto">
              <div className="mb-10 border-b border-slate-200 pb-6">
                <span className="text-emerald-accent text-xs md:text-sm font-black tracking-widest uppercase block mb-2">
                  {currentSpecialty.tagline}
                </span>
                <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                  {currentSpecialty.description}
                </p>
              </div>

              {/* Sub-Specialty Cards Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence mode="wait">
                  {currentSpecialty.subDepartments.map((sub, index) => (
                    <motion.div
                      key={sub.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, delay: index * 0.04 }}
                      className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex items-start gap-4 hover:border-emerald-accent/30 hover:shadow-md transition-all duration-200"
                    >
                      <div className="text-emerald-accent mt-1 shrink-0 text-sm md:text-base">
                        <FaCheckCircle />
                      </div>
                      <div>
                        <h4 className="text-sm md:text-base font-black text-slate-800 mb-1.5 tracking-tight leading-tight">
                          {sub.title}
                        </h4>
                        <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-light">
                          {sub.details}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/departments" 
              className="bg-medical-dark hover:bg-emerald-accent text-white font-extrabold px-6 py-3.5 rounded-xl text-xs shadow-md transition-all inline-flex items-center gap-1.5"
            >
              Explore Specialty Core Routing <FaArrowRight size={10} />
            </Link>
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
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
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
              to="/treatments" 
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

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl relative">
            <FaQuoteLeft className="text-emerald-accent/20 text-6xl absolute top-8 left-8" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-10">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-emerald-accent/30 overflow-hidden shrink-0">
                <img 
                  src={TESTIMONIALS[activeTestimonial].image} 
                  alt={TESTIMONIALS[activeTestimonial].name}
                  className="w-full h-full object-cover" 
                />
              </div>

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
              Read All Care Articles <FaArrowRight size={10} />
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
    </div>
  );
}