import { useCounter } from '../../hooks/useCounter';
import { useInView } from 'react-intersection-observer';

export const StatCounter = ({ end, label, icon: Icon, color, suffix = '' }) => {
  const { ref, inView = false } = useInView({ triggerOnce: true, threshold: 0.5 });
  // Animating statistics on viewport entry
  const count = useCounter(inView ? end : 0, 2000, inView);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center group">
      <div className="mb-4 text-[#B0B8D0] group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
        <Icon size={32} strokeWidth={1.5} color={color === 'white' ? '#FFFFFF' : color} />
      </div>
      
      <div className="font-syne font-extrabold text-[clamp(2.5rem,5vw,4rem)] mb-2" style={{ color: color === 'white' ? '#FFFFFF' : 'transparent' }}>
        {color !== 'white' ? (
          <span className="bg-gradient-to-br from-[#6C63FF] to-[#00F5FF] text-transparent bg-clip-text">
            {count}{suffix}
          </span>
        ) : (
          <span>{count}{suffix}</span>
        )}
      </div>
      
      <div className="font-inter font-medium text-[1rem] text-[#B0B8D0] tracking-wide">
        {label}
      </div>
    </div>
  );
};
