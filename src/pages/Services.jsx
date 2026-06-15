import { Link } from 'react-router-dom';
import { 
  FaUserMd, 
  FaBed, 
  FaClinicMedical, 
  FaAmbulance, 
  FaFilePrescription, 
  FaVial, 
  FaCheck,
  FaCalendarCheck,
  FaHeartbeat
} from 'react-icons/fa';

export default function Services() {
  const servicesList = [
    {
      id: 'opd',
      name: 'Outpatient Department (OPD)',
      icon: <FaUserMd size={24} />,
      description: 'Consultation clinics covering 25+ medical specialities. Patients can schedule appointments, undergo primary physical assessments, and obtain prescriptions.',
      highlights: ['Morning & evening clinics', 'Prioritized senior citizen waitlists', 'Electronic health records tracking', 'Digital prescription delivery'],
      timings: 'Daily: 9:00 AM - 8:00 PM'
    },
    {
      id: 'ipd',
      name: 'Inpatient Department (IPD)',
      icon: <FaBed size={24} />,
      description: 'Spacious, premium recovery rooms and suites, providing high-end care, state-of-the-art telemetry monitors, and delicious nutritious meals planned by dietitians.',
      highlights: ['Presidential & executive suites', '24/7 dedicated nursing shifts', 'Fully automated patient beds', 'Comfortable family attendant sofa-beds'],
      timings: '24 Hours Open'
    },
    {
      id: 'icu',
      name: 'Intensive Care Units (ICU / NICU)',
      icon: <FaClinicMedical size={24} />,
      description: 'Highly advanced critical care centers. Equipped with advanced ventilators, automated dialysis machines, and 1:1 patient care supervised by intensive care specialists.',
      highlights: ['Central telemetry consoles', 'Level III Neonatal ICU (NICU)', 'Negative pressure isolation wards', 'Sterilized laminar flow environments'],
      timings: '24 Hours Open'
    },
    {
      id: 'emergency',
      name: '24/7 Emergency & Trauma',
      icon: <FaClinicMedical className="text-red-500" size={24} />,
      description: 'Immediate cardiac and trauma care. Managed by emergency medical officers and trauma surgeons ready to handle accidental emergencies or acute stroke setups.',
      highlights: ['Dedicated code-blue emergency team', 'Instant triage diagnostic labs', 'State-of-the-art resuscitation bays', 'Direct telemetry transfer protocols'],
      timings: '24 Hours (Year-Round)'
    },
    {
      id: 'ambulance',
      name: 'Advanced Life Support Ambulances',
      icon: <FaAmbulance size={24} />,
      description: 'Act as mobile ICUs on wheels. Equipped with ventilators, cardiac monitors, and defibrillators to start treatment en route to the hospital.',
      highlights: ['Paramedics trained in advanced life support (ACLS)', 'GPS route navigation integration', 'Tele-medicine monitor connectivity', '24/7 centralized dispatch team'],
      timings: '24 Hours Hotline'
    },
    {
      id: 'pharmacy',
      name: '24/7 In-House Pharmacy',
      icon: <FaFilePrescription size={24} />,
      description: 'Fully stocked clinical pharmacy delivering genuine, temperature-regulated medicines, vaccines, surgical consumables, and home healthcare aids.',
      highlights: ['24/7 continuous operations', 'Computerized barcoded inventories', 'Hospital-delivery for inpatients', 'Authentic medicines sourcing'],
      timings: '24 Hours Open'
    },
    {
      id: 'labs',
      name: 'Accredited Pathology Laboratory',
      icon: <FaVial size={24} />,
      description: 'Fully automated biochemistry, pathology, and microbiology labs that conform to strict quality guidelines to deliver quick and precise reports.',
      highlights: ['NABL certification standards', 'Barcode labeled sample vials', 'Home sample collection pick-ups', 'Secure online report PDF access'],
      timings: '24 Hours (OPD: 7:00 AM - 9:00 PM)'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Page Header */}
      <div className="bg-medical-dark text-white py-16 px-4 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)' }}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-emerald-accent text-xs font-bold uppercase tracking-widest bg-emerald-accent/15 px-3 py-1.5 rounded-full">
            Clinical Care
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 leading-tight">Our Services</h1>
          <p className="text-sm md:text-base text-slate-350 mt-4 leading-relaxed font-light">
            Comprehensive medical care services ranging from routine outpatient checkups and diagnostic sweeps to high-end intensive care units.
          </p>
        </div>
      </div>

      {/* 2. Services List grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {servicesList.map((service, index) => (
              <div 
                key={service.id} 
                className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 border-b border-slate-50 pb-5 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-medical-sky/10 text-medical-sky flex items-center justify-center">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-800">{service.name}</h3>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{service.timings}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-500 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="space-y-2.5 text-xs text-slate-500 mb-6">
                    {service.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-tight">
                        <FaCheck className="text-emerald-accent mt-0.5 shrink-0" size={10} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer action buttons */}
                <div className="border-t border-slate-50 pt-5 mt-4 flex items-center gap-4">
                  <Link 
                    to="/appointment"
                    className="flex-1 text-center bg-emerald-accent hover:bg-emerald-dark text-white font-extrabold py-3 rounded-xl text-xs transition-colors shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <FaCalendarCheck size={12} /> Book Appointment
                  </Link>
                  {service.id === 'labs' && (
                    <Link 
                      to="/health-packages"
                      className="flex-1 text-center bg-slate-50 text-slate-700 hover:bg-slate-100 font-bold py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <FaHeartbeat size={12} /> View Health Packages
                    </Link>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
