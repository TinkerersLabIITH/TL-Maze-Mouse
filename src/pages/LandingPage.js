import "../index.css"
import tinkererLogo from "../assets/tinkererlogo.svg"
import micromouseLogo from  "../assets/maze.svg"
import milanlogo from "../assets/logocream.png"
import {useNavigate} from 'react-router-dom'
import mmouse from "../assets/micromouselogo.png"
// import gifLogo from "../assets/logoGif.mp4"
function LandingPage() {
    const navigate = useNavigate();
    return(
        <div className="landingPage">
            <div className="micromouseLogo">
                <img src={micromouseLogo} alt ="The logo of MicroMouse"/>
                </div>
                <div className="playpage-logo">
          <img src={tinkererLogo} alt="tinkerer logo" />
        </div>
            <div className="lpBox">
                <img src={mmouse } alt="Micro Mouse logo"/>
               <p className="headingMM">MICROMOUSE</p>
               <p className="paraMM">loremiapsum</p>
               <div className="playpage-buttons" style={{ marginTop:"10vh"}}>
          <div className="pink-button" style={{width: "70%"}}>
            <div className="pink-button-inner" style={{ width: "90%"}}>
              <div className="pink-button-rect" />
              <p style={{fontSize: "1.5rem", width: "max-content"}}>Login</p>
            </div>
          </div>
          <div className="pink-button"  style={{ width: "80%"}} onClick={() => navigate('/leaderboard')}>
            <div className="pink-button-inner" style={{ width: "90%"}}>
              <div className="pink-button-rect" />
              <p style={{ fontSize: "1.5rem", width: "max-content" }}>
               LEADER BOARD
              </p>
            </div>
          </div>
        </div>
            </div>
        </div>
    )
}

export default LandingPage;