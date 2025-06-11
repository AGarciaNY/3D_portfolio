import { Box, Text } from "@react-three/drei"
import { Physics, RigidBody } from "@react-three/rapier"
import { PlayerController } from "../character/playerController"
import { useState } from "react"
import { Station } from "../items/space_station"

// CircleGeometry
export const InSideSpaceship = ({ changeScene }) => {
    const [destination, setDestination] = useState("")
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
                {/* <OrthographicCamera
                    left={-22}
                    right={15}
                    top={10}
                    bottom={-20}
                /> */}
            </directionalLight>
            <Physics>
                <group position={[0,2,0]}>
                    <Station/>
                </group>
                <PlayerController />
                <group position={[0, 2, -10]} rotation={[0, Math.PI, 0]}>

                    <Box args={[4, 5, 0.1]}>
                        <meshBasicMaterial color={"#000c78"} />
                    </Box>
                    <mesh onClick={() => { setDestination("can't go here") }} position={[0, -0.5, 1]}>
                        <sphereGeometry args={[.4]} />
                        <meshBasicMaterial color={"yellow"} />
                    </mesh>

                    <mesh onClick={() => { setDestination("testWorld") }} position={[-1, .8, 1]}>
                        <sphereGeometry args={[.2]} />
                        <meshBasicMaterial color={"black"} />
                    </mesh>
                    <mesh onClick={() => { setDestination("about") }} position={[0, 1, 1]}>
                        <sphereGeometry args={[.2]} />
                        <meshBasicMaterial color={"green"} />
                    </mesh>
                    <mesh onClick={() => { setDestination("workEXP") }} position={[1, 0, 1]}>
                        <sphereGeometry args={[.2]} />
                        <meshBasicMaterial color={"#db7a02"} />
                    </mesh>
                    <mesh onClick={() => { setDestination("art work") }} position={[-1, -1, 1]}>
                        <sphereGeometry args={[.2]} />
                        <meshBasicMaterial color={"gray"} />
                    </mesh>
                    <mesh onClick={() => { setDestination("projects") }} position={[0, -1.5, 1]}>
                        <sphereGeometry args={[.2]} />
                        <meshBasicMaterial color={"#2994f2"} />
                    </mesh>


                    <mesh onClick={() => { changeScene(destination) }} position={[2, 0, 1]}>
                        <Box arg={[1, 0.5]} />
                        <meshBasicMaterial color={0xff0000} />
                    </mesh>

                    <Text
                        color="white"
                        fontSize={.2}
                        position={[0, 2, 1]}
                    >
                        Hello, World!
                    </Text>
                    <Text
                        color="white"
                        fontSize={.2}
                        position={[0, -2, 1]}
                    >
                        Destination: {destination}
                    </Text>
                </group>


                <RigidBody type="fixed" name="wfloor">
                    <Box position={[0, 0, 0]} args={[10, 1, 10]} >
                        <meshBasicMaterial color={"green"} roughness={3} />
                    </Box>
                </RigidBody>
            </Physics>

        </>
    )
}