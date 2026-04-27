import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';

const Icosahedron = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      {/* Outer wireframe */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshPhysicalMaterial 
          color="#00e5ff"
          wireframe={true}
          roughness={0.1}
          metalness={0.8}
          transparent={true}
          opacity={0.8}
        />
      </mesh>
      {/* Inner solid shape */}
      <mesh>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshPhysicalMaterial 
          color="#0A0A0B"
          roughness={0.5}
          metalness={1}
          emissive="#00e5ff"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center relative cursor-move">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Icosahedron />
        
        <Environment preset="city" />
        <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4} color="#00e5ff" />
      </Canvas>
    </div>
  );
};

export default Hero3D;
