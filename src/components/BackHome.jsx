import { useNavigate } from "react-router-dom";
import './style.scss'

const BackHome = props => {
  const navigate = useNavigate();
  const backHome = () => navigate("/");

  const styleConfig = props.styleConfig ? { ...props.styleConfig } : { top: "20px", right: "20px" };

  return <div>
    <div className="back-home" style={{ ...styleConfig }} onClick={backHome}>🏠</div>
  </div>;
};

export default BackHome;
