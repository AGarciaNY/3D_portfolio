import { BallCollider, CapsuleCollider, Physics, RigidBody } from "@react-three/rapier"
import { Box, OrthographicCamera, Text } from "@react-three/drei"
import { PlayerController } from "../character/playerController"
import { useRef, useState } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from 'three';
import { Spaceship } from "../items/spaceship/index"

export default function TestWorld({ changeScene }) {
    var meshRef = useRef()
    const EPressRef = useRef()
    const [ePressVisible,setEPressVisible] = useState(false)
    const { camera } = useThree();

    const raycaster = new THREE.Raycaster();
    const pos = new THREE.Vector3();
    const dir = new THREE.Vector3();
    const scene = useThree(state => state.scene);
    const [canPlayerMove, setCanPlayerMove] = useState(true)


    useFrame(() => {
        if (EPressRef.current) {
            EPressRef.current.lookAt(camera.position);
        }

        if (!meshRef.current) return;
        raycaster.set(meshRef.current.getWorldPosition(pos), meshRef.current.getWorldDirection(dir));
        const intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length > 0) {
            changeScene("spaceship")
        }
    });
    const showE = () => {
        setEPressVisible(!ePressVisible)
        
        console.log("here")
    }

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

            <Physics debug>

                <PlayerController canPlayerMove={canPlayerMove} />

                <Spaceship spaceShipRef={meshRef} />




                <RigidBody type="fixed" position={[-2, 2, -2]} colliders={false} rotation={[0, Math.PI / 2, 0]}>
                    <BallCollider args={[2, 2]} sensor={true} colliders={true} onIntersectionEnter={showE} onIntersectionExit={showE}/>
                    
                     <Box args={[1, 1.2, 0.1]} position={[0, 0, 1]} ref={EPressRef} visible={ePressVisible}>
                        <Text
                        color="black"
                        fontSize={1}
                        position={[0, 0.05, 1.0]}
                        
                    >
                        E
                    </Text>
                     </Box>
                    <Box args={[4, 4, 0.1]} position={[0, 0, -2]} />
                </RigidBody>

                <RigidBody type="fixed" name="floor">
                    <Box position={[0, 0, 0]} args={[10, 1, 10]} >
                        <meshStandardMaterial color={"#7732a8"} roughness={3} />
                    </Box>
                </RigidBody>

            </Physics>

        </>
    )
}