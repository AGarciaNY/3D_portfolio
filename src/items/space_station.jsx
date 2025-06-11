import { useEffect, useRef } from "react"
import { quat, RigidBody } from "@react-three/rapier"
import * as THREE from "three";
import { Box, Sphere, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Planet1Model } from "../../public/Planetsone";
import { Planet2Model } from "../../public/Planetstwo";
import { Planet3Model } from "../../public/Planetsthree";
import { Planet4Model } from "../../public/Planetsfour";
import { Planet5Model } from "../../public/Planetsfive";


export const Station = ({ setDestination }) => {
    const { camera } = useThree();

    const planetOne = useRef()
    const planetTwo = useRef()
    const planetThree = useRef()
    const planetFour = useRef()
    // const planetFive = useRef()
    const speed = useRef(1);
    const speed1 = useRef(0.8);
    const speed2 = useRef(0.7);
    const speed3 = useRef(0.6);
    // const speed4 = useRef(0.5);
    const sign1 = useRef()
    const sign2 = useRef()
    const sign3 = useRef()
    const sign4 = useRef()
    // const sign5 = useRef()
    useFrame((_state, delta) => {
        if (sign1.current) {
            sign1.current.lookAt(camera.position);
            sign2.current.lookAt(camera.position);
            sign3.current.lookAt(camera.position);
            sign4.current.lookAt(camera.position);
        }
        // const curRotation = quat(aboutPlanet.current.rotation())
        if (planetOne.current) {
            const curRotation = quat(planetOne.current.rotation());
            const incrementRotation = new THREE.Quaternion().setFromAxisAngle(
                new THREE.Vector3(0, 1, 0),
                delta * speed1.current
            );
            curRotation.multiply(incrementRotation);
            planetOne.current.setNextKinematicRotation(curRotation);

            const curRotationTWO = quat(planetTwo.current.rotation());
            const incrementRotationTWO = new THREE.Quaternion().setFromAxisAngle(
                new THREE.Vector3(0, 1, 0),
                delta * speed1.current
            );
            curRotationTWO.multiply(incrementRotationTWO);
            planetTwo.current.setNextKinematicRotation(curRotationTWO);



            const curRotationThree = quat(planetThree.current.rotation());
            const incrementRotationThree = new THREE.Quaternion().setFromAxisAngle(
                new THREE.Vector3(0, 1, 0),
                delta * speed2.current
            );
            curRotationThree.multiply(incrementRotationThree);
            planetThree.current.setNextKinematicRotation(curRotationThree);


            const curRotationFour = quat(planetFour.current.rotation());
            const incrementRotationFour = new THREE.Quaternion().setFromAxisAngle(
                new THREE.Vector3(0, 1, 0),
                delta * speed3.current
            );
            curRotationFour.multiply(incrementRotationFour);
            planetFour.current.setNextKinematicRotation(curRotationFour);



            // const curRotationFive = quat(planetFive.current.rotation());
            // const incrementRotationFive = new THREE.Quaternion().setFromAxisAngle(
            //     new THREE.Vector3(0, 1, 0),
            //     delta * speed4.current
            // );
            // curRotationFive.multiply(incrementRotationFive);
            // planetFive.current.setNextKinematicRotation(curRotationFive);

        }

    })
    const Tag = ({ name, position, boxSize, refHere = null }) => {

        return (
            <group position={position} ref={refHere}>
                <Box args={boxSize}></Box>
                <Text fontSize={.2} color={"black"} position={[0, 0, .1]}>{name}</Text>
            </group>
        )
    }
    return (
        <group position={[0, 2, 10]} rotation={[-Math.PI / 4, 0, 0]} scale={1.5}>
            <Sphere args={[.5, 20]} position={[0, 1, 0]}>
                <meshStandardMaterial color={"yellow"} roughness={3} />
            </Sphere>

            <RigidBody type="kinematicPosition" position={[0, 0.75, 0]} ref={planetOne} rotation={[0, Math.PI / 8, Math.PI / 20]}>
                <Tag name={"About"} position={[1, .7, 0]} boxSize={[.7, .3, .01]} refHere={sign1} />
                <Planet1Model setDestination={setDestination} />
            </RigidBody>

            <RigidBody type="kinematicPosition" position={[0, 0.75, 0]} ref={planetTwo} rotation={[0, -Math.PI / 2, Math.PI / 15]}>
                <Tag name={"Work EXP"} position={[1.5, .7, 0]} boxSize={[1, .3, .01]} refHere={sign2} />
                <Planet2Model setDestination={setDestination} />
            </RigidBody>

            <RigidBody type="kinematicPosition" position={[0, 0.75, 0]} ref={planetThree} rotation={[Math.PI / 10, -Math.PI / 1.2, Math.PI / 10]}>
                <Tag name={"Art Work"} position={[2.4, .7, 0]} boxSize={[.9, .3, .01]} refHere={sign3} />
                <Planet3Model setDestination={setDestination} />
            </RigidBody>
            <RigidBody type="kinematicPosition" position={[0, 0.75, 0]} ref={planetFour} rotation={[0, Math.PI, Math.PI / 18]}>
                <Tag name={"Projects"} position={[3.2, 1, 0]} boxSize={[.9, .3, .01]} refHere={sign4} />
                <Planet4Model setDestination={setDestination} />
            </RigidBody>
            {/* <RigidBody type="kinematicPosition" position={[0, 0.75, 0]} ref={planetFive} rotation={[0, -Math.PI / 7, Math.PI / 20]}>
                <Planet5Model />
            </RigidBody> */}
        </group>
    )
}