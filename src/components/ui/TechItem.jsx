export const TechItem = ({ item }) => {
  return (
    <div className="group bg-[#13132A] rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-[#1E1E3A] hover:bg-[#0E0E1C] hover:border-[rgba(108,99,255,0.4)] transition-all duration-300">
      <div className="w-12 h-12 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110">
        <img src={item.iconSrc} alt={`${item.name} logo`} className="w-full h-full object-contain" />
      </div>
      <h4 className="font-inter font-semibold text-[0.9rem] text-white mb-2">
        {item.name}
      </h4>
      <p className="font-inter text-[0.75rem] text-[#6B7594]">
        {item.description}
      </p>
    </div>
  );
};
