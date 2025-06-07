import { Box } from "@react-three/drei"
import { Physics, RigidBody } from "@react-three/rapier"
import { PlayerController } from "../character/playerController"

export const WorkEXP = () => {
    return (
        <>
            <Physics debug>

                <PlayerController />
               <ambientLight intensity={0.5} />
                           <directionalLight
                               intensity={0.65}
                               castShadow
                               position={[-15, 10, 15]}
                               shadow-mapSize-width={2048}
                               shadow-mapSize-height={2048}
                               shadow-bias={-0.00005}
                           />


                <RigidBody type="fixed" name="floor">
                    <Box position={[0, 0, 0]} args={[10, 1, 10]} >
                        <meshStandardMaterial color={"orange"} roughness={3} />
                    </Box>
                </RigidBody>
            </Physics>

        </>
    )
}