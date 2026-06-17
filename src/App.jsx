import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Doctors from './pages/Doctors';
import Departments from './pages/Departments';
import Services from './pages/Services';
import Facilities from './pages/Facilities';
import Treatments from './pages/Treatments';  // Updated import path to Treatments
import Appointment from './pages/Appointment';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Testimonials from './pages/Testimonials';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* Mapping of all 13 distinct sub-page paths */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="departments" element={<Departments />} />
          <Route path="services" element={<Services />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="treatments" element={<Treatments />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Fallback to homepage index for invalid links */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
