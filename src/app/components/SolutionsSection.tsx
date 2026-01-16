import { useState } from 'react';
import { Check } from 'lucide-react';

interface Solution {
  id: string;
  title: string;
  description: string;
  features: string[];
}

const solutions: Solution[] = [
  {
    id: 'agentic-ai',
    title: 'Agentic AI Systems',
    description: 'Our autonomous AI agents operate independently, making intelligent decisions and adapting to complex business environments without constant human intervention.',
    features: [
      'Self-learning algorithms that improve over time',
      'Autonomous decision-making capabilities',
      'Multi-agent coordination and collaboration',
      'Real-time adaptation to changing conditions',
      'Continuous performance optimization',
      'Intelligent task prioritization and execution'
    ]
  },
  {
    id: 'automation',
    title: 'Intelligent Automation',
    description: 'Streamline operations with AI-driven workflow automation that adapts to your business needs, reduces manual effort, and optimizes resource allocation.',
    features: [
      'End-to-end process automation',
      'Intelligent task routing and prioritization',
      'Dynamic workflow optimization',
      'Cross-system integration',
      'Automated quality assurance',
      'Real-time performance monitoring'
    ]
  },
  {
    id: 'analytics',
    title: 'Advanced Analytics',
    description: 'Leverage predictive models and advanced analytics to make data-driven decisions. Uncover hidden patterns, forecast trends, and gain actionable insights in real-time.',
    features: [
      'Real-time predictive analytics',
      'Pattern recognition and anomaly detection',
      'Automated insight generation',
      'Advanced data visualization',
      'Custom reporting and dashboards',
      'Strategic decision support'
    ]
  }
];

export function SolutionsSection() {
  const [activeId, setActiveId] = useState(solutions[0].id);
  const activeSolution = solutions.find(s => s.id === activeId) || solutions[0];

  return (
    <section id="solutions" className="py-20 px-6 lg:px-8 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A202C] mb-4">
            Comprehensive AI Solutions
          </h2>
          <p className="text-xl text-[#4A5568] max-w-3xl mx-auto">
            Enterprise-grade autonomous intelligence systems designed to transform your business operations.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => setActiveId(solution.id)}
              className={`px-6 py-3 rounded-md transition-all duration-200 ${
                activeId === solution.id
                  ? 'bg-[#0A2540] text-white'
                  : 'bg-white text-[#1A202C] border border-[#E2E8F0] hover:border-[#0A2540]'
              }`}
            >
              {solution.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border border-[#E2E8F0] p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Description */}
            <div>
              <h3 className="text-3xl font-bold text-[#1A202C] mb-4">
                {activeSolution.title}
              </h3>
              <p className="text-lg text-[#4A5568] mb-8 leading-relaxed">
                {activeSolution.description}
              </p>

              {/* Features List */}
              <div className="space-y-4">
                {activeSolution.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0A2540] flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#2D3748]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Chart/Visualization Placeholder */}
            <div className="bg-[#F8F9FA] rounded-lg p-8 flex items-center justify-center">
              <div className="w-full">
                {/* Simple Bar Chart Representation */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-sm text-[#4A5568]">Efficiency</div>
                    <div className="flex-1 bg-white rounded-full h-8">
                      <div className="bg-[#0A2540] h-8 rounded-full flex items-center justify-end pr-3" style={{ width: '95%' }}>
                        <span className="text-white text-sm font-semibold">95%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-sm text-[#4A5568]">Accuracy</div>
                    <div className="flex-1 bg-white rounded-full h-8">
                      <div className="bg-[#003366] h-8 rounded-full flex items-center justify-end pr-3" style={{ width: '92%' }}>
                        <span className="text-white text-sm font-semibold">92%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-sm text-[#4A5568]">Speed</div>
                    <div className="flex-1 bg-white rounded-full h-8">
                      <div className="bg-[#0A2540] h-8 rounded-full flex items-center justify-end pr-3" style={{ width: '88%' }}>
                        <span className="text-white text-sm font-semibold">88%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-sm text-[#4A5568]">ROI</div>
                    <div className="flex-1 bg-white rounded-full h-8">
                      <div className="bg-[#003366] h-8 rounded-full flex items-center justify-end pr-3" style={{ width: '97%' }}>
                        <span className="text-white text-sm font-semibold">97%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
