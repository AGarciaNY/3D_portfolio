import { Canvas } from '@react-three/fiber'
import './App.css'
import TestWorld from './scenes/testWorld';
import { Suspense, useState } from 'react';
import { Physics } from '@react-three/rapier';
import { KeyboardControls } from '@react-three/drei';
import { InSideSpaceship } from './scenes/spaceship';
import { TravelScece } from './scenes/travelScene';
import { AboutMe } from './scenes/about';
import { WorkEXP } from './scenes/workEXP';


const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "run", keys: ["Shift"] },
  { name: "interact", keys: ["KeyE"] },

];


export default function App() {

  const [currentScene, changeScene] = useState("testWorld")

  return (
    <KeyboardControls map={keyboardMap}>
      <Canvas>
        {/* <color attach="background" args={["blue"]}></color> */}
        {currentScene === "testWorld" && <TestWorld changeScene={changeScene}/>}
        {currentScene === "spaceship" && <InSideSpaceship changeScene={changeScene}/>}
        {currentScene === "travel" && <TravelScece changeScene={changeScene}/>}
        {currentScene === "about" && <AboutMe changeScene={changeScene}/>}
        {currentScene === "workEXP" && <WorkEXP changeScene={changeScene}/>}
        
      </Canvas>
    </KeyboardControls>
  )
}