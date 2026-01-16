import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Eye, Brain, FileSearch, Shield, Zap, TrendingUp } from 'lucide-react';
import Orb from '@/app/components/Orb';

interface ProductPageProps {
  onBack: () => void;
}

export function ProductPageCosmuView({ onBack }: ProductPageProps) {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Understanding',
      description: 'Advanced machine learning algorithms that comprehend context, extract insights, and understand document semantics beyond simple OCR.'
    },
    {
      icon: FileSearch,
      title: 'Multi-Format Support',
      description: 'Analyze PDFs, images, spreadsheets, presentations, and more. Extract structured data from any document type.'
    },
    {
      icon: Eye,
      title: 'Visual Intelligence',
      description: 'Detect tables, charts, diagrams, and visual elements with precision. Transform visual data into actionable insights.'
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Process thousands of documents in seconds. Scale effortlessly from single files to enterprise document libraries.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, compliance-ready infrastructure, and complete data privacy. Your documents never leave your control.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'Models that improve with every document processed. Custom training for domain-specific terminology and formats.'
    }
  ];

  const benefits = [
    'Reduce manual document review time by 95%',
    'Extract structured data with 99.9% accuracy',
    'Process multilingual documents seamlessly',
    'Integrate with existing workflows via API',
    'Detect anomalies and compliance issues automatically',
    'Generate intelligent summaries and insights'
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
    <div className="min-h-screen bg-[#0A0B0F] relative overflow-hidden">
      {/* Orb Background - Fixed Full Screen */}
      <div className="fixed inset-0 z-0">
        <Orb
          hue={200}
          hoverIntensity={0.6}
          rotateOnHover={true}
          forceHoverState={false}
          backgroundColor="#0A0B0F"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Glass Navigation */}
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
            
            <div className="flex items-center gap-8">
              <div className="text-2xl font-black text-white">Cosmu<span className="text-[#00A8B5]">Quantaa</span></div>
            </div>
          </div>
        </div>

        {/* Hero Section - Text Inside/Around Orb */}
        <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 pb-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="relative flex items-center justify-center">
              {/* Central Content - Inside the Orb Visual Area */}
              <motion.div
                className="text-center max-w-4xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.div
                  className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm text-[#00A8B5] rounded-full mb-8 text-sm font-bold border border-white/10"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  INTELLIGENT DOCUMENT ANALYSIS
                </motion.div>
                
                <motion.h1 
                  className="text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-6 leading-none"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  CosmuView
                </motion.h1>
                
                <motion.p 
                  className="text-2xl md:text-3xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  See beyond the text. Understand documents like never before with AI that truly comprehends.
                </motion.p>

                <motion.button
                  onClick={scrollToContact}
                  className="px-12 py-5 bg-gradient-to-r from-[#002D72] to-[#00A8B5] text-white rounded-lg font-bold text-xl hover:shadow-2xl hover:shadow-[#00A8B5]/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Experience CosmuView
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid - Floating Cards */}
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
                Intelligence You Can See
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Transform unstructured documents into structured knowledge with unprecedented accuracy.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#002D72] to-[#00A8B5] rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
                  
                  {/* Card */}
                  <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#00A8B5]/50 transition-all duration-300 h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#002D72]/20 to-[#00A8B5]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-[#00A8B5]" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section - Overlapping Design */}
        <section className="py-32 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: '99.9%', label: 'Accuracy Rate', desc: 'Industry-leading precision' },
                { value: '10x', label: 'Faster Processing', desc: 'Than manual review' },
                { value: '5+', label: 'Document Types', desc: 'Supported formats' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00A8B5] to-[#002D72] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
                  <div className="relative bg-[#0A0B0F]/90 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center">
                    <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00A8B5] to-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xl font-black text-white mb-2">
                      {stat.label}
                    </div>
                    <div className="text-sm text-white/60">
                      {stat.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section - Asymmetric Layout */}
        <section className="py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-16 items-center">
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
                  The Power of<br />True Understanding
                </h2>
                <p className="text-xl text-white/60 leading-relaxed">
                  Stop reading documents. Start understanding them. CosmuView transforms how organizations interact with information.
                </p>
              </motion.div>

              <div className="lg:col-span-3 space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-[#00A8B5]/50 hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#00A8B5] flex-shrink-0" />
                    <p className="text-lg text-white/90 font-medium">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases - Diagonal Cards */}
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
                Built for Every Industry
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                From legal contracts to medical records, financial statements to technical manuals.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Legal', desc: 'Contract analysis & due diligence' },
                { title: 'Healthcare', desc: 'Medical record processing' },
                { title: 'Finance', desc: 'Statement analysis & auditing' },
                { title: 'Insurance', desc: 'Claims processing automation' }
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#00A8B5]/50 transition-all duration-300 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30, rotate: -2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ rotate: 2 }}
                >
                  <h3 className="text-3xl font-black text-white mb-3">{useCase.title}</h3>
                  <p className="text-white/60">{useCase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Immersive */}
        <section className="py-32 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Mega Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#002D72] via-[#00A8B5] to-[#002D72] rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500" />
              
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-16 border border-white/20 text-center">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
                  Ready to See<br />the Difference?
                </h2>
                <p className="text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Join industry leaders who trust CosmuView to unlock insights hidden in their documents.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.button
                    onClick={scrollToContact}
                    className="px-12 py-5 bg-white text-[#0A0B0F] rounded-lg font-bold text-xl hover:bg-white/90 transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request Demo
                  </motion.button>
                  <motion.a
                    href="https://www.linkedin.com/posts/k-sricharan01_ai4andhrapolice-4sightai-appolice-activity-7345734993286963200-CzeO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-12 py-5 bg-[#00A8B5] text-white rounded-lg font-bold text-xl hover:bg-[#00A8B5]/90 transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Work
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}