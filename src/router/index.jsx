import { useRoutes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import SceneJsx from "../pages/Scene";

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
  }
]

const Routing = () => {
  const routing = useRoutes(router)
  return <>{routing}</>
}

export default Routing
