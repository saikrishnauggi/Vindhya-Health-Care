import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaSearch, FaFilter, FaRedo, FaUserMd } from 'react-icons/fa';
import DoctorCard from '../components/DoctorCard';
import { DOCTORS, DEPARTMENTS } from '../data/mockData';

export default function Doctors() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // State for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  // Extract specializations from data
  const specializations = Array.from(
    new Set(DOCTORS.map((doc) => doc.specialization))
  );

  // Parse URL query parameter inputs on mount / update
  useEffect(() => {
    const searchParam = searchParams.get('search');
    const deptParam = searchParams.get('dept');
    
    if (searchParam) {
      setQuery(searchParam);
    }
    if (deptParam) {
      // Find matching department ID or name
      const foundDept = DEPARTMENTS.find(
        d => d.name.toLowerCase().includes(deptParam.toLowerCase()) || d.id === deptParam.toLowerCase()
      );
      if (foundDept) {
        setSelectedDept(foundDept.name);
      }
    }
  }, [searchParams]);

  // Handle reset filters
  const handleReset = () => {
    setSearchQuery('');
    setSelectedDept('');
    setSelectedSpecialty('');
    setSearchParams({});
  };

  // Filtered doctors list
  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doc.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDept = selectedDept ? doc.departmentName === selectedDept : true;
    const matchesSpecialty = selectedSpecialty ? doc.specialization === selectedSpecialty : true;

    return matchesSearch && matchesDept && matchesSpecialty;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Page Header */}
      <div className="bg-medical-dark text-white py-16 px-4 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)' }}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-emerald-accent text-xs font-bold uppercase tracking-widest bg-emerald-accent/15 px-3 py-1.5 rounded-full">
            Ophthalmic Panel
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 leading-tight">Meet Our Eye Specialists</h1>
          <p className="text-sm md:text-base text-slate-350 mt-4 leading-relaxed font-light">
            Search and connect with experienced ophthalmologists, vitreo-retinal experts, corneal surgeons, and certified optometrists at Vindhya Eye Care.
          </p>
        </div>
      </div>

      {/* 2. Search & Filter Bar */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
            
            {/* Search Input Box */}
            <div className="relative flex-1 max-w-lg">
              <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
                <FaSearch size={14} />
              </span>
              <input
                type="text"
                placeholder="Search by name, specialization (e.g., LASIK, Cataract)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-accent focus:ring-2 focus:ring-emerald-accent/10 text-sm placeholder-slate-400 bg-slate-50"
              />
            </div>

            {/* Selector Filters Grid */}
            <div className="flex flex-wrap items-center gap-3.5">
              
              {/* Department Dropdown */}
              <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700">
                <FaFilter className="text-emerald-accent mr-2" size={10} />
                <select
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  className="bg-transparent focus:outline-none font-bold pr-4 appearance-none cursor-pointer"
                >
                  <option value="">All Eye Departments</option>
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept.id} value={dept.name}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Specialization Dropdown */}
              <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700">
                <FaFilter className="text-emerald-accent mr-2" size={10} />
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="bg-transparent focus:outline-none font-bold pr-4 appearance-none cursor-pointer"
                >
                  <option value="">All Clinical Specialities</option>
                  {specializations.map((spec, i) => (
                    <option key={i} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
              </div>

              {/* Reset Button */}
              {(searchQuery || selectedDept || selectedSpecialty) && (
                <button
                  onClick={handleReset}
                  className="bg-red-50 hover:bg-red-100 text-red-600 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors border border-red-100"
                >
                  <FaRedo size={10} /> Reset Filters
                </button>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* 3. Doctors List Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="mb-6 flex justify-between items-center text-xs text-slate-500">
            <span>Showing {filteredDoctors.length} Eye Care Professionals</span>
            {filteredDoctors.length === 0 && <span>No matching specialists found.</span>}
          </div>

          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredDoctors.map((doc) => (
                <DoctorCard key={doc.id} {...doc} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-16 text-center max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-6">
                <FaUserMd size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">No Specialists Found</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light mb-6">
                We couldn't find an eye care professional matching your criteria. Try adjusting your query or switching options within the eye departments list.
              </p>
              <button
                onClick={handleReset}
                className="bg-emerald-accent hover:bg-emerald-dark text-white font-extrabold px-6 py-3 rounded-xl text-xs shadow-md"
              >
                Show All Specialists
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}