import BackHome from "../../components/BackHome.jsx";
import { useEffect } from "react";
import * as THREE from 'three'
import * as dat from 'dat.gui'

const CameraJsx1 = () => {

  const init = () => {
    const width = window.innerWidth
    const height = window.innerHeight

    // 场景
    const scene = new THREE.Scene()
    // 几何体
    const geometry = new THREE.BoxGeometry(100, 100, 100);
    const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube)

    // 光源 环境光 平行光
    const ambientLight = new THREE.AmbientLight(0x444444);
    const directionalLight = new THREE.DirectionalLight(0xabcdef, 1);
    directionalLight.position.set(400, 200, 300)
    scene.add(ambientLight)
    scene.add(directionalLight)

    // 相机
    const k = width / 2 / height
    const s = 200

    const camera2 = new THREE.OrthographicCamera(-s * 4 * k, s * 4 * k, s * 4, -s * 4, 1, 5000);
    camera2.position.set(0, 0, 2000);
    camera2.up.set(0, 1, 0)
    camera2.lookAt(0, 0, 0);

    const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
    camera.position.set(0, 0, 500)
    camera.up.set(0, 1, 0)
    camera.lookAt(0, 0, 0)
    const cameraHelper = new THREE.CameraHelper(camera)
    scene.add(cameraHelper)

    // 创建渲染器对象
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(width, height)
    renderer.setClearColor(0x888888, 1)
    const container = document.querySelector(".container");
    container.append(renderer.domElement)
    renderer.autoClear = false
    const cameraPosition = { x: 0, y: 0, z: 500 }

    const gui = new dat.GUI()
    const positionFolder = gui.addFolder('position')
    positionFolder.add(cameraPosition, 'x', -500, 500).onChange(x => {
      camera.position.x = x
      render()
    })
    positionFolder.add(cameraPosition, 'y', -500, 500).onChange(y => {
      camera.position.y = y
      render()
    })
    positionFolder.add(cameraPosition, 'z', -500, 500).onChange(z => {
      camera.position.z = z
      render()
    })
    positionFolder.open()

    const upFolder = gui.addFolder('up')
    upFolder.add({ x: 0, y: 0 }, 'x', -1, 1).onChange(x => {
      camera.up.x = x
      render()
    })
    upFolder.add({ x: 0, y: 0 }, 'y', -1, 1).onChange(y => {
      camera.up.y = y
      render()
    })
    upFolder.open()

    let lookAtx = 0
    let lookAty = 0
    const lookAtFolder = gui.addFolder('lookAt')
    lookAtFolder.add({ x: 0, y: 0 }, 'x', -50, 50).onChange(x => {
      lookAtx = x
      render()
    })
    lookAtFolder.add({ x: 0, y: 0 }, 'y', -50, 50).onChange(y => {
      lookAty = y
      render()
    })
    lookAtFolder.open()

    const projectFolder = gui.addFolder('投影空间')
    const params = {
      left: -s * k,
      right: s * k,
      top: s,
      bottom: -s,
      near: 1,
      far: 1000,
    }
    projectFolder.add(params, 'left', -s * k, s * k).onChange(left => {
      camera.left = left
      camera.updateProjectionMatrix()
      cameraHelper.update()
      render()
    })
    projectFolder.add(params, 'right', -s * k, s * k).onChange(right => {
      camera.right = right
      camera.updateProjectionMatrix()
      cameraHelper.update()
      render()
    })
    projectFolder.add(params, 'top', -s, s).onChange(top => {
      camera.top = top
      camera.updateProjectionMatrix()
      cameraHelper.update()
      render()
    })
    projectFolder.add(params, 'bottom', -s, s).onChange(bottom => {
      camera.bottom = bottom
      camera.updateProjectionMatrix()
      cameraHelper.update()
      render()
    })
    projectFolder.add(params, 'near', 1, 1000).onChange(near => {
      camera.near = near
      camera.updateProjectionMatrix()
      cameraHelper.update()
      render()
    })
    projectFolder.add(params, 'far', 1, 1000).onChange(far => {
      camera.far = far
      camera.updateProjectionMatrix()
      cameraHelper.update()
      render()
    })
    projectFolder.open()

    function render () {
      camera.lookAt(lookAtx, lookAty, 0)
      renderer.clear()
      cameraHelper.visible = false;

      renderer.setViewport(0, 0, width / 2, height)
      renderer.render(scene, camera)

      cameraHelper.visible = true;

      renderer.setViewport(width / 2, 0, width / 2, height)
      renderer.render(scene, camera2)
    }

    render()
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

export default CameraJsx1
