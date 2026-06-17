import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

export default function Departments() {
  // Direct embedded Eye Care dataset transformation frame
  const EYE_DEPARTMENTS = [
    {
      id: 'cataract',
      name: 'Cataract Services',
      icon: 'FaEye',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=600&auto=format&fit=crop',
      detailedDescription: 'Our Cataract Department specializes in advanced clear lens restoration using high-precision computer-guided layouts. We offer stitch-less micro-incision cataract surgery (MICS) alongside state-of-the-art AI planning for custom premium intraocular lens (IOL) mapping.',
      services: [
        'Micro-Incision Cataract Surgery (MICS)',
        'AI-guided Premium Intraocular Lens (IOL) Custom Selection',
        'Phacoemulsification Systems with Navigational Guidance',
        'Post-operative Visual Activity Tracking Panels'
      ]
    },
    {
      id: 'glaucoma',
      name: 'Glaucoma Management',
      icon: 'FaEyeSlash',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=600&auto=format&fit=crop',
      detailedDescription: 'Known as the silent progressive vision constraint, glaucoma requires detailed early tracking. Our wing uses advanced digital metrics to monitor changes in intraocular pressure and map optic nerve layer health for proactive vision protection.',
      services: [
        'Automated Visual Field Plotting Analysis (Perimetry)',
        'High-Resolution Optical Coherence Tomography (OCT)',
        'Targeted Laser Trabeculoplasty Intervention Paths',
        'Continuous Intraocular Pressure Management Matrices'
      ]
    },
    {
      id: 'retina',
      name: 'Retina & Vitreous Wing',
      icon: 'FaProcedures',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop',
      detailedDescription: 'Specialized medical and surgical management for all posterior segment eye conditions. This department handles complex retinal detachments, age-related macular changes, and microvascular anomalies inside a modern sterile setup.',
      services: [
        'Vitreoretinal Micro-Surgical Management Layouts',
        'Digital Fundus Fluorescein Angiography Panels',
        'Intraocular Anti-VEGF Therapeutic Injections',
        'Retinal Detachment Emergency Procedures'
      ]
    },
    {
      id: 'refractive-lasik',
      name: 'LASIK & Refractive Studio',
      icon: 'FaGlasses',
      image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=600&auto=format&fit=crop',
      detailedDescription: 'Experience complete freedom from glasses and contact lenses. Our refractive suite coordinates wavefront-guided, completely blade-free custom laser transformations configured precisely to the curvature rules of your eye.',
      services: [
        'Custom Blade-Free Wavefront LASIK Correction',
        'Implantable Contact Lens (ICL) Alternative Sizing',
        'Precision Corneal Topography Structural Diagnostics',
        'Refractive Error Mapping Panels for Young Adults'
      ]
    },
    {
      id: 'pediatric',
      name: 'Pediatric Ophthalmology',
      icon: 'FaChild',
      image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=600&auto=format&fit=crop',
      detailedDescription: 'Dedicated pediatric environments designed specifically for children. We address childhood squint corrections, structural layout developments, refractive balances, and lazy eye anomalies using child-friendly care techniques.',
      services: [
        'Amblyopia (Lazy Eye) Custom Muscle Calibration Training',
        'Pediatric Refractive Prescription Evaluation Tracks',
        'Surgical Squint Strabismus Muscle Alignments',
        'Congenital Eye Disorder Diagnostic Imaging Screenings'
      ]
    },
    {
      id: 'cornea',
      name: 'Cornea & Ocular Surface Center',
      icon: 'FaStethoscope',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop',
      detailedDescription: 'Comprehensive monitoring and advanced therapeutic tracking for structural corneal disorders, external trauma damage, tracking infections, and specialized transplant protocols.',
      services: [
        'Full & Partial Thickness Corneal Transplantation (Keratoplasty)',
        'Advanced Corneal Collagen Cross-Linking (C3R) for Keratoconus',
        'Severe Dry Eye Intensive Ocular Surface Reconstruction',
        'Pterygium Excision with Automated Auto-Graft Scaling'
      ]
    }
  ];

  const [activeDept, setActiveDept] = useState(EYE_DEPARTMENTS[0].id);
  const location = useLocation();

  // Scroll to hash element if target id exists in URL
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        setActiveDept(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  const handleJump = (id) => {
    setActiveDept(id);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Page Header */}
      <div className="bg-medical-dark text-white py-16 px-4 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)' }}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-emerald-accent text-xs font-bold uppercase tracking-widest bg-emerald-accent/15 px-3 py-1.5 rounded-full">
            Clinical Ophthalmic Units
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 leading-tight">Our Eye Care Departments</h1>
          <p className="text-sm md:text-base text-slate-350 mt-4 leading-relaxed font-light">
            Explore our specialized vision and microsurgical divisions. Equipped with top-tier eye diagnostic arrays and staffed by board-certified ophthalmologists.
          </p>
        </div>
      </div>

      {/* 2. Split Screen content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left Column Sticky Menu */}
            <aside className="w-full lg:w-80 lg:sticky lg:top-24 bg-white border border-slate-100 rounded-3xl p-5 shadow-sm max-h-[80vh] overflow-y-auto hidden lg:block">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 px-2">Eye Specialties</h3>
              <div className="flex flex-col gap-1">
                {EYE_DEPARTMENTS.map((dept) => {
                  const Icon = FaIcons[dept.icon] || FaIcons.FaRegHospital;
                  const isActive = activeDept === dept.id;
                  return (
                    <button
                      key={dept.id}
                      onClick={() => handleJump(dept.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-emerald-accent text-white shadow-md shadow-emerald-accent/15 scale-[1.02]'
                          : 'hover:bg-slate-50 text-slate-600 hover:text-slate-800'
                      }`}
                    >
                      <Icon size={14} className="shrink-0" />
                      <span>{dept.name}</span>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Right Column Detailed Content scroll view */}
            <div className="flex-1 space-y-12 w-full">
              {EYE_DEPARTMENTS.map((dept) => {
                const Icon = FaIcons[dept.icon] || FaIcons.FaRegHospital;
                return (
                  <div 
                    key={dept.id}
                    id={dept.id}
                    className="bg-white rounded-3xl border border-slate-100 p-6 md:p-10 shadow-sm hover:shadow-md transition-all scroll-mt-24"
                  >
                    {/* Header Details */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-accent/10 text-emerald-accent flex items-center justify-center">
                          <Icon size={22} />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-slate-800">{dept.name}</h2>
                          <span className="text-[10px] text-slate-450 uppercase font-semibold tracking-wider">Ophthalmic Division</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2.5">
                        <Link
                          to={`/doctors?dept=${encodeURIComponent(dept.name)}`}
                          className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold px-4 py-2 rounded-xl text-xs transition-colors"
                        >
                          Find Specialists
                        </Link>
                        <Link
                          to={`/appointment?dept=${encodeURIComponent(dept.name)}`}
                          className="bg-emerald-accent hover:bg-emerald-dark text-white font-extrabold px-4 py-2 rounded-xl text-xs transition-colors shadow-sm"
                        >
                          Consult Now
                        </Link>
                      </div>
                    </div>

                    {/* Content Image and Copy */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                      
                      {/* Department image frame template */}
                      <div className="rounded-2xl overflow-hidden shadow-sm max-h-64 md:max-h-none">
                        <img 
                          src={dept.image} 
                          alt={dept.name} 
                          className="w-full h-56 object-cover"
                          loading="lazy"
                        />
                      </div>

                      {/* Detail description */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Overview</h4>
                        <p className="text-xs text-slate-500 font-light leading-relaxed mb-6">
                          {dept.detailedDescription}
                        </p>

                        {/* List of medical eye care services loop template */}
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3.5">Specialized Medical Services:</h4>
                        <ul className="space-y-2.5 text-xs text-slate-500">
                          {dept.services.map((srv, idx) => (
                            <li key={idx} className="flex items-start gap-2 leading-tight">
                              <FaIcons.FaCheck className="text-emerald-accent mt-0.5 shrink-0" size={10} />
                              <span>{srv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}