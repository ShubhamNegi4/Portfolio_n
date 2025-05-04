// src/components/HeroModels/Computer.jsx
import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Computer(props) {
  // assuming you put your .glb under public/models/computer-optimized.glb
  const gltf = useGLTF("/models/computer-optimized.glb");
  return <primitive object={gltf.scene} {...props} />;
}

// optional: call this once so the loader can cache
useGLTF.preload("/models/computer-optimized.glb");
