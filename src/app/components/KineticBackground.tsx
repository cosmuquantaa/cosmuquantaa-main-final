import { motion } from 'motion/react';

export function KineticBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Flowing Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#002D72" />
            <stop offset="50%" stopColor="#00A8B5" />
            <stop offset="100%" stopColor="#002D72" />
          </linearGradient>
        </defs>
        
        {/* Animated flowing lines */}
        {[...Array(12)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${i * 120} 0 Q ${i * 120 + 60} ${200 + i * 50} ${i * 120} ${400 + i * 100} T ${i * 120} 800`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.3, 0],
              y: [0, -50, 0]
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </svg>

      {/* Floating Dots - Increased volume */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? '#002D72' : '#00A8B5',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Grid with fade to edges */}
      <div className="absolute inset-0 opacity-15" style={{
        backgroundImage: `
          linear-gradient(#002D72 1.5px, transparent 1.5px),
          linear-gradient(90deg, #002D72 1.5px, transparent 1.5px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)'
      }} />
    </div>
  );
}