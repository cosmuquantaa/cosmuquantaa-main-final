import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Code2, Shield, Zap, TrendingUp, Users, Clock } from 'lucide-react';
import Hyperspeed from '@/app/components/Hyperspeed';

interface ProductPageProps {
  onBack: () => void;
}

export function ProductPageCodeReview({ onBack }: ProductPageProps) {
  const features = [
    {
      icon: Code2,
      title: 'Intelligent Code Analysis',
      description: 'Advanced AI algorithms scan your codebase for bugs, vulnerabilities, and optimization opportunities in real-time.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Automated security vulnerability detection helps you identify and fix potential threats before they reach production.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get instant feedback on code quality without slowing down your development workflow.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Identify bottlenecks and receive actionable suggestions to improve code performance and efficiency.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamlessly integrates with your existing workflows and enhances team code review processes.'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous code quality monitoring ensures your codebase maintains the highest standards.'
    }
  ];

  const benefits = [
    'Reduce code review time by up to 70%',
    'Catch critical bugs before production deployment',
    'Improve code quality and maintainability',
    'Enforce coding standards automatically',
    'Accelerate developer onboarding',
    'Comprehensive security vulnerability scanning'
  ];

  const scrollToContact = () => {
    onBack();
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Hyperspeed Background - Full Screen */}
      <div className="fixed inset-0 z-0">
        <Hyperspeed
          effectOptions={{
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 3,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 50,
            lightPairsPerRoadWay: 50,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.05, 400 * 0.15],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.2, 0.2],
            carFloorSeparation: [0.05, 1],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0x131318,
              brokenLines: 0x131318,
              leftCars: [0x00A8B5, 0x0E5EA5, 0x324555],
              rightCars: [0x002D72, 0x003D92, 0x004DB2],
              sticks: 0x00A8B5
            }
          }}
        />
      </div>

      {/* Dark Overlay for better text readability */}
      <div className="fixed inset-0 bg-black/30 z-[1]"></div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Back Button */}
        <div className="fixed top-6 left-6 z-40">
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white font-bold hover:bg-white/20 transition-colors duration-200"
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </motion.button>
        </div>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 lg:px-8 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block px-4 py-2 bg-[#00A8B5] text-white rounded-full mb-6 text-sm font-bold backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                AI-POWERED CODE REVIEW
              </motion.div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 drop-shadow-lg">
                Code Review Tool
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-10 leading-relaxed drop-shadow-md">
                Transform your development workflow with intelligent, automated code analysis that catches bugs, enforces standards, and optimizes performance—all in real-time.
              </p>

              <motion.button
                onClick={scrollToContact}
                className="px-10 py-4 bg-gradient-to-r from-[#002D72] to-[#00A8B5] text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 168, 181, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                Request a Demo
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6 lg:px-8 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
                Powerful Features
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                Everything you need to maintain exceptional code quality and accelerate your development cycle.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-[#00A8B5]/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#002D72] to-[#00A8B5] rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-black/60 to-black/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
                Why Choose Our Code Review Tool?
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                Measurable impact on your development process and code quality.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-[#00A8B5] flex-shrink-0 mt-1" />
                  <p className="text-lg text-white">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-8 bg-black/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                Ready to Transform Your Code Quality?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Join leading development teams who trust our AI-powered code review tool to maintain exceptional standards.
              </p>
              <motion.button
                onClick={scrollToContact}
                className="px-10 py-4 bg-gradient-to-r from-[#002D72] to-[#00A8B5] text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 168, 181, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started Today
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
