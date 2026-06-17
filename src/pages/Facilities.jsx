import { 
  FaClinicMedical, 
  FaHospital, 
  FaFlask, 
  FaAmbulance, 
  FaChair, 
  FaCheck,
  FaGlasses,
  FaUserCheck,    // For Reception
  FaParking,      // For Parking
  FaWater         // For Drinking Water
} from 'react-icons/fa';
import operation from '../assets/operation.jpg';
import emergency from '../assets/emergency.jpg';
import waitinghall2 from '../assets/waitinghall2.jpg';
import eyeglasses1 from '../assets/eyeglasses1.jpg';
import reception4 from '../assets/reception4.jpg';
import equipment1 from '../assets/equipment1.jpg';
import operation3 from '../assets/operation3.jpg';
import drinkingwater1 from '../assets/drinkingwater1.jpg';
import parking1 from '../assets/parking1.jpg';

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
      image: equipment1
    },
    {
      name: "Refractive Vision Correction Lab",
      icon: <FaFlask size={24} />,
      desc: "Equipped with state-of-the-art diagnostic topography scanners and wavefront aberrometers to verify eligibility for custom, touchless laser vision adjustments.",
      details: ["3D corneal curvature topographers", "Ultrasound pachymetry grids", "Tear film breakdown analyzers", "Wavefront aberration mapping"],
      image: emergency
    },
    {
      name: "Patient Helpdesk & Central Reception",
      icon: <FaUserCheck size={24} />,
      desc: "Our primary reception deck streamlines the hospital entry process. Dedicated care coordinators assist with fast-track digital registrations, token distributions, and multi-specialty triage routing.",
      details: ["Digital QR-based registrations", "Cashless TPA file processing desks", "Instant specialty token generation", "Patient care coordination guides"],
      image: reception4
    },
    {
      name: "Ocular Trauma & Emergency Desk",
      icon: <FaAmbulance size={24} />,
      desc: "A rapid-response emergency unit optimized to preserve vision during open-globe injuries, chemical burns, or deep corneal foreign body accidents.",
      details: ["On-call trauma surgeons", "Emergency ocular surface irrigation", "Foreign body micro-extraction kits", "Acute pressure crisis protocols"],
      image: operation3
    },
    {
      name: "In-House Vision Studio & Optical Center",
      icon: <FaGlasses size={24} />,
      desc: "A premium eyeglass and lens dispensing framework combining accurate automated optometry metrics with computer-navigated frame alignment grids.",
      details: ["Computerized centration parameters", "Keratoconus specialty lens sizing", "Premium anti-glare coatings", "Designer brand lifestyle collection"],
      image: eyeglasses1
    },
    {
      name: "Patient Counseling & Waiting Lounges",
      icon: <FaChair size={24} />,
      desc: "Designed to lower pre-consultation stress, our premium OPD waiting spaces provide ergonomic seating, charging docks, quiet air filters, and visual token dashboard queues.",
      details: ["Ergonomic high-back seating rows", "Custom eye drop application desks", "Electronic token status layouts", "Clean air filtration filters"],
      image: waitinghall2
    },
    {
      name: "RO Drinking Water Stations",
      icon: <FaWater size={24} />,
      desc: "To maintain hygienic comfort, multiple points across our outpatient blocks are equipped with continuous multi-stage reverse osmosis (RO) drinking water units.",
      details: ["Multi-stage RO purification loops", "Chilled and ambient temperature options", "Contactless disposable glass dispensers", "Routine clinical sanitation checks"],
      image: drinkingwater1
    },
    {
      name: "Valet Parking & Patient Drop-off Zones",
      icon: <FaParking size={24} />,
      desc: "Equipped with wide drop-off lanes right at the main entrance, providing seamless navigation for vision-compromised patients alongside convenient, secure parking facilities.",
      details: ["Zero-step wheelchair drop-off bays", "Dedicated valet vehicle tracking", "Spacious and secure parking lanes", "24/7 guard surveillance monitoring"],
      image: parking1
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
          <p className="text-sm md:text-base text-slate-300 mt-4 leading-relaxed font-light">
            An overview of the ophthalmic clinical infrastructure, micro-surgical suites, high-end imaging diagnostics, and comfort-driven patient utilities that support your vision restoration.
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