import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";

const HeroExperience = () => {
  return (
   <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
    <ambientLight intensity={0.2} color="#1a1a40" />
    <directionalLight position={[5, 5, 5]} intensity={1.5} />
    <OrbitControls />
    <mesh>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
   </Canvas>
  )
}

export default HeroExperience