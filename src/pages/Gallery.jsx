import { useState } from 'react';
import { FaFilter, FaTimes, FaSearchPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GALLERY_ITEMS } from '../data/mockData';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'doctors', label: 'Doctors & Staff' },
    { id: 'equipment', label: 'Advanced Equipment' },
    { id: 'events', label: 'Hospital Events' },
    { id: 'awards', label: 'Accolades & Awards' }
  ];

  // Filter gallery items
  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  // Lightbox handlers
  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-medical-dark text-white py-16 px-4 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)' }}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-emerald-accent text-xs font-bold uppercase tracking-widest bg-emerald-accent/15 px-3 py-1.5 rounded-full">
            Visual Tour
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 leading-tight">Hospital Gallery</h1>
          <p className="text-sm md:text-base text-slate-350 mt-4 leading-relaxed font-light">
            Take a visual tour of our advanced clinical spaces, modern laboratories, operation complexes, and corporate milestones.
          </p>
        </div>
      </div>

      {/* Filter Tabs Section */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <FaFilter className="text-emerald-accent text-xs mr-2 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveFilter(cat.id);
                  closeLightbox();
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === cat.id
                    ? 'bg-emerald-accent text-white shadow-md shadow-emerald-accent/15 scale-[1.02]'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry-Style Image Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => (
              <div 
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="relative rounded-2xl overflow-hidden shadow-sm group cursor-pointer aspect-square bg-slate-200 border border-slate-100"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Hover overlay mask */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-5 text-white">
                  <div className="flex justify-end">
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <FaSearchPlus size={12} />
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] text-emerald-accent font-extrabold uppercase tracking-widest block mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-xs font-bold leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LIGHTBOX MODAL OVERLAY */}
      {lightboxIndex !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
        >
          {/* Close button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 w-11 h-11 rounded-full flex items-center justify-center transition-colors border border-white/10"
            aria-label="Close Lightbox"
          >
            <FaTimes size={18} />
          </button>

          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 md:left-8 text-white bg-white/5 hover:bg-white/10 w-12 h-12 rounded-full flex items-center justify-center transition-all border border-white/5"
            aria-label="Previous image"
          >
            <FaChevronLeft size={16} />
          </button>

          {/* Large Image Frame */}
          <div className="max-w-4xl max-h-[80vh] flex flex-col items-center cursor-default" onClick={(e) => e.stopPropagation()}>
            <img 
              src={filteredItems[lightboxIndex].image} 
              alt={filteredItems[lightboxIndex].title} 
              className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl select-none"
            />
            <div className="text-center mt-6">
              <span className="text-[10px] text-emerald-accent font-bold uppercase tracking-wider block mb-1">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="text-sm font-bold text-white leading-tight">
                {filteredItems[lightboxIndex].title}
              </h3>
              <span className="text-[10px] text-slate-500 mt-2 block">
                {lightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="absolute right-4 md:right-8 text-white bg-white/5 hover:bg-white/10 w-12 h-12 rounded-full flex items-center justify-center transition-all border border-white/5"
            aria-label="Next image"
          >
            <FaChevronRight size={16} />
          </button>

        </div>
      )}

    </div>
  );
}
