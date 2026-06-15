import HealthPackageCard from '../components/HealthPackageCard';
import { HEALTH_PACKAGES } from '../data/mockData';
import { FaHeartbeat, FaInfoCircle } from 'react-icons/fa';

export default function HealthPackages() {
  const guidelines = [
    "10 - 12 hours of overnight fasting is mandatory before blood sampling (no tea/coffee/juices, water is allowed).",
    "Avoid alcohol, high-fat meals, and strenuous physical training at least 24 hours prior to screening.",
    "For male cardiac treadmill tests (TMT), please shave chest hair before arrival.",
    "For abdominal ultrasound scans, please arrive with a full bladder (drink water and hold urine).",
    "Carry previous medical records, prescriptions, and wear comfortable clothing and shoes.",
    "If diabetic, hypertensive, or cardiac patient, inform the receptionist during sample collection."
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Page Header */}
      <div className="bg-medical-dark text-white py-16 px-4 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)' }}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-emerald-accent text-xs font-bold uppercase tracking-widest bg-emerald-accent/15 px-3 py-1.5 rounded-full">
            Preventative Wellness
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 leading-tight">Health Screening Packages</h1>
          <p className="text-sm md:text-base text-slate-350 mt-4 leading-relaxed font-light">
            Invest in preventative diagnostics. Compare our specialized checkups designed to assess vital organs and identify potential health complications early.
          </p>
        </div>
      </div>

      {/* 2. Packages Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HEALTH_PACKAGES.map((pkg) => (
              <HealthPackageCard key={pkg.id} {...pkg} />
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
              <h2 className="text-xl font-bold text-slate-800">Pre-Checkup Preparation Guidelines</h2>
              <p className="text-xs text-slate-500 font-light">Important instructions to ensure accuracy of your test reports.</p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8">
            <ul className="space-y-4 text-xs text-slate-650 font-light leading-relaxed">
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
