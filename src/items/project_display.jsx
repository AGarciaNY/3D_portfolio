import { ProjectdisplayModel } from "../../public/Projectdisplay"

import { Box, Cylinder, Image, Text } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber";
import { BallCollider } from "@react-three/rapier"
import { useRef, useState } from "react";
import { Vector3 } from "three";

import Github from '../assets/Github.png'
// src/items/arcade/Arcade_Function.jsx

export const Projectdisplay = ({ setInteractFunction, setCanPlayerMove, setCanPlayerCameraMove, image, githubLink, liveLink }) => {
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
            <BallCollider position={[0, 1, -1.5]} args={[1.7, 1]} sensor={true} colliders={true} onIntersectionEnter={() => { PodiumE(interactionFunction) }} onIntersectionExit={PodiumE} />


            <Box args={[1.2, .5, 0.1]} position={[0, 1, -1.5]} ref={EPressRef} visible={ePressVisible}>
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
            <Box args={[2, .1, 2]} position={[0, 0, -1.3]} />

            <group ref={container} >
                <group ref={cameraTarget} position-z={3} />
                <group ref={cameraPosition} position-y={2.3} position-z={0} />
                <group ref={board}>
                    <ProjectdisplayModel rotation={[0, Math.PI, 0]} position={[0, -.25, -.05]} scale={[1.9,1.7,1.7]} />
                    <Text
                        rotation={[Math.PI / 6.5, Math.PI, 0]}
                        color="black"
                        fontSize={.05}
                        position={[-.3, 2.25, .55]}
                        onClick={() => {
                            setCanPlayerMove(true)
                            setCanPlayerCameraMove(true)
                        }}
                    >
                        ESC
                    </Text>

                    <Image scale={[.98, .6]} rotation={[Math.PI / 6.89, Math.PI, 0]} position={[0.01, 2, .557]} url={image} ></Image>
                    {/* <Sphere args={[.2,7]} position={[-.8,1.8,0]}/> */}
                    <group position={[.2, 1.8, .45]} rotation={[Math.PI / 6.89, 0, 0]}>
                        <Cylinder args={[.05, .05, .01]} rotation={[Math.PI / 2, 0, 0]}>
                            <meshBasicMaterial color="red" />
                            <Text
                                rotation={[-Math.PI / 2, Math.PI, 0]}
                                color="white"
                                fontSize={.04}
                                position={[0, -0.006, -0.007]}
                                onClick={() => window.open(liveLink, "_blank")}
                            >
                                Live
                            </Text>
                        </Cylinder>
                    </group>

                    <group position={[.4, 1.8, .45]} rotation={[Math.PI / 6.89, 0, 0]}>
                        <Cylinder args={[.05, .05, .01]} rotation={[Math.PI / 2, 0, 0]}>
                            <meshBasicMaterial color="red" />
                        </Cylinder>
                        <Image
                            scale={[.1, .1]}
                            rotation={[0, Math.PI, 0]}
                            url={Github}
                            transparent
                            position={[0, 0, -0.007]}
                            onClick={() => window.open(githubLink, "_blank")}
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

