import "../kaif.css"
import { useNavigate, useLocation } from "react-router-dom"
import {useState} from "react"
import tinkererLogo from "../assets/tinkererlogo.svg"
import micromouseLogo from "../assets/maze.svg"
import milanlogo from "../assets/logocream.png"
import mmouse from "../assets/micromouselogo.png"
import axios from "axios"
// import gifLogo from "../assets/logoGif.mp4"
function Instructions() {
  const location = useLocation()
  const navigate = useNavigate();
  const userEmail = location.state ? location.state.userEmail : null
  const [isRequestSent, setIsRequestSent] = useState(false);
  const handleButtonClick = () => {
    if (userEmail && !isRequestSent) {
      
      const postUrl = "https://tinkererslabiith.github.io/micromouse-game/";

      
      const postData = {
        userEmail: userEmail,
      };
      axios
      .post(postUrl, postData)
      .then((response) => {
        console.log("POST request successful", response);
        setIsRequestSent(true);
        <a href="https://tinkererslabiith.github.io/micromouse-game/"/>
      })
      .catch((error) => {
        console.error("Error sending POST request", error);})
 
  console.log(userEmail)
}}
 
  
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
          <div className="pink-button" onClick={handleButtonClick}>
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
