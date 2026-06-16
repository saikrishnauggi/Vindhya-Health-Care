import { 
  FaClinicMedical, 
  FaHospital, 
  FaFlask, 
  FaAmbulance, 
  FaBed, 
  FaCoffee, 
  FaChair, 
  FaParking,
  FaCheck
} from 'react-icons/fa';
import operation from '../assets/operation.jpg';
import emergency from '../assets/emergency.jpg';
import waitinghall from '../assets/waitinghall.jpg';

export default function Facilities() {
  const facilityItems = [
    {
      name: "Intensive Care Units (ICU)",
      icon: <FaClinicMedical size={24} />,
      desc: "Our high-dependency beds feature advanced ventilation systems, invasive pressure monitors, bedside dialysis setups, and a 1:1 patient-to-nurse ratio overseen by on-site critical care physicians.",
      details: ["Ventilators & telemetry units", "Bedside hemodialysis support", "24/7 critical care consultants", "Negative pressure isolation rooms"],
      image: operation
    },
    {
      name: "Laminar Flow Operation Theatres (OT)",
      icon: <FaHospital size={24} />,
      desc: "Ultra-clean surgical theaters utilizing laminar air flow systems and high-efficiency particulate air (HEPA) filters to reduce airborne pathogens during high-risk orthopedic and cardiac surgeries.",
      details: ["Robotic surgery compatibility", "HEPA filtration pathogen control", "C-Arm diagnostic live screens", "Pendant mounted anesthesia hubs"],
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=600"
    },
    {
      name: "High-Resolution Diagnostic Labs",
      icon: <FaFlask size={24} />,
      desc: "Our labs are equipped with high-field 3T Silent MRI scanners, 128-slice dual-source CT machines, digital mammography units, and automated biochemistry tracks to deliver high analytical precision.",
      details: ["High-field 3T Silent MRI scan", "128-slice low-radiation CT scanner", "Digital breast mammography", "Automated blood sample trackers"],
      image: emergency
    },
    {
      name: "Critical Care Ambulance Fleet",
      icon: <FaAmbulance size={24} />,
      desc: "Our ambulances act as mobile critical care beds. Paramdics can perform advanced life support interventions, intubation, and transmit live vitals directly to the hospital en route.",
      details: ["Built-in transport ventilators", "Dual defibrillators & oxygen lines", "ACLS certified medical paramedics", "GPS live coordinate dispatch trackers"],
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600"
    },
    {
      name: "Premium Inpatient Rooms & Suites",
      icon: <FaBed size={24} />,
      desc: "Recover in clean, hotel-grade suites featuring central heating, interactive televisions, electric patient beds, private lounges, and customized inpatient menu guides designed by clinical dietitians.",
      details: ["Presidential & private deluxe suites", "Automated multi-position beds", "Attendant sleeping loungers", "In-room WiFi & call systems"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600"
    },
    /* {
      name: "Visitor Cafeteria & Lounge",
      icon: <FaCoffee size={24} />,
      desc: "Our clean, in-house visitor cafeteria offers nutritious vegetarian foods, hot brews, and fresh snacks for visiting family members and attendants, conforming to food safety standards.",
      details: ["Nutritious vegetarian meals", "Espresso and fresh juice bars", "Strict hygiene sanitization", "Spacious social dining grids"],
      image: "https://images.unsplash.com/photo-1551884831-b5901ee50c8b?q=80&w=600"
    }, */
    {
      name: "Spacious Waiting Lounges",
      icon: <FaChair size={24} />,
      desc: "Designed to reduce waiting stress, our OPD waiting halls are fitted with ergonomic seating, charging docks, quiet air filters, and electronic token boards for consultation queue tracking.",
      details: ["Ergonomic high-back seating", "Mobile charging and working desks", "Clean air filtration filters", "Token dashboard indicators"],
      image: waitinghall
    },
    /* {
      name: "Multilevel Parking & Valet",
      icon: <FaParking size={24} />,
      desc: "To ease hospital entry, we provide a multi-level parking lot with reserved emergency bays and free valet services at the main entrance, ensuring smooth arrivals.",
      details: ["Valet parking at entrance gate", "Reserved wheelchair accessible slots", "Emergency ambulance clear zones", "24/7 security watch cameras"],
      image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=600"
    } */
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
            An overview of the clinical infrastructure, surgical suites, diagnostics labs, and visitor spaces that support patient recovery.
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
