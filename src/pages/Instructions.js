import "../kaif.css"
import { useNavigate, useLocation } from "react-router-dom"
import {useState} from "react"
import tinkererLogo from "../assets/tinkererlogo.svg"
import micromouseLogo from "../assets/maze.svg"
import mmouse from "../assets/micromouselogo.png"

// import gifLogo from "../assets/logoGif.mp4"
function Instructions() {
  const location = useLocation()
  const navigate = useNavigate();
  const userEmail = location.state ? location.state.userEmail : null
  console.log(userEmail)
  const handleContinueClick = () => {
    if (userEmail) {
      const targetUrl = `https://tinkererslabiith.github.io/micromouse-game/?userEmail=${encodeURIComponent(userEmail)}`;
      window.location.href = targetUrl;
    }
  };
  return (
    <div className="landingPage">
      <div className="micromouseLogo">
        <img src={micromouseLogo} alt="The logo of MicroMouse"/>
      </div>
      <div className="playpage-logo">
        <img src={tinkererLogo} alt="tinkerer logo" />
      </div>
      <div className="lpBox">
        <img src={mmouse} alt="Micro Mouse logo" />
        {/* <video width="320" height="240" src={gifLogo} loop="true" autoplay="true"/> */}
        <p className="headingMMIp">HI PLAYER!!</p>
        <p className="paraMMIp">INSTRUCTIONS</p>
        <p className="paraMMIpSmall">loremipsum</p>
       
        <div className="playpage-buttons" style={{ marginTop: "10vh" }}>
          <div className="pink-button" onClick={handleContinueClick}>
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
