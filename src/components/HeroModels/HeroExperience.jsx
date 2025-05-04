import React, { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { Useme3 } from './Useme3.jsx';
import HeroLights from './HeroLights.jsx';
import Particles from './Particles.jsx';

// Inside-Canvas component to animate group based on mouse with smoothing
const MouseGroup = ({ isMobile }) => {
  const groupRef = useRef();
  const { mouse } = useThree();

  // further increased sensitivity and smoothing for snappier movement
  const sensitivity = 1.0;   // higher rotation multiplier
  const smoothing = 0.15;     // faster interpolation towards target

  useFrame(() => {
    if (groupRef.current) {
      // Target rotations based on mouse
      const targetY = mouse.x * sensitivity;
      const targetX = -mouse.y * sensitivity;
      // Smoothly interpolate current rotation towards target
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * smoothing;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * smoothing;
    }
  });

  return (
    <group
      ref={groupRef}
      scale={isMobile ? 3 : 4.3}
      position={[0, -3.5, 0]}
    >
      <Useme3 />
    </group>
  );
};

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLights />
      <Particles count="150" />

      {/* Animated group follows mouse inside Canvas with smoothing */}
      <MouseGroup isMobile={isMobile} />
    </Canvas>
  );
};

export default HeroExperience;
