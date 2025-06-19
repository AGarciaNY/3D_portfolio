import { Box, useKeyboardControls } from "@react-three/drei"
import { Physics, RigidBody } from "@react-three/rapier"
import { PlayerController } from "../character/playerController"
import { Spaceship } from "../items/spaceship"
import { ArcadeFunction } from "../items/arcade/Arcade_Function"
import { useState } from "react"
import { useFrame } from "@react-three/fiber"
import { ProjectMapModel } from "../../public/Projects"


//images
import TWITTFBOU from '../assets/TWITTFBOU.png'
import CatchTheApple from '../assets/CatchTheApple.png'
import RollBaby from '../assets/RollBaby.png'
import { Projectdisplay } from "../items/project_display"
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
                {/* game projects */}
                <group position={[-50, .9, -40]} rotation={[0, Math.PI, 0]}>
                    <ArcadeFunction
                        image={TWITTFBOU}
                        githubLink={"https://github.com/jalvarez2016/This-world-is-too-tiny-for-both-of-us"}
                        liveLink={"https://jalvarez.itch.io/godot-44-web-build-test"}
                        setInteractFunction={setInteractFunction}
                        setCanPlayerMove={setCanPlayerMove}
                        setCanPlayerCameraMove={setCanPlayerCameraMove}
                    // img={}
                    />
                </group>
                <group position={[-56, .9, -40]} rotation={[0, Math.PI, 0]}>
                    <ArcadeFunction
                        image={CatchTheApple}
                        githubLink={"https://github.com/khans8890/Catch_The_Apples"}
                        liveLink={"https://khans8890.github.io/Catch_The_Apples/"}
                        setInteractFunction={setInteractFunction}
                        setCanPlayerMove={setCanPlayerMove}
                        setCanPlayerCameraMove={setCanPlayerCameraMove}
                    // img={}
                    />
                </group>
                <group position={[-44, .9, -40]} rotation={[0, Math.PI, 0]}>
                    <ArcadeFunction
                        image={RollBaby}
                        githubLink={"https://github.com/jalvarez2016/GMTK2022"}
                        liveLink={"https://jalvarez.itch.io/roll-baby"}
                        setInteractFunction={setInteractFunction}
                        setCanPlayerMove={setCanPlayerMove}
                        setCanPlayerCameraMove={setCanPlayerCameraMove}
                    // img={}
                    />
                </group>

                {/* web projects */}
                <group rotation={[0, 0, 0]} position={[-50,0,30]}>
                    <Projectdisplay
                        image={RollBaby}
                        githubLink={"https://github.com/jalvarez2016/GMTK2022"}
                        liveLink={"https://jalvarez.itch.io/roll-baby"}
                        setInteractFunction={setInteractFunction}
                        setCanPlayerMove={setCanPlayerMove}
                        setCanPlayerCameraMove={setCanPlayerCameraMove}
                    />
                </group>

                <PlayerController canPlayerMove={canPlayerMove} canPlayerCameraMove={canPlayerCameraMove} position={[0,2,0]}/>
                <ambientLight intensity={0.5} />
                <directionalLight
                    intensity={0.65}
                    castShadow
                    position={[-15, 10, 15]}
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                    shadow-bias={-0.00005}
                />

                <RigidBody type="fixed" name="floor" colliders="trimesh" scale={1.5} position={[-18, 0, 0]}>
                    <ProjectMapModel />
                </RigidBody>
            </Physics>

        </>
    )
}