import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import CanvasLoader from '../Loader'
import * as THREE from 'three'
import { useMediaQuery } from 'react-responsive'
const Robot = () => {

  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })
  const computer = useGLTF('/onix_frc_rapid_react_2022/scene.gltf')
  


  return (
    <group position={[0, 0, 0]}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1}/>
      <spotLight position={[0, 0, 0]} angle={0.12} penumbra={5} intensity={5} castShadow shadow-mapsize={1024} />
      
      <primitive object={computer.scene} scale={isMobile ? 9 : 6} position={[0, isMobile ? -2 : 0, 0]} rotation={[Math.PI/2, 3.5*Math.PI/2, 0]} />
    </group>
  )
}

const RobotCanvas = () => {
  return (
    <Canvas translate='yes' frameloop='demand' shadows camera={{ position: [20, 3, 5], fov: 30 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense>
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom={false}
        />
        <Robot />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default RobotCanvas
