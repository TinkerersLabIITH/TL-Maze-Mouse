import tinkererLogo from "../assets/Tl_logo_opq.png"
import micromouseLogo from  "../assets/maze.svg"
import milanlogo from "../assets/logocream.png"
import "../kaif.css"
function Promotion() {
    return(
        <div className="landingPage">
            <div className="micromouseLogo">
                <img src={micromouseLogo} alt ="The logo of MicroMouse"/>
                </div>
                <div className="playpage-logo">
          
        </div>
            <div className="lpBoxPromo">
            <img src={milanlogo} alt="milan logo" />
             <img src={tinkererLogo} alt="tinkerer logo" />
            </div>
        </div>
    )
}

export default Promotion;
