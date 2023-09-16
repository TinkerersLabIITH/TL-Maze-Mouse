import "../kaif.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import tinkererLogo from "../assets/tinkererlogo.svg";
import micromouseLogo from "../assets/maze.svg";
import mmouse from "../assets/micromouselogo.png";

import { getAuth,signOut } from "firebase/auth";

const auth = getAuth();

function Instructions() {
  const location = useLocation();
  const navigate = useNavigate();
  const userEmail = location.state ? location.state.userEmail : null;
  const userPic = location.state ? location.state.userPic : null;

  console.log(userEmail);
  const handleContinueClick = () => {
    navigate("/Playpage", {
      state: { userEmail: userEmail, userPic: userPic },
    });
  };

  function handleLogout() {
    signOut(auth)
      .then(() => {
        // Redirect to landing page after logout
        navigate("/landing");
      })
      .catch((error) => {
        // Handle logout error
        console.error("Logout error:", error);
      });
  }
  return (
    <div className="landingPage">
      <div className="micromouseLogo">
        <img src={micromouseLogo} alt="The logo of MicroMouse" />
      </div>
      <div className="playpage-logo-ins">
        <img src={tinkererLogo} alt="tinkerer logo" />
        <div className="pink-button" onClick={handleLogout}>
          <div className="pink-button-inner" style={{ width: "80%" }}>
            <div className="pink-button-rect" />
            {/* <img src={userPic} style={{borderRadius}}/> */}
            <p style={{ fontSize: "0.9rem", width: "50px",paddingLeft:'30px' }}>LOGOUT</p>
          </div>
        </div>
      </div>
      <div className="lpBox">
        <img src={mmouse} alt="Micro Mouse logo" />
        {/* <video width="320" height="240" src={gifLogo} loop="true" autoplay="true"/> */}
        <p className="headingMMIp">HI PLAYER!!</p>
        <p className="paraMMIp">INSTRUCTIONS</p>
        <p className="paraMMIpSmall">1. Just swipe on the screen in the direction you want to move the mouse</p>
        <p className="paraMMIpSmall">2. Maximum Time is 5 Minutes</p>
        <p className="paraMMIpSmall">3. Score will be calculated based on the time taken for garbbing the cheese.</p>
        
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
  );
}

export default Instructions;
