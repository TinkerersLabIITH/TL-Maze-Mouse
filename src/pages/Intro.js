import "../App.css";
import { useNavigate } from "react-router";
import mazebg from "../assets/maze.svg";
import tinkerlogo from "../assets/tinkererlogo.svg";
import milanlogo from "../assets/logocream.png";
import micromouselogo from "../assets/micromouselogo.png";
import { useEffect } from "react";
import gif from "../assets/micromouselogo.gif";

function Intro() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/landing"), 5000);
  }, []);
  return (
    <div className="intro-page">
      <div className="playpage-logo">
        {/* <img src={milanlogo} alt="milan logo" id="milanlogo" /> */}
        <img src={tinkerlogo} alt="tinkerer logo" />
      </div>
      <div className="playpage-micro">
        <img src={gif} alt="micromouse logo" />
      </div>
      <div className="mazebg">
        <img src={mazebg} alt="maze background" />
      </div>
      <div className="intro-text">
        <p>WELCOME</p>
      </div>
    </div>
  );
}

export default Intro;
