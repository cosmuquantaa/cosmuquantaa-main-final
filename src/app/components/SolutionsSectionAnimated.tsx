import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Code, Workflow, BarChart3, Sparkles, Shield } from 'lucide-react';

interface Solution {
  id: string;
  title: string;
  icon: any;
  heading: string;
  description: string;
  details: string[];
  features: {
    title: string;
    description: string;
  }[];
  color: string;
  bgGradient: string;
}

const solutions: Solution[] = [
  {
    id: 'agentic-ai',
    title: 'Agentic AI',
    icon: Brain,
    heading: 'Autonomous Intelligence Systems',
    description: 'Our Agentic AI systems operate independently, making intelligent decisions and adapting to complex business environments without constant human intervention. Experience true autonomous intelligence that learns, evolves, and optimizes continuously.',
    details: [
      'Self-learning algorithms that improve over time',
      'Autonomous decision-making capabilities',
      'Multi-agent coordination and collaboration',
      'Real-time adaptation to changing conditions'
    ],
    features: [
      {
        title: 'Intelligent Automation',
        description: 'Automate complex workflows with AI agents that understand context and make smart decisions'
      },
      {
        title: 'Continuous Learning',
        description: 'Systems that learn from every interaction and improve performance automatically'
      },
      {
        title: 'Adaptive Responses',
        description: 'Dynamic adjustment to new scenarios without manual reprogramming'
      }
    ],
    color: '#4A7FA7',
    bgGradient: 'from-[#4A7FA7]/10 to-[#B3CFE5]/5'
  },
  {
    id: 'code-optimization',
    title: 'Code Enhancement',
    icon: Code,
    heading: 'AI-Powered Code Optimization',
    description: 'Transform your codebase with intelligent optimization that enhances performance, identifies vulnerabilities, and ensures best practices. Our AI agents analyze, refactor, and improve your code continuously.',
    details: [
      'Automated code review and optimization',
      'Security vulnerability detection',
      'Performance benchmark identification',
      'Best practice enforcement'
    ],
    features: [
      {
        title: 'Smart Refactoring',
        description: 'Intelligent code improvements that maintain functionality while boosting performance'
      },
      {
        title: 'Quality Assurance',
        description: 'Automated testing and validation to ensure code reliability'
      },
      {
        title: 'Technical Debt',
        description: 'Identify and resolve technical debt before it impacts your project'
      }
    ],
    color: '#1A3D63',
    bgGradient: 'from-[#1A3D63]/10 to-[#4A7FA7]/5'
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    icon: Workflow,
    heading: 'Intelligent Process Automation',
    description: 'Streamline operations with AI-driven workflow automation that adapts to your business needs, reduces manual effort, and optimizes resource allocation across your organization.',
    details: [
      'End-to-end process automation',
      'Intelligent task routing and prioritization',
      'Dynamic workflow optimization',
      'Cross-system integration'
    ],
    features: [
      {
        title: 'Process Mining',
        description: 'Discover and optimize business processes automatically'
      },
      {
        title: 'Smart Routing',
        description: 'Intelligent task distribution based on skills and availability'
      },
      {
        title: 'Auto-Scaling',
        description: 'Dynamically adjust resources based on workload'
      }
    ],
    color: '#4A7FA7',
    bgGradient: 'from-[#4A7FA7]/10 to-[#B3CFE5]/5'
  },
  {
    id: 'advanced-analytics',
    title: 'Advanced Analytics',
    icon: BarChart3,
    heading: 'Predictive Intelligence & Insights',
    description: 'Leverage advanced analytics and predictive models to make data-driven decisions. Our AI systems uncover hidden patterns, forecast trends, and provide actionable insights in real-time.',
    details: [
      'Real-time predictive analytics',
      'Pattern recognition and anomaly detection',
      'Automated insight generation',
      'Advanced data visualization'
    ],
    features: [
      {
        title: 'Predictive Models',
        description: 'Forecast trends and outcomes with high accuracy'
      },
      {
        title: 'Anomaly Detection',
        description: 'Identify unusual patterns before they become problems'
      },
      {
        title: 'Smart Dashboards',
        description: 'Interactive visualizations that reveal insights instantly'
      }
    ],
    color: '#1A3D63',
    bgGradient: 'from-[#1A3D63]/10 to-[#4A7FA7]/5'
  },
  {
    id: 'custom-models',
    title: 'Custom AI Models',
    icon: Sparkles,
    heading: 'Tailored AI Solutions',
    description: 'Build custom AI models specifically designed for your unique business challenges. Our expert team develops, trains, and deploys models that deliver measurable results for your organization.',
    details: [
      'Domain-specific model development',
      'Custom training on your data',
      'Continuous model refinement',
      'Seamless deployment and integration'
    ],
    features: [
      {
        title: 'Custom Training',
        description: 'Models trained specifically on your business data'
      },
      {
        title: 'Transfer Learning',
        description: 'Leverage pre-trained models and adapt to your needs'
      },
      {
        title: 'Model Optimization',
        description: 'Fine-tuned performance for your specific use case'
      }
    ],
    color: '#4A7FA7',
    bgGradient: 'from-[#4A7FA7]/10 to-[#B3CFE5]/5'
  },
  {
    id: 'ai-security',
    title: 'AI Security',
    icon: Shield,
    heading: 'Enterprise-Grade AI Security',
    description: 'Protect your AI systems with comprehensive security measures. Our solutions ensure data privacy, model integrity, and compliance with industry standards while maintaining optimal performance.',
    details: [
      'AI model security and protection',
      'Data privacy and encryption',
      'Compliance monitoring and reporting',
      'Threat detection and response'
    ],
    features: [
      {
        title: 'Model Protection',
        description: 'Safeguard AI models from attacks and unauthorized access'
      },
      {
        title: 'Data Privacy',
        description: 'Enterprise-grade encryption and privacy controls'
      },
      {
        title: 'Compliance',
        description: 'Meet regulatory requirements across industries'
      }
    ],
    color: '#1A3D63',
    bgGradient: 'from-[#1A3D63]/10 to-[#4A7FA7]/5'
  }
];

