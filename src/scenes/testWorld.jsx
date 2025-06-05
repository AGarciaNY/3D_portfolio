import { Physics, RigidBody } from "@react-three/rapier"
import { Box, OrthographicCamera } from "@react-three/drei"
import { PlayerController } from "../character/playerController"


export default function TestWorld() {

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
                <PlayerController />


                <RigidBody type="fixed" name="floor">
                    <Box position={[0, 0, 0]} args={[10, 1, 10]} >
                        <meshStandardMaterial color={"#7732a8"} roughness={3} />
                    </Box>
                </RigidBody>
            </Physics>

        </>
    )
}