import tinkererLogo from "../assets/Tl_logo_opq.png"
import micromouseLogo from  "../assets/maze.svg"
import milanlogo from "../assets/logocream.png"
import "../kaif.css"
import {useNavigate,useLocation} from "react-router-dom"
import {useEffect} from "react"
import {
    getFirestore,
    getDoc,
    updateDoc,
    doc,
  } from "firebase/firestore";
  import { app } from "../firebase.config";
let userEmail_new=null;
function Promotion() {
    
    const db = getFirestore(app);
    const location = useLocation();
    const navigate = useNavigate();
    const userEmail = location.state ? location.state.userEmail : null;
    const userPic = location.state ? location.state.userPic : null;
    userEmail_new=userEmail;
    console.log(userEmail);
    useEffect(() => {
        setTimeout(() => getUserByEmail(userEmail)
        .then((user) => {
          if(user.Score===0){
            navigate("/Instructions", {
                state: { userEmail: userEmail_new, userPic: user.photoURL },
              });
          }
          else{
            const targetUrl = `https://tinkererslabiith.github.io/TL-Maze-Mouse/#/dashboard?userEmail=${encodeURIComponent(
                    userEmail_new
                  )}`;
                  window.location.href = targetUrl;
          }
        }), 4000);
      }, []);
    //To get the data from the BD by email
async function getUserByEmail(email) {
    try {
      const userDocRef = doc(db, "Users", email);
  
      const docSnapshot = await getDoc(userDocRef);
  
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        return userData;
      } else {
        console.log("User not found.");
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  }
  
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
