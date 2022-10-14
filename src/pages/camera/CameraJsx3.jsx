import BackHome from "../../components/BackHome.jsx";
import { useEffect } from "react";
import { cameraInitCommon, cameraRendererInit } from "./common.js";
import * as THREE from "three";

const CameraJsx3 = () => {

  let reqIdx
  const init = () => {
    const { scene, cube } = cameraInitCommon()
    const { renderer, s, k } = cameraRendererInit()

    const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
    camera.position.set(95, 0, -178)
    camera.lookAt(scene.position)

    function render () {
      renderer.render(scene, camera)
    }

    const animation = () => {
      reqIdx = requestAnimationFrame(() => {
        const r = cube.rotateY(Math.PI / 180)
        console.log(r.rotation.y)
        render()
        animation()
      })
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

export default CameraJsx3
