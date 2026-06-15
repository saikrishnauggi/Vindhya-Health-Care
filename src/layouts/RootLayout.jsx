import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingActionPanel from '../components/FloatingActionPanel';

export default function RootLayout() {
  const { pathname } = useLocation();

  // Scroll to top of page on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-slate-800 relative">
      {/* 1. Header (contains sticky bar + navigation menu) */}
      <Header />

      {/* 2. Main Page Render outlet wrapped in smooth framer-motion transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Footer Widget */}
      <Footer />

      {/* 4. Desktop/Mobile Quick Actions Floating Sidebar */}
      <FloatingActionPanel />
    </div>
  );
}
