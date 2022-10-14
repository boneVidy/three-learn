import * as THREE from "three";

export const cameraInitCommon = () => {
  const scene = new THREE.Scene()
  const geometry = new THREE.BoxGeometry(100, 100, 100);
  const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube)

  const ambientLight = new THREE.AmbientLight(0x444444);
  const directionalLight = new THREE.DirectionalLight(0xabcdef, 1);
  directionalLight.position.set(400, 200, 300)
  scene.add(ambientLight)
  scene.add(directionalLight)

  return {
    scene, geometry, material, cube, ambientLight, directionalLight,
  }
}

export const cameraRendererInit = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  const k = width / height
  const s = 200

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height)
  const container = document.querySelector('.container')
  container.appendChild(renderer.domElement)
  return { renderer, width, height, k, s }
}

export const componentWillUnmount = cb => () => cb && cb()
