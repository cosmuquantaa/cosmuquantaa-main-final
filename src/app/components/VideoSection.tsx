import { motion } from 'motion/react';
import { Play, Calendar } from 'lucide-react';

export function VideoSection() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-[#DBEDFF]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="relative bg-gradient-to-br from-[#002D72] to-[#00A8B5] rounded-3xl overflow-hidden p-12 lg:p-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(white 1px, transparent 1px),
                linear-gradient(90deg, white 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative z-10">
            <motion.h2
              className="text-5xl md:text-6xl font-black text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              See It In Action
            </motion.h2>

            <motion.p
              className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Experience the power of autonomous intelligence firsthand. Watch our demo or schedule a personalized walkthrough.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.button
                className="flex items-center gap-3 px-8 py-4 bg-white text-[#002D72] rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5" fill="currentColor" />
                Watch Video
              </motion.button>

              <motion.button
                className="flex items-center gap-3 px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-bold text-lg hover:bg-white hover:text-[#002D72] transition-all duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-5 h-5" />
                Book a Demo
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
