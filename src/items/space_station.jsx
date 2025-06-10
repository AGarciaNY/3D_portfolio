import { useEffect, useRef } from "react"
import { Planet1TestModel } from "../../public/Planet1test"
import { quat, RigidBody } from "@react-three/rapier"
import * as THREE from "three";
import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


export const Station = () => {
    const aboutPlanet = useRef()
    const speed = useRef(1);

    useFrame((_state, delta) => {
        // const curRotation = quat(aboutPlanet.current.rotation())
        const curRotation = quat(aboutPlanet.current.rotation());
        const incrementRotation = new THREE.Quaternion().setFromAxisAngle(
            new THREE.Vector3(0, 1, 0),
            delta * speed.current
        );
        curRotation.multiply(incrementRotation);
        aboutPlanet.current.setNextKinematicRotation(curRotation);

    },[Box])
    return (
        <RigidBody type="kinematicPosition" position={[0, 0.75, 0]} ref={aboutPlanet}>
            <Planet1TestModel />
        </RigidBody>
    )
}