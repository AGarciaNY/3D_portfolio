import { Box, Cylinder, Sphere, Text } from "@react-three/drei"
import { Physics, RigidBody } from "@react-three/rapier"
import { PlayerController } from "../character/playerController"
import { useState } from "react"
import { Station } from "../items/space_station"
import { InsideSpaceshipModel } from "../../public/InsideSpaceship"
import { useThree } from "@react-three/fiber"
import { CubeTextureLoader } from "three"
// CircleGeometry
export const InSideSpaceship = ({ changeScene }) => {
    const SkyBox = () => {

            const { scene } = useThree();
            const loader = new CubeTextureLoader();
            // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
            const texture = loader.load([
                "/1.jpg",
                "/1.jpg",
                "/1.jpg",
                "/1.jpg",
                "/1.jpg",
                "/1.jpg",
            ]);
    
            // Set the scene background property to the resulting texture.
            scene.background = texture;
            return null;
        }

    const [destination, setDestination] = useState("")
    return (
        <>
            <color attach="background" args={["black"]} />
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
                <SkyBox/>
            </directionalLight>

            <Physics>
                <group position={[0, 4, 10]} rotation={[0, Math.PI, 0]}>
                    <Station setDestination={setDestination} />
                </group>
                <PlayerController position={[0, 4, 14]} />


                <group position={[0, 5, 11]} rotation={[0, 0, 0]}>

                    <mesh onClick={() => { changeScene(destination) }} position={[2.52,-1,-.18]}>
                        <Sphere args={[.2, 10]}>

                            <meshBasicMaterial color={"red"} />
                        </Sphere>
                    </mesh>

                    <Text
                        color="white"
                        fontSize={.2}
                        position={[1, -.9, 0]}
                        rotation={[-Math.PI / 3,0,  Math.PI / 50]}
                        maxWidth={2.5}
                    >
                        Click on a planet and the red button to get there.
                    </Text>
                    <Text
                        color="white"
                        fontSize={.2}
                        position={[1, -1.1, 0.5]}
                        rotation={[-Math.PI / 3,0,  Math.PI / .09989]}

                    >
                        Destination: {destination}
                    </Text>
                </group>


                <RigidBody type="fixed" colliders="trimesh">
                    {/* <Box position={[0, 0, 0]} args={[10, 1, 10]} >
                        <meshBasicMaterial color={"green"} roughness={3} />
                    </Box> */}
                    <InsideSpaceshipModel />
                </RigidBody>
            </Physics>

        </>
    )
}