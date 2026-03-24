export const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  
  return (
    <div className="group relative bg-[#13132A] rounded-2xl p-7 border border-[#1E1E3A] transition-all duration-300 hover:-translate-y-1">
      {/* Gradient border on hover using absolute inset */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-clip-border group-hover:border-[rgba(108,99,255,0.4)] transition-all pointer-events-none" />
      
      <div className="relative z-10">
        {/* Icon Container */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6C63FF]/20 to-[#00F5FF]/20 border border-[#6C63FF]/30 flex items-center justify-center mb-6">
          <Icon className="w-8 h-8 text-[#00F5FF]" strokeWidth={1.5} />
        </div>
        
        <h3 className="font-inter font-semibold text-[1.1rem] text-white mb-3">
          {skill.category}
        </h3>
        
        <p className="font-inter text-[0.9rem] text-[#B0B8D0] mb-6 leading-relaxed">
          {skill.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {skill.technologies.map((tech) => (
            <span key={tech} className="bg-[#6C63FF]/10 border border-[#6C63FF]/30 rounded-md px-2.5 py-1 font-mono text-[0.75rem] text-[#6C63FF] hover:bg-[#6C63FF]/20 hover:scale-105 transition-all">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
