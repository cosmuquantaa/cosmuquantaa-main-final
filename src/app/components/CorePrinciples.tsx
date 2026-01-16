import { motion } from 'motion/react';
import Carousel from '@/app/components/Carousel';
import { useState, useEffect } from 'react';

const principles = [
  {
    id: 1,
    title: 'Discovery & Alignment',
    subtitle: 'CURRENT PHASE',
    description: 'We start by understanding your goals, workflows, and constraints. Together we identify the highest-impact opportunities where AI can move the needle for your team.',
    details: [
      'Deep-dive workshops with stakeholders',
      'Process mapping and pain point identification',
      'ROI assessment and prioritization',
      'Technical feasibility analysis'
    ],
    image: 'https://i.pinimg.com/736x/79/ab/13/79ab1362c110f812bb95abd248645763.jpg'
  },
  {
    id: 2,
    title: 'Design & Architecture',
    subtitle: 'PLANNING PHASE',
    description: 'Our team architects scalable, secure AI systems tailored to your infrastructure. We create detailed blueprints that ensure seamless integration with your existing technology stack.',
    details: [
      'System design and data flow mapping',
      'Security and compliance framework',
      'Integration strategy with existing systems',
      'Performance and scalability planning'
    ],
    image: 'https://i.pinimg.com/736x/4c/b7/1b/4cb71b44474312bdbac9354164283ac8.jpg'
  },
  {
    id: 3,
    title: 'Development & Training',
    subtitle: 'BUILD PHASE',
    description: 'We build production-ready AI models with rigorous testing and validation. Custom training pipelines ensure your AI understands your unique business context and delivers accurate results.',
    details: [
      'Custom model development and fine-tuning',
      'Comprehensive testing and validation',
      'Performance optimization',
      'Quality assurance protocols'
    ],
    image: 'https://i.pinimg.com/1200x/54/c2/78/54c278ca5113c6ac7f3f7d460e4e5461.jpg'
  },
  {
    id: 4,
    title: 'Deployment & Scale',
    subtitle: 'LAUNCH PHASE',
    description: 'Seamless deployment with continuous monitoring and optimization. We ensure your AI systems deliver consistent value while providing ongoing support and enhancement as your needs evolve.',
    details: [
      'Zero-downtime deployment strategy',
      'Real-time monitoring and alerting',
      'Continuous optimization and updates',
      'Dedicated success management'
    ],
    image: 'https://i.pinimg.com/1200x/7f/26/d5/7f26d548d3b1e78744640c5f010a8825.jpg'
  }
];

export function CorePrinciples() {
  const [carouselWidth, setCarouselWidth] = useState(1100);

  useEffect(() => {
    const updateWidth = () => {
      setCarouselWidth(Math.min(1100, window.innerWidth - 40));
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <section id="solutions" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header - Just the main title */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white">
            <span className="text-[#00A8B5]">OUR STRATEGY</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="flex justify-center overflow-hidden">
          <Carousel
            items={principles}
            baseWidth={carouselWidth}
            autoplay={true}
            autoplayDelay={5000}
            pauseOnHover={true}
            loop={true}
          />
        </div>
      </div>
    </section>
  );
}