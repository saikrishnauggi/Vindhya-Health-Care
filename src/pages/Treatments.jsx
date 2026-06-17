import { Link } from 'react-router-dom';
import { FaInfoCircle, FaCalendarCheck, FaEye } from 'react-icons/fa';
import cataract from '../assets/cataract.png';
import glaucoma from '../assets/glaucoma.png';
import retina from '../assets/retina.png';
import cornea from '../assets/cornea.png';
import diabetic from '../assets/diabetic.png';
import pediatric from '../assets/pediatric.png';
import advancedtech from '../assets/advancedtech.jpg';
import lasik from '../assets/lasik.png';
import emergency from '../assets/emergency.jpg';
import anterior from '../assets/anterior.png';
import operation from '../assets/operation.jpg';
import lenses from '../assets/lenses.png';
import oculoplasty from '../assets/oculoplasty.png';
import uvea from '../assets/uvea.png';

export default function Treatments() {
  // Fixed and updated dataset mapping out the clinical treatment matrix with live, verified image URLs
  const treatmentServices = [
    {
      id: 'cataract',
      name: 'Cataract Surgery',
      image: cataract,
      features: [
        'AI-assisted surgical mapping',
        'Navigation-guided alignment systems',
        'Advanced clear vision restoration',
        'Premium intraocular lens options'
      ],
      description: 'Restore clear vision with advanced cataract surgeries using AI-assisted and navigation-guided systems.'
    },
    {
      id: 'glaucoma',
      name: 'Glaucoma Management',
      image: glaucoma,
      features: [
        'Early intraocular pressure screening',
        'Optic nerve tracking analysis',
        'Long-term progressive control planning',
        'Advanced targeted ocular therapies'
      ],
      description: 'Early diagnosis and long-term management to protect your vision from this silent, progressive condition.'
    },
    {
      id: 'retina',
      name: 'Retina & Vitreous Care',
      image: retina,
      features: [
        'Diabetic retinopathy management',
        'Retinal detachment repairs',
        'Vitreoretinal micro-surgeries',
        'Macular health tracking panels'
      ],
      description: 'Comprehensive treatment for retinal and vitreous disorders, including diabetic retinopathy and retinal detachment.'
    },
    {
      id: 'uvea',
      name: 'Uvea Inflammation Clinic',
      image: uvea,
      features: [
        'Ocular inflammation diagnosis',
        'Immunosuppressive treatment tracks',
        'Complication prevention checkups',
        'Systemic association evaluations'
      ],
      description: 'Diagnosis and management of inflammation in the uveal tract to prevent complications that can affect vision.'
    },
    {
      id: 'cornea',
      name: 'Cornea & External Disease',
      image: cornea,
      features: [
        'Corneal transplant procedures',
        'Infection & injury therapeutics',
        'Advanced topographer diagnostic grids',
        'Dry eye specialty treatments'
      ],
      description: 'Expert care for corneal diseases, infections, and injuries – including corneal transplants and advanced therapeutic techniques.'
    },
    {
      id: 'diabetic-retinopathy',
      name: 'Diabetic Retinopathy Track',
      image: diabetic,
      features: [
        'Early micro-aneurysm detection',
        'Targeted retinal laser therapies',
        'Anti-VEGF intraocular injections',
        'Continuous retinal vascular tracking'
      ],
      description: 'Early detection, laser treatments, and injections to manage diabetes-related damage to the retina.'
    },
    {
      id: 'pediatric',
      name: 'Pediatric Ophthalmology',
      image: pediatric,
      features: [
        'Lazy eye (Amblyopia) treatment plans',
        'Squint correction optimization',
        'Refractive error management paths',
        'Congenital tracking checkups'
      ],
      description: 'Dedicated eye care for children, covering issues like lazy eye, squint, refractive errors, and congenital eye disorders.'
    },
    {
      id: 'low-vision',
      name: 'Low Vision Rehabilitation',
      image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=600&auto=format&fit=crop',
      features: [
        'Permanent vision loss management',
        'Optical assistive device adaptation',
        'Daily function support counseling',
        'Environmental visibility upgrades'
      ],
      description: 'Rehabilitation and assistive solutions for patients with permanent vision loss to improve daily functioning and quality of life.'
    },
    {
      id: 'trauma',
      name: 'Trauma & Emergency Care',
      image: emergency,
      features: [
        'Accidental injury reconstruction',
        'Acute structural repair procedures',
        'Emergency vision preservation tracks',
        'Post-trauma aesthetic corrections'
      ],
      description: 'Emergency and reconstructive care for eye injuries caused by accidents or trauma, ensuring timely restoration of vision and structure.'
    },
    {
      id: 'lasik',
      name: 'LASIK & ICL Surgery',
      image: lasik,
      features: [
        'Advanced laser vision corrections',
        'Implantable contact lenses (ICL)',
        'Spectacle-free lifestyle planning',
        'Custom corneal wave tracking'
      ],
      description: 'Experience freedom from glasses with advanced laser vision correction and implantable contact lenses tailored to your eyes.'
    },
    {
      id: 'oculoplasty',
      name: 'Oculoplasty & Squint Surgery',
      image: oculoplasty,
      features: [
        'Eyelid & tear duct interventions',
        'Orbital structural adjustments',
        'Ocular cosmetic enhancements',
        'Muscle balance alignment plans'
      ],
      description: 'Specialized care for Squint eyelid, tear duct, and orbital disorders, along with cosmetic procedures to enhance eye appearance.'
    },
    {
      id: 'contact-lens',
      name: 'Specialty Contact Lenses',
      image: lenses,
      features: [
        'Precision multi-focal lens custom sizing',
        'Therapeutic lens allocations',
        'Keratoconus scleral lens fittings',
        'Hygiene and adaptation tracking'
      ],
      description: 'Fitting and guidance for a wide range of contact lenses – from cosmetic to therapeutic – suited to your specific eye needs.'
    },
    {
      id: 'diagnostics',
      name: 'Specialty Diagnostics',
      image: advancedtech,
      features: [
        'High-speed optical coherence topography',
        'Digital fundus photography displays',
        'Automated visual field plotting tests',
        'Ultra-precise structural imaging tools'
      ],
      description: 'State-of-the-art diagnostic tools and imaging systems for accurate detection and monitoring of various eye diseases.'
    },
    {
      id: 'comprehensive',
      name: 'Comprehensive Ophthalmology',
      image: operation,
      features: [
        'Holistic preventive eye check-ups',
        'Refractive prescription updates',
        'Common infection control therapies',
        'Multi-age routine screening paths'
      ],
      description: 'Routine eye check-ups, preventive care, and holistic management of common eye conditions for all age groups.'
    },
    {
      id: 'anterior-segment',
      name: 'Anterior Segment Disorders',
      image: anterior,
      features: [
        'Front-third ocular structure checks',
        'Iris and crystalline lens tracking',
        'Advanced micro-structural treatments',
        'Pre-and-post operative diagnostics'
      ],
      description: 'Comprehensive management of conditions affecting the front third of the eye, including the cornea, iris, and lens.'
    }
  ];

  const guidelines = [
    "Many patients can schedule directly, but certain insurance plans may require a referral. Please check with your provider or contact our front desk for clarification.",
    "If you wear contact lenses, please switch to regular eyeglasses at least 3-7 days prior to a corrective surgery consultation (like LASIK).",
    "Bring all your current prescription glasses, contact lens cases, or old lens prescriptions to your evaluation.",
    "Expect your pupils to be dilated during a comprehensive retina evaluation. This causes temporary blurred vision, so please arrange for someone to drive you home.",
    "Carry your complete medical history records, especially details regarding Diabetes, Hypertension, or prior surgeries.",
    "Inform our clinical staff immediately if you are currently using blood thinners or specialized eye drops."
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Page Header */}
      <div className="bg-medical-dark text-white py-16 px-4 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)' }}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-emerald-accent text-xs font-bold uppercase tracking-widest bg-emerald-accent/15 px-3 py-1.5 rounded-full">
            Treatment & Diagnosis
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 leading-tight">Our Ophthalmic Treatments</h1>
          <p className="text-sm md:text-base text-slate-300 mt-4 leading-relaxed font-light">
            A Center of Excellence in Advanced Eye Care for Every Stage of Life. Invest in targeted clinical treatments to keep your vision pristine.
          </p>
        </div>
      </div>

      {/* 2. Treatments Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentServices.map((treatment) => (
              <div 
                key={treatment.id}
                className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Section */}
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
                    <p className="text-[11px] text-slate-400 font-light leading-relaxed mb-5">
                      {treatment.description}
                    </p>
                    
                    <div className="border-t border-slate-50 pt-4 mb-6">
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

                  <div className="border-t border-slate-50 pt-4 mt-2">
                    <Link 
                      to="/appointment"
                      className="w-full text-center bg-emerald-accent hover:bg-emerald-dark text-white font-extrabold py-3 rounded-xl text-xs transition-colors shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <FaCalendarCheck size={12} /> Book Consultation
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Guidelines & Preparation Tips */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <div className="bg-emerald-accent/10 text-emerald-accent p-3 rounded-2xl">
              <FaInfoCircle size={22} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">Pre-Treatment Preparation Guidelines</h2>
              <p className="text-xs text-slate-500 font-light">Important instructions to ensure an efficient and precise clinical evaluation.</p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8">
            <ul className="space-y-4 text-xs text-slate-600 font-light leading-relaxed">
              {guidelines.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-accent text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}