import { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube, 
  FaSpinner, 
  FaCheckCircle 
} from 'react-icons/fa';
// 1. Import EmailJS browser library
import emailjs from '@emailjs/browser';

export default function Contact() {
  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // UI Flow States
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');

    // 2. Map form states to match your exact EmailJS template placeholder variables
    const templateParams = {
      from_name: name,
      reply_to: email,
      subject: subject || 'General Query',
      message: message
    };

    try {
      // 3. Trigger EmailJS Send function with comprehensive secure fallbacks
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Success workflow handling
      setSubmitted(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err) {
      setErrorMsg(err.text || 'Something went wrong while delivering your email. Please try again.');
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
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 leading-tight">Contact Us</h1>
          <p className="text-sm md:text-base text-slate-350 mt-4 leading-relaxed font-light">
            Have a question about our specialties or billing procedures? Send us a note or call our coordinates.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
            
            {/* 1. Contact Information Card Details */}
            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm flex flex-col justify-between space-y-8 lg:col-span-1">
              <div>
                <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3 mb-6">Coordinates</h3>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-accent/10 text-emerald-accent flex items-center justify-center shrink-0">
                      <FaMapMarkerAlt size={16} />
                    </div>
                    <div className="text-xs">
                      <span className="block font-bold text-slate-700 mb-1">Our Location</span>
                      <span className="text-slate-500 leading-relaxed font-light">
                        13-94 & 95, Vindhya Healthcare, beside Jagruthi Degree College, Sanjay Nagar, Malkajgiri, Hyderabad, Secunderabad, Telangana - 500047
                      </span>
                    </div>
                  </div>

                  {/* Call lines */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-accent/10 text-emerald-accent flex items-center justify-center shrink-0">
                      <FaPhoneAlt size={16} />
                    </div>
                    <div className="text-xs">
                      <span className="block font-bold text-slate-700 mb-1">Telephone Contacts</span>
                      <a href="tel:+919030757575" className="block text-slate-500 hover:text-emerald-accent transition-colors font-light">
                        Emergency 24/7: +91 903 075 7575
                      </a>
                      {/* <a href="tel:0755123456" className="block text-slate-500 hover:text-emerald-accent transition-colors font-light">
                        OPD Desk: 0755 123 456
                      </a> */}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-accent/10 text-emerald-accent flex items-center justify-center shrink-0">
                      <FaEnvelope size={16} />
                    </div>
                    <div className="text-xs">
                      <span className="block font-bold text-slate-700 mb-1">Email Support</span>
                      <a href="mailto:care@vindhyahealthcare.in" className="block text-slate-500 hover:text-emerald-accent transition-colors font-light">
                        care@vindhyahealthcare.in
                      </a>
                      {/* <a href="mailto:appointments@vindhyahealthcare.in" className="block text-slate-500 hover:text-emerald-accent transition-colors font-light">
                        appointments@vindhyahealthcare.in
                      </a> */}
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-accent/10 text-emerald-accent flex items-center justify-center shrink-0">
                      <FaClock size={16} />
                    </div>
                    <div className="text-xs">
                      <span className="block font-bold text-slate-700 mb-1">Working Hours</span>
                      <span className="block text-slate-500 font-light">Emergency / Critical: Day Care</span>
                      <span className="block text-slate-500 font-light">OPD Consultations: Mon-Sat: 9AM - 9PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="border-t border-slate-100 pt-6">
                <span className="block text-[10px] uppercase font-bold text-slate-400 mb-3 tracking-wider">Social Channels</span>
                <div className="flex items-center gap-2">
                  <a href="https://facebook.com" className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-emerald-accent text-slate-500 hover:text-white flex items-center justify-center transition-all border border-slate-100">
                    <FaFacebookF size={12} />
                  </a>
                  <a href="https://instagram.com" className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-emerald-accent text-slate-500 hover:text-white flex items-center justify-center transition-all border border-slate-100">
                    <FaInstagram size={12} />
                  </a>
                  <a href="https://linkedin.com" className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-emerald-accent text-slate-500 hover:text-white flex items-center justify-center transition-all border border-slate-100">
                    <FaLinkedinIn size={12} />
                  </a>
                  <a href="https://youtube.com" className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-emerald-accent text-slate-500 hover:text-white flex items-center justify-center transition-all border border-slate-100">
                    <FaYoutube size={12} />
                  </a>
                </div>
              </div>

            </div>

            {/* 2. Contact inquiry form */}
            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm lg:col-span-2">
              <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3 mb-6 font-sans">Send Inquiry</h3>
              
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-3xl p-10 text-center max-w-md mx-auto my-6">
                  <FaCheckCircle className="text-emerald-500 text-3xl mx-auto mb-3" />
                  <h3 className="text-base font-bold">Message Submitted!</h3>
                  <p className="text-xs text-emerald-650 mt-1 font-light leading-relaxed">
                    Thank you. We have registered your message inquiry. A patient care representative will review and contact you on the email provided.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold px-6 py-2.5 rounded-xl text-xs shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="bg-red-50 border border-red-100 text-red-650 rounded-xl p-3.5 text-xs font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-655 mb-2">Your Full Name*</label>
                      <input
                        type="text"
                        required
                        placeholder="Rahul Dev"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 bg-slate-50 rounded-xl text-xs focus:outline-none focus:border-emerald-accent"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-655 mb-2">Email Address*</label>
                      <input
                        type="email"
                        required
                        placeholder="Rahul@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 bg-slate-50 rounded-xl text-xs focus:outline-none focus:border-emerald-accent"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-slate-655 mb-2">Inquiry Subject</label>
                    <input
                      type="text"
                      placeholder="e.g. Billing disputes, corporate tie-ups..."
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-slate-50 rounded-xl text-xs focus:outline-none focus:border-emerald-accent"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-655 mb-2">Your Message / Inquiry*</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Type details of your query..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 bg-slate-50 rounded-xl text-xs focus:outline-none focus:border-emerald-accent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-emerald-accent hover:bg-emerald-dark disabled:bg-emerald-accent/50 text-white font-extrabold py-3.5 rounded-xl text-xs shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    {isLoading ? <><FaSpinner className="animate-spin" /> Transferring Query...</> : 'Send Message Inquiry'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Google Maps Integration */}
      <section className="h-[400px] w-full border-t border-slate-200 bg-slate-200 select-none">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2234551184803!2d78.5248232!3d17.4489814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b2e2868954b%3A0xe8ded595d57d245f!2sLaser%20Eye%20Hospital%20%40%20Vindhya%20Health%20Care!5e0!3m2!1sen!2sin!4v1718465000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Vindhya Healthcare Malkajgiri Location Map"
        ></iframe>
      </section>

    </div>
  );
}