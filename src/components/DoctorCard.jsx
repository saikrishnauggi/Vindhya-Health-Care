import { Link } from 'react-router-dom';
import { FaGraduationCap, FaClock, FaCheckCircle, FaCalendarCheck } from 'react-icons/fa';

export default function DoctorCard({ id, name, photo, qualification, departmentName, specialization, experience, timings }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      
      {/* 1. Header image & badges */}
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
        <img 
          src={photo} 
          alt={name} 
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Experience badge */}
        <div className="absolute top-4 right-4 bg-emerald-accent/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg shadow-sm">
          {experience} Exp
        </div>
        {/* Department tag */}
        <div className="absolute bottom-4 left-4 bg-medical-dark/95 backdrop-blur-sm text-white text-[10px] font-extrabold px-3 py-1.5 rounded-lg uppercase tracking-wider">
          {departmentName}
        </div>
      </div>

      {/* 2. Text body details */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          {/* Doctor Name */}
          <h3 className="text-base font-bold text-slate-800 flex items-center gap-1.5 mb-1 group-hover:text-emerald-accent transition-colors">
            {name} <FaCheckCircle className="text-emerald-accent shrink-0" size={13} />
          </h3>
          
          {/* Specialty */}
          <p className="text-xs text-medical-sky font-semibold mb-4">{specialization}</p>

          {/* Details list */}
          <div className="space-y-2 text-xs text-slate-500">
            <p className="flex items-start gap-2">
              <FaGraduationCap className="text-slate-400 mt-0.5 shrink-0" size={14} />
              <span>{qualification}</span>
            </p>
            <p className="flex items-start gap-2">
              <FaClock className="text-slate-400 mt-0.5 shrink-0" size={13} />
              <span>{timings}</span>
            </p>
          </div>
        </div>

        {/* 3. Action Buttons */}
        <div className="mt-6 pt-5 border-t border-slate-50 flex gap-2">
          {/* View Profile or Details (let's direct user to search query or details) */}
          <Link 
            to={`/doctors?search=${encodeURIComponent(name)}`}
            className="flex-1 text-center bg-slate-50 text-slate-700 hover:bg-slate-100 font-bold py-2.5 rounded-xl text-xs transition-colors"
          >
            View Profile
          </Link>
          
          {/* Direct Book Appointment */}
          <Link 
            to={`/appointment?doctor=${encodeURIComponent(name)}&dept=${encodeURIComponent(departmentName)}`}
            className="flex-1 text-center bg-emerald-accent text-white hover:bg-emerald-dark font-extrabold py-2.5 rounded-xl text-xs transition-all shadow-sm shadow-emerald-accent/10 flex items-center justify-center gap-1.5"
          >
            <FaCalendarCheck size={12} /> Book Now
          </Link>
        </div>
      </div>

    </div>
  );
}
