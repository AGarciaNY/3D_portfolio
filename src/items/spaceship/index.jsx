import { BallCollider, RigidBody } from "@react-three/rapier"
import { SpaceshipModel } from "../../../public/Spaceship";
import { useState } from "react";
import { Box } from "@react-three/drei";

export const Spaceship = ({ changeScene, position }) => {

    const [currentAnimation, setSurrentAnimation] = useState("on_land")
    const goInsideSpaceShip = () => {
        console.log("here i am ")
        changeScene("spaceship")
    }

    return (
        <group position={position}>
            <mesh>
                <SpaceshipModel position={[0, -1.5, 0]} animation={currentAnimation} />
            </mesh>
            <mesh position={[0, 2, -12]}>
                <boxGeometry args={[2, 2, 2]}>
                </boxGeometry>
                <meshStandardMaterial color="blue" transparent opacity={0.5} />
                <BallCollider args={[1, 1]} sensor={true} colliders={true} onIntersectionEnter={() => { goInsideSpaceShip() }} />
            </mesh>
            <RigidBody type="fixed" position={[0, 0.3, -14]} rotation={[-Math.PI / 7, 0, 0]}>
                <Box args={[2, .1, 8]} visible={true} >
                    <meshStandardMaterial color="blue" opacity={0.1} />
                </Box>
            </RigidBody>

        </group>
    )
}