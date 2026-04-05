import { motion } from 'framer-motion';
import { TimelineItem } from '../ui/TimelineItem';
import { experience } from '../../data/experience';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(108,99,255,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[0.75rem] text-[#00F5FF] uppercase tracking-[0.2em] mb-4 block">
            MY JOURNEY
          </span>
          <h2 className="font-syne font-bold text-[clamp(2rem,4vw,3rem)] text-white">
            Experience & Education
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line (Desktop) & Left Line (Mobile) */}
          <div className="absolute left-[7px] md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-transparent via-[#1E1E3A] to-transparent transform md:-translate-x-1/2 z-0" />
          
          <div className="space-y-0">
            {experience.map((item, idx) => (
              <TimelineItem key={item.id} item={item} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
