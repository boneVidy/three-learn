import BackHome from "../components/BackHome.jsx";
import { useEffect } from "react";
import { initSceneCameraRenderer } from "../utils/tools.js";
import { OrbitControls } from "three/examples/jsm/controls/experimental/CameraControls.js";
import * as THREE from 'three'

const Plane = () => {

  useEffect(() => {
    const { scene, renderer, camera } = initSceneCameraRenderer()

    const render = () => renderer.render(scene, camera)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.addEventListener("change", () => render())

    const heartShape = new THREE.Shape()
    heartShape.moveTo(0, 0)
    heartShape.lineTo(100, 0)
    heartShape.quadraticCurveTo(100, 100, 0, 100)
    heartShape.absarc(0, 0, 100, Math.PI / 2, Math.PI * 1.5, false)
    heartShape.closePath()
    const geometry = new THREE.ShapeGeometry(heartShape)
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.FrontSide
    })
    const line = new THREE.Mesh(geometry, material)
    scene.add(line)
    render()
  })

  return (
    <>
      <div className="container"></div>
      <BackHome />
    </>
  )
}

export default Plane
