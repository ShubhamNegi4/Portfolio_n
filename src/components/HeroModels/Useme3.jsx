/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 useme3.glb 
Author: maxpanysh (https://sketchfab.com/maxpanysh)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/silent-ash-bc44272e8c1047148b33c913e659fcfa
Title: Silent Ash
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Useme3(props) {
  const { nodes, materials } = useGLTF('/models/useme3.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.398}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.002, 2.616, 0.003]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.Bunny} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.Skateboard} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/useme3.glb')
