import { motion } from 'framer-motion';

export const BrandLogo = ({ className = "w-10 h-10", showText = false }) => {
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      <div className="relative w-full h-full">
        {/* Glow Layer */}
        <div className="absolute inset-0 bg-[#00F5FF]/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_8px_rgba(0,245,255,0.5)]"
        >
          {/* 'O' Ring (Right) */}
          <circle 
            cx="65" 
            cy="50" 
            r="30" 
            stroke="url(#brandGradient)" 
            strokeWidth="8" 
            className="opacity-90"
          />
          <circle 
            cx="65" 
            cy="50" 
            r="20" 
            stroke="#00F5FF" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            className="opacity-50"
          />

          {/* 'J' Stem & Curve (Left) */}
          <path 
            d="M35 20V65C35 73.2843 41.7157 80 50 80" 
            stroke="#FFFFFF" 
            strokeWidth="8" 
            strokeLinecap="round"
          />
          <path 
            d="M35 20V65C35 73.2843 41.7157 80 50 80" 
            stroke="#00F5FF" 
            strokeWidth="12" 
            strokeLinecap="round"
            className="opacity-20 blur-[2px]"
          />

          {/* Highlights */}
          <circle cx="65" cy="50" r="2" fill="#FFFFFF" className="animate-pulse" />
          
          <defs>
            <linearGradient id="brandGradient" x1="35" y1="20" x2="65" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00F5FF" />
              <stop offset="1" stopColor="#6C63FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-syne font-bold text-white text-[10px] tracking-[0.2em] uppercase leading-none">
            Jayant
          </span>
          <span className="font-syne font-bold text-[#00F5FF] text-[10px] tracking-[0.2em] uppercase leading-none mt-1">
            Olhyan
          </span>
        </div>
      )}
    </div>
  );
};
