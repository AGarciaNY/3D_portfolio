import { Physics, RigidBody } from "@react-three/rapier"
import Character from "../character"
import { Box, useKeyboardControls } from "@react-three/drei"
import { Suspense, useRef, useState } from "react"
import { Controls } from "../App"
import { useFrame } from "@react-three/fiber"

export default function TestWorld() {
    const jump = () => {

        if (isOnFloor.current) {
            cube.current.applyImpulse({ x: 0, y: 5, z: 0 });
            isOnFloor.current = false;
        }
    };
    const [start, setStart] = useState(false);
    const cube = useRef();
    const jumpPressed = useKeyboardControls((state) => state[Controls.jump])
    const leftPressed = useKeyboardControls((state) => state[Controls.left])
    const rightPressed = useKeyboardControls((state) => state[Controls.right])
    const backPressed = useKeyboardControls((state) => state[Controls.back])
    const forwardPressed = useKeyboardControls((state) => state[Controls.forward])


    const handleMovement = () => {
        if (rightPressed) {
            cube.current.applyImpulse({ x: 0.1, y: 0, z: 0 });
        }
        if (leftPressed) {
            cube.current.applyImpulse({ x: -0.1, y: 0, z: 0 });
        }

        if (forwardPressed) {
            cube.current.applyImpulse({ x: 0, y: 0, z: -0.1 });
        }
        if (backPressed) {
            cube.current.applyImpulse({ x: 0, y: 0, z: 0.1 });
        }
    };
    const speed = useRef(5);

    useFrame((_state, delta) => {
        if (jumpPressed) {
            jump();
        }
        handleMovement();

        if (!start) {
            return;
        }
        const curRotation = quat(kicker.current.rotation());
        const incrementRotation = new THREE.Quaternion().setFromAxisAngle(
            new THREE.Vector3(0, 1, 0),
            delta * speed.current
        );
        curRotation.multiply(incrementRotation);
        kicker.current.setNextKinematicRotation(curRotation);

        speed.current += delta;
    });
    const isOnFloor = useRef(true);

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-10, 10, 0]} intensity={0.4} />
            <RigidBody
                ref={cube}

                onCollisionEnter={({ other }) => {
                    if (other.rigidBodyObject.name === "floor") {
                        isOnFloor.current = true;
                        console.log("true")
                    }
                }}

                onCollisionExit={({ other }) => {
                    if (other.rigidBodyObject.name === "floor") {
                        isOnFloor.current = false;
                        console.log("false")
                    }
                }}
            >
                <Character
                    onClick={() => setStart(true)}
                />
            </RigidBody>


            <RigidBody type="fixed" name="floor">
                <Box position={[0, 0, 0]} args={[10, 1, 10]} >
                    <meshStandardMaterial color={"#7732a8"} roughness={3} />
                </Box>
            </RigidBody>

        </>
    )
}