import { motion } from 'motion/react';

const technologies = [
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00' },
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: '#EE4C2C' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
  // { name: 'OpenAI', icon: 'https://cdn.simpleicons.org/openai/412991', color: '#412991' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', color: '#FF9900' },
  { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', color: '#0078D4' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4169E1' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' }
];

export function TechnologyStack() {
  // Duplicate for seamless loop
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="py-20 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Powered by Best-in-Class
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            We leverage cutting-edge technology to deliver enterprise-grade solutions.
          </p>
        </motion.div>

        {/* Infinite Scrolling Marquee */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -1920]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear"
                }
              }}
            >
              {duplicatedTechs.map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-28 bg-white/5 backdrop-blur-md rounded-xl border border-[#00A8B5]/20 flex flex-col items-center justify-center gap-3 hover:border-[#00A8B5] hover:shadow-lg transition-all duration-300 group"
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="font-semibold text-white text-sm">{tech.name}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { title: 'Cloud-Native', description: 'Scalable infrastructure on AWS, Azure, and GCP' },
            { title: 'Open Source', description: 'Built on transparent, community-driven technology' },
            { title: 'Enterprise Ready', description: 'Production-grade security and compliance' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-xl border border-[#E2E8F0] hover:border-[#00A8B5] hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-2xl font-black text-transparent bg-gradient-to-r from-[#002D72] to-[#00A8B5] bg-clip-text mb-2">
                {item.title}
              </div>
              <p className="text-[#4A5568] text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}