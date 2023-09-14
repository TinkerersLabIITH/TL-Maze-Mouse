// import DashboardTime from '../components/DashboardTime'
import "../App.css";
import mazebg from "../assets/maze.svg";
import tinkerlogo from "../assets/tinkererlogo.svg";
import milanlogo from "../assets/logocream.png";
import micromouselogo from "../assets/micromouselogo.png";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { app } from "../firebase.config"

const db = getFirestore(app)

async function getUserByEmail(email) {
  try {
    const userCollection = collection(db, "Users")
    const q = query(userCollection, where("email", "==", email))
    const querySnapshot = await getDocs(q)

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0]
      return userDoc.data()
    } else {
      console.log("User not found")
      return null
    }

  } catch (error) {
    console.log(error)
  }
}



function Dashboard() {
  const location = useLocation()
  const userEmail = location.state ? location.state.userEmail : null
  const navigate = useNavigate();
  const [level, setLevel] = useState(1);
  const [time, setTime] = useState("00:00:00");
  const useremail = new URLSearchParams(location.search).get("userEmail");
  const elapsedTime = new URLSearchParams(location.search).get("elapsedTime");
  getUserByEmail(userEmail)
  .then((userData) => {
    if (userData !== null) {
      console.log("User Data: ", userData)
    }
  })
  .catch((error) => {
    console.log("Error", error)
  })


  return (
    <div className="dashboard">
      <div className="playpage-logo">
        <img src={tinkerlogo} alt="tinkerer logo" />
      </div>
      <div className="playpage-micro">
        <img src={micromouselogo} alt="micromouse logo" />
      </div>
      <div className="dashboard-stages">
        <div
          className="pink-button"
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
              {level === 1 ? "PLAY" : time}
            </p>
            <div className="pink-btn-circle">
              <div className="pink-btn-c-i">1</div>
            </div>
          </div>
        </div>
        <div
          className="pink-button"
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
              {level === 2 ? "PLAY" : time}
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
