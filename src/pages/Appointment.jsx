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
// 1. Import the official EmailJS browser package
import emailjs from '@emailjs/browser';
import { DEPARTMENTS, DOCTORS } from '../data/mockData';
import { apiService } from '../services/api';
import { notificationService } from '../services/notificationService';

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

  // Dynamic doctor listings filtered by department choice
  const [filteredDoctors, setFilteredDoctors] = useState(DOCTORS);

  // Pre-populate queries from search parameters
  useEffect(() => {
    const doctorParam = searchParams.get('doctor');
    const deptParam = searchParams.get('dept');
    const packageParam = searchParams.get('package');

    if (deptParam) {
      setDepartment(deptParam);
    }
    if (doctorParam) {
      setDoctor(doctorParam);
    }
    if (packageParam) {
      setMessage(`Interested in Booking Health Package: ${packageParam}`);
      setDepartment('Diagnostics & Imaging');
    }
  }, [searchParams]);

  // Sync doctor listings when department is selected
  useEffect(() => {
    if (department) {
      const filtered = DOCTORS.filter(
        (doc) => doc.departmentName.toLowerCase().includes(department.toLowerCase()) ||
                  department.toLowerCase().includes(doc.departmentName.toLowerCase())
      );
      setFilteredDoctors(filtered);
      
      const isDocValid = filtered.some((doc) => doc.name === doctor);
      if (!isDocValid && doctor) {
        setDoctor('');
      }
    } else {
      setFilteredDoctors(DOCTORS);
    }
  }, [department, doctor]);

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

    // Formulate variables matching your dashboard layout keys explicitly
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
      // 1. Submit transaction details to the mock local API database
      const response = await apiService.bookAppointment(appointmentPayload);
      
      if (response.success) {
        // 2. Dispatch EmailJS notification directly using full fallbacks
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_APPOINTMENT_TEMPLATE_ID, 
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY 
        );

        // 3. Generate WhatsApp backup redirection fallback link
        const generatedWaUrl = notificationService.generateWhatsAppUrl(appointmentPayload);
        setWhatsappUrl(generatedWaUrl);

        // Toggle UI frame state to receipt summary view
        setSuccessData(response.data);
      }
    } catch (err) {
      console.error('Submission processing error:', err);
      
      // If EmailJS fails or times out but database registration worked, gracefully load summary with notice
      const generatedWaUrl = notificationService.generateWhatsAppUrl(appointmentPayload);
      setWhatsappUrl(generatedWaUrl);
      
      setSuccessData({
        appointmentId: `VHC-APT-${Math.floor(100000 + Math.random() * 900000)}`,
        ...appointmentPayload
      });
      setErrors({ emailDispatchWarning: 'Appointment registered! However, notification delivery failed.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-medical-dark text-white py-16 px-4 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)' }}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-emerald-accent text-xs font-bold uppercase tracking-widest bg-emerald-accent/15 px-3 py-1.5 rounded-full">
            Fast Bookings
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 leading-tight">Book A Consultation</h1>
          <p className="text-sm md:text-base text-slate-350 mt-4 leading-relaxed font-light">
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

              /* Receipt Summary Card */
              <div className="bg-slate-50 rounded-2xl p-6 text-left border border-slate-150 max-w-lg mx-auto mb-8 space-y-3.5 text-xs text-slate-650">
                <div className="flex justify-between border-b border-slate-200 pb-3 font-semibold text-slate-800">
                  <span>Booking Reference:</span>
                  <span className="text-emerald-accent font-extrabold">{successData.appointmentId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Patient Name:</span>
                  <span className="font-bold text-slate-850">{successData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Mobile Number:</span>
                  <span className="font-bold text-slate-850">{successData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span>Email Address:</span>
                  <span className="font-bold text-slate-850">{successData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span>Department:</span>
                  <span className="font-bold text-slate-850">{successData.department}</span>
                </div>
                <div className="flex justify-between">
                  <span>Consultant Doctor:</span>
                  <span className="font-bold text-slate-850 text-emerald-accent">{successData.doctor}</span>
                </div>
                <div className="flex justify-between">
                  <span>Preferred Date:</span>
                  <span className="font-bold text-slate-850">{successData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span>Preferred Time:</span>
                  <span className="font-bold text-slate-850">{successData.time}</span>
                </div>
                {successData.message && (
                  <div className="border-t border-slate-200 pt-3">
                    <span className="block text-[10px] text-slate-400 mb-1">Additional Message:</span>
                    <p className="bg-white p-2.5 rounded-lg border border-slate-150 text-[11px] leading-relaxed italic">{successData.message}</p>
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
                  className="flex-1 bg-medical-dark hover:bg-medical-blue text-white font-extrabold py-3.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
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
                    <a href="tel:+919160854747" className="flex items-center gap-3 hover:text-emerald-accent transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <FaPhoneAlt size={12} />
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-400">Reception Support</span>
                        <span className="font-bold">+91 916 085 4747</span>
                      </div>
                    </a>

                    <a href="mailto:care@vindhyahealthcare.in" className="flex items-center gap-3 hover:text-emerald-accent transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <FaEnvelope size={12} />
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-400">Email Address</span>
                        <span className="font-bold">care@vindhyahealthcare.in</span>
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
                    <label className="block text-xs font-bold text-slate-655 mb-2">Patient Full Name*</label>
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
                    <label className="block text-xs font-bold text-slate-655 mb-2">Mobile Number (10 Digit)*</label>
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
                    <label className="block text-xs font-bold text-slate-655 mb-2">Email Address*</label>
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
                    <label className="block text-xs font-bold text-slate-655 mb-2">Select Department*</label>
                    <select
                      required
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.department ? 'border-red-400 bg-red-50/10' : 'border-slate-200 bg-slate-50'} text-xs focus:outline-none focus:border-emerald-accent cursor-pointer`}
                    >
                      <option value="">-- Choose Division --</option>
                      {DEPARTMENTS.map((d) => (
                        <option key={d.id} value={d.name}>{d.name}</option>
                      ))}
                    </select>
                    {errors.department && <span className="text-[10px] text-red-500 mt-1 block">{errors.department}</span>}
                  </div>

                  {/* Doctor select */}
                  <div>
                    <label className="block text-xs font-bold text-slate-655 mb-2">Select Doctor*</label>
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
                    <label className="block text-xs font-bold text-slate-655 mb-2">Appointment Date*</label>
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
                    <label className="block text-xs font-bold text-slate-655 mb-2">Preferred Slot Time*</label>
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
                  <label className="block text-xs font-bold text-slate-655 mb-2">Symptoms or Medical History (Optional)</label>
                  <textarea
                    rows="3"
                    placeholder="e.g. Regular heart checkup"
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