import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Linkedin, Terminal, Shield, Cpu, ExternalLink } from 'lucide-react';
import { LoopLogo } from '../ui/LoopLogo';

const TerminalWindow = () => {
  const [text, setText] = useState('');
  const fullText = "Initialize portfolio... \n> Status: AI-First \n> Hackathons: 25+ \n> Wins: 12 \n> Mission: Building the future.";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#050510] border border-[#1E1E3A] rounded-lg overflow-hidden shadow-2xl font-mono text-sm w-full max-w-md mx-auto lg:mx-0">
      <div className="bg-[#13132A] px-4 py-2 border-b border-[#1E1E3A] flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <span className="text-[#6B7594] text-[10px] ml-2 flex items-center gap-1">
          <Terminal size={10} /> bash — 80x24
        </span>
      </div>
      <div className="p-4 text-[#00F5FF]/90 min-h-[120px] whitespace-pre-line leading-relaxed">
        {text}
        <span className="terminal-caret" />
      </div>
    </div>
  );
};

const StatCard = ({ icon: Icon, label, value, delay, color }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, scale: 1.05 }}
    className="glass-morphism-cyan p-4 rounded-xl border border-white/5 flex items-center gap-3 group relative overflow-hidden"
  >
    <div className={`p-2 rounded-lg bg-${color}/10 text-${color} group-hover:scale-110 transition-transform`}>
      <Icon size={20} />
    </div>
    <div>
      <p className="text-white font-bold text-sm">{value}</p>
      <p className="text-[#6B7594] text-[10px] uppercase tracking-wider">{label}</p>
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
  </motion.div>
);

// About Section Component with Interactive 3D Card
export const AboutSection = () => {
  // Motion values for interactive 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[#050510]">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#6C63FF]/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#00F5FF]/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Left Side: Content & Terminal */}
          <div className="lg:col-span-6 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F5FF]/10 border border-[#00F5FF]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00F5FF] animate-pulse" />
                <span className="font-mono text-[0.65rem] text-[#00F5FF] uppercase tracking-widest">
                  Identity Node v1.0.4
                </span>
              </div>
              
              <h2 className="font-syne font-bold text-[clamp(2.2rem,5vw,3.5rem)] text-white mb-6 leading-tight">
                Engineering <span className="text-gradient">Real-World</span> <br/>
                AI Solutions.
              </h2>
              
              <div className="space-y-6 font-inter text-[#B0B8D0] text-lg leading-relaxed max-w-xl">
                <p>
                  I'm <span className="text-white font-semibold">Jayant Olhyan</span>, a developer who thrives in the high-stakes environment of hackathons. My philosophy is simple: <span className="italic text-[#00F5FF]">"If it doesn't solve a real problem, it's just code."</span>
                </p>
                <p>
                  With <span className="text-white">12 wins</span> across <span className="text-white">25 events</span>, I've mastered the art of rapid prototyping, integrating Gemini AI into production-ready workflows, and building scalable backends with FastAPI.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TerminalWindow />
            </motion.div>

            <motion.div 
               className="flex items-center gap-6 p-1"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050510] bg-[#13132A] flex items-center justify-center overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="collaborator" className="w-full h-full object-cover grayscale opacity-50" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#050510] bg-[#1E1E3A] flex items-center justify-center text-[10px] text-white font-bold">
                  +12
                </div>
              </div>
              <p className="text-[#6B7594] text-sm font-medium">Trusted by hackathon teams nationwide</p>
            </motion.div>
          </div>

          {/* Right Side: Interactive 3D Card & Stats */}
          <div className="lg:col-span-6 relative perspective-1000">
            <motion.div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full aspect-square max-w-[500px] mx-auto group"
            >
              {/* Main Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/20 to-[#00F5FF]/20 rounded-[2.5rem] blur-2xl group-hover:blur-[100px] transition-all duration-500 -z-10" />
              
              <div className="w-full h-full glass-morphism rounded-[2.5rem] border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl">
                 {/* Top Row */}
                 <div className="flex justify-between items-start">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#6C63FF] to-[#00F5FF] p-[1px]">
                       <div className="w-full h-full bg-[#050510] rounded-2xl flex items-center justify-center overflow-hidden">
                          <LoopLogo size="100%" />
                       </div>
                    </div>
                    <a 
                      href="https://linkedin.com/in/jayant-olhyan-5057292a1/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 rounded-full bg-white/5 hover:bg-[#00F5FF]/20 transition-colors text-white/50 hover:text-[#00F5FF]"
                    >
                      <ExternalLink size={20} />
                    </a>
                 </div>

                 {/* Center Visual */}
                 <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full border-4 border-[#00F5FF]/30 p-2 animate-spin-slow">
                         <div className="w-full h-full rounded-full border-4 border-dashed border-[#6C63FF]/30" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Cpu className="text-[#00F5FF]" size={40} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-syne font-bold text-white tracking-tight">System Architect</h3>
                      <p className="text-[#6B7594] font-mono text-xs uppercase tracking-[0.3em]">Protocol: Sentinel AI</p>
                    </div>
                 </div>

                 {/* Bottom Row: Stats Grid */}
                 <div className="grid grid-cols-2 gap-4 mt-6">
                    <StatCard icon={Shield} label="Hack Wins" value="12" delay={0.3} color="[#00F5FF]" />
                    <StatCard icon={Cpu} label="AI Models" value="8+" delay={0.4} color="[#6C63FF]" />
                 </div>
                 
                 {/* Floating Decorative Elements */}
                 <div style={{ transform: "translateZ(50px)" }} className="absolute -top-6 -right-6 w-24 h-24 bg-[#00F5FF]/10 rounded-full blur-xl animate-pulse" />
                 <div style={{ transform: "translateZ(80px)" }} className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#6C63FF]/10 rounded-full blur-2xl animate-pulse-slow" />
              </div>

              {/* Outside Floating Badges */}
              <motion.div 
                style={{ translateZ: 100 }}
                className="absolute top-20 -left-10 bg-[#13132A]/80 backdrop-blur-md border border-[#6C63FF]/30 p-4 rounded-2xl z-20 shadow-2xl hidden md:flex items-center gap-3"
              >
                 <span className="text-2xl">🏆</span>
                 <div>
                   <p className="text-white font-bold text-xs">Top Finisher</p>
                   <p className="text-[#6B7594] text-[8px] uppercase">30+ Finals</p>
                 </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
