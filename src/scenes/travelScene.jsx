import { Box, OrthographicCamera } from "@react-three/drei"
import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";
import { SpaceshipModel } from "../../public/Spaceship";

export const TravelScece = () => {
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
                    autoRotate={true}
                />
                <SkyBox />
            </directionalLight>
            <Box arg={[1, 1]} />
        </>
    )
}