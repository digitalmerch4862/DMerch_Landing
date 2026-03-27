import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

const CYBER_WORDS = [
  "SaaS", "CLOUD", "SYSTEM", "CODE", "DATA", 
  "AUTOMATE", "CRM", "WEB", "APP", "DIGITAL",
  "CYBER", "MERCH", "LAGUNA", "GROWTH", "SCALABLE"
];

function FloatingWord({ word, position }: { word: string; position: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Text
        position={position}
        fontSize={0.4}
        color="#00f2ff"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff"
        anchorX="center"
        anchorY="middle"
        fillOpacity={0.3}
      >
        {word}
      </Text>
    </Float>
  );
}

function Particles({ count = 1000 }) {
  const mesh = useRef<THREE.Points>(null!);
  const light = useRef<THREE.PointLight>(null!);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.y = time * 0.05;
    mesh.current.rotation.x = time * 0.02;
    
    // Animate light
    light.current.position.x = Math.sin(time * 0.5) * 5;
    light.current.position.y = Math.cos(time * 0.3) * 5;
  });

  return (
    <>
      <pointLight ref={light} distance={20} intensity={2} color="#00f2ff" />
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#00f2ff"
          transparent
          opacity={0.4}
          sizeAttenuation
        />
      </points>
    </>
  );
}

export default function CyberBackground() {
  const words = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      word: CYBER_WORDS[Math.floor(Math.random() * CYBER_WORDS.length)],
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10 - 5
      ] as [number, number, number]
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-cyber-dark overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.2} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Particles count={2000} />
        {words.map((w, i) => (
          <FloatingWord key={i} word={w.word} position={w.position} />
        ))}
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-dark/50 to-cyber-dark" />
    </div>
  );
}
