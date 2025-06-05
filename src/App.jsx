import { Canvas } from '@react-three/fiber'
import './App.css'
import TestWorld from './scenes/testWorld';
import { Suspense } from 'react';
import { Physics } from '@react-three/rapier';
import { KeyboardControls } from '@react-three/drei';


const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "run", keys: ["Shift"] },

];



export default function App() {

  return (
    <KeyboardControls map={keyboardMap}>
      <Canvas>
        {/* <color attach="background" args={["blue"]}></color> */}
        <TestWorld />
      </Canvas>
    </KeyboardControls>
  )
}