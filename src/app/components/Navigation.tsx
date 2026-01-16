import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-[#00A8B5]/20' 
          : 'bg-black'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl text-white font-black" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700 }}>
            CosmuQuantaa
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
          {['SOLUTIONS', 'INDUSTRIES', 'VISION', 'TEAM', 'CONTACT'].map((item, index) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="relative text-sm font-bold text-white tracking-wide group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              {item}
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-[#00A8B5]"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}