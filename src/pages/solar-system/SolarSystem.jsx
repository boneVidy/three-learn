import BackHome from "../../components/BackHome.jsx";
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import BK from './assets/天空盒/BK.jpg'
import DN from './assets/天空盒/DN.jpg'
import FR from './assets/天空盒/FR.jpg'
import LF from './assets/天空盒/LF.jpg'
import RT from './assets/天空盒/RT.jpg'
import UP from './assets/天空盒/UP.jpg'

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

  let scene,camera,renderer;

  function init(){
    /** 创建场景 */
    scene = new THREE.Scene();
    // 设置天空盒
    scene.background = new THREE.CubeTextureLoader().load(CUBE_FILES)

    /** 相机设置 */
    const width = window.innerWidth; //窗口宽度
    const height = window.innerHeight; //窗口高度
    const k = width / height; //窗口宽高比
    //创建相机对象
    camera = new THREE.PerspectiveCamera(60,k,1, 10000);
    camera.position.set(0, 0, 5000); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
    /** 创建渲染器对象 */
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height); //设置渲染区域尺寸
    document.body.appendChild(renderer.domElement); //body元素中插入canvas对象

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.addEventListener("change", () => {
      render()
    }); //监听鼠标、键盘事件
  }
  init()
// 渲染
  function render(){
    renderer.render(scene, camera); //执行渲染操作
  }

  const loader = new THREE.TextureLoader() //引入模型的loader实例

// 创建太阳
  let sun = new THREE.Group()//建立一个组
  let sunParent = new THREE.Group()
  scene.add(sunParent) //把组都添加到场景里
  loader.load(太阳, (texture) => {
    const geometry = new THREE.SphereGeometry(500, 50, 50) //球体模型
    const material = new THREE.MeshBasicMaterial({map: texture}) //材质 将图片解构成THREE能理解的材质
    const mesh = new THREE.Mesh(geometry, material)  //网孔对象 第一个参数是几何模型(结构),第二参数是材料(外观)
    sun.add(mesh)//添加到组里
    sunParent.add(sun)
    render()
  })

// 创建水星
  let mercury = new THREE.Group() //建立一个组
  let mercuryParent = new THREE.Group()
  sunParent.add(mercuryParent)
  loader.load(水星, (texture) => {
    const geometry = new THREE.SphereGeometry(25, 50, 50) //球体模型
    const material = new THREE.MeshBasicMaterial({map: texture}) //材质 将图片解构成THREE能理解的材质
    const mesh = new THREE.Mesh(geometry, material)  //网孔对象 第一个参数是几何模型(结构),第二参数是材料(外观)
    mercury.position.x -= 600
    mercury.add(mesh)//添加到组里
    mercuryParent.add(mercury)
    render()
  })
//设置金星
  let venus = new THREE.Group()//建立一个组
  let venusParent = new THREE.Group()
  sunParent.add(venusParent)
  loader.load(金星, (texture) => {
    const geometry = new THREE.SphereGeometry(100, 50, 50) //球体模型
    const material = new THREE.MeshBasicMaterial({map: texture}) //材质 将图片解构成THREE能理解的材质
    const mesh = new THREE.Mesh(geometry, material)  //网孔对象 第一个参数是几何模型(结构),第二参数是材料(外观)
    venus.position.x -= 700
    venus.add(mesh)//添加到组里
    venusParent.add(venus)
    render()
  })
//设置地球
  let earth = new THREE.Group()//建立一个组
  let earthParent = new THREE.Group()
  sunParent.add(earthParent)
  loader.load(地球, (texture) => {
    const geometry = new THREE.SphereGeometry(100, 50, 50) //球体模型
    const material = new THREE.MeshBasicMaterial({map: texture}) //材质 将图片解构成THREE能理解的材质
    const mesh = new THREE.Mesh(geometry, material)  //网孔对象 第一个参数是几何模型(结构),第二参数是材料(外观)
    earth.position.x -= 900
    earth.add(mesh)//添加到组里
    earthParent.add(earth)
    render()
  })
//设置月球
  let moon = new THREE.Group()//建立一个组
  let moonParent = new THREE.Group()
  earth.add(moonParent)
  loader.load(月球, (texture) => {
    const geometry = new THREE.SphereGeometry(30, 50, 50) //球体模型
    const material = new THREE.MeshBasicMaterial({map: texture}) //材质 将图片解构成THREE能理解的材质
    const mesh = new THREE.Mesh(geometry, material)  //网孔对象 第一个参数是几何模型(结构),第二参数是材料(外观)
    moon.position.x -= 150
    moon.add(mesh)//添加到组里
    moonParent.add(moon)
    render()
  })
