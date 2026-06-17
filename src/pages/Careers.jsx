import { useState } from 'react';
import { FaMapMarkerAlt, FaBriefcase, FaTimes, FaEnvelope, FaRegCopy, FaCheck } from 'react-icons/fa';
import { CAREERS } from '../data/mockData';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [copied, setCopied] = useState(false);

  const closeModal = () => {
    setSelectedJob(null);
    setCopied(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('care@vindhyahealthcare.in');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-medical-dark text-white py-16 px-4 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)' }}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-emerald-accent text-xs font-bold uppercase tracking-widest bg-emerald-accent/15 px-3 py-1.5 rounded-full">
            Join Our Team
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 leading-tight">Careers at Vindhya</h1>
          <p className="text-sm md:text-base text-slate-350 mt-4 leading-relaxed font-light">
            Build a rewarding career in healthcare. We offer clean working environments, research programs, and competitive benefits for medical practitioners and nurse administrators.
          </p>
        </div>
      </div>

      {/* Vacancy cards list */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          
          <div className="text-center mb-12">
            <h2 className="text-xl font-bold text-slate-800">Current Open Positions</h2>
            <p className="text-xs text-slate-500 font-light mt-1">Review the open spots below and click to submit your profile.</p>
          </div>

          <div className="space-y-6">
            {CAREERS.map((job) => (
              <div 
                key={job.id}
                className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              >
                <div>
                  <span className="text-[10px] text-emerald-accent bg-emerald-accent/10 font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {job.department}
                  </span>
                  <h3 className="text-base font-bold text-slate-800 mt-3 mb-2">{job.title}</h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-light">
                    <span className="flex items-center gap-1.5">
                      <FaBriefcase size={12} className="text-slate-400" /> {job.experience} Exp
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaMapMarkerAlt size={12} className="text-slate-400" /> {job.location}
                    </span>
                    <span className="font-semibold text-slate-600">({job.mode})</span>
                  </div>
                  
                  <p className="text-xs text-slate-500 leading-relaxed font-light mt-4 max-w-2xl">
                    {job.description}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="bg-emerald-accent hover:bg-emerald-dark text-white font-extrabold px-6 py-3.5 rounded-xl text-xs shadow-sm transition-colors shrink-0 w-full md:w-auto text-center"
                >
                  Apply For Job
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* EMAIL SUBMISSION POPUP MODAL */}
      {selectedJob && (
        <div 
          onClick={closeModal}
          className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto cursor-zoom-out"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl border border-slate-150 shadow-2xl max-w-md w-full cursor-default p-8 flex flex-col relative text-center"
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 bg-slate-100 p-2.5 rounded-full"
              aria-label="Close message"
            >
              <FaTimes size={14} />
            </button>

            {/* Icon Banner */}
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-5">
              <FaEnvelope size={24} />
            </div>

            <span className="text-[10px] text-emerald-accent bg-emerald-accent/10 font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mx-auto mb-2">
              How to Apply
            </span>
            
            <h3 className="text-lg font-bold text-slate-800 mb-1">Submit Application via Email</h3>
            <p className="text-xs text-slate-400 mb-6">{selectedJob.title} • {selectedJob.department}</p>
            
            <p className="text-xs text-slate-650 leading-relaxed font-light mb-6">
              Please send your updated resume, total experience details, and cover note directly to our official HR mailbox.
            </p>

            {/* Interactive Email Copy Section */}
            <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl p-3 mb-6">
              <span className="text-xs font-semibold text-slate-700 select-all">care@vindhyahealthcare.in</span>
              <button 
                onClick={handleCopyEmail}
                className="text-slate-400 hover:text-slate-600 p-1.5 transition-colors"
                title="Copy email address"
              >
                {copied ? <FaCheck className="text-emerald-500" size={14} /> : <FaRegCopy size={14} />}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:care@vindhyahealthcare.in?subject=Application for ${encodeURIComponent(selectedJob.title)} - ${encodeURIComponent(selectedJob.department)}`}
                className="bg-emerald-accent hover:bg-emerald-dark text-white font-extrabold py-3 rounded-xl text-xs shadow-md transition-colors block"
              >
                Open Mail App
              </a>
              <button
                onClick={closeModal}
                className="bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold py-3 rounded-xl text-xs transition-colors"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}