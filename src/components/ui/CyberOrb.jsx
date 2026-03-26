import { motion } from 'framer-motion';

export const CyberOrb = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-[#6C63FF]/30"
      />

      {/* Counter-Rotating inner Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute w-[60%] h-[60%] rounded-full border border-double border-[#00F5FF]/20"
      />

      {/* Main Glowing Orb */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 40px rgba(108, 99, 255, 0.4)",
            "0 0 80px rgba(0, 245, 255, 0.6)",
            "0 0 40px rgba(108, 99, 255, 0.4)"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#6C63FF] to-[#00F5FF]/80 z-10 flex items-center justify-center p-4 overflow-hidden"
      >
        {/* Brand Icon */}
        <motion.img 
          src="/src/assets/branding/icon-light.png" 
          alt="JO Brand Icon" 
          className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Inner Glare */}
        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-white/30 rounded-full blur-[4px] pointer-events-none" />
      </motion.div>

      {/* Orbiting Particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 8 + i * 2, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute w-full h-full"
        >
          <div 
            className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"
            style={{ 
              top: '50%', 
              left: '0%', 
              transform: `translateY(-50%)` 
            }}
          />
        </motion.div>
      ))}

      {/* Bottom Reflection Glow */}
      <div className="absolute -bottom-1/4 w-full h-[20%] bg-[#00F5FF]/10 blur-[40px] rounded-full" />
    </div>
  );
};
