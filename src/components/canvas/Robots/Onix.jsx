import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import CanvasLoader from '../../Loader'
import * as THREE from 'three'
import { useMediaQuery } from 'react-responsive'

const Onix = () => {

  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })
  const computer = useGLTF('/portfolio/onix_frc_rapid_react_2022/scene.gltf')
  


  return (
    <group position={[0, 0, 0]}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} distance={100}/>
      <spotLight decay={0} color={new THREE.Color( '#5211c3' )} position={[0, 0, 0]} angle={0.12} penumbra={100} intensity={5} castShadow shadow-mapsize={1024} />
      
      <primitive object={computer.scene} scale={isMobile ? 9 : 8} position={[0, isMobile ? -2 : -1.5, 0]} rotation={[Math.PI/2, 3.75*Math.PI/2, 0]} />
    </group>
  )
}

const OnixCanvas = () => {
  return (
    <Canvas translate='yes' frameloop='demand' shadows camera={{ position: [18, 3, 5], fov: 30 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          maxPolarAngle={Math.PI * 2}
          minPolarAngle={0}
          enableZoom={true}
        />
        <Onix />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default OnixCanvas
