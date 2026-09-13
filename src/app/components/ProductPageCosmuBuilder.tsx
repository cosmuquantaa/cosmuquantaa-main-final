import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, FileText, Zap, Code, Layers, Rocket, Shield, Cpu } from 'lucide-react';
import FloatingLines from '@/app/components/FloatingLines';

interface ProductPageProps {
  onBack: () => void;
}

export function ProductPageCosmuBuilder({ onBack }: ProductPageProps) {

  const features = [
    {
      icon: FileText,
      title: 'SRS-Driven Development',
      description: 'Transform your Software Requirements Specification documents into fully functional projects automatically.'
    },
    {
      icon: Code,
      title: 'Intelligent Code Generation',
      description: 'Generate production-ready code that follows best practices and your specified architecture patterns.'
    },
    {
      icon: Layers,
      title: 'Full Stack Support',
      description: 'Build complete applications including frontend, backend, database schemas, and API integrations.'
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Go from requirements to working prototype with greater speed and agility. Perfect for validating ideas quickly.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Built-in testing, security checks, and code quality validation ensure robust deliverables.'
    },
    {
      icon: Rocket,
      title: 'Deploy Ready',
      description: 'Generated projects come with deployment configurations and CI/CD pipelines ready to go.'
    }
  ];

  const benefits = [
    'Accelerate development cycles and bring ideas to implementation faster',
    'Ensure requirements are accurately implemented',
    'Reduce technical debt from day one',
    'Maintain consistency across all projects',
    'Enable non-technical stakeholders to contribute',
    'Expand development capacity efficiently'
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

  const handleStartBuilding = () => {
    window.location.assign('https://cosmubuilder.tech/login');
  };

  return (
    <div className="min-h-screen bg-[#0A0B0F] relative overflow-hidden">
      {/* FloatingLines Background - Full Screen */}
      <div className="fixed inset-0 z-0">
        <FloatingLines
          enabledWaves={['middle', 'bottom', 'top']}
          linesGradient={['#002D72', '#00A8B5', '#0052CC']}
          lineCount={[8, 6, 4]}
          lineDistance={[3, 5, 7]}
          animationSpeed={0.8}
          interactive={true}
          bendRadius={5.0}
          bendStrength={-0.3}
          mouseDamping={0.08}
          parallax={true}
          parallaxStrength={0.15}
          mixBlendMode="screen"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Glass-morphism Navigation */}
        <div className="fixed top-0 left-0 right-0 z-40">
          <div className="flex items-center justify-between px-6 lg:px-8 py-6">
            <motion.button
              onClick={onBack}
              className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 text-white font-bold hover:bg-white/10 transition-colors duration-200"
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </motion.button>
          </div>
        </div>

        {/* Hero Section - Centered layout */}
        <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-5xl mx-auto w-full">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm text-[#00A8B5] rounded-full mb-8 text-sm font-bold border border-white/10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Cpu className="w-4 h-4" />
                AI-POWERED PROJECT GENERATION
              </motion.div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none">
                  CosmuBuilder
                </h1>
                <span className="px-3.5 py-1.5 bg-[#00A8B5]/20 text-[#00A8B5] border border-[#00A8B5]/40 rounded-full text-sm sm:text-base font-semibold tracking-wide uppercase">
                  (Launching soon)
                </span>
              </div>
              
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
                Transform your Software Requirements Specifications into complete, production-ready projects with automated precision.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  onClick={handleStartBuilding}
                  className="w-full sm:w-auto px-10 py-4 bg-white text-[#0A0B0F] rounded-lg font-bold text-lg hover:bg-white/90 transition-all duration-200 shadow-xl"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Building
                </motion.button>
                <motion.button
                  onClick={scrollToContact}
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-lg font-bold text-lg hover:bg-white/15 border border-white/20 transition-all duration-200"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Early Access
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Features Grid - Clean, minimal layout */}
        <section className="py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
                Build Smarter
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Every feature designed to turn your vision into reality with precision and speed.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="w-14 h-14 bg-[#00A8B5]/10 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-[#00A8B5]" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section - Two column layout */}
        <section className="py-32 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-6xl md:text-7xl font-black text-white mb-8">
                  Why Cosmu Builder?
                </h2>
                <p className="text-xl text-white/60 leading-relaxed">
                  Bridge the gap between requirements and implementation. Let AI handle the heavy lifting while you focus on what matters most—your product vision.
                </p>
              </motion.div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#00A8B5] flex-shrink-0 mt-1" />
                    <p className="text-lg text-white/90 font-medium">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section - Horizontal timeline */}
        <section className="py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
                Simple Process
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                From documentation to deployment in four straightforward steps.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Upload SRS', desc: 'Provide your Software Requirements Specification document' },
                { step: '02', title: 'AI Analysis', desc: 'Our AI analyzes and structures your requirements' },
                { step: '03', title: 'Generate Code', desc: 'Production-ready code is generated automatically' },
                { step: '04', title: 'Deploy', desc: 'Review, customize, and deploy your project' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#00A8B5]/50 transition-all duration-300 h-full">
                    <div className="text-7xl font-black text-white/10 mb-6">{item.step}</div>
                    <h3 className="text-2xl font-black text-white mb-3">{item.title}</h3>
                    <p className="text-white/60">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/20" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Large, centered */}
        <section className="py-32 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
                Ready to Build<br />at Light Speed?
              </h2>
              <p className="text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join forward-thinking teams using Cosmu Builder to accelerate their development cycles and bring products to market faster.
              </p>
              <motion.button
                onClick={scrollToContact}
                className="px-12 py-5 bg-white text-[#0A0B0F] rounded-lg font-bold text-xl hover:bg-white/90 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Early Access
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
