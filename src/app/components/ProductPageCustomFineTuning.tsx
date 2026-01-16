import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Cpu, Database, Gauge, Lock, RefreshCw, Target } from 'lucide-react';
import GradientBlinds from '@/app/components/GradientBlinds';

interface ProductPageProps {
  onBack: () => void;
}

export function ProductPageCustomFineTuning({ onBack }: ProductPageProps) {
  const features = [
    {
      icon: Target,
      title: 'Domain-Specific Training',
      description: 'Fine-tune AI models with your proprietary data to achieve superior performance in your specific industry and use case.'
    },
    {
      icon: Database,
      title: 'Secure Data Processing',
      description: 'Your training data remains private and secure throughout the entire fine-tuning process with enterprise-grade encryption.'
    },
    {
      icon: Cpu,
      title: 'Optimized Performance',
      description: 'Achieve up to 10x better accuracy on domain-specific tasks compared to general-purpose AI models.'
    },
    {
      icon: Gauge,
      title: 'Real-Time Monitoring',
      description: 'Track training progress, performance metrics, and model improvements with comprehensive dashboards.'
    },
    {
      icon: RefreshCw,
      title: 'Continuous Learning',
      description: 'Keep models up-to-date with automatic retraining pipelines as new data becomes available.'
    },
    {
      icon: Lock,
      title: 'Compliance Ready',
      description: 'Meet regulatory requirements with built-in compliance features and detailed audit trails.'
    }
  ];

  const benefits = [
    'Train models on your proprietary datasets',
    'Achieve industry-leading accuracy for your domain',
    'Reduce inference costs by up to 80%',
    'Full control over model behavior and outputs',
    'Seamless integration with existing workflows',
    'Enterprise-grade security and compliance'
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
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* GradientBlinds Background - Full Screen */}
      <div className="fixed inset-0 z-0">
        <GradientBlinds
          gradientColors={['#FF9FFC', '#5227FF']}
          angle={0}
          noise={0.3}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Back Button - Blends with background */}
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
                className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full mb-6 text-sm font-bold border border-white/30"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                ENTERPRISE AI CUSTOMIZATION
              </motion.div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 drop-shadow-2xl">
                Custom Fine-Tuning
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-10 leading-relaxed drop-shadow-lg">
                Unlock the full potential of AI with models tailored to your unique business needs. Fine-tune state-of-the-art models using your proprietary data for unmatched accuracy and performance.
              </p>

              <motion.button
                onClick={scrollToContact}
                className="px-10 py-4 bg-white text-[#002D72] rounded-lg font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-200 hover:bg-white/95"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                Request a Demo
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
                Powerful Capabilities
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Everything you need to build, train, and deploy custom AI models that drive real business value.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base text-white/80 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 lg:px-8 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
                Why Custom Fine-Tuning?
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Transform generic AI into a strategic advantage tailored specifically for your business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
                Simple Process
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Get started with custom fine-tuning in four straightforward steps.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Data Preparation', desc: 'Upload and prepare your proprietary training data' },
                { step: '02', title: 'Model Selection', desc: 'Choose the base model that fits your use case' },
                { step: '03', title: 'Fine-Tuning', desc: 'Train the model with your data and parameters' },
                { step: '04', title: 'Deployment', desc: 'Deploy and integrate your custom model' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-6xl font-black text-white/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-black text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-8 bg-white/10 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                Ready to Build Your Custom AI?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Partner with us to create AI models that understand your business as well as you do.
              </p>
              <motion.button
                onClick={scrollToContact}
                className="px-10 py-4 bg-white text-[#002D72] rounded-lg font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-200 hover:bg-white/95"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.3)' }}
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