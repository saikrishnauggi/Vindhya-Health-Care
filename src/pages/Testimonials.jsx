import { useState } from 'react';
import { FaStar, FaQuoteLeft, FaCommentMedical, FaPlay, FaSpinner, FaCheckCircle } from 'react-icons/fa';
import { TESTIMONIALS } from '../data/mockData';

export default function Testimonials() {
  const [reviewsList, setReviewsList] = useState(TESTIMONIALS);

  // Review Form States
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [rating, setRating] = useState(5);

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!name || !story || !title) return;

    setIsLoading(true);
    setTimeout(() => {
      // Create new review object
      const newReview = {
        id: reviewsList.length + 1,
        name,
        age: age ? parseInt(age) : 'N/A',
        rating,
        storyTitle: title,
        text: story,
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200", // Default dummy avatar
        videoUrl: ""
      };
      
      setReviewsList([newReview, ...reviewsList]);
      setIsLoading(false);
      setSubmitted(true);
      
      // Clear form
      setName('');
      setAge('');
      setTitle('');
      setStory('');
      setRating(5);
    }, 1200);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-medical-dark text-white py-16 px-4 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)' }}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-emerald-accent text-xs font-bold uppercase tracking-widest bg-emerald-accent/15 px-3 py-1.5 rounded-full">
            Patient Voices
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 leading-tight">Patient Testimonials</h1>
          <p className="text-sm md:text-base text-slate-350 mt-4 leading-relaxed font-light">
            Read stories of critical recovery, surgical success, and clinical comfort from verified patients treated at Vindhya Healthcare.
          </p>
        </div>
      </div>

      {/* Grid of Reviews */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <h2 className="text-lg font-bold text-slate-800 mb-8 border-b border-slate-200 pb-3">Patient Stories Wall</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewsList.map((review) => (
              <div 
                key={review.id}
                className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 relative flex flex-col justify-between"
              >
                <FaQuoteLeft className="absolute top-6 right-6 text-slate-100 text-5xl pointer-events-none" />
                
                <div>
                  {/* Rating */}
                  <div className="flex items-center gap-1 text-amber-400 mb-4 relative z-10">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} size={12} />
                    ))}
                  </div>

                  {/* Title & Text */}
                  <h3 className="text-base font-bold text-slate-800 mb-3 relative z-10 leading-snug">
                    "{review.storyTitle}"
                  </h3>
                  <p className="text-xs text-slate-550 leading-relaxed font-light mb-6 italic">
                    {review.text}
                  </p>
                </div>

                {/* Patient Profile */}
                <div className="flex items-center gap-3.5 border-t border-slate-50 pt-5 mt-4">
                  <div className="w-10 h-10 rounded-full border border-slate-150 overflow-hidden">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="block font-bold text-xs text-slate-800">{review.name}</span>
                    <span className="block text-[10px] text-slate-400">Age {review.age} • Verified Patient</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Submit review form */}
      <section className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-4">
          
          <div className="text-center mb-10">
            <div className="w-12 h-12 rounded-2xl bg-emerald-accent/10 text-emerald-accent flex items-center justify-center mx-auto mb-4">
              <FaCommentMedical size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-800">Share Your Success Story</h2>
            <p className="text-xs text-slate-500 font-light mt-1">Help others build trust by sharing your recovery experience with us.</p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 text-center text-emerald-800">
              <FaCheckCircle className="text-emerald-500 text-3xl mx-auto mb-3" />
              <h3 className="text-base font-bold">Review Received!</h3>
              <p className="text-xs text-emerald-650 mt-1 font-light leading-relaxed">
                Thank you for taking the time to share your review. Your story will inspire confidence in other patient families!
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold px-5 py-2.5 rounded-xl text-xs"
              >
                Submit Another Story
              </button>
            </div>
          ) : (
            <form onSubmit={handleReviewSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-650 mb-2">Name*</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-4 py-3 border border-slate-200 bg-slate-50 rounded-xl text-xs focus:outline-none focus:border-emerald-accent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-650 mb-2">Age (Optional)</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="e.g. 45"
                    className="w-full px-4 py-3 border border-slate-200 bg-slate-50 rounded-xl text-xs focus:outline-none focus:border-emerald-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-650 mb-2">Review Title*</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Life-saving Cardiac Care"
                  className="w-full px-4 py-3 border border-slate-200 bg-slate-50 rounded-xl text-xs focus:outline-none focus:border-emerald-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-650 mb-2">Your Story / Experience*</label>
                <textarea
                  rows="4"
                  required
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  placeholder="Describe your treatment process, consultings with doctors, recovery times, and nursing care..."
                  className="w-full px-4 py-3 border border-slate-200 bg-slate-50 rounded-xl text-xs focus:outline-none focus:border-emerald-accent"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-650 mb-2">Overall Rating*</label>
                <select
                  value={rating}
                  onChange={(e) => setRating(parseInt(e.target.value))}
                  className="w-full px-4 py-3 border border-slate-200 bg-slate-50 rounded-xl text-xs focus:outline-none focus:border-emerald-accent cursor-pointer"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ (5 - Excellent)</option>
                  <option value={4}>⭐⭐⭐⭐ (4 - Good)</option>
                  <option value={3}>⭐⭐⭐ (3 - Average)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-emerald-accent hover:bg-emerald-dark disabled:bg-emerald-accent/50 text-white font-extrabold py-3.5 rounded-xl text-xs shadow-md flex items-center justify-center gap-2"
              >
                {isLoading ? <><FaSpinner className="animate-spin" /> Publishing story...</> : 'Publish Success Review'}
              </button>

            </form>
          )}

        </div>
      </section>

    </div>
  );
}