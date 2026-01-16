import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Heart, TrendingUp } from 'lucide-react';

interface Industry {
  id: string;
  title: string;
  icon: any;
  heading: string;
  description: string;
  image: string;
  stats: string[];
  useCases: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  color: string;
  bgGradient: string;
}

const industries: Industry[] = [
  {
    id: 'financial',
    title: 'Financial Services',
    icon: TrendingUp,
    heading: 'Transforming Financial Operations',
    description: 'Revolutionize financial services with AI-powered automation, risk management, and customer intelligence. Our solutions enhance decision-making, reduce operational costs, and improve compliance across banking, insurance, and fintech.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    stats: ['40% Faster Processing', '99.9% Accuracy', '60% Cost Reduction'],
    useCases: [
      {
        title: 'Fraud Detection',
        description: 'Real-time transaction monitoring and anomaly detection to prevent financial fraud'
      },
      {
        title: 'Risk Assessment',
        description: 'Intelligent credit scoring and portfolio risk analysis for better decisions'
      },
      {
        title: 'Customer Intelligence',
        description: 'Personalized financial recommendations based on behavior analysis'
      }
    ],
    benefits: [
      'Automated compliance monitoring and reporting',
      'Intelligent document processing and verification',
      'Predictive analytics for market trends',
      'Real-time fraud prevention and detection',
      'Enhanced customer service with AI chatbots',
      'Optimized trading and investment strategies'
    ],
    color: '#4A7FA7',
    bgGradient: 'from-[#4A7FA7]/10 to-[#B3CFE5]/5'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: Heart,
    heading: 'Advancing Healthcare with AI',
    description: 'Transform patient care and operational efficiency with intelligent healthcare solutions. Our AI systems support clinical decisions, streamline workflows, and improve patient outcomes while maintaining HIPAA compliance.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    stats: ['50% Faster Diagnosis', '95% Patient Satisfaction', '35% Cost Savings'],
    useCases: [
      {
        title: 'Clinical Decision Support',
        description: 'AI-assisted diagnosis and treatment recommendations for healthcare providers'
      },
      {
        title: 'Patient Monitoring',
        description: 'Continuous health tracking with predictive alerts for early intervention'
      },
      {
        title: 'Administrative Automation',
        description: 'Streamlined scheduling, billing, and records management'
      }
    ],
    benefits: [
      'Improved diagnostic accuracy with AI assistance',
      'Automated patient record management',
      'Predictive patient risk assessment',
      'Optimized resource allocation and scheduling',
      'Enhanced drug discovery and development',
      'Personalized treatment recommendations'
    ],
    color: '#1A3D63',
    bgGradient: 'from-[#1A3D63]/10 to-[#4A7FA7]/5'
  },
  {
    id: 'enterprise',
    title: 'Enterprise & Manufacturing',
    icon: Building2,
    heading: 'Smart Enterprise Solutions',
    description: 'Optimize enterprise operations with intelligent automation, predictive maintenance, and supply chain intelligence. Our solutions drive efficiency, reduce costs, and enable data-driven decision-making across your organization.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    stats: ['45% Efficiency Gain', '70% Downtime Reduction', '30% Cost Optimization'],
    useCases: [
      {
        title: 'Predictive Maintenance',
        description: 'Anticipate equipment failures before they occur to minimize downtime'
      },
      {
        title: 'Supply Chain Optimization',
        description: 'Intelligent inventory management and logistics optimization'
      },
      {
        title: 'Quality Assurance',
        description: 'Automated quality control with computer vision and AI analysis'
      }
    ],
    benefits: [
      'Real-time production monitoring and optimization',
      'Intelligent demand forecasting',
      'Automated quality inspection',
      'Enhanced supply chain visibility',
      'Energy consumption optimization',
      'Workforce productivity enhancement'
    ],
    color: '#4A7FA7',
    bgGradient: 'from-[#4A7FA7]/10 to-[#B3CFE5]/5'
  }
];

