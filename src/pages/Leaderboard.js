import "../kaif.css";
import tinkererLogo from "../assets/tinkererlogo.svg";
import micromouseLogo from "../assets/maze.svg";
import milanlogo from "../assets/logocream.png";
import mmouse from "../assets/micromouselogo.png";
// import gifLogo from "../assets/logoGif.mp4"
import data from "../sampledata.json";

import Leaderboarddiv from "../components/Leaderboarddiv";

function LandingPage() {
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
          {Object.values(data).map((item, index) => {
            return (
              <Leaderboarddiv
                key={index}
                name={item.username}
                time={item.time}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
