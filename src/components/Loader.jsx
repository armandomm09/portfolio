import { Html, useProgress } from "@react-three/drei"

const CanvasLoader = () => {

  const { progress } = useProgress()
  return (
    <Html>
      <span className=" canvas-load"></span>
      <p className=" text-xl mt-40 text-white">{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default CanvasLoader