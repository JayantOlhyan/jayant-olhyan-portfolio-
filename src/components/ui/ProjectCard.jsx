import { ExternalLink, Github } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-[#13132A] rounded-2xl border border-[#1E1E3A] overflow-hidden transition-all duration-300 hover:border-[#6C63FF]/50 hover:shadow-[0_8px_40px_rgba(108,99,255,0.15)] hover:-translate-y-1.5 flex flex-col h-full">
      {/* Image / Preview Area */}
      <div 
        className="h-[220px] w-full relative overflow-hidden shrink-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
        style={{ background: project.bgGradient }}
      >
        {/* Project Image */}
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-white/5 to-transparent">
            {/* Fallback for when no image is provided */}
          </div>
        )}

        {/* Placeholder Icon / Number Overlay */}
        <div className="relative text-white/20 scale-150 z-10 pointer-events-none">
          <span className="text-6xl font-syne font-bold opacity-30 select-none">{project.id.toString().padStart(2, '0')}</span>
        </div>

        {/* Interactive Hover Actions */}
        <div className="absolute inset-0 bg-[#080810]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
               className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#00F5FF] flex items-center justify-center text-white hover:scale-110 transition-transform">
              <ExternalLink size={20} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
               className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#00F5FF] flex items-center justify-center text-white hover:scale-110 transition-transform">
              <Github size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Body Area */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <span className="font-mono text-xs text-[#6B7594]">
            {project.id.toString().padStart(2, '0')}
          </span>
          <div className="flex flex-wrap gap-2 justify-end">
            {project.techTags.map((tag) => (
              <span key={tag} className="bg-[#6C63FF]/10 border border-[#6C63FF]/30 rounded-md px-2.5 py-1 font-mono text-[0.7rem] text-[#6C63FF]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h3 className="font-inter font-semibold text-[1.2rem] text-white mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="font-inter text-[0.9rem] text-[#B0B8D0] line-clamp-2 mb-6">
          {project.description}
        </p>

        {/* Spacer to push bottom row to the bottom */}
        <div className="flex-grow"></div>

        <div className="h-px w-full bg-[#1E1E3A] mb-4"></div>

        {/* Bottom Row */}
        <div className="flex justify-between items-center">
          <span className="text-xs text-[#6B7594] truncate max-w-[60%]">
            {project.liveUrl ? new URL(project.liveUrl).hostname : 'Conference Paper'}
          </span>
          <div className="flex gap-2">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#6B7594] hover:text-white transition-colors">
                <Github size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[#6B7594] hover:text-[#00F5FF] transition-colors">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
