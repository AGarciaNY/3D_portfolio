import { Box, useKeyboardControls } from "@react-three/drei"
import { Physics, RigidBody } from "@react-three/rapier"
import { PlayerController } from "../character/playerController"
import { Spaceship } from "../items/spaceship"
import { ArcadeFunction } from "../items/arcade/Arcade_Function"
import { useState } from "react"
import { useFrame } from "@react-three/fiber"

export const Projects = ({ changeScene }) => {
    const dummyDunction = () => { console.log("dummy function") }
    const [interactFunction, setInteractFunction] = useState({ myfunction: dummyDunction })

    const [canPlayerMove, setCanPlayerMove] = useState(true)
    const [canPlayerCameraMove, setCanPlayerCameraMove] = useState(true)
    const [, get] = useKeyboardControls();

    useFrame(() => {
        if (get().interact) {
            interactFunction.myfunction()
        }
    });

    
    return (
        <>

            <Physics debug>
                <Spaceship changeScene={changeScene} position={[4, 1, 4]} />
                <group position={[1, 0.5, -11]}>
                    <ArcadeFunction setInteractFunction={setInteractFunction} setCanPlayerMove={setCanPlayerMove} setCanPlayerCameraMove={setCanPlayerCameraMove} />

                </group>
                <PlayerController canPlayerMove={canPlayerMove} canPlayerCameraMove={canPlayerCameraMove} />
                <ambientLight intensity={0.5} />
                <directionalLight
                    intensity={0.65}
                    castShadow
                    position={[-15, 10, 15]}
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                    shadow-bias={-0.00005}
                />

                d
                <RigidBody type="fixed" name="floor">
                    <Box position={[0, -0.5, 0]} args={[50, 0.5, 50]} >
                        <meshBasicMaterial color={"#2994f2"} />a
                    </Box>
                </RigidBody>
            </Physics>

        </>
    )
}