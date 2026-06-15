import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaSearch, FaFilter, FaTimes, FaCalendarAlt, FaUserMd, FaArrowRight, FaBookOpen } from 'react-icons/fa';
import { BLOG_POSTS } from '../data/mockData';

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Modal detail article state
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'Health Tips', label: 'Health Tips' },
    { id: 'Medical Awareness', label: 'Medical Awareness' },
    { id: 'Hospital Updates', label: 'Hospital Updates' }
  ];

  // Monitor URL params for ?post=post-id to auto-open article
  useEffect(() => {
    const postParam = searchParams.get('post');
    if (postParam) {
      const article = BLOG_POSTS.find(p => p.id === postParam);
      if (article) {
        setActiveArticle(article);
      }
    }
  }, [searchParams]);

  // Set post query parameter when reading article
  const openArticle = (post) => {
    setActiveArticle(post);
    setSearchParams({ post: post.id });
  };

  const closeArticle = () => {
    setActiveArticle(null);
    setSearchParams({});
  };

  // Filtered posts list
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCat = activeCategory === 'all' ? true : post.category === activeCategory;

    return matchesSearch && matchesCat;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-medical-dark text-white py-16 px-4 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)' }}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-emerald-accent text-xs font-bold uppercase tracking-widest bg-emerald-accent/15 px-3 py-1.5 rounded-full">
            Insights
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 leading-tight">Health Tips &amp; Updates</h1>
          <p className="text-sm md:text-base text-slate-350 mt-4 leading-relaxed font-light">
            Stay informed with verified medical articles, healthcare trends, lifestyle adjustments, and corporate announcements from Vindhya Healthcare.
          </p>
        </div>
      </div>

      {/* Search & Filter section */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
            
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
                <FaSearch size={14} />
              </span>
              <input
                type="text"
                placeholder="Search articles by keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-accent focus:ring-2 focus:ring-emerald-accent/10 text-xs placeholder-slate-400 bg-slate-50"
              />
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <FaFilter className="text-emerald-accent text-xs mr-2 hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-emerald-accent text-white shadow-md shadow-emerald-accent/15'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div 
                  key={post.id}
                  className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Photo cover */}
                  <div className="aspect-[16/10] bg-slate-150 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-emerald-accent text-white text-[9px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {post.category}
                    </div>
                  </div>

                  {/* Body details */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 font-semibold">{post.date} • By {post.author}</span>
                      <h3 className="text-base font-bold text-slate-800 mt-2 mb-3.5 leading-snug group-hover:text-emerald-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-light leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                    </div>

                    <button 
                      onClick={() => openArticle(post)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-medical-sky hover:text-emerald-accent transition-all text-left"
                    >
                      Read Full Article <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-16 text-center max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-450 flex items-center justify-center mx-auto mb-6">
                <FaBookOpen size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">No Articles Found</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                We couldn't find any articles matching your search criteria. Please adjust your keywords or select another filter tab.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FULL ARTICLE OVERLAY DETAIL READ MODAL */}
      {activeArticle && (
        <div 
          onClick={closeArticle}
          className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto cursor-zoom-out"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl border border-slate-150 shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto cursor-default flex flex-col"
          >
            {/* Header image cover with absolute exit */}
            <div className="h-64 md:h-80 w-full relative overflow-hidden shrink-0 select-none">
              <img 
                src={activeArticle.image} 
                alt={activeArticle.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              <button 
                onClick={closeArticle}
                className="absolute top-6 right-6 text-white bg-black/45 hover:bg-black/60 w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-md"
                aria-label="Close article"
              >
                <FaTimes size={16} />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[9px] text-emerald-accent font-extrabold uppercase tracking-widest bg-emerald-accent/20 border border-emerald-accent/30 px-3 py-1 rounded-full">
                  {activeArticle.category}
                </span>
                <h2 className="text-lg md:text-2xl font-black mt-3 leading-snug drop-shadow-sm">
                  {activeArticle.title}
                </h2>
              </div>
            </div>

            {/* Author info and Content details */}
            <div className="p-6 md:p-10 space-y-6 flex-grow">
              
              <div className="flex items-center gap-4 text-xs text-slate-400 border-b border-slate-100 pb-4">
                <span className="flex items-center gap-1.5 font-semibold">
                  <FaUserMd className="text-emerald-accent" /> {activeArticle.author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <FaCalendarAlt /> {activeArticle.date}
                </span>
              </div>

              <div className="text-xs text-slate-650 leading-relaxed font-light space-y-4 whitespace-pre-line">
                {activeArticle.content}
              </div>

              <div className="pt-6 border-t border-slate-100 text-center">
                <button 
                  onClick={closeArticle}
                  className="bg-slate-105 hover:bg-slate-200 text-slate-700 font-extrabold px-6 py-3 rounded-xl text-xs transition-colors"
                >
                  Return to Blog Grid
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
