import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Zap, ShoppingCart, Package, TrendingUp, Clock, MapPin } from 'lucide-react';
import LightPillar from '@/app/components/LightPillar';

interface ProductPageProps {
  onBack: () => void;
}

export function ProductPageQuickify({ onBack }: ProductPageProps) {
  const features = [
    // {
    //   icon: Zap,
    //   title: 'Lightning-Fast Delivery',
    //   description: '10-minute delivery promise for your everyday essentials. Get what you need, when you need it, with unprecedented speed.'
    // },
    // {
    //   icon: ShoppingCart,
    //   title: 'Smart Shopping Experience',
    //   description: 'AI-powered recommendations and intuitive interface make shopping effortless. Find products faster with intelligent search.'
    // },
    // {
    //   icon: Package,
    //   title: 'Real-Time Inventory',
    //   description: 'Live inventory tracking ensures you see only what\'s available. No more disappointments with out-of-stock items.'
    // },
    {
      icon: TrendingUp,
      title: 'Dynamic Pricing',
      description: 'Smart pricing algorithms ensure competitive rates while maintaining quality. Get the best value for your money.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Shop anytime, anywhere. Our platform is always ready to serve your needs, day or night.'
    },
    {
      icon: MapPin,
      title: 'Hyperlocal Network',
      description: 'Extensive dark store network ensures coverage in your area. Fast delivery from stores nearest to you.'
    }
  ];

  const benefits = [
    'Ultra-fast services guarantee',
    'Wide selection of every day-to-day services',
    'Minimal delivery Services',
    'Real-time tracking with live updates',
    'Seamless returns and refunds policy'
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
      {/* LightPillar Background - Full Screen */}
      <div className="fixed inset-0 z-0">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1.0}
          rotationSpeed={0.3}
          glowAmount={0.005}
          pillarWidth={3.0}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={0}
          interactive={false}
          mixBlendMode="normal"
        />
      </div>

      {/* Dark Overlay for better text readability */}
      <div className="fixed inset-0 bg-black/20 z-[1]"></div>

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
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#5227FF] to-[#FF9FFC] text-white rounded-full mb-6 text-sm font-bold backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                QUICK COMMERCE REIMAGINED
              </motion.div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white drop-shadow-2xl">
                  Quickify
                </h1>
                <span className="px-3.5 py-1.5 bg-[#5227FF]/30 text-[#FF9FFC] border border-[#FF9FFC]/40 rounded-full text-sm sm:text-base font-semibold tracking-wide uppercase">
                  (In development)
                </span>
              </div>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-10 leading-relaxed drop-shadow-lg">
                Experience the future of instant commerce. Get your services delivered with AI-powered logistics and a hyperlocal network.
              </p>

              <motion.button
                onClick={scrollToContact}
                className="px-10 py-4 bg-gradient-to-r from-[#5227FF] to-[#FF9FFC] text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 159, 252, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                Partner With Us
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6 lg:px-8 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
                Why Quickify?
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                Cutting-edge technology meets unparalleled convenience in quick commerce.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-[#FF9FFC]/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#5227FF] to-[#FF9FFC] rounded-xl flex items-center justify-center mb-6">
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
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-black/40 to-black/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
                Customer Benefits
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                Designed to make your life easier, faster, and more convenient.
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
                  <CheckCircle2 className="w-6 h-6 text-[#FF9FFC] flex-shrink-0 mt-1" />
                  <p className="text-lg text-white">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-6 lg:px-8 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
                How It Works
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                From order to doorstep in just three simple steps.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Browse Services & Order', desc: 'Choose wide variety of services in our app', icon: ShoppingCart },
                { step: '02', title: 'We assess', desc: 'our services for you to order to make delivery effortless', icon: Package },
                { step: '03', title: 'Delivered Fast', desc: 'Receive your order in an instant', icon: Zap }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="absolute top-4 right-4 text-7xl font-black text-white/5">{item.step}</div>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#5227FF] to-[#FF9FFC] rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {/* <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-black/50 to-black/70 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: '10min', label: 'Delivery Time' },
                { number: '3000+', label: 'Products' },
                { number: '50+', label: 'Dark Stores' },
                { number: '100K+', label: 'Happy Users' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#5227FF] to-[#FF9FFC] mb-2">
                    {stat.number}
                  </div>
                  <p className="text-white/70 font-bold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-8 bg-black/40 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                Ready to Experience Quick Commerce?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Partner with Quickify to revolutionize last-mile delivery in your city.
              </p>
              <motion.button
                onClick={scrollToContact}
                className="px-10 py-4 bg-gradient-to-r from-[#5227FF] to-[#FF9FFC] text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 159, 252, 0.4)' }}
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
