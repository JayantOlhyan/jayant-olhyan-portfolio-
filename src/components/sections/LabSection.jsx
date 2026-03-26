import { Suspense, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, MeshWobbleMaterial, OrbitControls, ContactShadows, useTexture, Box } from '@react-three/drei';
import { Beaker, Zap, Cpu, MousePointer2, Shield } from 'lucide-react';

const InteractiveArtifact = ({ type }) => {
  const meshRef = useRef();
  const logoTexture = useTexture('/src/assets/branding/icon-light.png');
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2;
    }
  });

  if (type === 'distort') {
    return (
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.8}>
        <MeshDistortMaterial
          color="#6C63FF"
          attach="material"
          distort={0.4}
          speed={4}
          roughness={0}
          metalness={1}
        />
      </Sphere>
    );
  }

  if (type === 'brand') {
    return (
      <Box ref={meshRef} args={[1.5, 1.5, 1.5]} scale={1.2}>
        <meshStandardMaterial map={logoTexture} color="#ffffff" transparent opacity={0.9} />
      </Box>
    );
  }

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.8}>
      <MeshWobbleMaterial
        color="#00F5FF"
        attach="material"
        factor={0.4}
        speed={2}
      />
    </Sphere>
  );
};

export const LabSection = () => {
  const [activeTab, setActiveTab] = useState('brand');

  const labFeatures = [
    { id: 'brand', title: 'Brand Monolith', desc: 'Custom identity mapped to 3D geometry', icon: <Shield size={18} /> },
    { id: 'distort', title: 'Fluid Dynamics', desc: 'Real-time vertex distortion with R3F', icon: <Zap size={18} /> },
    { id: 'wobble', title: 'Elastic UI', desc: 'Physically based material wobbling', icon: <Beaker size={18} /> },
  ];

  return (
    <section id="lab" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#6C63FF]/30 bg-[#6C63FF]/10 text-[#6C63FF] font-mono text-[10px] uppercase tracking-widest mb-4"
          >
            <Cpu size={12} />
            Interactive Lab
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-syne font-bold text-white mb-6"
          >
            Creative <span className="text-[#00F5FF]">Experiments</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#B0B8D0] text-lg max-w-2xl mx-auto font-inter"
          >
            A sandbox for exploring high-performance 3D interactions, generative art, and next-gen experimental UI components.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Interactive Controls */}
          <div className="lg:col-span-5 space-y-6">
            {labFeatures.map((feature) => (
              <motion.button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeTab === feature.id 
                  ? 'bg-[#13132A] border-[#6C63FF] shadow-[0_0_30px_rgba(108,99,255,0.2)]' 
                  : 'bg-transparent border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${activeTab === feature.id ? 'bg-[#6C63FF] text-white' : 'bg-white/5 text-[#B0B8D0]'}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-syne font-bold text-xl mb-1">{feature.title}</h3>
                    <p className="text-[#B0B8D0] text-sm font-inter leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </motion.button>
            ))}
            
            <div className="p-6 rounded-2xl bg-[#00F5FF]/5 border border-[#00F5FF]/20 flex items-center gap-4 text-[#00F5FF]">
              <MousePointer2 size={24} className="animate-pulse" />
              <p className="font-silkscreen text-[10px] uppercase tracking-wider">
                Interact with the viewport to explore the artifact
              </p>
            </div>
          </div>

          {/* Right: 3D Viewport */}
          <div className="lg:col-span-7 h-[500px] w-full bg-[#13132A]/50 backdrop-blur-sm rounded-3xl border border-white/5 relative group">
            <div className="absolute top-4 left-6 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="ml-2 font-mono text-[10px] text-white/30 tracking-widest uppercase">Renderer::WebGL2</span>
            </div>

            <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }} className="rounded-3xl">
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} color="#6C63FF" intensity={1} />
                
                <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                  <InteractiveArtifact type={activeTab} />
                </Float>
                
                <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              </Suspense>
            </Canvas>

            {/* Viewport HUD Overlay */}
            <div className="absolute inset-0 pointer-events-none border-[1px] border-[#00F5FF]/5 rounded-3xl group-hover:border-[#00F5FF]/20 transition-colors" />
            <div className="absolute bottom-6 right-8 text-[#00F5FF] opacity-30 font-mono text-[10px] uppercase tracking-tighter">
              GPU_ACCELERATED_ENVIRONMENT // PERSPECTIVE_CAM_01
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(108,99,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(108,99,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
    </section>
  );
};
