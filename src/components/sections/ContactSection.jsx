import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { GradientButton } from '../ui/GradientButton';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '../../data/constants';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e) => {
    // Prevent default form behavior
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate slight delay before opening mailto client
    setTimeout(() => {
      const { name, email, message } = formData;
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 3000);
    }, 800);
  };

  return (
    <>
      <section id="contact" className="py-24 bg-[#0E0E1C] border-t border-[#1E1E3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
          
          {/* Left Column: Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-[0.75rem] text-[#00F5FF] uppercase tracking-[0.2em] mb-4 block">
              GET IN TOUCH
            </span>
            <h2 className="font-syne font-bold text-[clamp(2rem,3.5vw,3rem)] text-white mb-6 leading-tight">
              Let's Build Something <br className="hidden lg:block"/> Amazing Together
            </h2>
            <p className="font-inter text-[1.05rem] text-[#B0B8D0] mb-10 max-w-lg leading-relaxed">
              Whether you want to collaborate on a hackathon, discuss a project, or just connect — I'm always open to new conversations. Drop me a message and I'll get back to you within 24 hours.
            </p>

            {/* Email Pill */}
            <button 
              onClick={handleCopyEmail}
              className="group flex items-center gap-3 bg-[#13132A] border border-[#rgba(108,99,255,0.4)] rounded-full px-6 py-3.5 hover:bg-[#1A1A3A] transition-colors mb-10 w-fit"
            >
              <span className="text-xl">📧</span>
              <span className="font-inter font-medium text-white">{CONTACT_EMAIL}</span>
              <div className="w-px h-5 bg-[#1E1E3A] mx-2"></div>
              {copied ? (
                <Check size={18} className="text-[#00F5FF]" />
              ) : (
                <Copy size={18} className="text-[#B0B8D0] group-hover:text-white transition-colors" />
              )}
            </button>

            {/* Social Cards */}
            <div className="flex flex-wrap gap-4">
               <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="flex flex-col items-center justify-center gap-2 bg-[#13132A] border border-[#1E1E3A] rounded-2xl w-[100px] h-[100px] hover:-translate-y-1 hover:border-[#6C63FF]/50 transition-all duration-300">
                 <Github size={28} className="text-white" />
                 <span className="font-inter text-xs text-[#B0B8D0]">GitHub</span>
               </a>
               <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="flex flex-col items-center justify-center gap-2 bg-[#13132A] border border-[#1E1E3A] rounded-2xl w-[100px] h-[100px] hover:-translate-y-1 hover:border-[#6C63FF]/50 transition-all duration-300">
                 <Linkedin size={28} className="text-white" />
                 <span className="font-inter text-xs text-[#B0B8D0]">LinkedIn</span>
               </a>
               <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="flex flex-col items-center justify-center gap-2 bg-[#13132A] border border-[#1E1E3A] rounded-2xl w-[100px] h-[100px] hover:-translate-y-1 hover:border-[#6C63FF]/50 transition-all duration-300">
                 <Instagram size={28} className="text-white" />
                 <span className="font-inter text-xs text-[#B0B8D0]">Instagram</span>
               </a>
            </div>
          </motion.div>

          {/* Right Column: Connect Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-[#13132A] border border-[#1E1E3A] rounded-3xl p-8"
          >
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
               <div className="flex flex-col gap-2">
                 <label htmlFor="name" className="font-inter text-[0.85rem] text-[#6B7594]">Full Name</label>
                 <input 
                   type="text" 
                   id="name" 
                   value={formData.name}
                   onChange={(e) => setFormData({...formData, name: e.target.value})}
                   required
                   placeholder="John Doe"
                   className="bg-white/[0.03] border border-[#1E1E3A] rounded-xl px-4 py-3.5 text-white font-inter placeholder:text-[#6B7594] focus:outline-none focus:border-[#6C63FF] focus:shadow-[0_0_0_3px_rgba(108,99,255,0.1)] transition-all"
                 />
               </div>
               
               <div className="flex flex-col gap-2">
                 <label htmlFor="email" className="font-inter text-[0.85rem] text-[#6B7594]">Email Address</label>
                 <input 
                   type="email" 
                   id="email" 
                   value={formData.email}
                   onChange={(e) => setFormData({...formData, email: e.target.value})}
                   required
                   placeholder="john@example.com"
                   className="bg-white/[0.03] border border-[#1E1E3A] rounded-xl px-4 py-3.5 text-white font-inter placeholder:text-[#6B7594] focus:outline-none focus:border-[#6C63FF] focus:shadow-[0_0_0_3px_rgba(108,99,255,0.1)] transition-all"
                 />
               </div>

               <div className="flex flex-col gap-2">
                 <label htmlFor="message" className="font-inter text-[0.85rem] text-[#6B7594]">Message</label>
                 <textarea 
                   id="message" 
                   rows={5}
                   value={formData.message}
                   onChange={(e) => setFormData({...formData, message: e.target.value})}
                   required
                   placeholder="Tell me about your project..."
                   className="bg-white/[0.03] border border-[#1E1E3A] rounded-xl px-4 py-3.5 text-white font-inter placeholder:text-[#6B7594] focus:outline-none focus:border-[#6C63FF] focus:shadow-[0_0_0_3px_rgba(108,99,255,0.1)] transition-all resize-none"
                 />
               </div>

               <button 
                 type="submit" 
                 disabled={isSubmitting || submitted}
                 className="mt-2 w-full bg-gradient-to-br from-[#6C63FF] to-[#00F5FF] text-white font-inter font-semibold rounded-xl py-4 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(108,99,255,0.3)] transition-all disabled:opacity-70"
               >
                 {isSubmitting ? (
                   <span className="w-5 h-5 border-2 border-t-white border-white/30 rounded-full animate-spin" />
                 ) : submitted ? (
                   <>Message Sent! <Check size={18} /></>
                 ) : (
                   <>Send Message <ArrowRight size={18}/></>
                 )}
               </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* LET'S WORK Huge CTA Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#080810] via-[#0E0E1C] to-[#080810] border-t border-[#1E1E3A]">
        {/* Massive Ghost Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <span className="font-syne font-extrabold text-[clamp(6rem,18vw,20rem)] text-white/[0.03] whitespace-nowrap leading-none tracking-tight">
            LET'S WORK
          </span>
        </div>

        {/* Content on top */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center">
           <a href={`mailto:${CONTACT_EMAIL}`}>
             <GradientButton className="!px-12 !py-5 !text-[1.1rem]">
                Hire Me Now
             </GradientButton>
           </a>
        </div>
      </section>
    </>
  );
};
