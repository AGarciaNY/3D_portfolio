import { Box, Text } from "@react-three/drei"
import { Physics, RigidBody } from "@react-three/rapier"
import { PlayerController } from "../character/playerController"
import { useState } from "react"

// CircleGeometry
export const InSideSpaceship = ({ changeScene }) => {
    const [destination, setDestination] = useState("")
    return (
        <>
            <Physics debug>

                <PlayerController />
                <group position={[0, 2, 5]} rotation={[Math.PI / 4, Math.PI, 0]}>

                    <Box args={[4, 4, 0.1]} />

                    <mesh onClick={() => { setDestination("testWorld") }} position={[-1, 0, 1]}>
                        <sphereGeometry args={[.2]} />
                        <meshBasicMaterial color={"black"} />
                    </mesh>
                    <mesh onClick={() => { setDestination("about") }} position={[0, 0, 1]}>
                        <sphereGeometry args={[.2]} />
                        <meshBasicMaterial color={"green"} />
                    </mesh>
                    <mesh onClick={() => { setDestination("workEXP") }} position={[1, 0, 1]}>
                        <sphereGeometry args={[.2]} />
                        <meshBasicMaterial color={"orange"} />
                    </mesh>


                    <mesh onClick={() => { changeScene(destination) }} position={[2, 0, 1]}>
                        <Box arg={[1, 0.5]} />
                        <meshBasicMaterial color={0xff0000} />
                    </mesh>

                    <Text
                        color="black"
                        fontSize={.5}
                        position={[0, 0, 1]}
                    >
                        Hello, World!
                    </Text>
                    <Text
                        color="black"
                        fontSize={.2}
                        position={[0, -2, 1]}
                    >
                        Destination: {destination}
                    </Text>
                </group>


                <RigidBody type="fixed" name="wfloor">
                    <Box position={[0, 0, 0]} args={[10, 1, 10]} >
                        <meshStandardMaterial color={"#7732a8"} roughness={3} />
                    </Box>
                </RigidBody>
            </Physics>

        </>
    )
}