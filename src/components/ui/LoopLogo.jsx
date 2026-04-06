import React from 'react';
import { motion } from 'framer-motion';

// Loop Logo Component with SVG animations and glow
export const LoopLogo = ({ size = "40px", className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-[#00F5FF]/10 blur-xl rounded-full scale-150 animate-pulse" />
      
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_12px_rgba(0,245,255,0.4)]"
      >
        {/* The 'O' Loop (Dashed Circle) */}
        <motion.circle 
          cx="60" 
          cy="50" 
          r="32" 
          stroke="#00F5FF" 
          strokeWidth="6" 
          strokeDasharray="8 6"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="opacity-90"
        />
        
        {/* The Inner 'O' Glow */}
        <circle 
          cx="60" 
          cy="50" 
          r="24" 
          stroke="#00F5FF" 
          strokeWidth="1" 
          className="opacity-30"
        />

        {/* The 'J' Monogram */}
        <motion.path 
          d="M35 25V65C35 73.2843 41.7157 80 50 80" 
          stroke="white" 
          strokeWidth="10" 
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Accent Node */}
        <motion.circle 
          cx="60" 
          cy="50" 
          r="4" 
          fill="white"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
};
