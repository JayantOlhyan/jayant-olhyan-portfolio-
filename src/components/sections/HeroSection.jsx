import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowRight, Download, Bot, Trophy, GitCommit, Zap, ChevronDown } from 'lucide-react';
import { CyberOrb } from '../ui/CyberOrb';

export const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    'AI-First Developer',
    'Full Stack Builder',
    'Hackathon Champion',
    'React & Python Engineer',
    'Product Maker'
  ];

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500);

    return () => clearInterval(roleInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Radial Gradient Glow behind everything */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 aspect-square bg-[radial-gradient(ellipse_at_center,_rgba(108,99,255,0.1)_0%,_transparent_70%)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN: Text Content */}
        <motion.div 
          className="flex flex-col items-start lg:pl-[5%]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-1.5 bg-[#13132A]/80 backdrop-blur-md rounded-full border border-[#00F5FF]/20 mb-8 group cursor-default"
          >
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F5FF]"></span>
            </span>
            <span className="font-silkscreen text-[9px] text-[#00F5FF] uppercase tracking-[0.2em] group-hover:text-white transition-colors">
              Available for Opportunities
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="font-inter text-[#B0B8D0] text-[clamp(1.2rem,3vw,1.5rem)] mb-2">
            Hi, I'm
          </motion.h2>

          <motion.h1 variants={itemVariants} className="font-syne font-extrabold text-[#FFFFFF] text-[clamp(2.5rem,7vw,6.5rem)] leading-[1.1] mb-2 tracking-tight">
             Jayant Olhyan
          </motion.h1>

          <motion.div variants={itemVariants} className="h-[40px] md:h-[50px] mb-6 flex items-center">
            <h3 className="font-syne font-bold text-[clamp(1.4rem,3.5vw,2.2rem)] bg-gradient-to-br from-[#6C63FF] to-[#00F5FF] text-transparent bg-clip-text">
              {roles[roleIndex]}
              <span className="inline-block w-[3px] h-[1em] bg-[#00F5FF] ml-1 animate-pulse align-middle"></span>
            </h3>
          </motion.div>

          <motion.p variants={itemVariants} className="font-inter text-[#B0B8D0] text-lg max-w-xl mb-10 flex flex-wrap items-center gap-3">
            <span>B.Tech CSE @ MSIT Delhi</span>
            <span className="text-[#6C63FF]">•</span>
            <span>25 Hackathons</span>
            <span className="text-[#6C63FF]">•</span>
            <span>12 Wins</span>
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
            <a href="#projects" className="bg-gradient-to-br from-[#6C63FF] to-[#00F5FF] rounded-full px-8 py-3.5 text-white font-inter font-semibold text-[0.9rem] uppercase tracking-wider hover:scale-105 transition-transform flex items-center gap-2">
              View My Work
              <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" target="_blank" className="bg-transparent border-2 border-[#6C63FF] rounded-full px-8 py-3.5 text-[#6C63FF] font-inter font-semibold text-[0.9rem] uppercase tracking-wider hover:bg-[#6C63FF] hover:text-white transition-colors flex items-center gap-2">
              Download CV
              <Download size={18} />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4">
            {[ 
              { icon: Github, href: "https://github.com/JayantOlhyan" },
              { icon: Linkedin, href: "https://linkedin.com/in/jayant-olhyan-5057292a1/" },
              { icon: Instagram, href: "https://instagram.com/jayantolhyan/" }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#B0B8D0] hover:border-[#6C63FF] hover:bg-[#6C63FF]/10 hover:text-white hover:-translate-y-1 transition-all"
              >
                <social.icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Cyber Orb Area */}
        <motion.div 
          className="relative mx-auto w-[300px] md:w-[480px] aspect-square flex items-center justify-center z-20 mt-12 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="w-full h-full relative">
            <CyberOrb />
          </div>

          {/* Floating Status Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -left-8 bg-[#080810]/90 backdrop-blur-md border border-[#6C63FF]/50 rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg"
          >
            <Bot size={16} className="text-[#00F5FF]" />
            <span className="font-mono text-xs text-white">AI-First Dev</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-8 -right-4 bg-[#080810]/90 backdrop-blur-md border border-[#6C63FF]/50 rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg"
          >
            <Trophy size={16} className="text-[#FF6B6B]" />
            <span className="font-mono text-xs text-white">12 Wins</span>
          </motion.div>

          <motion.div 
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/4 -right-12 bg-[#080810]/90 backdrop-blur-md border border-[#6C63FF]/50 rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg"
          >
            <GitCommit size={16} className="text-[#6C63FF]" />
            <span className="font-mono text-xs text-white">21 Repos</span>
          </motion.div>
          
          <motion.div 
            animate={{ x: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            className="absolute bottom-1/4 -left-12 bg-[#080810]/90 backdrop-blur-md border border-[#6C63FF]/50 rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg"
          >
            <Zap size={16} className="text-yellow-400" />
            <span className="font-mono text-xs text-white">25 Hackathons</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="font-inter text-[0.75rem] text-[#6B7594]">Scroll to explore</span>
        <ChevronDown size={20} className="text-[#6C63FF] animate-bounce" />
      </motion.div>
    </section>
  );
};