export function IndustrySectionAnimated() {
  const [activeId, setActiveId] = useState(industries[0].id);
  const activeIndustry = industries.find(i => i.id === activeId) || industries[0];

  return (
    <section id="about" className="min-h-screen py-12 px-6 lg:px-8 bg-gradient-to-b from-white to-[#F6FAFD] relative overflow-hidden flex items-center">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#4A7FA7]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#B3CFE5]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#0A1931] via-[#4A7FA7] to-[#1A3D63] bg-clip-text text-transparent mb-3 leading-tight">
            Transforming Industries
          </h2>
          <p className="text-lg text-[#0A1931]/80 max-w-3xl mx-auto leading-relaxed">
            Industry-specific AI solutions that drive innovation and create measurable value across diverse sectors.
          </p>
        </div>

        {/* Horizontal Tab Navigation */}
        <div className="mb-6">
          <div className="relative">
            {/* Horizontal Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B3CFE5]/20 via-[#4A7FA7]/30 to-[#B3CFE5]/20"></div>
            
            {/* Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-2 relative pb-3">
              {industries.map((industry) => {
                const isActive = activeId === industry.id;
                
                return (
                  <button
                    key={industry.id}
                    onClick={() => setActiveId(industry.id)}
                    className="relative px-6 py-2 rounded-t-xl transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? `${industry.color}15` : 'transparent'
                    }}
                  >
                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="industryActiveIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full"
                        style={{ backgroundColor: industry.color }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 35
                        }}
                      />
                    )}
                    
                    {/* Icon & Title */}
                    <div className="flex items-center gap-2">
                      <industry.icon 
                        className="w-5 h-5"
                        style={{ 
                          color: isActive ? industry.color : '#1A3D63',
                          opacity: isActive ? 1 : 0.6
                        }}
                      />
                      <motion.span
                        animate={{
                          opacity: isActive ? 1 : 0.6,
                          fontWeight: isActive ? 700 : 500
                        }}
                        transition={{
                          duration: 0.3
                        }}
                        className="text-lg"
                        style={{
                          color: isActive ? industry.color : '#1A3D63'
                        }}
                      >
                        {industry.title}
                      </motion.span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className={`bg-gradient-to-br ${activeIndustry.bgGradient} backdrop-blur-md rounded-3xl border-2 overflow-hidden shadow-2xl`}
            style={{ borderColor: `${activeIndustry.color}30` }}
          >
            {/* Image Header with Stats */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={activeIndustry.image}
                alt={activeIndustry.title}
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${activeIndustry.color}E6 0%, ${activeIndustry.color}80 50%, transparent 100%)`
                }}
              ></div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex flex-wrap gap-2">
                  {activeIndustry.stats.map((stat, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="px-4 py-2 bg-white/95 backdrop-blur-sm text-[#0A1931] rounded-full text-base font-bold shadow-xl border-2"
                      style={{ borderColor: `${activeIndustry.color}40` }}
                    >
                      {stat}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-3xl font-bold text-[#0A1931] mb-2">
                  {activeIndustry.heading}
                </h3>
                <p className="text-lg text-[#0A1931]/80 leading-relaxed">
                  {activeIndustry.description}
                </p>
              </div>

              {/* Use Cases */}
              <div className="mb-4">
                <h4 className="text-xl font-bold text-[#0A1931] mb-3">Key Use Cases</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {activeIndustry.useCases.map((useCase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="p-4 bg-white/70 backdrop-blur-sm rounded-2xl border-2 hover:shadow-xl transition-all duration-300"
                      style={{ borderColor: `${activeIndustry.color}20` }}
                    >
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                        style={{ backgroundColor: `${activeIndustry.color}20` }}
                      >
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: activeIndustry.color }}
                        ></div>
                      </div>
                      <h5 className="text-lg font-semibold text-[#0A1931] mb-2">
                        {useCase.title}
                      </h5>
                      <p className="text-base text-[#0A1931]/70 leading-relaxed">
                        {useCase.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-xl font-bold text-[#0A1931] mb-3">Transformative Benefits</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {activeIndustry.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-start gap-2 p-3 bg-white/50 backdrop-blur-sm rounded-xl border border-white/60"
                    >
                      <div 
                        className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: activeIndustry.color }}
                      ></div>
                      <span className="text-base text-[#0A1931]/80">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}