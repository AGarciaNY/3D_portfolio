
export const Spaceship = ({spaceShipRef}) => {
    return(
    <mesh ref={spaceShipRef} position={[4, 2, 4]}>
        <boxGeometry args={[2, 2, 2]} onCollisionEnter={() => { console.log("here I am ") }} />
        <meshStandardMaterial color="blue" transparent opacity={0.5} />
    </mesh>
    )
}