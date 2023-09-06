import "../kaif.css"
import { useNavigate } from "react-router-dom"
import tinkererLogo from "../assets/tinkererlogo.svg"
import micromouseLogo from  "../assets/maze.svg"
import milanlogo from "../assets/logocream.png"
// import gifLogo from "../assets/logoGif.mp4"
function Instructions() {
    const navigate = useNavigate();
    return(
        <div className="landingPage">
        <div className="micromouseLogo">
            <img src={micromouseLogo} alt ="The logo of MicroMouse"/>
            </div>
            <div className="playpage-logo">
      <img src={milanlogo} alt="milan logo" />
      <img src={tinkererLogo} alt="tinkerer logo" />
    </div>
        <div className="lpBox">
            {/* <video width="320" height="240" src={gifLogo} loop="true" autoplay="true"/> */}
           <p className="headingMMIp">HI PLAYER!!</p>
           <p className="paraMMIp">INSTRUCTIONS</p>
           <p className="paraMMIpSmall">loremipsum</p>
           <div className="playpage-buttons">
          <div className="pink-button" onClick={() => navigate('/game')}>
            <div className="pink-button-inner" style={{ width: "90%" }}>
              <div className="pink-button-rect" />
              <p style={{ fontSize: "1.5rem", width: "max-content" }}>
               CONTINUE
              </p>
            </div>
          </div>
        </div>
        </div>
    </div>
    )
}

export default Instructions;
