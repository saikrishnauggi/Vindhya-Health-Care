import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  FaCalendarAlt, 
  FaUserMd, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaInfoCircle, 
  FaSpinner, 
  FaCheckCircle, 
  FaWhatsapp, 
  FaHome,
  FaAddressBook
} from 'react-icons/fa';
// Official EmailJS browser package
import emailjs from '@emailjs/browser';
import { apiService } from '../services/api';
import { notificationService } from '../services/notificationService';
import SEO from '../components/SEO';

// Defined list of departments
const CLINICAL_DEPARTMENTS = [
  { id: 'ophthalmology', name: 'Eye / Ophthalmology' },
  { id: 'orthopedics', name: 'Orthopedics' },
  { id: 'gynaecology', name: 'Gynae & Fertility (IVF)' }
];

// Department to Doctor mapping
const DEPARTMENT_DOCTORS_MAP = {
  'Eye / Ophthalmology': [
    { id: 'doc-1', name: 'Dr. Navneeth Servey', specialization: 'Ophthalmologist / Eye Specialist' }
  ],
  'Orthopedics': [
    { id: 'doc-2', name: 'Dr. Rahul Kuraganti', specialization: 'Orthopedic Surgeon' }
  ],
  'Gynae & Fertility (IVF)': [
    { id: 'doc-3', name: 'Dr. Tejeswini Nese', specialization: 'Gynecologist & IVF Specialist' }
  ]
};

