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
                <boxGeometry args={[2, 4, 5]}>
                </boxGeometry>
                <meshStandardMaterial color="blue" transparent opacity={0.5} />

            </mesh>
            <BallCollider position={[0, 2, -14]} args={[1, 1]} sensor={true} colliders={true} onIntersectionEnter={() => { goInsideSpaceShip() }} />
            <RigidBody type="fixed" position={[0, 0, -14]} rotation={[-Math.PI / 7, 0, 0]}>
                <Box args={[2, .1, 8.5]} visible={true} >
                    <meshStandardMaterial color="blue" opacity={0.1} />
                </Box>
            </RigidBody>

        </group>
    )
}