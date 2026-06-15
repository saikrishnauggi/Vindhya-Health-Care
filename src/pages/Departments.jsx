import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { DEPARTMENTS } from '../data/mockData';

export default function Departments() {
  const [activeDept, setActiveDept] = useState(DEPARTMENTS[0].id);
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
            Clinical Units
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 leading-tight">Our Medical Departments</h1>
          <p className="text-sm md:text-base text-slate-350 mt-4 leading-relaxed font-light">
            Explore our 14 medical and surgical divisions. Equipped with top-tier technology and staffed by dedicated specialists.
          </p>
        </div>
      </div>

      {/* 2. Split Screen content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left Column Sticky Menu (14 departments) */}
            <aside className="w-full lg:w-80 lg:sticky lg:top-24 bg-white border border-slate-100 rounded-3xl p-5 shadow-sm max-h-[80vh] overflow-y-auto hidden lg:block">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 px-2">Departments List</h3>
              <div className="flex flex-col gap-1">
                {DEPARTMENTS.map((dept) => {
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
              {DEPARTMENTS.map((dept) => {
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
                          <span className="text-[10px] text-slate-450 uppercase font-semibold tracking-wider">Clinical Division</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2.5">
                        <Link
                          to={`/doctors?dept=${encodeURIComponent(dept.name)}`}
                          className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold px-4 py-2 rounded-xl text-xs transition-colors"
                        >
                          Find Doctors
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
                      
                      {/* Department image */}
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

                        {/* List of medical services */}
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
