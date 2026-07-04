import { Link } from 'react-router-dom';
import { FaHistory, FaBullseye, FaHeart, FaRibbon, FaAward, FaHospital } from 'react-icons/fa';

// 1. IMPORT YOUR BACKGROUND IMAGE ASSET WITH THE CORRECT EXTENSION
import vindhyaBg from '../assets/image_9e2966.jpeg';
import equipment from '../assets/equipment1.jpg';
import eyeglasses1 from '../assets/eyeglasses1.jpg';
import operation3 from '../assets/operation3.jpg';
import NavneethServey from '../assets/NavneethServey.jpg';

export default function About() {
  const milestones = [
    { year: "2020", title: "Inception & Core Setup", desc: "Incorporated on 06/01/2020, laying down foundational legal roots for high-standard medical care delivery." },
    { year: "2023", title: "Allopathic Registration & Expansion", desc: "Registered under the T.S. Allopathic Private Medical Care Establishments Act as a Day Care Clinic and officially established as a Micro Enterprise under the name M/S Vindhya Health Care." },
    { year: "2023", title: "ROHINI Insurance Registry & Pollution Board Accord", desc: "Enrolled in the Registry of Hospitals in Network of Insurance (ROHINI ID: 8900080564565) and received formal Bio-Medical Waste Management Authorization from the Telangana State Pollution Control Board for a 4-bed facility layout." },
    { year: "2024", title: "Sustained Quality Metrics", desc: "Maintained verified operational classification as a certified Micro service provider matching regional healthcare benchmarks." },
    { year: "2025", title: "Continuous Compliance", desc: "Verified active operations with the Ministry of MSME, reinforcing standard medical care workflows and infrastructure." },
    { year: "2026", title: "Modern Day-Care Clinical Services", desc: "Delivering professional ophthalmic day-care treatments, consults, and associated pharmaceutical services under rigorous health and environmental control parameters." }
  ];

  const values = [
    { title: "Patient First", desc: "All medical decisions, clinical paths, and outpatient workflows center around personal safety, diagnostic transparency, and care comfort.", icon: <FaHeart /> },
    { title: "Regulatory Integrity", desc: "Strict compliance with the T.S. Allopathic Private Medical Care Establishments Act, State Pollution Boards, and ethical medical standards.", icon: <FaRibbon /> },
    { title: "Environmental Responsibility", desc: "Rigorous alignment with Bio-Medical Waste Management protocols ensuring clean, non-hazardous handling of surgical and day-care waste.", icon: <FaAward /> },
    { title: "Clinical Transparency", desc: "Treating every outpatient or relative with complete diagnostic clarity, providing fully authorized clinical setups and safe medicine distribution paths.", icon: <FaHospital /> }
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
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 leading-tight drop-shadow-sm">About Vindhya Health Care</h1>
          <p className="text-sm md:text-base text-slate-200 mt-4 leading-relaxed font-light drop-shadow max-w-2xl mx-auto">
            An authorized Allopathic Private Medical Care Day Care Clinic dedicated to clinical ophthalmic excellence, certified healthcare management, and patient trust.
          </p>
        </div>
      </div>

      {/* 2. Director message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 gap-12 max-w-3xl mx-auto">
            
            {/* Director Message */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm relative flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-accent uppercase tracking-wider block mb-2">Managing Director's Message</span>
                <h3 className="text-xl font-bold text-slate-800 mb-6">"Benchmarked Against Structured Clinical Protocols"</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light italic mb-8">
                  "Quality vision restoration and medical interventions are defined by structured clinical precision and micro-surgical safety. Our setup adheres carefully to state registration criteria, insurance network benchmarks, and waste management practices. Through precise diagnostics, trained optometry workflows, and an authorized, integrated pharmacy setup, we aim to provide reliable, professional day-care services to the community."
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-200 pt-5 mt-4">
                <div className="w-12 h-12 rounded-full bg-slate-300 overflow-hidden">
                  <img src={NavneethServey} alt="Director" className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="block font-bold text-sm text-slate-800">Dr. Navneeth Servey, M.B.B.S. (Osm), M.S. (Ophthalmology)</span>
                  <span className="block text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Managing Director & Proprietor</span>
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
              <h3 className="text-lg font-bold text-slate-800 mb-4">Our Journey</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Incorporated in 2020, Vindhya Health Care has established itself as an authorized allopathic clinical destination in Malkajgiri, Hyderabad. Operating seamlessly with certified Day Care infrastructure, a licensed in-house retail pharmacy, and continuous micro-enterprise enrollment, the facility serves regional communities with high accountability.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-6">
                <FaBullseye size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-4">Mission &amp; Vision</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light mb-4">
                <strong>Our Mission:</strong> To render evidence-based, safe allopathic day-care medical solutions utilizing standard clinical diagnostics, strict hygiene frameworks, and expert practitioner insights.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                <strong>Our Vision:</strong> To be a dependable landmark for primary and secondary eye-care needs, upholding high operational ethics, strict licensing compliance, and transparent care workflows.
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
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mt-4">Chronological Records</h2>
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

      {/* 5. Accreditations & Board Registrations */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-accent uppercase tracking-wider bg-emerald-accent/10 px-3 py-1.5 rounded-full">Accolades</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mt-4">Statutory Approvals & Registrations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* T1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-accent/10 text-emerald-accent flex items-center justify-center mb-6">
                <FaHospital size={30} />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-2">TS Private Medical Establishments Registry</h3>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Registered officially under the T.S. Allopathic Private Medical Care Establishments Act (File No: 093/DM&HO/MDCL/2023), confirming standard compliance as an Allopathic Day Care Clinic.
              </p>
            </div>
            
            {/* T2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-6">
                <FaAward size={30} />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-2">ROHINI Insurance Enrolled</h3>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Verified within the Registry of Hospitals in Network of Insurance (ROHINI ID: 8900080564565) maintained by the Insurance Information Bureau of India, streamlining patient system transparency.
              </p>
            </div>

            {/* T3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <FaRibbon size={30} />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-2">TSPCB Bio-Medical Waste Authorization</h3>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Formally authorized under Rule 10 of the Bio-Medical Waste Management Rules, 2016 for standard, environment-friendly waste segregation, storage, and specialized multi-clave disposal channels.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Infrastructure Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-accent uppercase tracking-wider bg-emerald-accent/10 px-3 py-1.5 rounded-full">Standard Setup</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mt-4">Clinic Infrastructure Showcase</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-sm group">
              <img src={operation3} alt="OT" className="w-full h-64 object-cover group-hover:scale-103 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-sm">Allopathic Day Care Treatment Units</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-sm group">
              <img src={equipment} alt="Diagnostics" className="w-full h-64 object-cover group-hover:scale-103 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-sm">Authorized 4-Bed Layout & Ophthalmic Diagnostics</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-sm group">
              <img src={eyeglasses1} alt="Pharmacy" className="w-full h-64 object-cover group-hover:scale-103 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-sm">In-House Licensed Retail Pharmacy (Form 21)</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}