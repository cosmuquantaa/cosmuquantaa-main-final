import { Building2, Shield, Heart, Factory } from 'lucide-react';

export function IndustrySection() {
  const industries = [
    {
      icon: Building2,
      title: 'Enterprise',
      description: 'Transform business operations with intelligent automation, predictive analytics, and autonomous decision-making systems that drive efficiency.',
      image: 'https://images.unsplash.com/photo-1571573680328-f20cbb17e7ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY3NTg3MDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stats: ['40% cost reduction', '95% automation'],
    },
    {
      icon: Shield,
      title: 'Defense',
      description: 'Advanced AI systems for threat detection, strategic planning, and mission-critical operations with the highest security standards.',
      image: 'https://images.unsplash.com/photo-1761507321147-c21f673f9f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwbmV0d29yayUyMGNvbm5lY3Rpb258ZW58MXx8fHwxNzY3NTg3MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stats: ['Real-time threat detection', 'Autonomous systems'],
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'AI-powered diagnostics, patient care optimization, and medical research acceleration while maintaining full HIPAA compliance.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc1NTU3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stats: ['Better patient outcomes', 'Faster diagnostics'],
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Smart factories with predictive maintenance, quality control automation, and optimized supply chain management.',
      image: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwaW5kdXN0cnl8ZW58MXx8fHwxNzY3NTg3MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stats: ['Zero-downtime operations', 'Quality assurance'],
    },
  ];

  return (
    <section id="about" className="py-16 px-6 lg:px-8 bg-gradient-to-b from-[#F6FAFD] to-white">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1931] mb-4 leading-tight">
            Transforming Industries
          </h2>
          <p className="text-sm text-[#1A3D63]/70 leading-relaxed">
            Our autonomous intelligence systems are revolutionizing operations 
            across diverse sectors, delivering measurable impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-sm rounded-lg overflow-hidden border border-[#B3CFE5]/40 hover:border-[#4A7FA7] hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/80 via-[#0A1931]/40 to-transparent"></div>
                
                {/* Icon on image */}
                <div className="absolute top-4 left-4">
                  <div className="w-9 h-9 rounded-lg bg-[#4A7FA7] backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <industry.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#0A1931] mb-2">
                  {industry.title}
                </h3>
                
                <p className="text-xs text-[#1A3D63]/70 leading-relaxed mb-3">
                  {industry.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {industry.stats.map((stat, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1 bg-[#B3CFE5]/20 backdrop-blur-sm text-[#1A3D63] rounded-full text-xs"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}