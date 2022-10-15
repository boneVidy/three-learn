import { useRoutes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import SceneJsx from "../pages/Scene";
import CameraJsx1 from "../pages/camera/CameraJsx1.jsx";
import CameraJsx2 from "../pages/camera/CameraJsx2.jsx";
import CameraJsx3 from "../pages/camera/CameraJsx3.jsx";
import Object3D from "../pages/Object3D.jsx";

export const router = [
  {
    path: '/',
    element: <Home />,
    title: '首页'
  },
  {
    path: '01_scene',
    element: <SceneJsx />,
    title: '场景、相机、渲染器'
  },
  {
    path: '02_camera1',
    element: <CameraJsx1 />,
    title: '相机'
  },
  {
    path: '02_camera2',
    element: <CameraJsx2 />,
    title: '相机动画'
  },
  {
    path: '02_camera3',
    element: <CameraJsx3 />,
    title: '物体运动'
  },
  {
    path: '04_Object3D',
    element: <Object3D />,
    title: 'Object3D'
  },
]

const Routing = () => {
  const routing = useRoutes(router)
  return <>{routing}</>
}

export default Routing
