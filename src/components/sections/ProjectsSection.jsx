import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectTerminal } from '../ui/ProjectTerminal';
import { OutlineButton } from '../ui/GradientButton';
import { projects } from '../../data/projects';
import { Github } from 'lucide-react';

export const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'AI/ML', 'Full Stack', 'React', 'Python'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.categories.includes(filter) || p.techTags.some(t => t.includes(filter)));

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center md:items-start text-center md:text-left mb-16"
      >
        <span className="font-mono text-[0.75rem] text-[#00F5FF] uppercase tracking-[0.2em] mb-4">
          MY WORK
        </span>
        <h2 className="font-syne font-bold text-[clamp(2rem,4vw,3rem)] text-white mb-4">
          Featured Projects
        </h2>
        <p className="font-inter text-[1rem] text-[#B0B8D0] max-w-2xl mb-8">
          Live products built at hackathons and beyond.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-inter text-sm transition-all duration-300 ${
                filter === cat 
                  ? 'bg-gradient-to-r from-[#6C63FF] to-[#00F5FF] text-white shadow-[0_0_15px_rgba(108,99,255,0.4)]'
                  : 'bg-transparent border border-[#1E1E3A] text-[#B0B8D0] hover:border-[#6C63FF]/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16"
        layout
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="h-full"
            >
              <ProjectTerminal title={`${project.title.toUpperCase()}.EXE`}>
                <ProjectCard project={project} />
              </ProjectTerminal>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* See All Button */}
      <div className="flex justify-center">
        <a href="https://github.com/JayantOlhyan" target="_blank" rel="noopener noreferrer" className="inline-block">
          <OutlineButton>
            View All Projects on GitHub
            <Github size={18} />
          </OutlineButton>
        </a>
      </div>

    </section>
  );
};
