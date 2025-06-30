import { BallCollider, CapsuleCollider, Physics, RigidBody } from "@react-three/rapier"
import { Box, OrthographicCamera, Text, useKeyboardControls } from "@react-three/drei"
import { PlayerController } from "../character/playerController"
import { useRef, useState } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from 'three';
import { Spaceship } from "../items/spaceship/index"
import { Podium } from "../items/podium/index"


export default function TestWorld({ changeScene }) {
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
            <ambientLight intensity={0.5} />
            <directionalLight
                intensity={0.65}
                castShadow
                position={[-15, 10, 15]}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.00005}
            >
                <OrthographicCamera
                    left={-22}
                    right={15}
                    top={10}
                    bottom={-20}
                />
            </directionalLight>

            <Physics>

                <PlayerController canPlayerMove={canPlayerMove} canPlayerCameraMove={canPlayerCameraMove} />
                {/* <RigidBody type="fixed" colliders={false} > */}
                <Spaceship changeScene={changeScene} position={[9, 2, 6]} />
                {/* </RigidBody> */}
                {/* <RigidBody type="fixed" position={[8, 2, -6]} rotation={[-Math.PI / 8, 0, 0]}>
                    <Box args={[2, 1, 8]}>
                        <meshStandardMaterial color="red" />
                    </Box>
                </RigidBody> */}


                <RigidBody type="fixed" position={[2, 2, -15]} colliders={false} rotation={[0, Math.PI, 0]}>
                    <Podium setInteractFunction={setInteractFunction} setCanPlayerMove={setCanPlayerMove} setCanPlayerCameraMove={setCanPlayerCameraMove} />
                </RigidBody>



                <RigidBody type="fixed" name="floor">
                    <Box position={[0, 0, 0]} args={[50, 1, 50]} >
                        <meshStandardMaterial color={"#7732a8"} roughness={3} />
                    </Box>
                </RigidBody>

            </Physics>

        </>
    )
}