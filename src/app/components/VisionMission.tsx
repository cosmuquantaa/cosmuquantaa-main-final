import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function VisionMission() {
  return (
    <section id="vision" className="py-16">
      {/* MAKE IN INDIA Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
          className="bg-white/5 backdrop-blur-md rounded-2xl p-8 lg:p-10 border border-[#00A8B5]/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header with Logo */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <ImageWithFallback
              src="https://i.pinimg.com/736x/d9/1a/fd/d91afdccec416b35789eacb5c4007230.jpg"
              alt="Make In India"
              className="h-16 lg:h-20 object-contain"
            />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
              MAKE IN INDIA
            </h2>
          </div>

          {/* Main Text */}
          <motion.p
            className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Proudly building world-class AI solutions from India, contributing to technological advancement and creating meaningful opportunities for Indian talent.
          </motion.p>
        </motion.div>
      </div>

      {/* Vision & Mission Layout - No Container */}
      <motion.div
        className="border-t-2 border-b-2 border-[#002D72]/20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left - Image */}
          <motion.div
            className="w-full lg:w-2/5 bg-gray-100"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://i.pinimg.com/736x/f5/7b/5c/f57b5c5b5bee379afb03805e94b4b462.jpg"
              alt="Vision & Mission"
              className="w-full h-full object-cover min-h-[500px] lg:min-h-[600px]"
            />
          </motion.div>

          {/* Right - Vision & Mission Content */}
          <div className="w-full lg:w-3/5 p-10 lg:p-16 xl:p-20 space-y-12 bg-black/40 backdrop-blur-sm">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-[#00A8B5]/20 rounded-full mb-4">
                <span className="text-[#00A8B5] font-bold text-sm uppercase tracking-wide">
                  Vision
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                Shaping the Future
              </h3>
              
              <p className="text-lg text-white/80 leading-relaxed">
                To be the global leader in autonomous AI systems, setting industry standards for innovation, reliability, and human-centric technology that transforms how businesses operate and compete in the digital age.
              </p>
            </motion.div>

            {/* Divider */}
            <div className="border-t-2 border-[#00A8B5]/20"></div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-[#002D72]/20 rounded-full mb-4">
                <span className="text-[#00A8B5] font-bold text-sm uppercase tracking-wide">
                  Mission
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                Empowering Enterprises
              </h3>
              
              <p className="text-lg text-white/80 leading-relaxed">
                To democratize access to autonomous intelligence by delivering enterprise-grade AI solutions that drive measurable business outcomes, sustainable competitive advantage, and transformative growth across industries.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}