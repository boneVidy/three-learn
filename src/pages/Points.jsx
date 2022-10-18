import BackHome from "../components/BackHome.jsx";
import { cameraInitCommon, cameraRendererInit } from "./camera/common.js";
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/experimental/CameraControls.js";
import { useEffect } from "react";

const Points = () => {
  useEffect(() => {
    // const { scene } = cameraInitCommon()
    const scene = new THREE.Scene()
    const width = window.innerWidth
    const height = window.innerHeight
    const k = width / height
    const s = 200

    const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
    camera.position.set(0, 0, 500)
    camera.lookAt(scene.position)

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(width, height)
    const container = document.querySelector('.container')
    container.appendChild(renderer.domElement)

    function render () {
      renderer.render(scene, camera)
    }
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.addEventListener('change', () => render())
    const geometry = new THREE.BoxGeometry(100, 100, 100)
    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 10.0
    })
    const cube = new THREE.Points(geometry, material)
    scene.add(cube)

    render()
  }, [])

  return (
    <>
      <div className="container"></div>
      <BackHome />
    </>
  )
}

export default Points
