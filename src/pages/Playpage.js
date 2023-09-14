import "../App.css";
import mazebg from "../assets/maze.svg";
import tinkerlogo from "../assets/tinkererlogo.svg";
import milanlogo from "../assets/logocream.png";
import micromouselogo from "../assets/micromouselogo.png";
import { useNavigate, useLocation } from "react-router-dom";
// import Button from "../components/Button";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();

function PlayPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const userEmail = location.state ? location.state.userEmail : null;
  const userPic = location.state ? location.state.userPic : null;
  console.log(userEmail);
  const handleContinueClick = () => {
    const targetUrl = `https://tinkererslabiith.github.io/micromouse-game/?userEmail=${encodeURIComponent(
      userEmail
    )}&value=${"0"}`;
    window.location.href = targetUrl;
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
    <>
      <div className="playpage">
        <div className="playpage-logo-ins">
          <img src={tinkerlogo} alt="tinkerer logo" />
          <div className="pink-button" onClick={handleLogout}>
            <div className="pink-button-inner" style={{ width: "80%" }}>
              <div className="pink-button-rect" />
              {/* <img src={userPic} style={{borderRadius}}/> */}
            <p style={{ fontSize: "0.9rem", width: "50px",paddingLeft:'30px' }}>LOGOUT</p>
            </div>
          </div>
        </div>
        <div className="playpage-micro">
          <img src={micromouselogo} alt="micromouse logo" />
        </div>
        <div className="playpage-buttons">
          <div
            className="pink-button"
            onClick={handleContinueClick}
            style={{ width: "90%" }}
          >
            <div className="pink-button-inner" style={{ width: "90%" }}>
              <div className="pink-button-rect" />
              <p style={{ fontSize: "1.7rem" }}>PLAY DEMO</p>
            </div>
          </div>
          <div className="pink-button">
            <div className="pink-button-inner">
              <div className="pink-button-rect" />
              <p style={{ fontSize: "1.5rem", width: "max-content" }}>
                Watch demo
              </p>
            </div>
          </div>
        </div>
        <div className="mazebg">
          <img src={mazebg} alt="maze background" />
        </div>
      </div>
    </>
  );
}

export default PlayPage;
