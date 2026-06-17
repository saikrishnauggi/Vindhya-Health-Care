import { 
  FaClinicMedical, 
  FaHospital, 
  FaFlask, 
  FaAmbulance, 
  FaBed, 
  FaChair, 
  FaCheck,
  FaEye,
  FaGlasses
} from 'react-icons/fa';
import operation from '../assets/operation.jpg';
import emergency from '../assets/emergency.jpg';
import waitinghall from '../assets/waitinghall.jpg';

export default function Facilities() {
  const facilityItems = [
    {
      name: "Ophthalmic Surgical Suites (OT)",
      icon: <FaHospital size={24} />,
      desc: "Ultra-clean surgical theatres engineered with vertical laminar airflow systems and high-efficiency particulate air (HEPA) filters to maintain zero-infection fields during delicate micro-incision surgeries.",
      details: ["Real-time digital surgical overlays", "Pendant-mounted operating microscopes", "Automated phacoemulsification systems", "Stitch-less micro-incision setups"],
      image: operation
    },
    {
      name: "Advanced Retinal Imaging Core",
      icon: <FaClinicMedical size={24} />,
      desc: "A high-precision diagnostic facility featuring micrometer-scale structural sensors to scan the posterior segment, vital for tracking macular mapping and progressive optic disc changes.",
      details: ["High-speed 3D OCT Angiography", "Digital Fundus Fluorescein imaging", "Visual Field Plotting (Perimetry)", "High-resolution B-Scan ultrasound probes"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600"
    },
    {
      name: "Refractive Vision Correction Lab",
      icon: <FaFlask size={24} />,
      desc: "Equipped with state-of-the-art diagnostic topography scanners and wavefront aberrometers to verify eligibility for custom, touchless laser vision adjustments.",
      details: ["3D corneal curvature topographers", "Ultrasound pachymetry grids", "Tear film breakdown analyzers", "Wavefront aberration mapping"],
      image: emergency
    },
    {
      name: "Ocular Trauma & Emergency Desk",
      icon: <FaAmbulance size={24} />,
      desc: "A rapid-response emergency unit optimized to preserve vision during open-globe injuries, chemical burns, or deep corneal foreign body accidents.",
      details: ["24/7 on-call trauma surgeons", "Emergency ocular surface irrigation", "Foreign body micro-extraction kits", "Acute pressure crisis protocols"],
      image: "https://images.unsplash.com/photo-1606166325683-e6deb697d301?q=80&w=600"
    },
    {
      name: "In-House Vision Studio & Optical Center",
      icon: <FaGlasses size={24} />,
      desc: "A premium eyeglass and lens dispensing framework combining accurate automated optometry metrics with computer-navigated frame alignment grids.",
      details: ["Computerized centration parameters", "Keratoconus specialty lens sizing", "Premium anti-glare coatings", "Designer brand lifestyle collection"],
      image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=600"
    },
    {
      name: "Patient Counseling & Waiting Lounges",
      icon: <FaChair size={24} />,
      desc: "Designed to lower pre-consultation stress, our premium OPD waiting spaces provide ergonomic seating, charging docks, quiet air filters, and visual token dashboard queues.",
      details: ["Ergonomic high-back seating rows", "Custom eye drop application desks", "Electronic token status layouts", "Clean air filtration filters"],
      image: waitinghall
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Page Header */}
      <div className="bg-medical-dark text-white py-16 px-4 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)' }}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-emerald-accent text-xs font-bold uppercase tracking-widest bg-emerald-accent/15 px-3 py-1.5 rounded-full">
            Infrastructure
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 leading-tight">Hospital Facilities</h1>
          <p className="text-sm md:text-base text-slate-350 mt-4 leading-relaxed font-light">
            An overview of the ophthalmic clinical infrastructure, micro-surgical suites, high-end imaging diagnostics, and optical studios that support your vision restoration.
          </p>
        </div>
      </div>

      {/* 2. Facility Cards Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {facilityItems.map((facility, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 grid grid-cols-1 sm:grid-cols-2"
              >
                {/* Image panel */}
                <div className="h-56 sm:h-full relative overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-medical-dark/90 backdrop-blur-sm text-white p-3 rounded-xl shadow-md">
                    {facility.icon}
                  </div>
                </div>

                {/* Details panel */}
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-800 mb-3.5 leading-snug">
                      {facility.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed mb-6">
                      {facility.desc}
                    </p>
                    
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">Facility Highlights:</h4>
                    <ul className="space-y-2 text-xs text-slate-500">
                      {facility.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 leading-tight">
                          <FaCheck className="text-emerald-accent mt-0.5 shrink-0" size={8} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}