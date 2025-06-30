import { Box, Image, useKeyboardControls } from "@react-three/drei"
import { Physics, RigidBody } from "@react-three/rapier"
import { PlayerController } from "../character/playerController"
import { Spaceship } from "../items/spaceship"
import { ArcadeFunction } from "../items/arcade/Arcade_Function"
import { useState } from "react"
import { useFrame } from "@react-three/fiber"
import { ProjectMapModel } from "../../public/Projects"
import cautionjune4 from '../assets/cautionjune4.png'
import { NionLightModel } from "../../public/NioLight"
//images
import TWITTFBOU from '../assets/TWITTFBOU.png'
import CatchTheApple from '../assets/CatchTheApple.png'
import RollBaby from '../assets/RollBaby.png'
import { Projectdisplay } from "../items/project_display"
import { WorinkingSignModel } from "../../public/Working_sign"
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

            <Physics>
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
                <group rotation={[0, 0, 0]} position={[-50, 0, 30]}>
                    <Projectdisplay
                        image={RollBaby}
                        githubLink={"https://github.com/jalvarez2016/GMTK2022"}
                        liveLink={"https://jalvarez.itch.io/roll-baby"}
                        setInteractFunction={setInteractFunction}
                        setCanPlayerMove={setCanPlayerMove}
                        setCanPlayerCameraMove={setCanPlayerCameraMove}
                    />
                </group>
                <group rotation={[0, 0, 0]} position={[-40, 0, 30]}>
                    <Projectdisplay
                        image={RollBaby}
                        githubLink={"https://github.com/jalvarez2016/GMTK2022"}
                        liveLink={"https://jalvarez.itch.io/roll-baby"}
                        setInteractFunction={setInteractFunction}
                        setCanPlayerMove={setCanPlayerMove}
                        setCanPlayerCameraMove={setCanPlayerCameraMove}
                    />
                </group>

                {/* under renovation */}
                <RigidBody position={[-50, 0, 13]} type="fixed">
                    <WorinkingSignModel position={[4, 0, 2]} rotation={[0, -Math.PI / 6, 0]} />
                    <WorinkingSignModel position={[2, 0, 1]} rotation={[0, -Math.PI / 9, 0]} />
                    <WorinkingSignModel position={[-4.5, 0, 2]} rotation={[0, Math.PI / 6, 0]} />
                    <WorinkingSignModel position={[-2, 0, 1]} rotation={[0, Math.PI / 9, 0]} />
                    <WorinkingSignModel position={[0, 0, .4]} />

                    <Image
                        scale={[4, 2.7]}
                        rotation={[0, Math.PI, 0]}
                        url={cautionjune4}
                        transparent
                        position={[0, 3, 0]}
                        onClick={() => window.open(githubLink, "_blank")}
                    />
                </RigidBody>
                <PlayerController canPlayerMove={canPlayerMove} canPlayerCameraMove={canPlayerCameraMove} position={[0, 2, 0]} />
                <ambientLight intensity={2} />
                <directionalLight
                    intensity={3}
                    castShadow
                    position={[0, 30, 0]}
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                    shadow-bias={-0.00005}
                />
                <mesh >
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial transparent opacity={0.5} color="purple" emissive="purple" emissiveIntensity={5}/>
                </mesh>
                {/* <NionLightModel/> */}
                <RigidBody type="fixed" name="floor" colliders="trimesh" scale={1.5} position={[-18, 0, 0]}>
                    <ProjectMapModel />
                    <NionLightModel/>
                </RigidBody>
            </Physics>

        </>
    )
}