import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#0E0E1C]/50 border-y border-[#1E1E3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        
        {/* Left Content (Text) */}
        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-[0.75rem] text-[#00F5FF] uppercase tracking-[0.2em] mb-4 block">
            ABOUT ME
          </span>
          <h2 className="font-syne font-bold text-[clamp(1.8rem,3.5vw,2.5rem)] text-white mb-8 leading-tight">
            Passionate Builder. AI Enthusiast.<br className="hidden md:block" /> Hackathon Addict.
          </h2>
          
          <div className="space-y-6 font-inter text-[#B0B8D0] text-lg leading-relaxed mb-10">
            <p>
              I'm Jayant Olhyan, a B.Tech CSE student at MSIT Delhi, competing under my team name Hack Homies. My journey in tech is defined by one thing: building real products under pressure, on a deadline, in a hackathon environment.
            </p>
            <p>
              I'm <strong className="text-white">AI-first</strong> in everything I do. Whether it's using Gemini API to power a farmer intelligence platform, building a scam detection engine with FastAPI, or visualizing asteroid risks with NASA's live data — I build tools that actually work in the real world.
            </p>
            <p>
              I've competed in 25 hackathons across India, won 12 of them, and reached the finals in over 30. In March 2026, I presented my research paper on Health Akinator at an international AI conference at MRIIRS, Faridabad.
            </p>
          </div>

          {/* Inline Profile Card */}
          <div className="flex items-center gap-4 bg-[#13132A] border border-[#1E1E3A] p-4 rounded-xl max-w-sm">
             <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#6C63FF] to-[#00F5FF] flex items-center justify-center shrink-0">
               <span className="font-syne font-bold text-white text-lg">JO</span>
             </div>
             <div>
               <h4 className="text-white font-inter font-semibold">Jayant Olhyan</h4>
               <p className="text-[#6B7594] font-inter text-sm">B.Tech CSE @ MSIT Delhi</p>
             </div>
             <a href="https://linkedin.com/in/jayant-olhyan-5057292a1/" target="_blank" rel="noopener noreferrer" className="ml-auto text-[#6B7594] hover:text-[#00F5FF] transition-colors">
               <Linkedin size={20} />
             </a>
          </div>
        </motion.div>

        {/* Right Content (Image & Floating Stats) */}
        <motion.div 
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Photo Container */}
          <div className="relative mx-auto w-full max-w-[360px] aspect-[0.9] rounded-3xl border-[3px] border-transparent bg-clip-border z-10 p-2 
               before:absolute before:inset-0 before:-z-10 before:rounded-3xl before:bg-gradient-to-br before:from-[#6C63FF] before:to-[#00F5FF] before:opacity-50">
            {/* The actual photo */}
            <div className="w-full h-full rounded-2xl bg-[#080810] overflow-hidden relative shadow-[0_0_40px_rgba(108,99,255,0.3)] flex items-center justify-center">
              <span className="text-[#6B7594] font-inter opacity-50 z-20 absolute">YOUR PHOTO HERE</span>
              {/* Optional gradient map to make it fit dark aesthetic */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1E1E3A] to-[#080810] opacity-80 mix-blend-multiply z-10" />
            </div>
          </div>

          {/* Floating Cards (Absolute positioned around the image) */}
          <div className="hidden md:flex absolute top-4 -left-12 bg-[#13132A]/80 backdrop-blur-md border border-[#6C63FF]/30 p-4 rounded-xl z-20 shadow-xl items-center gap-3">
             <span className="text-2xl">🏆</span>
             <div>
               <p className="text-white font-inter font-bold text-sm">12 Wins</p>
               <p className="text-[#6B7594] text-xs">Hackathons</p>
             </div>
          </div>

          <div className="hidden md:flex absolute bottom-8 -right-8 bg-[#13132A]/80 backdrop-blur-md border border-[#00F5FF]/30 p-4 rounded-xl z-20 shadow-xl items-center gap-3">
             <span className="text-2xl">🚀</span>
             <div>
               <p className="text-white font-inter font-bold text-sm">25 Events</p>
               <p className="text-[#6B7594] text-xs">Participated</p>
             </div>
          </div>
          
          <div className="hidden md:flex absolute bottom-12 -left-8 bg-[#13132A]/80 backdrop-blur-md border border-[#6C63FF]/30 px-4 py-3 rounded-xl z-20 shadow-xl items-center flex-col justify-center">
             <span className="text-xl mb-1">📝</span>
             <p className="text-white font-inter font-semibold text-xs text-center">Research<br/>Published</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
