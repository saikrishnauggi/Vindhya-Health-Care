import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube, 
  FaHeartbeat, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock 
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Careers', path: '/careers' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ];

  const departments = [
    { name: 'Cardiology', path: '/departments' },
    { name: 'Neurology', path: '/departments' },
    { name: 'Orthopedics', path: '/departments' },
    { name: 'Pediatrics', path: '/departments' },
    { name: 'Oncology', path: '/departments' },
    { name: 'Gynecology & Obstetrics', path: '/departments' }
  ];

  const services = [
    { name: 'Outpatient (OPD)', path: '/services' },
    { name: 'Inpatient (IPD)', path: '/services' },
    { name: 'Intensive Care (ICU)', path: '/services' },
    { name: 'Emergency 24/7', path: '/services' },
    { name: 'Ambulance Logistics', path: '/services' },
    { name: 'Pharmacy Services', path: '/services' }
  ];

  const packages = [
    { name: 'General Health Checkup', path: '/health-packages' },
    { name: 'Executive Health Checkup', path: '/health-packages' },
    { name: 'Cardiac Package', path: '/health-packages' },
    { name: 'Women\'s Health Package', path: '/health-packages' },
    { name: 'Senior Citizen Package', path: '/health-packages' }
  ];

  return (
    <footer className="bg-medical-dark text-slate-300 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Top Emergency Highlight */}
        <div className="bg-gradient-to-r from-red-650 to-red-500 rounded-3xl p-6 md:p-10 mb-16 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-accent/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="bg-red-500/20 p-4 rounded-2xl text-red-400 border border-red-500/30 animate-pulse">
              <FaPhoneAlt className="text-3xl" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold">In Need of Emergency Medical Care?</h3>
              <p className="text-sm text-slate-300 mt-1">Our emergency room is fully equipped and staffed 24/7.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full md:w-auto relative z-10">
            <a 
              href="tel:+919160854747" 
              className="bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3.5 rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <FaPhoneAlt size={14} /> Emergency: +91 916 085 4747
            </a>
            <a 
              href="tel:108" 
              className="bg-emerald-accent hover:bg-emerald-dark text-white font-extrabold px-6 py-3.5 rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <FaPhoneAlt size={14} /> Ambulance 24/7: 108
            </a>
          </div>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Col 1: Branding & Address */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-emerald-accent p-2 rounded-lg text-white">
                <FaHeartbeat className="text-xl" />
              </div>
              <div>
                <span className="block font-black text-lg text-white leading-none">VINDHYA</span>
                <span className="block text-[8px] tracking-widest text-emerald-accent font-bold">HEALTHCARE</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Vindhya Healthcare is a premium, multi-specialty medical center dedicated to patient safety, state-of-the-art diagnostics, and clinical excellence.
            </p>
            <div className="space-y-3.5 text-xs text-slate-400">
              <p className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-emerald-accent mt-0.5 shrink-0" />
                <span>13-94 & 95, Vindhya Healthcare, beside Jagruthi Degree College, Sanjay Nagar, Malkajgiri, Hyderabad, Secunderabad, Telangana - 500047</span>
              </p>
              <p className="flex items-center gap-2.5">
                <FaEnvelope className="text-emerald-accent shrink-0" />
                <a href="mailto:care@vindhyahealthcare.in" className="hover:text-white transition-colors">care@vindhyahealthcare.in</a>
              </p>
              <p className="flex items-center gap-2.5">
                <FaClock className="text-emerald-accent shrink-0" />
                <span>OPD: 9:00 AM - 8:00 PM</span>
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6 pb-2 border-b border-slate-800">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-emerald-accent hover:translate-x-1 inline-block transition-all text-slate-400">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Departments */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6 pb-2 border-b border-slate-800">
              Departments
            </h4>
            <ul className="space-y-2.5 text-xs">
              {departments.map((dept) => (
                <li key={dept.name}>
                  <Link to={dept.path} className="hover:text-emerald-accent hover:translate-x-1 inline-block transition-all text-slate-400">
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6 pb-2 border-b border-slate-800">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {services.map((srv) => (
                <li key={srv.name}>
                  <Link to={srv.path} className="hover:text-emerald-accent hover:translate-x-1 inline-block transition-all text-slate-400">
                    {srv.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Packages */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6 pb-2 border-b border-slate-800">
              Health Checkups
            </h4>
            <ul className="space-y-2.5 text-xs">
              {packages.map((pkg) => (
                <li key={pkg.name}>
                  <Link to={pkg.path} className="hover:text-emerald-accent hover:translate-x-1 inline-block transition-all text-slate-400">
                    {pkg.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Middle Line: Social Media Links */}
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            Connecting you with health and safety tips:
          </p>
          <div className="flex items-center gap-3">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 rounded-full bg-slate-850 hover:bg-emerald-accent text-slate-400 hover:text-white flex items-center justify-center transition-all border border-slate-850"
              aria-label="Facebook"
            >
              <FaFacebookF size={12} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 rounded-full bg-slate-850 hover:bg-emerald-accent text-slate-400 hover:text-white flex items-center justify-center transition-all border border-slate-850"
              aria-label="Instagram"
            >
              <FaInstagram size={12} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 rounded-full bg-slate-850 hover:bg-emerald-accent text-slate-400 hover:text-white flex items-center justify-center transition-all border border-slate-850"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={12} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 rounded-full bg-slate-850 hover:bg-emerald-accent text-slate-400 hover:text-white flex items-center justify-center transition-all border border-slate-850"
              aria-label="YouTube"
            >
              <FaYoutube size={12} />
            </a>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>&copy; {currentYear} Vindhya Healthcare. All rights reserved. Hospital registration: VHC-MP-092-2023.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="#privacy" className="hover:text-emerald-accent transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#terms" className="hover:text-emerald-accent transition-colors">Terms &amp; Conditions</a>
            <span>|</span>
            <a href="#disclaimer" className="hover:text-emerald-accent transition-colors">Disclaimer</a>
            <span>|</span>
            <a href="#sitemap" className="hover:text-emerald-accent transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
