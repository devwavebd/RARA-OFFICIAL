import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SITE_DATA } from '../../constants';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-black/90 backdrop-blur-md py-3 border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={SITE_DATA.logo} 
            alt="Logo" 
            className="h-8 md:h-12 w-auto transition-transform group-hover:scale-105" 
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {SITE_DATA.navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={cn(
                  "text-xs font-bold tracking-widest transition-colors hover:text-red-500",
                  location.pathname === link.path ? "text-red-600" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <a 
            href={`tel:${SITE_DATA.phone}`}
            className="bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-red-700 transition-colors"
          >
            <Phone size={16} />
            {SITE_DATA.phone}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-black z-40 lg:hidden flex flex-col p-8 pt-24 gap-6"
          >
            <div className="flex flex-col gap-6">
              {SITE_DATA.navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-4xl font-black tracking-tighter transition-colors uppercase italic",
                    location.pathname === link.path ? "text-red-600" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto pb-12 space-y-8">
              <div className="h-px bg-white/10 w-full" />
              <a 
                href={`tel:${SITE_DATA.phone}`}
                className="bg-red-600 text-white px-6 py-5 rounded-2xl text-center font-black text-xl flex items-center justify-center gap-3 uppercase shadow-2xl shadow-red-600/20"
              >
                <Phone size={24} />
                {SITE_DATA.phone}
              </a>
              <p className="text-zinc-500 text-sm font-medium text-center">Premium Personal Training in Ahwatukee</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
