import "../App.css";
import mazebg from "../assets/maze.svg";
import tinkerlogo from "../assets/tinkererlogo.svg";
import milanlogo from "../assets/logocream.png";
import micromouselogo from "../assets/micromouselogo.png";
import trophy from "../assets/trophy.svg";

function WellDone() {
  return (
    <div className="welldonepage">
      <div className="playpage-logo">
        <img src={milanlogo} alt="milan logo" />
        <img src={tinkerlogo} alt="tinkerer logo" />
      </div>
      <div className="playpage-micro">
        <img src={micromouselogo} alt="micromouse logo" />
      </div>
      <div className="mazebg">
        <img src={mazebg} alt="maze background" />
      </div>
      <div className="welldone-wrap">
        <div className="welldone-trophy">
          <img src={trophy} alt="welldone trophy" />
        </div>
        <div className="welldone-text">WELL DONE!</div>
      </div>
    </div>
  );
}

export default WellDone;
