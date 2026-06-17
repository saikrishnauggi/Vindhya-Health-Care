import { Link } from 'react-router-dom';
import { 
  FaUserMd, 
  FaClinicMedical, 
  FaFilePrescription, 
  FaVial, 
  FaCheck,
  FaCalendarCheck,
  FaHeartbeat,
  FaGlasses,
  FaHospitalSymbol,
  FaProcedures
} from 'react-icons/fa';

export default function Services() {
  const servicesList = [
    {
      id: 'opd',
      name: 'Outpatient Department (OPD)',
      icon: <FaUserMd size={24} />,
      description: 'Multi-specialty consultation clinics including comprehensive Eye Specialist panels, Orthopedics, and Gynecology. Patients undergo primary tracking, physical assessments, and customized care plan mapping.',
      highlights: ['Morning & evening slots available', 'Prioritized senior citizen waitlists', 'Electronic health records system', 'Digital prescription routing'],
      timings: 'Daily: 9:00 AM - 8:00 PM'
    },
    {
      id: 'eye-ot',
      name: 'Advanced Eye Surgery Theatre',
      icon: <FaHospitalSymbol size={24} className="text-emerald-accent" />,
      description: 'State-of-the-art microsurgical suite purpose-built for highly precise ophthalmic interventions, from modern premium cataract surgery to micro-incision vitrectomy treatments.',
      highlights: ['Microscopic surgical guidance', 'Sutureless micro-incision setups', 'Advanced phacoemulsification systems', 'Sterilized micro-surgical conditions'],
      timings: 'Scheduled Modular Shifts'
    },
    {
      id: 'daycare-ot',
      name: 'Day Care Modular Operation Theatre',
      icon: <FaProcedures size={24} />,
      description: 'Advanced day care surgical block utilizing vertical laminar airflow systems. Engineered for rapid, minimally invasive surgical procedures that let you recover in the comfort of your home same-day.',
      highlights: ['Ultra-sterile laminar flow system', 'Rapid, hassle-free day care admissions', 'Advanced orthopedic and regional blocks', 'Post-operative monitoring lounge'],
      timings: 'Day Care Shifts Only'
    },
    {
      id: 'labs',
      name: 'Pathology Lab & Diagnostic Suite',
      icon: <FaVial size={24} />,
      description: 'Comprehensive diagnostic tracking including precise Blood Testing panels, high-fidelity ECG tracking, blood pressure mapping, and biochemistry workups overseen by certified technicians.',
      highlights: ['NABL standard tracking parameters', 'Rapid turnaround biochemistry panels', 'ECG tracking and physical diagnostic runs', 'Secure digital report downloads'],
      timings: 'Daily: 7:00 AM - 8:00 PM'
    },
    {
      id: 'optical',
      name: 'In-House Optical Store & Vision Studio',
      icon: <FaGlasses size={24} />,
      description: 'Advanced dispensing terminal for prescription lenses, specialty frames, and custom eyewear. Our resident optometrists deliver precise diagnostic refractions and assist you with premium, durable frame alignments.',
      highlights: ['Premium corrective glass assemblies', 'Certified digital centration testing', 'High-end UV-protective lifestyle collections', 'Personalized vision care adjustments'],
      timings: 'Daily: 9:00 AM - 8:00 PM'
    },
    {
      id: 'pharmacy',
      name: 'In-House Clinical Pharmacy',
      icon: <FaFilePrescription size={24} />,
      description: 'Fully responsive medical counter providing immediate access to temperature-regulated post-operative eye drops, specialized prescriptions, essential medications, and home aids.',
      highlights: ['Computerized batch tracking systems', 'Genuine medication source tracking', 'Post-op clinical care bundles', 'Direct inpatient delivery protocols'],
      timings: 'Open Daily During Center Hours'
    }
  ];

  const opticalBrands = [
    'Cartier', 'PRADA', 'BURBERRY', 'MONTBLANC',
    'TOM FORD', 'TOMMY HILFIGER', 'GUCCI', 'Calvin Klein',
    'Ray-Ban', 'VOGUE', 'OAKLEY', 'FRENCH CONNECTION',
    'ULTRA MARIN', 'MATIX', 'CUBS 9', 'SCOTT'
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
          <p className="text-sm md:text-base text-slate-300 mt-4 leading-relaxed font-light">
            Comprehensive medical and ophthalmic care. From state-of-the-art modular day-care operation theaters and advanced diagnostic testing blocks to our premium in-house vision studio.
          </p>
        </div>
      </div>

      {/* 2. Services List grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 border-b border-slate-50 pb-5 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-medical-sky/10 text-medical-sky flex items-center justify-center shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-bold text-slate-800 leading-snug">{service.name}</h3>
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
                <div className="border-t border-slate-50 pt-5 mt-4 flex flex-col sm:flex-row items-center gap-3">
                  <Link 
                    to={service.id === 'optical' ? '/contact' : '/appointment'}
                    className="w-full text-center bg-emerald-accent hover:bg-emerald-dark text-white font-extrabold py-3 rounded-xl text-xs transition-colors shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <FaCalendarCheck size={12} /> {service.id === 'optical' ? 'Eye Glasses Enquiry' : 'Book Appointment'}
                  </Link>
                  {service.id === 'labs' && (
                    <Link 
                      to="/health-packages"
                      className="w-full text-center bg-slate-50 text-slate-700 hover:bg-slate-100 font-bold py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <FaHeartbeat size={12} /> View Packages
                    </Link>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Brands Studio */}
      <section className="bg-white border-t border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-medical-sky text-xs font-bold uppercase tracking-widest bg-medical-sky/10 px-3 py-1.5 rounded-full">
            Vision Studio
          </span>
          <h2 className="text-2xl font-extrabold text-slate-800 mt-4 mb-2">Our Premium Brands</h2>
          <p className="text-xs text-slate-400 font-light max-w-xl mx-auto mb-12">
            We partner with the world's leading eyewear designers to bring you unmatched comfort, frame durability, and stylistic confidence.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {opticalBrands.map((brand, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-100/50 rounded-2xl py-6 px-4 flex items-center justify-center font-serif text-sm tracking-wider font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-all duration-200"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}