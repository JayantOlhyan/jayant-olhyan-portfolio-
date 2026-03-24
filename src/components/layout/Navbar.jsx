import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const sectionIds = ['hero', 'projects', 'about', 'experience', 'skills', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 100);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, 
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[1000] transition-all duration-500 w-[94%] max-w-4xl ${
          scrolled ? 'py-2' : 'py-3'
        }`}
      >
        <div className={`
          relative w-full px-4 md:px-8 py-2 rounded-full border transition-all duration-500 flex items-center justify-between
          ${scrolled 
            ? 'bg-[#080810]/70 backdrop-blur-2xl border-[#6C63FF]/30 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_20px_rgba(108,99,255,0.1)]' 
            : 'bg-[#080810]/30 backdrop-blur-md border-[#6C63FF]/10'
          }
        `}>
          
          {/* Logo / JO */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('hero')}>
            <div className="bg-gradient-to-br from-[#6C63FF] to-[#00F5FF] rounded-full w-9 h-9 flex items-center justify-center text-white font-outfit font-bold text-[0.9rem] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(108,99,255,0.4)]">
              JO
            </div>
            <span className="hidden sm:block font-pixel text-[8px] text-[#B0B8D0] group-hover:text-white transition-colors duration-300 tracking-tighter">
              DEV_ENV
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-4 py-1.5 rounded-full text-[0.65rem] font-medium transition-all duration-300 relative group uppercase tracking-widest ${
                  activeSection === link.id 
                    ? 'text-white bg-[#6C63FF]/20 border border-[#6C63FF]/40' 
                    : 'text-[#B0B8D0] hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA / Contact */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scrollTo('contact')}
              className="bg-white/5 border border-white/10 hover:border-[#00F5FF]/50 hover:bg-[#00F5FF]/10 rounded-full px-5 py-2 text-white font-pixel text-[7px] transition-all duration-300 group"
            >
              <span className="group-hover:text-[#00F5FF]">CONNECT</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[2000] bg-[#080810]/98 backdrop-blur-xl flex flex-col justify-center items-center">
          <button
            className="absolute top-8 right-8 text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="flex flex-col gap-10 text-center">
            {navLinks.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`transition-all duration-300 font-pixel text-xl tracking-tighter opacity-0 animate-[fadeIn_0.4s_ease-out_forwards] ${
                  activeSection === link.id ? 'text-[#6C63FF]' : 'text-white'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {link.name}
              </button>
            ))}
          </div>
          <style jsx>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      )}
    </>
  );
};
