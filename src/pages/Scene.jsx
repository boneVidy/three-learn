import BackHome from "../components/BackHome.jsx";
import { useEffect } from "react";
import * as THREE from 'three'

const SceneJsx = () => {

  const init = () => {
    const container = document.querySelector(".container");

    const scene = new THREE.Scene()
    // 立方体
    const geometry = new THREE.BoxGeometry(100, 100, 100)
    // 材质
    const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube)


    // 环境光
    const ambientLight = new THREE.AmbientLight(0x444444)
    scene.add(ambientLight)
    // 平行光
    const directionalLight = new THREE.DirectionalLight(0x00ff00, 1)
    directionalLight.position.set(400, 200, 300)
    scene.add(directionalLight)

    //相机
    const width = window.innerWidth
    const height = window.innerHeight
    const k = width / height
    const s = 200
    const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
    camera.position.set(400, 200, 300)
    camera.lookAt(scene.position)

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(width, height)
    container.appendChild(renderer.domElement)

    renderer.render(scene, camera);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div className="container"></div>
      <BackHome />
    </>
  )
}

export default SceneJsx
