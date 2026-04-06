import { Trophy, Zap, Medal, Rocket } from 'lucide-react';
import { StatCounter } from '../ui/StatCounter';

export const StatsSection = () => {
  const stats = [
    { end: 25, suffix: '', label: 'Hackathons Participated', color: 'white', icon: Zap },
    { end: 12, suffix: '', label: 'Hackathons Won', color: '#6C63FF', icon: Trophy },
    { end: 30, suffix: '+', label: 'Finals Reached', color: '#00F5FF', icon: Medal },
    { end: 5, suffix: '+', label: 'Live Products Deployed', color: 'white', icon: Rocket },
  ];

  // Render statistical highlights
  return (
    <section className="py-20 bg-gradient-to-t from-[#0E0E1C] to-[#080810] relative overflow-hidden">
      
      {/* Subtle top and bottom border glow lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6C63FF]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00F5FF]/30 to-transparent" />
      
      {/* Background large glow */}
      <div className="absolute inset-0 bg-[rgba(108,99,255,0.02)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-[#1E1E3A]">
          {stats.map((stat, idx) => (
             <StatCounter 
               key={idx}
               end={stat.end}
               suffix={stat.suffix}
               label={stat.label}
               color={stat.color}
               icon={stat.icon}
             />
          ))}
        </div>
      </div>
    </section>
  );
};
