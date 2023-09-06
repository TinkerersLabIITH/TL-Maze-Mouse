import "../index.css"
import tinkererLogo from "../assets/tinkererlogo.svg"
import micromouseLogo from  "../assets/maze.svg"
import milanlogo from "../assets/logocream.png"
// import gifLogo from "../assets/logoGif.mp4"
function LandingPage() {
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
               <p className="headingMM">MICROMOUSE</p>
               <p className="paraMM">loremiapsum</p>
               <div className="playpage-buttons">
          <div className="pink-button" style={{ width: "70%"}}>
            <div className="pink-button-inner" style={{ width: "90%"}}>
              <div className="pink-button-rect" />
              <p style={{fontSize: "1.5rem", width: "max-content"}}>Login</p>
            </div>
          </div>
          <div className="pink-button"  style={{ width: "80%"}}>
            <div className="pink-button-inner" style={{ width: "90%"}}>
              <div className="pink-button-rect" />
              <p style={{ fontSize: "1.5rem", width: "max-content" }}>
               LEADER BOARD
              </p>
            </div>
          </div>
        </div>
            </div>
        </div>
    )
}

export default LandingPage;