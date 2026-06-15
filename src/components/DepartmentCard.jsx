import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function DepartmentCard({ id, name, icon, description }) {
  // Dynamically resolve Fa icons based on key names in database
  const IconComponent = FaIcons[icon] || FaIcons.FaRegHospital;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Dynamic Icon Container */}
        <div className="w-14 h-14 rounded-xl bg-medical-sky/10 text-medical-sky flex items-center justify-center mb-6 group-hover:bg-emerald-accent group-hover:text-white transition-colors duration-300">
          <IconComponent size={26} />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-medical-dark mb-3 group-hover:text-emerald-accent transition-colors">
          {name}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-500 leading-relaxed mb-6 font-light">
          {description}
        </p>
      </div>

      {/* Footer CTA */}
      <Link 
        to={`/departments#${id}`} 
        className="inline-flex items-center gap-1.5 text-xs font-bold text-medical-sky group-hover:text-emerald-accent transition-colors"
      >
        View Specialities <FaIcons.FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
