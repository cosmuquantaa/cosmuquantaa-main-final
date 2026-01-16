import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface Section {
  id: string;
  title: string;
}

const sections: Section[] = [
  { id: 'hero', title: 'Home' },
  { id: 'solutions', title: 'Solutions' },
  { id: 'about', title: 'Industries' },
  { id: 'technology', title: 'Technology' },
  { id: 'vision', title: 'Vision' },
  { id: 'team', title: 'Team' },
  { id: 'contact', title: 'Contact' }
];

export function ScrollTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      let currentIndex = 0;
      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i].id);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            currentIndex = i;
          }
        }
      }
      
      setActiveIndex(currentIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <div className="relative">
        {/* Vertical Line - Static */}
        <div className="absolute left-[6px] top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-transparent via-[#B3CFE5]/40 to-transparent" />
        
        {/* Sections */}
        <div className="relative space-y-8">
          {sections.map((section, index) => {
            const isActive = index === activeIndex;
            
            return (
              <div key={section.id} className="relative flex items-center gap-4">
                {/* Dot Container */}
                <div className="relative w-4 h-4 flex items-center justify-center flex-shrink-0">
                  {isActive ? (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute w-2.5 h-2.5 rounded-full bg-[#FFD700] shadow-[0_0_12px_rgba(255,215,0,0.6)]"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 35,
                        duration: 0.5
                      }}
                    />
                  ) : (
                    <div className="w-1 h-1 rounded-full bg-[#B3CFE5]/40" />
                  )}
                </div>
                
                {/* Section Title */}
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="relative group"
                >
                  <motion.span
                    animate={{
                      opacity: isActive ? 1 : 0.35,
                      scale: isActive ? 1 : 0.92,
                      fontWeight: isActive ? 700 : 400
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className={`block whitespace-nowrap select-none ${
                      isActive 
                        ? 'text-[#0A1931] text-4xl' 
                        : 'text-[#1A3D63]/50 text-2xl'
                    }`}
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {section.title}
                  </motion.span>
                  
                  {/* Hover underline */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#4A7FA7] transition-all duration-300 group-hover:w-full" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}