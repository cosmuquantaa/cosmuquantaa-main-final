export function StatsSection() {
  const stats = [
    { 
      value: '500+', 
      label: 'AI Models Deployed',
      color: '#4A7FA7',
      bgGradient: 'from-[#4A7FA7]/10 to-[#B3CFE5]/5'
    },
    { 
      value: '98%', 
      label: 'Client Satisfaction',
      color: '#1A3D63',
      bgGradient: 'from-[#1A3D63]/10 to-[#4A7FA7]/5'
    },
    { 
      value: '10M+', 
      label: 'Transactions Processed',
      color: '#4A7FA7',
      bgGradient: 'from-[#4A7FA7]/10 to-[#B3CFE5]/5'
    },
    { 
      value: '24/7', 
      label: 'Autonomous Operations',
      color: '#1A3D63',
      bgGradient: 'from-[#1A3D63]/10 to-[#4A7FA7]/5'
    }
  ];

  return (
    <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-white to-[#F6FAFD] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-64 h-64 bg-[#4A7FA7]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-[#B3CFE5]/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 bg-gradient-to-br ${stat.bgGradient} backdrop-blur-sm rounded-2xl border-2 hover:shadow-xl transition-all duration-300 hover:scale-105`}
              style={{ borderColor: `${stat.color}30` }}
            >
              <div 
                className="text-5xl font-bold mb-3"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-lg text-[#0A1931]/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}