//设置火星
  let  mars = new THREE.Group()//建立一个组
  let marsParent = new THREE.Group()
  sunParent.add(marsParent)
  loader.load(火星, (texture) => {
    const geometry = new THREE.SphereGeometry(85, 50, 50) //球体模型
    const material = new THREE.MeshBasicMaterial({map: texture}) //材质 将图片解构成THREE能理解的材质
    const mesh = new THREE.Mesh(geometry, material)  //网孔对象 第一个参数是几何模型(结构),第二参数是材料(外观)
    mars.position.x -= 1200
    mars.add(mesh)//添加到组里
    marsParent.add(mars)
    render()
  })
// 设置木星
  let  jupiter = new THREE.Group()//建立一个组
  let  jupiterParent = new THREE.Group()
  sunParent.add(jupiterParent)
  loader.load(木星, (texture) => {
    const geometry = new THREE.SphereGeometry(150, 50, 50) //球体模型
    const material = new THREE.MeshBasicMaterial({map: texture}) //材质 将图片解构成THREE能理解的材质
    const mesh = new THREE.Mesh(geometry, material)  //网孔对象 第一个参数是几何模型(结构),第二参数是材料(外观)
    jupiter.position.x -= 1500
    jupiter.add(mesh)//添加到组里
    jupiterParent.add(jupiter)
    render()
  })
// 设置土星
  let saturn = new THREE.Group()//建立一个组
  let saturnParent = new THREE.Group()
  sunParent.add(saturnParent)
  loader.load(土星, (texture) => {
    const geometry = new THREE.SphereGeometry(120, 50, 50) //球体模型
    const material = new THREE.MeshBasicMaterial({map: texture}) //材质 将图片解构成THREE能理解的材质
    const mesh = new THREE.Mesh(geometry, material)  //网孔对象 第一个参数是几何模型(结构),第二参数是材料(外观)
    saturn.position.x -= 1800
    saturn.add(mesh)//添加到组里
    saturnParent.add(saturn)
    render()
  })
//设置天王星
  let uranus = new THREE.Group()
  let  uranusParent = new THREE.Group()
  sunParent.add(uranusParent)
  loader.load(天王星, (texture) => {
    const geometry = new THREE.SphereGeometry(50, 50, 50) //球体模型
    const material = new THREE.MeshBasicMaterial({map: texture}) //材质 将图片解构成THREE能理解的材质
    const mesh = new THREE.Mesh(geometry, material)  //网孔对象 第一个参数是几何模型(结构),第二参数是材料(外观)
    uranus.position.x -= 2100
    uranus.add(mesh)//添加到组里
    uranusParent.add(uranus)
    render()
  })
//设置海王星
  let neptune = new THREE.Group()
  let neptuneParent = new THREE.Group()
  sunParent.add(neptuneParent)
  loader.load(海王星, (texture) => {
    const geometry = new THREE.SphereGeometry(50, 50, 50) //球体模型
    const material = new THREE.MeshBasicMaterial({map: texture}) //材质 将图片解构成THREE能理解的材质
    const mesh = new THREE.Mesh(geometry, material)  //网孔对象 第一个参数是几何模型(结构),第二参数是材料(外观)
    neptune.position.x -= 2300
    neptune.add(mesh)//添加到组里
    neptuneParent.add(neptune)
    render()
  })

//设置公转
  const revolution = () => {
    mercuryParent.rotation.y += 0.015
    venusParent.rotation.y += 0.0065
    earthParent.rotation.y += 0.05
    moonParent.rotation.y += 0.2
    marsParent.rotation.y += 0.03
    jupiterParent.rotation.y += 0.01
    saturnParent.rotation.y += 0.02
    uranusParent.rotation.y += 0.02
    neptuneParent.rotation.y += 0.01
  }

//设置自转
  const selfRotation = () => {
    sun.rotation.y += 0.004
    mercury.rotation.y += 0.002
    venus.rotation.y += 0.005
    earth.rotation.y += 0.01
    moon.rotation.y += 0.01
    mars.rotation.y += 0.01
    jupiter.rotation.y += 0.08
    saturn.rotation.y += 1.5
    uranus.rotation.y += 1
    neptune.rotation.y += 0.1
  }

// 循环场景 、相机、 位置更新
  const loop = () => {
    requestAnimationFrame(loop)
    revolution()
    selfRotation()
    render()
  }

  loop()

  return (
    <>
      <div className="container"></div>
      <BackHome />
    </>
  )
}

export default SolarSystem
