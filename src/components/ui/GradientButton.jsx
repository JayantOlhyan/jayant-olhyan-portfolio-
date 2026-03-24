export const GradientButton = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden bg-gradient-to-br from-[#6C63FF] to-[#00F5FF] rounded-full px-8 py-3.5 text-white font-inter font-semibold text-[0.9rem] uppercase tracking-[0.08em] shadow-[0_0_20px_rgba(108,99,255,0.2)] hover:shadow-[0_0_30px_rgba(108,99,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-transparent hover:border-white/20 flex items-center justify-center gap-2 ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2 w-full h-full">
        {children}
      </span>
      {/* Gloss effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
};

export const OutlineButton = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden bg-transparent rounded-full px-8 py-3.5 text-[#6C63FF] border-2 border-[#6C63FF] font-inter font-semibold text-[0.9rem] uppercase tracking-[0.08em] hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2 w-full h-full">
        {children}
      </span>
      <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF] to-[#00F5FF] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
    </button>
  );
};
