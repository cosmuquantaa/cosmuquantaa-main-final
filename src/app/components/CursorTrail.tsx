import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
  size: number;
  color: string;
}

export function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const nextIdRef = useRef(0);

  useEffect(() => {
    let animationFrame: number;
    let lastEmitTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY + window.scrollY });
      
      const currentTime = Date.now();
      if (currentTime - lastEmitTime > 30) {
        // Create 3-5 particles per emission
        const particleCount = Math.floor(Math.random() * 3) + 3;
        const newParticles: Particle[] = [];
        
        for (let i = 0; i < particleCount; i++) {
          newParticles.push({
            id: nextIdRef.current + i,
            x: e.clientX,
            y: e.clientY + window.scrollY,
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * 2 + 1,
            size: Math.random() * 4 + 2,
            color: Math.random() > 0.5 ? '#002D72' : '#00A8B5'
          });
        }
        
        nextIdRef.current += particleCount;
        setParticles(prev => [...prev, ...newParticles]);
        lastEmitTime = currentTime;
        
        // Clean up old particles
        setTimeout(() => {
          setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
        }, 2000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Cursor glow */}
      <motion.div
        className="absolute w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 168, 181, 0.2) 0%, transparent 70%)',
          left: mousePos.x - 128,
          top: mousePos.y - 128,
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          initial={{ 
            opacity: 0,
            scale: 0,
            x: 0,
            y: 0
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0.5],
            x: Math.cos(particle.angle) * particle.speed * 50,
            y: Math.sin(particle.angle) * particle.speed * 50,
          }}
          transition={{
            duration: 2,
            ease: [0.22, 1, 0.36, 1]
          }}
        />
      ))}
    </div>
  );
}