import { motion } from 'framer-motion';

export const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 !== 0; // Assuming 0-indexed layout mapping
  
  return (
    <div className={`relative flex items-center justify-between md:justify-normal w-full mb-12 last:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Center timeline marker */}
      {/* Center timeline marker & focal point */}
      <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gradient-to-br from-[#6C63FF] to-[#00F5FF] rounded-full transform md:-translate-x-1/2 -translate-x-[7px] shadow-[0_0_15px_rgba(108,99,255,0.5)] z-10" />

      {/* Spacing for layout */}
      <div className="hidden md:block w-1/2" />

      {/* Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className={`w-full pl-8 md:pl-0 md:w-[calc(50%-40px)] ${isEven ? 'md:ml-[40px]' : 'md:mr-[40px]'}`}
      >
        <div className="bg-[#13132A] rounded-2xl border border-[#1E1E3A] p-6 hover:border-[rgba(108,99,255,0.4)] transition-colors">
          <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
            <span 
              className="px-3 py-1 rounded-full text-xs font-mono border"
              style={{ color: item.tagColor, borderColor: `${item.tagColor}40`, backgroundColor: `${item.tagColor}15` }}
            >
              {item.tag}
            </span>
            <span className="text-sm font-inter text-[#6B7594]">
              {item.period}
            </span>
          </div>

          <h3 className="font-inter font-semibold text-lg text-white mb-1">
            {item.role}
          </h3>
          <h4 className="font-inter text-sm text-[#00F5FF] mb-4">
            {item.organization}
          </h4>

          <p className="font-inter text-[0.95rem] text-[#B0B8D0] leading-relaxed">
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
