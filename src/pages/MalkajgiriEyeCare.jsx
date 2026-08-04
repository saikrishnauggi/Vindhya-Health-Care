import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaCalendarCheck,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaQuoteLeft,
  FaStar,
  FaWhatsapp,
} from 'react-icons/fa';
import DoctorCard from '../components/DoctorCard';
import { DOCTORS } from '../data/mockData';
import outdoor4 from '../assets/outdoor4.jpg';

const eyeCareServices = [
  'Comprehensive eye examinations',
  'Cataract evaluation and surgery',
  'LASIK and refractive-surgery assessment',
  'Retina and diabetic eye care',
  'Glaucoma screening and treatment',
  'Cornea, dry-eye, and contact-lens care',
];

const mapUrl = 'https://maps.app.goo.gl/3pojRBzN5tBEjffXA';
const ophthalmologyDoctors = DOCTORS.filter((doctor) => doctor.departmentId === 'ophthalmology');

export default function MalkajgiriEyeCare() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="relative isolate overflow-hidden bg-medical-dark text-white">
        <img
          src={outdoor4}
          alt="Vindhya Healthcare eye care hospital in Malkajgiri"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-medical-dark via-medical-dark/90 to-medical-dark/50" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-accent/40 bg-emerald-accent/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-200">
            <FaMapMarkerAlt /> Sanjay Nagar, Malkajgiri
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            Eye Care Hospital in Malkajgiri, Hyderabad
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
            Vindhya Healthcare provides comprehensive ophthalmology care, from routine vision checks to cataract, retina, glaucoma, and refractive-care consultations.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/appointment"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-accent px-6 py-3.5 text-sm font-extrabold text-white shadow-lg transition-colors hover:bg-emerald-dark"
            >
              <FaCalendarCheck /> Book an Eye Appointment
            </Link>
            <a
              href="https://wa.me/919030757575"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/20"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 md:px-8">
          <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-accent">Eye care services</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-800">Care for everyday and complex vision needs</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
              Our eye-care team evaluates symptoms, guides you to the appropriate specialist, and supports you through diagnosis, treatment, and follow-up care.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {eyeCareServices.map((service) => (
                <div key={service} className="flex items-start gap-3 rounded-xl bg-slate-50 p-3 text-sm font-semibold text-slate-700">
                  <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-accent" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
            <Link to="/services" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-emerald-accent hover:text-emerald-dark">
              Explore all eye-care services <FaArrowRight size={12} />
            </Link>
          </div>

          <aside className="rounded-3xl bg-medical-dark p-7 text-white shadow-sm">
            <h2 className="text-xl font-extrabold">Visit Vindhya Healthcare</h2>
            <div className="mt-6 space-y-5 text-sm text-slate-300">
              <p className="flex items-start gap-3"><FaMapMarkerAlt className="mt-1 shrink-0 text-emerald-accent" />13-94 & 95, beside Jagruthi Degree College, Sanjay Nagar, Malkajgiri, Hyderabad, Telangana 500047</p>
              <p className="flex items-center gap-3"><FaClock className="shrink-0 text-emerald-accent" />Open daily, 9:00 AM – 9:00 PM</p>
              <a href="tel:+919030757575" className="flex items-center gap-3 font-bold text-white hover:text-emerald-accent"><FaPhoneAlt className="shrink-0 text-emerald-accent" />+91 90307 57575</a>
            </div>
            <a href={mapUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-extrabold text-medical-dark transition-colors hover:bg-slate-100">
              <FaMapMarkerAlt /> Get Directions
            </a>
          </aside>
        </div>
      </section>

      {ophthalmologyDoctors.length > 0 && (
        <section className="border-y border-slate-100 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-accent">Our specialist</p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-800">Meet our eye-care doctor</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">Choose a suitable consultation time and book directly online.</p>
            </div>
            <div className="mt-8 grid max-w-md gap-6">
              {ophthalmologyDoctors.map((doctor) => <DoctorCard key={doctor.id} {...doctor} />)}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-8">
          <div className="rounded-3xl bg-emerald-accent p-8 text-white md:p-10">
            <FaQuoteLeft className="text-3xl text-white/70" />
            <h2 className="mt-5 text-3xl font-extrabold">Patient feedback matters</h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-emerald-50">
              We only share patient feedback that has been genuinely provided and approved. After your visit, you can share your experience on our Google Business Profile.
            </p>
            <a href={mapUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-emerald-dark transition-colors hover:bg-emerald-50">
              <FaStar /> View or share a Google review
            </a>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2291410118326!2d78.532831!3d17.4488304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b2e2868954b%3A0xe8de4295d57d245f!2sLaser%20Eye%20Hospital%20%40%20Vindhya%20Health%20Care!5e0!3m2!1sen!2sin!4v1718465000000!5m2!1sen!2sin"
              className="h-[360px] w-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vindhya Healthcare eye care hospital location in Malkajgiri"
            />
          </div>
        </div>
      </section>

      <section className="bg-medical-dark py-14 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold">Need an eye-care consultation?</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">Book online or call our Malkajgiri clinic for assistance.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/appointment" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-accent px-6 py-3.5 text-sm font-extrabold hover:bg-emerald-dark"><FaCalendarCheck /> Book Appointment</Link>
            <a href="tel:+919030757575" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-bold hover:bg-white/10"><FaPhoneAlt /> Call +91 90307 57575</a>
          </div>
        </div>
      </section>
    </div>
  );
}
