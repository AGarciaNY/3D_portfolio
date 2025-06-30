import { Box } from "@react-three/drei"
import { Physics, RigidBody } from "@react-three/rapier"
import { PlayerController } from "../character/playerController"
import { Spaceship } from "../items/spaceship"

export const AboutMe = ({changeScene}) => {
    return (
        <>
            <Physics>
                <Spaceship changeScene={changeScene} position={[4,1,4]}/>

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
                    <Box position={[0, 0, 0]} args={[50, 1, 50]} >
                        <meshStandardMaterial color={"green"} roughness={3} />
                    </Box>
                </RigidBody>
            </Physics>

        </>
    )
}