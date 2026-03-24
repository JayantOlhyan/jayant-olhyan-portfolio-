import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';

import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { TechStackSection } from './components/sections/TechStackSection';
import { StatsSection } from './components/sections/StatsSection';
import { ContactSection } from './components/sections/ContactSection';

import { SpaceBackground } from './components/ui/SpaceBackground';
import { ParticleBackground } from './components/ui/ParticleBackground';
import { Scroll3DScene } from './components/ui/Scroll3DScene';

function App() {
  return (
    <div className="bg-[#050508] min-h-screen selection:bg-[#6C63FF]/30">
      <SpaceBackground />
      <ParticleBackground />
      <Scroll3DScene />
      <CustomCursor />
      <Navbar />
      
      <main className="relative z-10 w-full overflow-hidden">
        <HeroSection />
        <MarqueeSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <TechStackSection />
        <StatsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
