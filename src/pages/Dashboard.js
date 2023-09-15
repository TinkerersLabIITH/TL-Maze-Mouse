// import DashboardTime from '../components/DashboardTime'
import "../App.css";
import mazebg from "../assets/maze.svg";
import tinkerlogo from "../assets/tinkererlogo.svg";
import milanlogo from "../assets/logocream.png";
import micromouselogo from "../assets/micromouselogo.png";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  getFirestore,
  getDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase.config";

const auth = getAuth();
const db = getFirestore(app);
let userEmail_new=null;

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

//To update the data of the user by Email
async function updateUserByEmail(email, newData) {
  try {
    const docRef = doc(db, "Users", email);
    await updateDoc(docRef, newData);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function Dashboard() {
  const location = useLocation();
  //const userEmail = location.state ? location.state.userEmail : null;
  const navigate = useNavigate();
  const [level, setLevel] = useState(0);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [time1, setTime1] = useState(0);
  const [time2, setTime2] = useState(0);
  const userEmail = new URLSearchParams(location.search).get("userEmail");
  console.log(userEmail);
  const elapsedTimeString = new URLSearchParams(location.search).get(
    "elapsedTime"
  );
  const elapsedTime = !isNaN(elapsedTimeString)
    ? parseInt(elapsedTimeString, 10)
    : 0;

  //Getting the user time and calculated the scores
  useEffect(() => {
    try {
      if (elapsedTime !== 0) {
        console.log("Elapsed time in not 0!!!!!");
        console.log(elapsedTime);
      }
    } catch (error) {
      console.log(error);
    }
    if(elapsedTime === -1){
      setLevel(1)
      console.log("Level is ", level)
    }
    // Fetch user data when userEmail changes
    if (userEmail && elapsedTime !== -1) {
      if(level === 0){
        setLevel(1)
        console.log("Current level is ", level)
      }
      getUserByEmail(userEmail)
        .then((userData) => {
          if (userData !== null) {
            console.log("User Time : ", userData.T1);
            if(level===1){
              setTime1(elapsedTime)
            }
            if(userData.T1 !== 0 && userData.T2 === 0){
              setTime2(elapsedTime)
              setLevel(2)
            }
            if (time1 != 0 && userData.T1 == 0) {
              setScore1(Math.round((0.3 * (300 - time1)) / 3));
              console.log("score 1", score1);
              updateUserByEmail(userEmail, {T1: elapsedTime})
              setLevel(2);
              console.log(level);
            }
            if (time2 !== 0) {
              setScore2((0.7 * (300 - time2)) / 3);
              console.log("score 2", score2)
              updateUserByEmail(userEmail, {T2: elapsedTime})
              setLevel(3);
            }
          }
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  }, [userEmail, elapsedTime, level]);

  const handleContinueClick = () => {
   if(level===1){
    console.log("handleContinueClick called");
    const targetUrl = `https://tinkererslabiith.github.io/micromouse-game/?userEmail=${encodeURIComponent(
      userEmail
    )}&value=${"1"}`;

    window.location.href = targetUrl;
   }
  
  };
  const handleContinueClick2 = () => {
    if(level===2){
    console.log("handleContinueClick2 called");
    const targetUrl2 = `https://tinkererslabiith.github.io/micromouse-game/?userEmail=${encodeURIComponent(
      userEmail
    )}&value=${"2"}`;
    window.location.href = targetUrl2;
    }
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
    <div className="dashboard">
      <div className="playpage-logo-ins">
        <div className="pink-button" onClick={handleLogout}>
          <div className="pink-button-inner" style={{ width: "80%" }}>
            <div className="pink-button-rect" />
            {/* <img src={userPic} style={{borderRadius}}/> */}
            <p
              style={{ fontSize: "0.9rem", width: "50px", paddingLeft: "30px" }}
            >
              LOGOUT
            </p>
          </div>
        </div>
        <img src={tinkerlogo} alt="tinkerer logo" />
      </div>
      <div className="playpage-micro">
        <img src={micromouselogo} alt="micromouse logo" />
      </div>
      <div className="dashboard-stages">
        <div
          className="pink-button" onClick={handleContinueClick}
          style={level === 2 ? { opacity: 0.7 } : { opacity: 1 }}
        >
          <div className="pink-button-inner">
            <div
              className="pink-button-rect"
              style={{ marginLeft: "45px", marginRight: "20px" }}
            />
            <p
              style={
                level === 1
                  ? {
                      fontSize: "1.8rem",
                      width: "max-content",
                      marginLeft: "30px",
                      marginRight: "20px",
                    }
                  : {
                      fontSize: "1.3rem",
                      width: "max-content",
                      marginLeft: "45px",
                      marginRight: "20px",
                    }
              }
            >
              {level === 1 ? "PLAY" : score1}
            </p>
            <div className="pink-btn-circle">
              <div className="pink-btn-c-i">1</div>
            </div>
          </div>
        </div>
        <div
          className="pink-button"
          onClick={handleContinueClick2}
          style={level === 1 ? { opacity: 0.5 } : { opacity: 1 }}
        >
          <div className="pink-button-inner">
            <div
              className="pink-button-rect"
              style={{ marginLeft: "45px", marginRight: "20px" }}
            />
            <p
              style={
                level === 2
                  ? {
                      fontSize: "1.8rem",
                      width: "max-content",
                      marginLeft: "30px",
                      marginRight: "20px",
                    }
                  : {
                      fontSize: "1.3rem",
                      width: "max-content",
                      marginLeft: "45px",
                      marginRight: "20px",
                    }
              }
            >
              {level === 2 ? "PLAY" : score2 }
            </p>
            <div className="pink-btn-circle">
              <div className="pink-btn-c-i">2</div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-wrap-ld">
        <div
          className="pink-button"
          style={{ width: "80%" }}
          onClick={() => navigate("/leaderboard")}
        >
          <div className="pink-button-inner" style={{ width: "90%" }}>
            <div className="pink-button-rect" />
            <p style={{ fontSize: "1.5rem", width: "max-content" }}>
              LEADER BOARD
            </p>
          </div>
        </div>
        <div className="mazebg">
          <img src={mazebg} alt="maze background" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
