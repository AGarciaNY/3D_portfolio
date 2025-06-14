/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 insideSpaceship.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function InsideSpaceshipModel(props) {
  const { nodes, materials } = useGLTF('/insideSpaceship.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -7.116, 13.091]} scale={7.011}>
        <mesh geometry={nodes.Plane007_1.geometry} material={materials.walls} />
        <mesh geometry={nodes.Plane007_2.geometry} material={materials.glass} />
        <mesh geometry={nodes.Plane007_3.geometry} material={materials.spacefloor} />
        <mesh geometry={nodes.Plane007_4.geometry} material={materials.gray} />
        <mesh geometry={nodes.Plane007_5.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane007_6.geometry} material={materials['Material.005']} />
      </group>
      <group position={[-0.422, 2.623, 19.069]}>
        <mesh geometry={nodes.Plane008_1.geometry} material={materials.walls} />
        <mesh geometry={nodes.Plane008_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Plane008_3.geometry} material={materials.spacefloor} />
        <mesh geometry={nodes.Plane008_4.geometry} material={materials['Material.012']} />
      </group>
      <group position={[0, 3.577, 22.933]}>
        <mesh geometry={nodes.Plane009_1.geometry} material={materials.gray} />
        <mesh geometry={nodes.Plane009_2.geometry} material={materials['Material.011']} />
      </group>
      <group position={[0, -5.634, 11.25]} scale={7.473}>
        <mesh geometry={nodes.Plane011.geometry} material={materials.glass} />
        <mesh geometry={nodes.Plane011_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane011_2.geometry} material={materials.walls} />
      </group>
      <group position={[18.521, 3.998, 11.027]} rotation={[0, 1.178, 0]}>
        <mesh geometry={nodes.Plane010_1.geometry} material={materials.gray} />
        <mesh geometry={nodes.Plane010_2.geometry} material={materials['Material.011']} />
      </group>
      <group position={[-16.985, 3.577, 9.956]} rotation={[0, -1.508, 0]}>
        <mesh geometry={nodes.Plane012.geometry} material={materials.gray} />
        <mesh geometry={nodes.Plane012_1.geometry} material={materials['Material.011']} />
      </group>
    </group>
  )
}

useGLTF.preload('/insideSpaceship.glb')
