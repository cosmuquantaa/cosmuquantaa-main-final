export function ProvenResults() {
  return (
    <section className="py-16 px-6 lg:px-8 bg-[#0A1931] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#4A7FA7] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B3CFE5] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Enterprise AI Excellence
          </h2>
          <p className="text-sm text-white/70 max-w-2xl mx-auto leading-relaxed">
            Delivering world-class AI solutions with unmatched performance, 
            reliability, and measurable business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="p-5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-base font-bold text-white mb-2">Code Enhancement</h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Automated code optimization and quality improvements that boost productivity
            </p>
          </div>

          <div className="p-5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="text-base font-bold text-white mb-2">Security First</h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Enterprise-grade security with continuous monitoring and threat detection
            </p>
          </div>

          <div className="p-5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-base font-bold text-white mb-2">Peak Performance</h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Lightning-fast processing with optimal resource usage and efficiency
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-10 border-t border-white/10">
          <div className="text-center">
            <p className="text-4xl font-bold text-[#B3CFE5] mb-2">40+</p>
            <p className="text-xs text-white/70">Active Deployments</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#B3CFE5] mb-2">99.9%</p>
            <p className="text-xs text-white/70">System Reliability</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#B3CFE5] mb-2">95%</p>
            <p className="text-xs text-white/70">Performance Gain</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#B3CFE5] mb-2">24/7</p>
            <p className="text-xs text-white/70">Operation</p>
          </div>
        </div>
      </div>
    </section>
  );
}