import { Link } from 'react-router-dom';
import { FaHistory, FaBullseye, FaHeart, FaRibbon, FaAward, FaHospital, FaEye } from 'react-icons/fa';

// 1. IMPORT YOUR BACKGROUND IMAGE ASSET WITH THE CORRECT EXTENSION
import vindhyaBg from '../assets/image_9e2966.jpeg';
import equipment from '../assets/equipment1.jpg';
import eyeglasses1 from '../assets/eyeglasses1.jpg';
import operation3 from '../assets/operation3.jpg';
import chairman from '../assets/Chairman.jpg';
import NavneethServey from '../assets/NavneethServey.jpg';

export default function About() {
  const milestones = [
    { year: "2023", title: "Inception", desc: "Vindhya Healthcare was founded as a dedicated primary vision care clinic in Telangana." },
    { year: "2024", title: "Expansion into Tertiary Eye Care", desc: "Upgraded capacity and added dedicated micro-surgical modules for Cataract and Glaucoma." },
    { year: "2024", title: "NABH Accreditation", desc: "Recognized for superior ophthalmic clinical quality, patient safety, and sterile operational protocols." },
    { year: "2025", title: "State-of-the-Art Retinal Imaging", desc: "Installed the region's first high-speed Optical Coherence Tomography (OCT) systems and digital fundus labs." },
    { year: "2025", title: "Advanced LASIK & Refractive Room", desc: "Introduced wavefront-guided and completely blade-free laser vision correction treatments." },
    { year: "2026", title: "Academic & Vitreoretinal Fellowship", desc: "Launched dedicated postgraduate ophthalmic fellowship programs and specialty research rooms." }
  ];

  const values = [
    { title: "Patient First", desc: "All medical decisions, corrective paths, and services center around patient comfort and visual safety.", icon: <FaHeart /> },
    { title: "Clinical Integrity", desc: "Strict adherence to ethical medical practices, evidence-based ophthalmic care, and diagnostic transparency.", icon: <FaRibbon /> },
    { title: "Innovation", desc: "Continual investment in next-generation diagnostic gear and advanced laser-assisted surgical training.", icon: <FaAward /> },
    { title: "Empathy", desc: "Treating every patient and relative with compassion, kindness, and customized vision counseling.", icon: <FaHospital /> }
  ];

  return (
    <div className="bg-slate-50">
      
      {/* 1. Header Banner - WITH STYLISH OVERLAY & ACCURATE IMAGE BACKGROUND */}
      <div 
        className="text-white py-24 md:py-32 px-4 text-center relative overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center" 
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.85), rgba(30, 41, 59, 0.75)), url(${vindhyaBg})` 
        }}
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-emerald-accent text-xs font-bold uppercase tracking-widest bg-emerald-accent/15 px-3 py-1.5 rounded-full backdrop-blur-sm border border-emerald-accent/20">
            Who We Are
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 leading-tight drop-shadow-sm">About Vindhya Eye Care</h1>
          <p className="text-sm md:text-base text-slate-200 mt-4 leading-relaxed font-light drop-shadow max-w-2xl mx-auto">
            An award-winning, advanced ophthalmic institution dedicated to clinical eye care excellence, visual innovations, and patient trust since 2023.
          </p>
        </div>
      </div>

      {/* 2. Chairman & Director message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            

            {/* Director Message */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm relative flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-accent uppercase tracking-wider block mb-2">Managing Director's Message</span>
                <h3 className="text-xl font-bold text-slate-800 mb-6">"Benchmarked Against Global Ophthalmic Protocols"</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light italic mb-8">
                  "Quality vision restoration is defined by clinical precision and microsurgical safety. Our surgical outcomes are audited closely to ensure we adhere to rigorous safety protocols. Through continuous training programs for our optometry teams and integration of advanced imaging systems, we aim to lead diagnostic and refractive advancements in the region."
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-200 pt-5 mt-4">
                <div className="w-12 h-12 rounded-full bg-slate-300 overflow-hidden">
                  <img src={NavneethServey} alt="Director" className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="block font-bold text-sm text-slate-800">Dr. Navneeth Servey, M.B.B.S (Osm), M.S. (Ophthal) </span>
                  <span className="block text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Managing Director</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. History, Mission, Vision, Core Values */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* History */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-accent/10 text-emerald-accent flex items-center justify-center mb-6">
                <FaHistory size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-4">Our History</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                What began as a localized primary eye clinic in 2023 has evolved into a premier full-scale tertiary care ophthalmic referral destination. Over two decades, we have treated over half a million patients, consistently adding advanced vitreoretinal modules, automated visual field plotting tests, wavefront laser systems, and micro-incision cataract surgery setups to serve the community.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-medical-sky/10 text-medical-sky flex items-center justify-center mb-6">
                <FaBullseye size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-4">Mission &amp; Vision</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light mb-4">
                <strong>Our Mission:</strong> To provide premium-quality, patient-centric eye care with empathy, ethical clinical standards, and microsurgical precision.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                <strong>Our Vision:</strong> To be the leading national choice in advanced ophthalmology, setting high standards of clinical vision outcomes, eye research, and safety.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <FaHeart size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-4">Core Values</h3>
              <div className="space-y-4">
                {values.map((v, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-emerald-accent mt-0.5">{v.icon}</span>
                    <div>
                      <span className="block font-bold text-xs text-slate-800">{v.title}</span>
                      <span className="block text-[11px] text-slate-500 leading-tight font-light">{v.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Milestones Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-accent uppercase tracking-wider bg-emerald-accent/10 px-3 py-1.5 rounded-full">Our Growth</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mt-4">Chronological Milestones</h2>
          </div>

          <div className="relative border-l border-slate-200 ml-4 md:ml-32">
            {milestones.map((m, idx) => (
              <div key={idx} className="mb-12 relative pl-8 md:pl-12">
                {/* Year tag - absolute left on desktop */}
                <div className="hidden md:block absolute -left-32 top-0 text-right w-24">
                  <span className="text-lg font-extrabold text-emerald-accent">{m.year}</span>
                </div>
                {/* Circle marker */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-accent border-4 border-white shadow-sm"></div>
                
                <h3 className="text-base font-bold text-slate-800 mb-2">
                  <span className="inline-block md:hidden text-emerald-accent font-extrabold mr-2">{m.year} - </span>
                  {m.title}
                </h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Accreditations & Awards */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-accent uppercase tracking-wider bg-emerald-accent/10 px-3 py-1.5 rounded-full">Accolades</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mt-4">Accreditations &amp; Quality Awards</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* T1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-accent/10 text-emerald-accent flex items-center justify-center mb-6">
                <FaAward size={30} />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-2">NABH Certification</h3>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                National Accreditation Board for Hospitals &amp; Healthcare Providers certification, recognizing our superior clinical ophthalmic safety and microsurgical parameters.
              </p>
            </div>
            
            {/* T2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-medical-sky/10 text-medical-sky flex items-center justify-center mb-6">
                <FaAward size={30} />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-2">Advanced Diagnostics Panel</h3>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Our imaging rooms and clinical labs conform to global standards, assuring precision micro-mapping of retinal structures and quick test turnarounds.
              </p>
            </div>

            {/* T3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <FaAward size={30} />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-2">Excellence in Eye Care</h3>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Honored at the National Health Summit for outstanding services in advanced vitreo-retinal procedures, modern cataract surgeries, and laser treatments.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Infrastructure Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-accent uppercase tracking-wider bg-emerald-accent/10 px-3 py-1.5 rounded-full">World Class Setup</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mt-4">Hospital Infrastructure Showcase</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-sm group">
              <img src={operation3} alt="OT" className="w-full h-64 object-cover group-hover:scale-103 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-sm">Sterile Ophthalmic Operation Theaters</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-sm group">
              <img src={equipment} alt="ICU" className="w-full h-64 object-cover group-hover:scale-103 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-sm">Advanced Imaging &amp; Retinal Diagnostics Room</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-sm group">
              <img src={eyeglasses1} alt="Suites" className="w-full h-64 object-cover group-hover:scale-103 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-sm">In-House Vision Studio &amp; Refractive Labs</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}