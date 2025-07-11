import { Box } from "@react-three/drei"
import { Physics, RigidBody } from "@react-three/rapier"
import { PlayerController } from "../character/playerController"
import { Spaceship } from "../items/spaceship"
import { TreeModel } from "../../public/Tree_1"
import { WorkingplanetmapModel } from "../../public/Workingplanetmap"

export const WorkEXP = ({ changeScene }) => {
    return (
        <>  
            <Physics>
                {/* trees */}
                <group>
                    <RigidBody type="fixed">
                        <TreeModel position={[5,0,5]}/>
                        <TreeModel position={[5,0,-5]}/>
                        <TreeModel position={[10,0,10]}/>
                        <TreeModel position={[20,0,20]}/>
                        <TreeModel position={[10,0,20]}/>
                        <TreeModel position={[20,0,10]}/>
                        <TreeModel position={[18,0,1]}/>
                        <TreeModel position={[1,0,18]}/>
                    </RigidBody>
                </group>

                <Spaceship changeScene={changeScene} position={[0, 2, 20]} />
                <PlayerController position={[0,2,0]}/>
                <ambientLight intensity={0.5} />
                <directionalLight
                    intensity={0.65}
                    castShadow
                    position={[-15, 10, 15]}
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                    shadow-bias={-0.00005}
                />


                <RigidBody type="fixed" name="floor" colliders="trimesh"a>
                    <WorkingplanetmapModel position={[-30,0,10]}/>
                </RigidBody>
            </Physics>

        </>
    )
}