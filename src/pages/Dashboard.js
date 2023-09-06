// import DashboardTime from '../components/DashboardTime'
import "../App.css";
import mazebg from "../assets/maze.svg";
import tinkerlogo from "../assets/tinkererlogo.svg";
import milanlogo from "../assets/logocream.png";
import micromouselogo from "../assets/micromouselogo.png";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="playpage-logo">
        <img src={milanlogo} alt="milan logo" id="milanlogo" />
        <img src={tinkerlogo} alt="tinkerer logo" />
      </div>
      <div className="playpage-micro">
        <img src={micromouselogo} alt="micromouse logo" />
      </div>
      <div className="dashboard-stages">
        <div className="pink-button">
          <div className="pink-button-inner">
            <div
              className="pink-button-rect"
              style={{ marginLeft: "45px", marginRight: "20px" }}
            />
            <p
              style={{
                fontSize: "1.3rem",
                width: "max-content",
                marginLeft: "45px",
                marginRight: "20px",
              }}
            >
              00:00:00
            </p>
            <div className="pink-btn-circle">
              <div className="pink-btn-c-i">1</div>
            </div>
          </div>
        </div>
        <div className="pink-button">
          <div className="pink-button-inner">
            <div
              className="pink-button-rect"
              style={{ marginLeft: "45px", marginRight: "20px" }}
            />
            <p
              style={{
                fontSize: "1.3rem",
                width: "max-content",
                marginLeft: "45px",
                marginRight: "20px",
              }}
            >
              00:00:00
            </p>
            <div className="pink-btn-circle">
              <div className="pink-btn-c-i">2</div>
            </div>
          </div>
        </div>
        <div className="pink-button">
          <div className="pink-button-inner">
            <div
              className="pink-button-rect"
              style={{ marginLeft: "45px", marginRight: "20px" }}
            />
            <p
              style={{
                fontSize: "1.3rem",
                width: "max-content",
                marginLeft: "45px",
                marginRight: "20px",
              }}
            >
              00:00:00
            </p>
            <div className="pink-btn-circle">
              <div className="pink-btn-c-i">3</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mazebg">
        <img src={mazebg} alt="maze background" />
      </div>
    </div>
  );
}

export default Dashboard;