export function SolutionsSectionAnimated() {
  const [activeId, setActiveId] = useState(solutions[0].id);
  const activeSolution = solutions.find(s => s.id === activeId) || solutions[0];

  return (
    <section id="solutions" className="min-h-screen py-12 px-6 lg:px-8 bg-gradient-to-b from-[#F6FAFD] to-white relative overflow-hidden flex items-center">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#B3CFE5]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4A7FA7]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#0A1931] via-[#1A3D63] to-[#4A7FA7] bg-clip-text text-transparent mb-3 leading-tight">
            Comprehensive AI Solutions
          </h2>
          <p className="text-lg text-[#0A1931]/80 max-w-3xl mx-auto leading-relaxed">
            Comprehensive autonomous intelligence systems designed to transform your business operations and drive meaningful results.
          </p>
        </div>

        {/* Horizontal Tab Navigation */}
        <div className="mb-6">
          <div className="relative">
            {/* Horizontal Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B3CFE5]/20 via-[#4A7FA7]/30 to-[#B3CFE5]/20"></div>
            
            {/* Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-2 relative pb-3">
              {solutions.map((solution) => {
                const isActive = activeId === solution.id;
                
                return (
                  <button
                    key={solution.id}
                    onClick={() => setActiveId(solution.id)}
                    className="relative px-4 py-2 rounded-t-lg transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? `${solution.color}15` : 'transparent'
                    }}
                  >
                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="solutionActiveIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full"
                        style={{ backgroundColor: solution.color }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 35
                        }}
                      />
                    )}
                    
                    {/* Title */}
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
                        color: isActive ? solution.color : '#1A3D63'
                      }}
                    >
                      {solution.title}
                    </motion.span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSolution.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className={`bg-gradient-to-br ${activeSolution.bgGradient} backdrop-blur-md rounded-3xl border-2 p-6 shadow-2xl`}
            style={{ borderColor: `${activeSolution.color}30` }}
          >
            {/* Header */}
            <div className="mb-5">
              <div className="flex items-center gap-4 mb-3">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl"
                  style={{ 
                    background: `linear-gradient(135deg, ${activeSolution.color} 0%, ${activeSolution.color}CC 100%)`
                  }}
                >
                  <activeSolution.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#0A1931]">
                  {activeSolution.heading}
                </h3>
              </div>
              <p className="text-lg text-[#0A1931]/80 leading-relaxed">
                {activeSolution.description}
              </p>
            </div>

            {/* Key Details */}
            <div className="mb-5">
              <h4 className="text-xl font-bold text-[#0A1931] mb-3">Key Capabilities</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {activeSolution.details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-2 p-3 bg-white/50 backdrop-blur-sm rounded-xl border border-white/60"
                  >
                    <div 
                      className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                      style={{ backgroundColor: activeSolution.color }}
                    ></div>
                    <span className="text-base text-[#0A1931]/80">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div>
              <h4 className="text-xl font-bold text-[#0A1931] mb-3">Featured Solutions</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {activeSolution.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="p-4 bg-white/70 backdrop-blur-sm rounded-2xl border-2 hover:shadow-xl transition-all duration-300"
                    style={{ 
                      borderColor: `${activeSolution.color}20`,
                    }}
                  >
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ backgroundColor: `${activeSolution.color}20` }}
                    >
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: activeSolution.color }}
                      ></div>
                    </div>
                    <h5 className="text-lg font-semibold text-[#0A1931] mb-2">
                      {feature.title}
                    </h5>
                    <p className="text-base text-[#0A1931]/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}