import { useState } from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaFileUpload, FaBriefcase, FaTimes, FaSpinner, FaCheckCircle } from 'react-icons/fa';
import { CAREERS } from '../data/mockData';
import { apiService } from '../services/api';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  
  // Application Form States
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  
  // File Upload states
  const [fileName, setFileName] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  // Submission States
  const [isLoading, setIsLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Simulate file upload progress
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Limit to PDF or Doc
    if (!file.name.endsWith('.pdf') && !file.name.endsWith('.docx') && !file.name.endsWith('.doc')) {
      alert('Please upload PDF or Word documents only.');
      return;
    }

    setFileName(file.name);
    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 25;
      });
    }, 150);
  };

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !email || !fileName) {
      setErrorMsg('Please complete all required fields and upload your resume.');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');
    try {
      const response = await apiService.applyForJob({
        jobId: selectedJob.id,
        jobTitle: selectedJob.title,
        fullName,
        email,
        phone,
        fileName,
        coverLetter
      });
      if (response.success) {
        setSuccessResponse(response.data);
      }
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setSelectedJob(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setCoverLetter('');
    setFileName('');
    setUploadProgress(0);
    setIsUploading(false);
    setSuccessResponse(null);
    setErrorMsg('');
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

      {/* APPLICATION FORM DRAWER / MODAL */}
      {selectedJob && (
        <div 
          onClick={closeModal}
          className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto cursor-zoom-out"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl border border-slate-150 shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto cursor-default p-8 flex flex-col relative"
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 bg-slate-100 p-2.5 rounded-full"
              aria-label="Close form"
            >
              <FaTimes size={14} />
            </button>

            {successResponse ? (
              /* SUCCESS SCREEN */
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle size={28} />
                </div>
                <h3 className="text-lg font-bold text-slate-800">Application Submitted!</h3>
                <p className="text-xs text-slate-500 mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you, {fullName}. Your application for <strong>{selectedJob.title}</strong> has been successfully received. 
                  Reference ID: <strong className="text-emerald-accent">{successResponse.applicationId}</strong>. 
                  Our HR team will audit your resume and connect with you shortly.
                </p>
                <button
                  onClick={closeModal}
                  className="mt-8 bg-emerald-accent hover:bg-emerald-dark text-white font-extrabold px-6 py-3 rounded-xl text-xs shadow-md"
                >
                  Return to Listings
                </button>
              </div>
            ) : (
              /* APPLICATION FORM */
              <form onSubmit={handleApplySubmit} className="space-y-5">
                <div>
                  <span className="text-[10px] text-emerald-accent bg-emerald-accent/10 font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Applying For:
                  </span>
                  <h3 className="text-base font-bold text-slate-800 mt-2">{selectedJob.title}</h3>
                  <span className="text-[10px] text-slate-400">{selectedJob.department} • {selectedJob.location}</span>
                </div>

                {errorMsg && (
                  <div className="bg-red-50 border border-red-100 text-red-600 rounded-xl p-3.5 text-xs font-semibold">
                    {errorMsg}
                  </div>
                )}

                <div className="space-y-4">
                  {/* Full name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-605 mb-2">Full Name*</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shruti Sen"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-slate-50 rounded-xl text-xs focus:outline-none focus:border-emerald-accent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-605 mb-2">Email Address*</label>
                      <input
                        type="email"
                        required
                        placeholder="shruti@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 bg-slate-50 rounded-xl text-xs focus:outline-none focus:border-emerald-accent"
                      />
                    </div>
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-605 mb-2">Phone Number*</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 bg-slate-50 rounded-xl text-xs focus:outline-none focus:border-emerald-accent"
                      />
                    </div>
                  </div>

                  {/* Cover letter */}
                  <div>
                    <label className="block text-xs font-bold text-slate-605 mb-2">Brief Cover Note (Optional)</label>
                    <textarea
                      rows="2.5"
                      placeholder="Mention your key clinical experience or credentials..."
                      value={coverLetter}
                      onChange={(e) => setCoverLetter(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-slate-50 rounded-xl text-xs focus:outline-none focus:border-emerald-accent"
                    ></textarea>
                  </div>

                  {/* Resume Upload Simulator */}
                  <div>
                    <label className="block text-xs font-bold text-slate-605 mb-2">Upload Resume (PDF, DOCX)*</label>
                    
                    <div className="relative border-2 border-dashed border-slate-200 hover:border-emerald-accent/40 rounded-2xl p-5 text-center bg-slate-50 transition-colors">
                      <input
                        type="file"
                        accept=".pdf,.docx,.doc"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        required={!fileName}
                      />
                      
                      <div className="flex flex-col items-center gap-2">
                        <FaFileUpload className="text-slate-400 text-2xl" />
                        <span className="text-[11px] font-bold text-slate-600">
                          {fileName ? fileName : 'Click to browse or drop resume file'}
                        </span>
                        <span className="text-[9px] text-slate-400">PDF, DOCX formats only (Max 5MB)</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    {isUploading && (
                      <div className="mt-3.5 space-y-1.5">
                        <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                          <div 
                            className="bg-emerald-accent h-1.5 rounded-full transition-all duration-150" 
                            style={{ width: `${uploadProgress}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-[9px] text-slate-400">
                          <span>Uploading Resume...</span>
                          <span>{uploadProgress}%</span>
                        </div>
                      </div>
                    )}

                    {!isUploading && fileName && (
                      <div className="mt-3 flex items-center gap-2 text-[10px] text-emerald-accent font-semibold bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100 w-fit">
                        <FaCheckCircle size={10} /> Resume successfully loaded!
                      </div>
                    )}

                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoading || isUploading}
                  className="w-full bg-emerald-accent hover:bg-emerald-dark disabled:bg-emerald-accent/50 text-white font-extrabold py-3 rounded-xl text-xs shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className="animate-spin" /> Verifying File Vitals...
                    </>
                  ) : (
                    'Submit Application Profile'
                  )}
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
