import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import {Useme3} from './Useme3.jsx'
import HeroLights from './HeroLights.jsx';
import Particles from './Particles.jsx';
const HeroExperience = () => {
    const isTablet = useMediaQuery({query:'(max-width: 1024px)'});
    const isMobile = useMediaQuery({query:'(max-width: 768px)'});
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <OrbitControls enablePan = {false} enableZoom = {!isTablet}maxDistance={20} minDistance={5} minPolarAngle={Math.PI/5} maxPolarAngle={Math.PI/2}>
      </OrbitControls>
      <HeroLights></HeroLights>
      <Particles count = "150"></Particles>
      <group scale = {isMobile? 3 : 4.3} position = {[0, -3.5, 0]} >

      <Useme3></Useme3>
      </group>
    </Canvas>
  );
};

export default HeroExperience;
