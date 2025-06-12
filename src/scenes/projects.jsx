import { Box, useKeyboardControls } from "@react-three/drei"
import { Physics, RigidBody } from "@react-three/rapier"
import { PlayerController } from "../character/playerController"
import { Spaceship } from "../items/spaceship"
import { ArcadeFunction } from "../items/arcade/Arcade_Function"
import { useState } from "react"
import { useFrame } from "@react-three/fiber"
import { ProjectMapModel } from "../../public/Projects"

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
                <Spaceship changeScene={changeScene} position={[0, 2, 20]} />
                <group position={[-50, 1.5, -40]} rotation={[0,Math.PI,0]}>
                    <ArcadeFunction
                        setInteractFunction={setInteractFunction}
                        setCanPlayerMove={setCanPlayerMove}
                        setCanPlayerCameraMove={setCanPlayerCameraMove}
                        // img={}
                    />
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

                <RigidBody type="fixed" name="floor" colliders="trimesh" scale={1.5} position={[-18,0.8,0]}>
                    <ProjectMapModel />
                </RigidBody>
            </Physics>

        </>
    )
}