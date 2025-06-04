import { Canvas } from '@react-three/fiber'
import './App.css'
import TestWorld from './scenes/testWorld';
import { Suspense, useMemo } from 'react';
import { Physics } from '@react-three/rapier';
import { KeyboardControls } from '@react-three/drei';


export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};



export default function App() {
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.jump, keys: ["Space"] },
    ],
    []
  );

  return (
    <KeyboardControls map={map}>
      <Canvas>
        <Suspense>
          <Physics debug>
            <TestWorld />
          </Physics>
        </Suspense>
      </Canvas>
    </KeyboardControls>
  )
}