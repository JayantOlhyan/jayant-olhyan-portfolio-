import { Github, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#080810] border-t border-[#1E1E3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start justify-between">
          
          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-4 mb-6 group cursor-pointer">
              <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF] to-[#00F5FF] rounded-full blur-[10px] opacity-30 group-hover:opacity-60 transition-opacity" />
                <img 
                  src="/src/assets/branding/icon-light.png" 
                  alt="JO Icon" 
                  className="relative w-10 h-10 object-contain z-10"
                />
              </div>
              <img 
                src="/src/assets/branding/wordmark-light.png" 
                alt="Jayant Olhyan" 
                className="h-7 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-[#B0B8D0] italic text-sm font-inter leading-relaxed max-w-[280px]">
              "25 Hackathons. 12 Wins. <br />Infinite Lines of Code."
            </p>
          </div>

          {/* Column 2: Nav Links */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-white font-syne font-bold mb-2 tracking-wider">NAVIGATION</h4>
            <div className="flex gap-4 lg:gap-8 flex-wrap justify-center">
              {['Home', 'Projects', 'About', 'Experience', 'Contact'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`}
                  className="text-[#6B7594] hover:text-[#00F5FF] transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Social Icons */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h4 className="text-white font-syne font-bold mb-2 tracking-wider">CONNECT</h4>
            <div className="flex gap-4">
              <a href="https://github.com/JayantOlhyan" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-[#1E1E3A] flex items-center justify-center text-[#B0B8D0] hover:text-white hover:border-[#6C63FF] hover:bg-[#6C63FF]/10 transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/jayant-olhyan-5057292a1/" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-[#1E1E3A] flex items-center justify-center text-[#B0B8D0] hover:text-white hover:border-[#6C63FF] hover:bg-[#6C63FF]/10 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com/jayantolhyan/" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-[#1E1E3A] flex items-center justify-center text-[#B0B8D0] hover:text-white hover:border-[#6C63FF] hover:bg-[#6C63FF]/10 transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-[#1E1E3A] text-center">
          <p className="text-[#6B7594] text-sm">
            © 2026 Jayant Olhyan. Built with ⚡ React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
