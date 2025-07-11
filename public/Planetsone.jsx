/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 planetsone.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Planet1Model({setDestination,...props}) {
  const { nodes, materials } = useGLTF('/planetsone.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Sphere003.geometry} material={materials.about} position={[0.9, 0, 0]} scale={2.32}
        onClick={() => { setDestination("coming soon") }}
      />
      <mesh geometry={nodes.orbet.geometry} colliders={false} material={materials['Material.002']} />
    </group>
  )
}

useGLTF.preload('/planetsone.glb')
