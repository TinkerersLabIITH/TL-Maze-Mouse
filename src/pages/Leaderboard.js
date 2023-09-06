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
               <p className="headingMM">LEADER BOARD</p>
            </div>
        </div>
    )
}

export default LandingPage;