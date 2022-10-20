import BackHome from "../../components/BackHome.jsx";
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import BK from './assets/天空盒/BK.jpg'
import DN from './assets/天空盒/DN.jpg'
import FR from './assets/天空盒/FR.jpg'
import LF from './assets/天空盒/LF.jpg'
import RT from './assets/天空盒/RT.jpg'
import UP from './assets/天空盒/UP.jpg'
import { useEffect } from "react";
import { initSceneCameraRenderer } from "../../utils/tools.js";
import 太阳 from './assets/太阳.jpeg'
import 水星 from './assets/水星.png'
import 金星 from './assets/金星.png'
import 地球 from './assets/地球.png'
import 月球 from './assets/月球.jpeg'
import 火星 from './assets/火星.png'
import 木星 from './assets/木星.png'
import 土星 from './assets/土星.png'
import 天王星 from './assets/天王星.png'
import 海王星 from './assets/海王星.png'

const SolarSystem = () => {
  const CUBE_FILES = [BK, DN, FR, LF, RT, UP]

  let scene, camera, renderer, controls, loader
  const loadPlanet = () => {
    loader = new THREE.TextureLoader()

    let sun = new THREE.Group()
    let sunParent = new THREE.Group()
    scene.add(sunParent)
    loader.load(太阳, texture => {
      const geometry = new THREE.SphereGeometry(500, 50, 50)
      const material = new THREE.MeshBasicMaterial({ map: texture })
      const mesh = new THREE.Mesh(geometry, material)
      sun.add(mesh)
      sunParent.add(sun)
      render()
    })
  }

  const init = () => {
    scene = new THREE.Scene()
    scene.background = new THREE.CubeTextureLoader().load(CUBE_FILES)

    const width = window.innerWidth
    const height = window.innerHeight
    const k = width / height

    camera = new THREE.PerspectiveCamera(60, k, 1, 10000);
    camera.position.set(0, 0, 500)
    camera.lookAt(scene.position)

    renderer = new THREE.WebGLRenderer()
    renderer.setSize(width, height)
    const container = document.querySelector('.container')
    container.append(renderer.domElement)

    controls = new OrbitControls(camera, renderer.domElement)
    controls.addEventListener('change', () => render())

    loadPlanet()
  }

  function render () {
    renderer.render(scene, camera)
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <div className="container"></div>
      <BackHome />
    </>
  )
}

export default SolarSystem
