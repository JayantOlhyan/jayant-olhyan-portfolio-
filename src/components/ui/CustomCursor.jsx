import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw Mouse Position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Layer 1: The Point (Precision) - Very fast spring
  const dotX = useSpring(mouseX, { damping: 40, stiffness: 1000, mass: 0.1 });
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 1000, mass: 0.1 });

  // Layer 2: The Aura (Trail) - Slower trailing spring
  const auraX = useSpring(mouseX, { damping: 25, stiffness: 200, mass: 0.6 });
  const auraY = useSpring(mouseY, { damping: 25, stiffness: 200, mass: 0.6 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsMobile(true);
      return;
    }

    const moveMouse = (e) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target && target.closest && target.closest('a, button, input, textarea, .interactive, [role="button"]')) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile) return null;

  return (
    <>
      {/* AURA LAYER */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full -translate-x-1/2 -translate-y-1/2 border border-white/10"
        style={{
          left: auraX,
          top: auraY,
          width: 40,
          height: 40,
          background: hovered 
            ? 'radial-gradient(circle, rgba(108,99,255,0.4) 0%, transparent 70%)' 
            : 'radial-gradient(circle, rgba(0,245,255,0.1) 0%, transparent 70%)',
          scale: hovered ? 1.8 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 150 }}
      />

      {/* POINT LAYER */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference bg-white -translate-x-1/2 -translate-y-1/2"
        style={{
          left: dotX,
          top: dotY,
          width: hovered ? 20 : 6,
          height: hovered ? 20 : 6,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400 }}
      />

      {/* GLOW (Only on hover) */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"
          style={{
            left: dotX,
            top: dotY,
            width: 120,
            height: 120,
            background: 'radial-gradient(circle, rgba(108,99,255,0.2) 0%, transparent 70%)',
          }}
        />
      )}
    </>
  );
};
