import "../kaif.css";
import tinkererLogo from "../assets/tinkererlogo.svg";
import micromouseLogo from "../assets/maze.svg";
import milanlogo from "../assets/logocream.png";
import mmouse from "../assets/micromouselogo.png";
// import gifLogo from "../assets/logoGif.mp4"
// import data from "../sampledata.json";

import Leaderboarddiv from "../components/Leaderboarddiv";

import {
  query,
  collection,
  limit,
  getDocs,
  orderBy,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
import { app } from "../firebase.config";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import gifLogo from "../assets/logoGif.mp4"

const db = getFirestore(app);
const scoresRef = collection(db, "Users");
const q = query(scoresRef, orderBy("Score", "desc"), limit("10"));
var temp = [];
const initialSnapshot = await getDocs(q);
initialSnapshot.forEach((e) => {
  temp.push(e.data());
  console.log(e.data());
});

function LandingPage() {
  const navigate = useNavigate();
  const [scores, setScores] = useState(temp);
  onSnapshot(q, (snapshot) => {
    temp = [];
    snapshot.forEach((e) => {
      temp.push(e.data());
    });
    setScores(temp);
  });
  return (
    <div className="landingPage">
      <div className="micromouseLogo">
        <img src={micromouseLogo} alt="The logo of MicroMouse" />
      </div>
      <div className="playpage-logo">
        <img src={tinkererLogo} alt="tinkerer logo" />
      </div>
      <div className="lpBox">
        <img src={mmouse} />
        <p className="headingMM">LEADER BOARD</p>
        <div className="leaderboard">
          {Object.values(scores).map((item, index) => {
            return (
              <Leaderboarddiv key={index} name={item.Name} time={item.Score} pos={index+1}/>
            );
          })}
        </div>
      </div>
      <div className="button-wrap">
        <div
          className="pink-button"
          style={{ width: "45%" }}
          onClick={() => navigate(-1)}
        >
          <div className="pink-button-inner" style={{ width: "90%" }}>
            <div className="pink-button-rect" />
            <p style={{ fontSize: "1.5rem", width: "max-content" }}>BACK</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
