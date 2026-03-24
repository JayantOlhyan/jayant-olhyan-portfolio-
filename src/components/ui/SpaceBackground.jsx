import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo } from 'react';

export const SpaceBackground = () => {
  const { scrollY } = useScroll();

  // Create random stars for different layers
  const starsLayer1 = useMemo(() => [...Array(100)].map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 1.5 + 0.5,
  })), []);

  const starsLayer2 = useMemo(() => [...Array(50)].map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
  })), []);

  const starsLayer3 = useMemo(() => [...Array(15)].map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 2,
    color: Math.random() > 0.5 ? '#6C63FF' : '#00F5FF'
  })), []);

  // Parallax offsets
  const y1 = useTransform(scrollY, [0, 5000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 5000], [0, -500]);
  const y3 = useTransform(scrollY, [0, 5000], [0, -1000]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#050508]">
      {/* Nebula Glows */}
      <div className="absolute top-1/4 -left-1/4 w-[60%] h-[60%] bg-[#6C63FF]/5 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-[50%] h-[50%] bg-[#00F5FF]/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Layer 1: Distant Stars (Slow) */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        {starsLayer1.map(star => (
          <div
            key={`s1-${star.id}`}
            className="absolute bg-white/20 rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
          />
        ))}
      </motion.div>

      {/* Layer 2: Mid Stars */}
      <motion.div style={{ y: y2 }} className="absolute inset-0">
        {starsLayer2.map(star => (
          <div
            key={`s2-${star.id}`}
            className="absolute bg-white/40 rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              boxShadow: '0 0 5px rgba(255,255,255,0.2)'
            }}
          />
        ))}
      </motion.div>

      {/* Layer 3: Large Accented Stars (Fast) */}
      <motion.div style={{ y: y3 }} className="absolute inset-0">
        {starsLayer3.map(star => (
          <div
            key={`s3-${star.id}`}
            className="absolute rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              backgroundColor: star.color,
              boxShadow: `0 0 10px ${star.color}80`
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};
