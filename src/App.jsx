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
import { Projects } from './scenes/projects';
import { ArtWork } from './scenes/artWork';
import { Background } from './items/background';


const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "run", keys: ["Shift"] },
  { name: "interact", keys: ["KeyE"] },

];


export default function App() {

  const [currentScene, changeScene] = useState("spaceship")

  return (
    <KeyboardControls map={keyboardMap}>
      <Canvas>
        <color attach="background" args={["#178f43"]} />

        {/* <color attach="background" args={["blue"]}></color> */}
        {currentScene === "testWorld" && <TestWorld changeScene={changeScene}/>}
        {currentScene === "spaceship" && <InSideSpaceship changeScene={changeScene}/>}
        {currentScene === "travel" && <TravelScece changeScene={changeScene}/>}
        {currentScene === "about" && <AboutMe changeScene={changeScene}/>}
        {currentScene === "workEXP" && <WorkEXP changeScene={changeScene}/>}
        {currentScene === "art work" && <ArtWork changeScene={changeScene}/>}
        {currentScene === "projects" && <Projects changeScene={changeScene}/>}
        
      </Canvas>
    </KeyboardControls>
  )
}