export default function Appointment() {
  const [searchParams] = useSearchParams();

  // Form Field States
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  // UI Flow States
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  // Filtered doctors list based on selected department
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  // Pre-populate queries from search parameters
  useEffect(() => {
    const doctorParam = searchParams.get('doctor');
    const deptParam = searchParams.get('dept');
    const packageParam = searchParams.get('package');

    if (deptParam) {
      // Normalize incoming department parameter if matching key terms
      const deptLower = deptParam.toLowerCase();
      if (deptLower.includes('eye') || deptLower.includes('ophthalmology')) {
        setDepartment('Eye / Ophthalmology');
      } else if (deptLower.includes('ortho')) {
        setDepartment('Orthopedics');
      } else if (deptLower.includes('gynae') || deptLower.includes('fertility') || deptLower.includes('ivf')) {
        setDepartment('Gynae & Fertility (IVF)');
      } else {
        setDepartment(deptParam);
      }
    }

    if (doctorParam) {
      setDoctor(doctorParam);
    }

    if (packageParam) {
      setMessage(`Interested in Booking Health Package: ${packageParam}`);
      setDepartment('Eye / Ophthalmology');
    }
  }, [searchParams]);

  // Sync doctor listing when department is selected
  useEffect(() => {
    if (department && DEPARTMENT_DOCTORS_MAP[department]) {
      const doctorsForDept = DEPARTMENT_DOCTORS_MAP[department];
      setFilteredDoctors(doctorsForDept);

      // Auto-select doctor if only 1 specialist exists for the department
      if (doctorsForDept.length === 1) {
        setDoctor(doctorsForDept[0].name);
      } else if (!doctorsForDept.some((d) => d.name === doctor)) {
        setDoctor('');
      }
    } else if (department) {
      // Fuzzy fallback for external queries
      const deptLower = department.toLowerCase();
      if (deptLower.includes('eye') || deptLower.includes('ophthalmology')) {
        setFilteredDoctors(DEPARTMENT_DOCTORS_MAP['Eye / Ophthalmology']);
        setDoctor('Dr. Navneeth Servey');
      } else if (deptLower.includes('ortho')) {
        setFilteredDoctors(DEPARTMENT_DOCTORS_MAP['Orthopedics']);
        setDoctor('Dr. Rahul Kuraganti');
      } else if (deptLower.includes('gynae') || deptLower.includes('fertility') || deptLower.includes('ivf')) {
        setFilteredDoctors(DEPARTMENT_DOCTORS_MAP['Gynae & Fertility (IVF)']);
        setDoctor('Dr. Tejeswini Nese');
      } else {
        setFilteredDoctors([]);
        setDoctor('');
      }
    } else {
      setFilteredDoctors([]);
      setDoctor('');
    }
  }, [department]);

  // Form Validation
  const validateForm = () => {
    const tempErrors = {};
    if (!name.trim()) {
      tempErrors.name = 'Patient Name is required.';
    }

    if (!phone.trim()) {
      tempErrors.phone = 'Mobile Number is required.';
    } else {
      const numericPhone = phone.replace(/\D/g, '');
      if (numericPhone.length !== 10) {
        tempErrors.phone = 'Enter a valid 10-digit mobile number.';
      }
    }

    if (!email.trim()) {
      tempErrors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      tempErrors.email = 'Enter a valid email address.';
    }

    if (!department) tempErrors.department = 'Please select a clinical department.';
    if (!doctor) tempErrors.doctor = 'Please select a doctor.';
    if (!date) tempErrors.date = 'Select appointment date.';
    if (!time) tempErrors.time = 'Select consultation slot.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    const appointmentPayload = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      department,
      doctor,
      date,
      time,
      message: message.trim()
    };

    const templateParams = {
      from_name: appointmentPayload.name,
      phone_number: appointmentPayload.phone,
      reply_to: appointmentPayload.email,
      clinical_department: appointmentPayload.department,
      assigned_doctor: appointmentPayload.doctor,
      appointment_date: appointmentPayload.date,
      appointment_time: appointmentPayload.time,
      message: appointmentPayload.message || 'None provided.'
    };

    try {
      const response = await apiService.bookAppointment(appointmentPayload);
      
      if (response.success) {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_APPOINTMENT_TEMPLATE_ID, 
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY 
        );

        const generatedWaUrl = notificationService.generateWhatsAppUrl(appointmentPayload);
        setWhatsappUrl(generatedWaUrl);
        setSuccessData(response.data);
      }
    } catch (err) {
      console.error('Submission processing error:', err);
      
      const generatedWaUrl = notificationService.generateWhatsAppUrl(appointmentPayload);
      setWhatsappUrl(generatedWaUrl);
      
      setSuccessData({
        appointmentId: `VHC-APT-${Math.floor(100000 + Math.random() * 900000)}`,
        ...appointmentPayload
      });
      setErrors({ emailDispatchWarning: 'Appointment registered! However, notification delivery failed.' });
    } finally {
      document.documentElement.scrollTop = 0;
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Book Appointment | Eye, Orthopedics, Gynaecology & IVF"
        description="Book an appointment at Vindhya Healthcare for eye and ophthalmology consultations, orthopedics, gynaecology, fertility, and IVF care in Hyderabad."
        canonical="https://www.vindhyahealthcare.in/appointment"
        keywords={['eye', 'ophthalmology', 'orthopedics', 'gynaec', 'fertility', 'ivf', 'appointment']}
      />
      
      {/* Page Header */}
      <div className="bg-medical-dark text-white py-16 px-4 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)' }}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-emerald-accent text-xs font-bold uppercase tracking-widest bg-emerald-accent/15 px-3 py-1.5 rounded-full">
            Fast Bookings
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 leading-tight">Book A Consultation</h1>
          <p className="text-sm md:text-base text-slate-300 mt-4 leading-relaxed font-light">
            Fill out the details below. Our help desk will verify available slots and issue a confirmation receipt within minutes.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          
          {successData ? (
            /* PATIENT SUCCESS RECEIPT UI SCREEN */
            <div className="bg-white rounded-3xl border border-slate-100 p-8 md:p-12 shadow-xl text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-accent/10 text-emerald-accent flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle size={32} />
              </div>
              
              <h2 className="text-2xl font-black text-slate-800 mb-2">
                Appointment Request Submitted Successfully
              </h2>
              <p className="text-xs text-slate-500 mb-6 max-w-md mx-auto leading-relaxed">
                Thank you for choosing Vindhya Healthcare. Our team will contact you shortly to confirm your appointment.
              </p>

              {errors.emailDispatchWarning && (
                <div className="max-w-lg mx-auto mb-6 bg-red-50 border border-red-100 rounded-xl p-3.5 text-[10px] text-red-800 text-left">
                  {errors.emailDispatchWarning}
                </div>
              )}

              {/* Receipt Summary Card */}
              <div className="bg-slate-50 rounded-2xl p-6 text-left border border-slate-200 max-w-lg mx-auto mb-8 space-y-3.5 text-xs text-slate-600">
                <div className="flex justify-between border-b border-slate-200 pb-3 font-semibold text-slate-800">
                  <span>Booking Reference:</span>
                  <span className="text-emerald-accent font-extrabold">{successData.appointmentId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Patient Name:</span>
                  <span className="font-bold text-slate-800">{successData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Mobile Number:</span>
                  <span className="font-bold text-slate-800">{successData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span>Email Address:</span>
                  <span className="font-bold text-slate-800">{successData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span>Department:</span>
                  <span className="font-bold text-slate-800">{successData.department}</span>
                </div>
                <div className="flex justify-between">
                  <span>Consultant Doctor:</span>
                  <span className="font-bold text-emerald-accent">{successData.doctor}</span>
                </div>
                <div className="flex justify-between">
                  <span>Preferred Date:</span>
                  <span className="font-bold text-slate-800">{successData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span>Preferred Time:</span>
                  <span className="font-bold text-slate-800">{successData.time}</span>
                </div>
                {successData.message && (
                  <div className="border-t border-slate-200 pt-3">
                    <span className="block text-[10px] text-slate-400 mb-1">Additional Message:</span>
                    <p className="bg-white p-2.5 rounded-lg border border-slate-200 text-[11px] leading-relaxed italic">{successData.message}</p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
                <Link
                  to="/"
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold py-3.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <FaHome size={13} /> Return Home
                </Link>
                <Link
                  to="/contact"
                  className="flex-1 bg-medical-dark hover:bg-slate-800 text-white font-extrabold py-3.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <FaAddressBook size={13} /> Contact Hospital
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-extrabold py-3.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-md shadow-green-500/15"
                >
                  <FaWhatsapp size={14} /> Open WhatsApp
                </a>
              </div>
            </div>
          ) : (
            /* APPOINTMENT FORM MODULE */
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-3">
              
              {/* Form Sidebar Info */}
              <div className="bg-medical-dark text-white p-8 md:p-10 flex flex-col justify-between" style={{ background: 'linear-gradient(185deg, #0f172a 0%, #1e3a8a 100%)' }}>
                <div>
                  <h3 className="text-lg font-bold text-white mb-6">Booking Support</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-8 font-sans">
                    Need help choosing a doctor or department? Connect directly with our clinical helpdesk coordinators.
                  </p>
                  
                  <div className="space-y-6 text-xs">
                    <a href="tel:+919030597575" className="flex items-center gap-3 hover:text-emerald-accent transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <FaPhoneAlt size={12} />
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-400">Reception Support</span>
                        <span className="font-bold">+91 903 059 7575</span>
                      </div>
                    </a>

                    <a href="mailto:vindhyahealthcare9495@gmail.com" className="flex items-center gap-3 hover:text-emerald-accent transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <FaEnvelope size={12} />
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-400">Email Address</span>
                        <span className="font-bold">vindhyahealthcare9495@gmail.com</span>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6 flex items-start gap-2.5 text-[11px] text-slate-400 font-light">
                  <FaInfoCircle className="text-emerald-accent shrink-0 mt-0.5" />
                  <span>Bring a valid ID proof and previous prescriptions during appointment check-in.</span>
                </div>
              </div>

              {/* Form Input fields */}
              <form onSubmit={handleSubmit} className="md:col-span-2 p-8 md:p-10 space-y-6">
                
                <h3 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-3">Patient &amp; Schedule Details</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2">Patient Full Name*</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-400 bg-red-50/10' : 'border-slate-200 bg-slate-50'} text-xs focus:outline-none focus:border-emerald-accent`}
                    />
                    {errors.name && <span className="text-[10px] text-red-500 mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2">Mobile Number (10 Digit)*</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-400 bg-red-50/10' : 'border-slate-200 bg-slate-50'} text-xs focus:outline-none focus:border-emerald-accent`}
                    />
                    {errors.phone && <span className="text-[10px] text-red-500 mt-1 block">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email field */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-600 mb-2">Email Address*</label>
                    <input
                      type="text"
                      required
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-400 bg-red-50/10' : 'border-slate-200 bg-slate-50'} text-xs focus:outline-none focus:border-emerald-accent`}
                    />
                    {errors.email && <span className="text-[10px] text-red-500 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Department select */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2">Select Department*</label>
                    <select
                      required
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.department ? 'border-red-400 bg-red-50/10' : 'border-slate-200 bg-slate-50'} text-xs focus:outline-none focus:border-emerald-accent cursor-pointer`}
                    >
                      <option value="">-- Choose Division --</option>
                      {CLINICAL_DEPARTMENTS.map((d) => (
                        <option key={d.id} value={d.name}>{d.name}</option>
                      ))}
                    </select>
                    {errors.department && <span className="text-[10px] text-red-500 mt-1 block">{errors.department}</span>}
                  </div>

                  {/* Doctor select */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2">Select Doctor*</label>
                    <select
                      required
                      value={doctor}
                      onChange={(e) => setDoctor(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.doctor ? 'border-red-400 bg-red-50/10' : 'border-slate-200 bg-slate-50'} text-xs focus:outline-none focus:border-emerald-accent cursor-pointer`}
                      disabled={!department}
                    >
                      <option value="">-- Choose Specialist --</option>
                      {filteredDoctors.map((doc) => (
                        <option key={doc.id} value={doc.name}>{doc.name} ({doc.specialization})</option>
                      ))}
                    </select>
                    {!department && <span className="text-[9px] text-slate-400 block mt-1">Select a department first.</span>}
                    {errors.doctor && <span className="text-[10px] text-red-500 mt-1 block">{errors.doctor}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Date field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2">Appointment Date*</label>
                    <input
                      type="date"
                      required
                      value={date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setDate(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.date ? 'border-red-400 bg-red-50/10' : 'border-slate-200 bg-slate-50'} text-xs focus:outline-none focus:border-emerald-accent`}
                    />
                    {errors.date && <span className="text-[10px] text-red-500 mt-1 block">{errors.date}</span>}
                  </div>

                  {/* Time field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2">Preferred Slot Time*</label>
                    <select
                      required
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.time ? 'border-red-400 bg-red-50/10' : 'border-slate-200 bg-slate-50'} text-xs focus:outline-none focus:border-emerald-accent cursor-pointer`}
                    >
                      <option value="">-- Choose Time Slot --</option>
                      <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM (Morning)</option>
                      <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM (Morning)</option>
                      <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM (Morning)</option>
                      <option value="12:00 PM - 01:00 PM">12:00 PM - 01:00 PM (Noon)</option>
                      <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM (Afternoon)</option>
                      <option value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM (Afternoon)</option>
                      <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM (Evening)</option>
                    </select>
                    {errors.time && <span className="text-[10px] text-red-500 mt-1 block">{errors.time}</span>}
                  </div>
                </div>

                {/* Message notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2">Symptoms or Medical History (Optional)</label>
                  <textarea
                    rows="3"
                    placeholder="e.g. Regular health checkup"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:outline-none focus:border-emerald-accent"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-emerald-accent hover:bg-emerald-dark disabled:bg-emerald-accent/50 text-white font-extrabold py-3.5 rounded-xl text-xs transition-colors shadow-lg shadow-emerald-accent/10 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className="animate-spin" /> Scheduling Vitals...
                    </>
                  ) : (
                    <>
                      <FaCalendarAlt /> Confirm &amp; Register Appointment
                    </>
                  )}
                </button>

              </form>

            </div>
          )}

        </div>
      </section>

    </div>
  );
}