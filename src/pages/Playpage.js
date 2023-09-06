import "../App.css";
import mazebg from "../assets/maze.svg";
import tinkerlogo from "../assets/tinkererlogo.svg";
import milanlogo from "../assets/logocream.png";
import Button from "../components/Button";
import micromouselogo from "../assets/micromouselogo.png";
import {useNavigate} from 'react-router-dom'

function PlayPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="playpage">
        <div className="playpage-logo">
          <img src={milanlogo} alt="milan logo" />
          <img src={tinkerlogo} alt="tinkerer logo" />
        </div>
        <div className="playpage-micro">
          <img src={micromouselogo} alt="micromouse logo" />
        </div>
        <div className="playpage-buttons">
          <div className="pink-button" onClick={() => navigate('/game')}>
            <div className="pink-button-inner">
              <div className="pink-button-rect" />
              <p>PLAY</p>
            </div>
          </div>
          <div className="pink-button">
            <div className="pink-button-inner">
              <div className="pink-button-rect" />
              <p style={{ fontSize: "1.5rem", width: "max-content" }}>
                Watch demo
              </p>
            </div>
          </div>
        </div>
        <div className="mazebg">
          <img src={mazebg} alt="maze background" />
        </div>
      </div>
    </>
  );
}

export default PlayPage;
