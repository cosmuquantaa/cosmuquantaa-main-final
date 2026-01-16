import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 relative">
      <div className="max-w-7xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 md:mb-8 leading-tight px-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            CosmuQuantaa
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/80 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            We pioneer agentic AI systems that transform enterprises through intelligent automation and autonomous decision-making.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-[#002D72] text-white rounded-lg font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 45, 114, 0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Journey
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('industries')}
              className="flex items-center gap-2 text-[#00A8B5] font-bold text-base sm:text-lg group"
              whileHover={{ x: 5 }}
            >
              Explore Solutions
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}