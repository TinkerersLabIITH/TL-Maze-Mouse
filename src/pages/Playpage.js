import "../App.css";
import mazebg from "../assets/maze.svg";
import tinkerlogo from "../assets/tinkererlogo.svg";
import milanlogo from "../assets/logocream.png";
import micromouselogo from "../assets/micromouselogo.png";
import {useNavigate,useLocation} from 'react-router-dom'

function PlayPage() {
  const location = useLocation()
  const navigate = useNavigate();
  const userEmail = location.state ? location.state.userEmail : null
  console.log(userEmail)
  const handleContinueClick = () => {
      const targetUrl = `https://tinkererslabiith.github.io/micromouse-game/?userEmail=${encodeURIComponent(userEmail)}&value=${"0"}`;
      window.location.href = targetUrl;
  };
  return (
    <>
      <div className="playpage">
        <div className="playpage-logo">
          <img src={milanlogo} alt="milan logo"  id="milanlogo"/>
          <img src={tinkerlogo} alt="tinkerer logo" />
        </div>
        <div className="playpage-micro">
          <img src={micromouselogo} alt="micromouse logo" />
        </div>
        <div className="playpage-buttons">
          <div className="pink-button" onClick={handleContinueClick}
          style={{width:"90%"}}>
            <div className="pink-button-inner" style={{width:"90%"}}>
              <div className="pink-button-rect"/>
              <p style={{fontSize:"2rem"}}>PLAY DEMO</p>
            </div>
          </div>
          <div className="pink-button">
            <div className="pink-button-inner">
              <div className="pink-button-rect" />
              <p style={{ fontSize: "1.5rem", width: "max-content"}}>
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
