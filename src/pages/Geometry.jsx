import BackHome from "../components/BackHome.jsx";
import { useEffect } from "react";
import { initSceneCameraRenderer } from "../utils/tools.js";
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/experimental/CameraControls.js";

const Geometry = () => {

  useEffect(() => {
    const { camera, renderer, scene } = initSceneCameraRenderer()

    const ambientLight = new THREE.AmbientLight(0x444444)
    scene.add(ambientLight)
    const directionalLight = new THREE.DirectionalLight(0xabcdef, 1)
    directionalLight.position.set(400, 300, 500)
    scene.add(directionalLight)

    const render = () => renderer.render(scene, camera)
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.addEventListener('change', () => render())

    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-400, 0),
      new THREE.Vector3(-100, 100),
      new THREE.Vector3(0, 0),
      new THREE.Vector3(100, -100),
      new THREE.Vector3(400, 0),
    ])

    const geometry = new THREE.TubeGeometry(curve, 32, 80, 32, false)
    const material = new THREE.MeshLambertMaterial({ color: 0xabcd33, side: THREE.DoubleSide })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    const points = curve.getPoints(50)
    const geometry2 = new THREE.BufferGeometry().setFromPoints(points)
    const material2 = new THREE.LineBasicMaterial({ color: 0xff0000 })
    const line = new THREE.Line(geometry2, material2)
    scene.add(line)

    render()

  }, [])

  return (
    <>
      <div className="container"></div>
      <BackHome />
    </>
  )
}

export default Geometry
