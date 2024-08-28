import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { AmbientLight } from 'three'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.5]} />
      <mesh castShadow receiveShadow scale={2.75} >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#5210c3"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
        position={[0, 0, 1]}
        rotation={[ 2 * Math.PI, 0 , 6.25]}
          map={decal}
        />
        
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
  return (
    <Canvas translate='yes' 
    frameloop='demand' 
    gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
        />
<Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas