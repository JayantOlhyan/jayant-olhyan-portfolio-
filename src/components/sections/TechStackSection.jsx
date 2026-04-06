import { motion } from 'framer-motion';
import { TechItem } from '../ui/TechItem';
import { techStack } from '../../data/techStack';

export const TechStackSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 relative border-t border-[#1E1E3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-[0.75rem] text-[#00F5FF] uppercase tracking-[0.2em] mb-4 block">
            FAVOURITE STACK
          </span>
          <h2 className="font-syne font-bold text-[clamp(1.8rem,3vw,2.5rem)] text-white">
            Tools I Build With
          </h2>
        </motion.div>
        
        {/* Grid of technologies and tools */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4"
        >
          {techStack.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
               <TechItem item={item} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
