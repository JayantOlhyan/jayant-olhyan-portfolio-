import { motion } from 'framer-motion';
import { LoopLogo } from './LoopLogo';

export const BrandLogo = ({ className = "w-10 h-10", showText = false }) => {
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Glow Layer */}
        <div className="absolute inset-0 bg-[#00F5FF]/10 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="w-full h-full relative z-10">
          <LoopLogo size="100%" />
        </div>
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
