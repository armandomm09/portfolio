import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect } from 'react'
import * as THREE from 'three'

const Quesillo = () => {
  const { scene } = useGLTF('/portfolio/robot_quesillo_posicion_1/scene.gltf')

  // Center the model
 

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1}/>
      <spotLight position={[0, 0, 0]} angle={0.12} penumbra={5} intensity={5} castShadow shadow-mapsize={1024} />
      <primitive object={scene} scale={5} position={[0, -4, 0]} rotation={[Math.PI / 2, 0, 0]} />
    </mesh>
  )
}

const QuesilloCanvas = () => {
  return (
    <Canvas translate='yes' frameloop='demand' shadows camera={{ position: [20, 3, 5], fov: 30 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={null}>
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom={false}
        />
        <Quesillo />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default QuesilloCanvas
