import BackHome from "../../components/BackHome.jsx";
import { useEffect } from "react";
import * as THREE from 'three'
import { cameraInitCommon, cameraRendererInit } from "./common.js";

const CameraJsx2 = () => {
  let reqIdx;

  const init = () => {
    const { scene } = cameraInitCommon()
    const { renderer, s, k } = cameraRendererInit()

    const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
    camera.position.set(95, 0, -178)
    camera.lookAt(scene.position)

    function render () {
      renderer.render(scene, camera)
    }

    // 相机的初始位置
    let x = 0
    let z = 0
    // 相机绕半径移动
    const r = 200
    // 相机移动角度
    let angle = 0
    const animation = () => {
      angle++
      const camerax = x + r * Math.cos(angle * Math.PI / 720)
      const cameraz = z + r * Math.sin(angle * Math.PI / 720)
      console.log('angle', angle, camera.position)
      camera.position.set(camerax, 0, cameraz)
      camera.lookAt(scene.position)
      render()
      reqIdx = requestAnimationFrame(animation)
    }
    animation()
  }

  useEffect(() => {
    init();
    return () => cancelAnimationFrame(reqIdx)
  }, []);

  return (
    <>
      <div className="container"></div>
      <BackHome />
    </>
  )
}

export default CameraJsx2
