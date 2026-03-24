import { Code2, Server, Sparkles, Layers, Database, Terminal } from 'lucide-react';

export const skills = [
  {
    id: 1,
    category: "Frontend Development",
    icon: Code2,
    description: "Expert in building fast, responsive web apps.",
    technologies: ["React 18", "Next.js 14", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 2,
    category: "Backend & APIs",
    icon: Server,
    description: "Scalable APIs for real-world products.",
    technologies: ["Python FastAPI", "Node.js", "Express.js", "REST APIs", "WebSockets"]
  },
  {
    id: 3,
    category: "AI & Gemini API",
    icon: Sparkles,
    description: "AI-first developer using Gemini for intelligent products.",
    technologies: ["Google Gemini API", "Gemini 2.5 Flash", "LLM integration", "Prompt Engineering"]
  },
  {
    id: 4,
    category: "3D & Visualization",
    icon: Layers,
    description: "Interactive 3D and data visualization.",
    technologies: ["Three.js", "Recharts", "D3.js", "Spline", "3D Globe"]
  },
  {
    id: 5,
    category: "State & Data",
    icon: Database,
    description: "Efficient state management and data handling.",
    technologies: ["Zustand", "Redux Toolkit", "i18next", "Local Storage", "JSON APIs"]
  },
  {
    id: 6,
    category: "Dev Tools & Deploy",
    icon: Terminal,
    description: "Modern AI-augmented development workflow.",
    technologies: ["Cursor AI", "GitHub Copilot", "Claude", "Netlify", "Render", "Vercel", "Git"]
  }
];
