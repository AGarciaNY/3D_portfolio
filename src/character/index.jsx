import { Box, PerspectiveCamera } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function Character(){
   
    const MainBody = () => {     
        return (
        <group 
            rotation={[Math.PI / 2, 0, 0]}
            position={[0,5, 0]}
        >
            <Box position={[0,0,1]} args={[1,1,1]} />
            {/* <meshStandardMaterial wireframe={true}/> */}
        </group>
        )
    }

    const CameraFollow = () => {
        const cameraRef = useRef()
        const characterRef = useRef()

        useFrame(()=>{
            if(characterRef.current && cameraRef.current){
                cameraRef.current.position.x = characterRef.current.position.x;
                cameraRef.current.position.y = characterRef.current.position.y + 2;
                cameraRef.current.position.z = characterRef.current.position.z + -5;

                cameraRef.current.loockAt(characterRef.current.position)
            }
        })
        return (
            <>
                <MainBody red={characterRef}/>
                <PerspectiveCamera ref={cameraRef} makeDefault position={[0,8,5]} rotation={[-Math.PI / 5,0,0]}/>
            </>
        )
        
    }

    return <CameraFollow/>
}