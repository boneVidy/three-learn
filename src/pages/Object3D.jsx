import * as THREE from 'three'

import BackHome from "../components/BackHome.jsx";
import { useEffect } from "react";
import { cameraInitCommon, cameraRendererInit } from "./camera/common.js";

function Object3D () {
  let reqIdx

  const init = () => {
    const { scene, cube } = cameraInitCommon()
    cube.rotateZ(Math.PI / 4)
    const { renderer, k, s } = cameraRendererInit()

    const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    camera.position.set(95, 0, -178);
    camera.lookAt(scene.position);

    function render () {
      renderer.render(scene, camera)
    }

    const axis = new THREE.Vector3(0, 1, 0)
    const animation = () => {
      reqIdx = requestAnimationFrame(() => {
        // cube.rotateOnAxis(axis, Math.PI / 180)
        cube.rotateOnWorldAxis(axis, Math.PI / 180)
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

export default Object3D
