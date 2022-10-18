import * as THREE from "three";

export function initSceneCameraRenderer (s = 200, camera = null) {
  const scene = new THREE.Scene()
  const width = window.innerWidth
  const height = window.innerHeight
  const k = width / height

  if (!camera) {
    camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
    camera.position.set(0, 0, 500)
    camera.lookAt(scene.position)
  }
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height)
  const container = document.querySelector('.container')
  container.appendChild(renderer.domElement)

  return { scene, width, height, k, s, camera, renderer }
}
