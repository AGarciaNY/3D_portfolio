import { Box, Cylinder, Image, Sphere, Text } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber";
import { BallCollider } from "@react-three/rapier"
import { useRef, useState } from "react";
import { TextureLoader, Vector3 } from "three";
import { Arcade } from "../../../public/Arcade";
import { useLoader } from '@react-three/fiber';

import Github from '../../assets/Github.png'
// src/items/arcade/Arcade_Function.jsx

export const ArcadeFunction = ({ setInteractFunction, setCanPlayerMove, setCanPlayerCameraMove,image,githubLink,liveLink}) => {
    const { camera } = useThree();
    const EPressRef = useRef()
    const [ePressVisible, setEPressVisible] = useState(false)

    // const cameraTarget = useRef()
    const board = useRef();
    const container = useRef();
    const cameraTarget = useRef();
    const cameraPosition = useRef();
    const cameraWorldPosition = useRef(new Vector3());
    const cameraLookAtWorldPosition = useRef(new Vector3());
    const cameraLookAt = useRef(new Vector3());


    useFrame(() => {
        if (EPressRef.current) {
            EPressRef.current.lookAt(camera.position);
        }
    })

    const interactionFunction = () => {
        setCanPlayerMove(false)
        setCanPlayerCameraMove(false)


        cameraPosition.current.getWorldPosition(cameraWorldPosition.current);
        camera.position.lerp(cameraWorldPosition.current, 0.1);

        if (cameraTarget.current) {
            cameraTarget.current.getWorldPosition(cameraLookAtWorldPosition.current);
            cameraLookAt.current.lerp(cameraLookAtWorldPosition.current, 0.1);

            camera.lookAt(cameraLookAt.current);
        }

    }

    const dummyDunction = () => { console.log("dummy function") }

    const PodiumE = (newInteractionFunction) => {
        setEPressVisible(!ePressVisible)
        if (!ePressVisible) {
            setInteractFunction({ myfunction: newInteractionFunction })
        } else {
            setInteractFunction({ myfunction: dummyDunction })
        }
    }


    return (
        <group>
            <BallCollider position={[0, 0, -1.5]} args={[1.5, 1]} sensor={true} colliders={true} onIntersectionEnter={() => { PodiumE(interactionFunction) }} onIntersectionExit={PodiumE} />


            <Box args={[1.2, .5, 0.1]} position={[0, 0, -1.5]} ref={EPressRef} visible={ePressVisible}>
                <meshStandardMaterial color={"black"} roughness={3} />
                <Text
                    color="white"
                    fontSize={.2}
                    position={[0, 0.05, 1.0]}
                    w
                >
                    Hold E
                </Text>
            </Box>
            <Box args={[2, .1, 2]} position={[0, -.5, -1.3]} />

            <group ref={container}>
                <group ref={cameraTarget} position-z={14} />
                <group ref={cameraPosition} position-y={2.25} position-z={-1.2} />
                <group ref={board}>
                    <Arcade rotation={[0, Math.PI, 0]} position={[0, -0.5, 0]} />
                    <Text
                        rotation={[0, Math.PI, 0]}
                        color="white"
                        fontSize={.1}
                        position={[-.8, 2.75, -.11]}
                        onClick={() => {
                            setCanPlayerMove(true)
                            setCanPlayerCameraMove(true)
                        }}
                    >
                        Exit
                    </Text>

                    <Image scale={[2, 1.2]} rotation={[0, Math.PI, 0]} position={[0, 2.2, -.1]} url={image} ></Image>
                    {/* <Sphere args={[.2,7]} position={[-.8,1.8,0]}/> */}
                    <Cylinder args={[.1, .1, .2]} rotation={[Math.PI / 2, 0, 0]} position={[-.8, 1.8, -0.01]}>
                        <meshBasicMaterial color="red" />
                        <Text
                            rotation={[-Math.PI / 2, Math.PI, 0]}
                            color="white"
                            fontSize={.07}
                            position={[.07, -.2, -0.05]}
                            onClick={() => window.open(liveLink, "_blank")}
                        >
                            play
                        </Text>
                    </Cylinder>
                    <group position={[-.37, 1.8, -0.01]}>
                        <Cylinder args={[.1, .1, .2]} rotation={[Math.PI / 2, 0, 0]}>
                            <meshBasicMaterial color="red" />
                        </Cylinder>
                        <Image
                            scale={[.18, .18]}
                            rotation={[0, Math.PI, 0]}
                            url={Github}
                            transparent
                            position={[0, 0, -0.11]}
                            onClick={() => window.open( githubLink, "_blank")}
                        ></Image>
                    </group>
                    {/* <mesh position={[-1,1,-1]}>
                        <Box args={[1,1,1]}/>
                        <meshBasicMaterial attach="material" map={texture} />
                    </mesh> */}
                </group>
            </group>
        </group>
    )
}