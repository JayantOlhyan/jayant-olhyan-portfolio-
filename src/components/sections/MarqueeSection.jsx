export const MarqueeSection = () => {
  const items = [
    'React Developer', 'AI-First Builder', 'Hackathon Champion',
    'Full Stack Engineer', 'Next.js & Python', 'MSIT Delhi',
    '25 Hackathons', 'Gemini API Expert', 'Product Maker',
    'Three.js Developer'
  ];

  return (
    <div className="w-full h-14 md:h-14 bg-[#6C63FF]/[0.08] border-y border-[#6C63FF]/20 flex items-center overflow-hidden hover:[&>div]:[animation-play-state:paused] relative">
      <div className="flex animate-marquee whitespace-nowrap min-w-full">
        {/* Render twice for seamless looping */}
        {[...Array(2)].map((_, idx) => (
          <span key={idx} className="flex items-center shrink-0">
            {items.map((item, i) => (
              <span key={i} className="flex items-center">
                <span className="font-syne font-semibold text-base text-white/70 mx-6">
                  {item}
                </span>
                <span className="text-[#6C63FF] text-xl">⚡</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};
