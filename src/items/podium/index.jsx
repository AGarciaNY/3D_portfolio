import { Box, Text } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber";
import { BallCollider } from "@react-three/rapier"
import { useRef, useState } from "react";
import { Vector3 } from "three";

export const Podium = ({ setInteractFunction, setCanPlayerMove, setCanPlayerCameraMove }) => {
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
            <BallCollider args={[2, 2]} sensor={true} colliders={true} onIntersectionEnter={() => { PodiumE(interactionFunction) }} onIntersectionExit={PodiumE} />

            <Box args={[1.2, .5, 0.1]} position={[0, 0, -1]} ref={EPressRef} visible={ePressVisible}>
                <meshStandardMaterial color={"black"} roughness={3} />
                <Text
                    color="white"
                    fontSize={.2}
                    position={[0, 0.05, 1.0]}

                >
                    Holed E
                </Text>
            </Box>

            <group ref={container}>
                <group ref={cameraTarget} position-z={11} />
                <group ref={cameraPosition} position-y={3} position-z={-2} />
                <group ref={board}>
                    <Box args={[8, 5, 1]} position={[0, 2, 2]} rotation={[Math.PI / 15, Math.PI, 0]}>
                        
                        <Text
                            color="black"
                            fontSize={.3}
                            position={[3, 2, 1]}
                            onClick={() => {
                                setCanPlayerMove(true)
                                setCanPlayerCameraMove(true)
                            }}
                        >
                            Exit
                        </Text>
                    </Box>

                </group>
            </group>
        </group>
    )
}