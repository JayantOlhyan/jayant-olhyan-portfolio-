import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Scene = () => {
  const meshRef = useRef();

  useGSAP(() => {
    // We use document.body as the overall trigger so the animation maps
    // to the total scroll progress of the page.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5, // 1.5s smoothing time for more fluid follow
      }
    });

    // The 'z' position controls how close/far the artifact appears from the camera
    // Initial position is set directly on the Sphere component [3, 2, -2] (Top Right)
    
    // Stage 1: Scroll to Projects Section
    // The orb moves to the left and pushes back in z space
    tl.to(meshRef.current.position, { x: -3.5, y: -0.5, z: -4 }, 0);
    tl.to(meshRef.current.rotation, { x: Math.PI, y: Math.PI / 2 }, 0);
    
    // Stage 2: Scroll to About/Experience
    // The orb moves right and comes closer
    tl.to(meshRef.current.position, { x: 3, y: -2, z: -1 }, 0.3);
    tl.to(meshRef.current.rotation, { x: Math.PI * 2, y: Math.PI }, 0.3);
    
    // Stage 3: Scroll to Skills/Tech Stack
    // The orb moves left and distorts scale
    tl.to(meshRef.current.position, { x: -2, y: -4, z: -3 }, 0.6);
    tl.to(meshRef.current.rotation, { x: Math.PI * 3, y: Math.PI * 1.5 }, 0.6);
    tl.to(meshRef.current.scale, { x: 1.5, y: 1.5, z: 1.5 }, 0.6);

    // Stage 4: Scroll to Footer
    // The orb moves back towards the center and shrinks
    tl.to(meshRef.current.position, { x: 0, y: -6, z: -5 }, 0.9);
    tl.to(meshRef.current.rotation, { x: Math.PI * 4, y: Math.PI * 2 }, 0.9);
    tl.to(meshRef.current.scale, { x: 0.8, y: 0.8, z: 0.8 }, 0.9);

  }, []);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00F5FF" />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#6C63FF" />
      
      {/* Studio environment for realistic reflections */}
      <Environment preset="studio" />
      
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere ref={meshRef} args={[1, 64, 64]} position={[3, 2, -2]}>
          <MeshDistortMaterial 
            color="#13132B" 
            attach="material" 
            distort={0.4} 
            speed={2} 
            roughness={0.1}
            metalness={0.9}
            emissive="#005A66"
            emissiveIntensity={0.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Sphere>
      </Float>
    </>
  );
};

export const Scroll3DScene = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
};
