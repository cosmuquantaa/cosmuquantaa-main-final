import { motion } from 'motion/react';

export function ImpactSection() {
  return (
    <section className="py-12 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-10 lg:p-12 border border-[#00A8B5]/20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-black text-white mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Impact Across Industries
          </motion.h2>
          <motion.p
            className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Transforming enterprises across defense, healthcare, manufacturing, finance, and beyond with cutting-edge autonomous AI solutions. Our technology empowers organizations to achieve unprecedented efficiency, innovation, and competitive advantage in their respective industries.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}