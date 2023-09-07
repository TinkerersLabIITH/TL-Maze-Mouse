import "../desktoppage.css";
import mazebg from "../assets/maze.svg";
import micromouselogo from "../assets/micromouselogo.png";
import tinkerlogo from "../assets/tinkererlogo.svg";

function DesktopPage() {
  return (
    <div className="desktoppage">
      <div className="playpage-logo">
        <img src={tinkerlogo} alt="tinkerer logo" />
      </div>
      <div className="playpage-micro">
        <img src={micromouselogo} alt="micromouse logo" />
      </div>
      <div className="desktop-text">
        SWITCH TO MOBILE TO PLAY THE GAME
      </div>
    </div>
  );
}

export default DesktopPage;
