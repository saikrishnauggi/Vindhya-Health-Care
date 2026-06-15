import { Link } from 'react-router-dom';
import { FaCheck, FaHospitalSymbol } from 'react-icons/fa';

export default function HealthPackageCard({ id, title, price, tagline, description, benefits, testsCount, frequency }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative group">
      
      {/* Decorative top strip */}
      <div className="h-2 w-full bg-emerald-accent"></div>
      
      <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
        
        <div>
          {/* Header & Pricing */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-[10px] text-emerald-accent font-bold uppercase tracking-widest bg-emerald-accent/10 px-2.5 py-1 rounded-full">
                {testsCount} Tests Included
              </span>
              <h3 className="text-lg font-bold text-slate-800 mt-2.5 leading-snug">
                {title}
              </h3>
            </div>
            <div className="text-right">
              <span className="block text-xl font-extrabold text-medical-dark leading-none">
                {price}
              </span>
              <span className="text-[9px] text-slate-400">Inc. Taxes</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 italic mb-4">{tagline}</p>
          <p className="text-xs text-slate-500 font-light leading-relaxed mb-6 border-b border-slate-100 pb-4">
            {description}
          </p>

          {/* Test checklist benefits */}
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3.5">
            Key Screening Areas:
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-500 mb-6">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-tight">
                <FaCheck className="text-emerald-accent mt-0.5 shrink-0" size={10} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer actions */}
        <div className="border-t border-slate-100 pt-5 mt-4 space-y-3">
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>Frequency: {frequency}</span>
          </div>

          <Link 
            to={`/appointment?package=${encodeURIComponent(title)}`}
            className="block w-full text-center bg-medical-dark hover:bg-emerald-accent text-white font-extrabold py-3 rounded-xl text-xs transition-colors shadow-sm flex items-center justify-center gap-2 group-hover:bg-emerald-accent"
          >
            <FaHospitalSymbol size={12} /> Book Package Now
          </Link>
        </div>

      </div>

    </div>
  );
}
