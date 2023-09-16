import tinkererLogo from "../assets/Tl_logo_opq.png"
import micromouseLogo from  "../assets/maze.svg"
import milanlogo from "../assets/logocream.png"
import "../kaif.css"
import {useNavigate} from "react-router-dom"
import {useEffect} from "react"
function Promotion() {
//     const navigate = useNavigate();
//   useEffect(() => {
//     setTimeout(() => navigate("/Instructions"), 4500);
//   }, []);
    return(
        <div className="landingPage">
            <div className="micromouseLogo">
                <img src={micromouseLogo} alt ="The logo of MicroMouse"/>
                </div>
                <div className="playpage-logo">
          
        </div>
            <div className="lpBoxPromo">
            <img className="mlnpromologo" src={milanlogo} alt="milan logo" />
             <img  className="tkrpromologo" src={tinkererLogo} alt="tinkerer logo" />
            
            </div>
        </div>
    )
}

export default Promotion;
