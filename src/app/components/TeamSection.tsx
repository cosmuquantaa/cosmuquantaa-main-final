import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Pravalika S',
    role: 'Co-Founder',
    bio: 'Visionary leader in AI and autonomous systems with over 2+ years of experience driving innovation in enterprise technology.',
    linkedin: 'https://www.linkedin.com/in/sheela-pravalika-7809b8219/'
  },
  {
    name: 'Sri Charan K',
    role: 'Co-Founder',
    bio: 'Expert in machine learning and AI architecture with 2+, pioneering cutting-edge solutions for complex business challenges.',
    linkedin: 'https://www.linkedin.com/in/k-sricharan01/'
  },
  {
    name: 'Venkat M',
    role: 'Head of Operations',
    bio: 'Strategic operations leader ensuring seamless deployment and exceptional service delivery across all engagements.',
    // linkedin: 'https://www.linkedin.com/in/navneet-aman-244896149/'
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
            Our Founding Members
          </h2>
          <p className="text-base text-white/70 max-w-3xl mx-auto">
            Meet the visionaries driving innovation in autonomous intelligence.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-[#00A8B5]/20 hover:border-[#00A8B5] transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#002D72] to-[#00A8B5] mx-auto mb-4 flex items-center justify-center text-white text-2xl font-black">
                {member.name.charAt(0)}
              </div>

              {/* Info */}
              <h3 className="text-xl font-black text-white mb-1 text-center">
                {member.name}
              </h3>
              <p className="text-sm text-[#00A8B5] mb-3 text-center font-semibold">
                {member.role}
              </p>
              <p className="text-sm text-white/70 mb-4 text-center">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex gap-3 justify-center">
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#002D72] text-white flex items-center justify-center hover:bg-[#00A8B5] transition-colors duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:cosmuquantaa@gmail.com"
                  className="w-10 h-10 rounded-full bg-[#002D72] text-white flex items-center justify-center hover:bg-[#00A8B5] transition-colors duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
