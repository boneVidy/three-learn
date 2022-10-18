import BackHome from "../components/BackHome.jsx";
import * as THREE from 'three'
import { initSceneCameraRenderer } from "../utils/tools.js";
import { OrbitControls } from "three/examples/jsm/controls/experimental/CameraControls.js";
import { useEffect } from "react";

const Line = () => {
  useEffect(() => {
    const { scene, camera, renderer, width, height, k, s } = initSceneCameraRenderer()

    const render = () => renderer.render(scene, camera)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.addEventListener('change', () => render())

    const curve = new THREE.SplineCurve([
      new THREE.Vector2(-10, 0),
      new THREE.Vector2(-5, 5),
      new THREE.Vector2(0, 0),
      new THREE.Vector2(5, -5),
      new THREE.Vector2(10, 0),
    ])
    const points = curve.getPoints(50)
    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    const material = new THREE.LineBasicMaterial({ color: 0xffffff })
    const spline = new THREE.Line(geometry, material)
    scene.add(spline)

    render()
  }, [])

  return (
    <>
      <div className="container"></div>
      <BackHome />
    </>
  )
}

export default Line
