import "../index.css";
import tinkererLogo from "../assets/tinkererlogo.svg";
import micromouseLogo from "../assets/maze.svg";
import milanlogo from "../assets/logocream.png";
import { useNavigate } from "react-router-dom";
import mmouse from "../assets/micromouselogo.png";
// import gifLogo from "../assets/logoGif.mp4"
import { app } from "../firebase.config";
import {
  getFirestore,
  doc,
  collection,
  getDoc,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
// import gifLogo from "../assets/logoGif.mp4"

const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore(app);


function LandingPage() {
  const navigate = useNavigate();
  function handleLogin(e) {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        if (!user.email.endsWith("@iith.ac.in")) {
          signOut(auth)
            .then(() => {
              alert("Sign in with the Institute email ID");
              console.log("successfully signed out");
            })
            .catch((err) => {
              console.log("error in signing out");
            });
        } else {
          console.log(result.user.metadata.lastSignInTime);
          console.log("successfully signed in");
          console.log(user.photoURL)
          const docRef = doc(db, "Users", user.email);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            await setDoc(doc(db, "Users", user.email), {
              ...docSnap.data(),
              Login_Time: result.user.metadata.lastSignInTime,
            });
            const userData = docSnap.data()
            const score = userData.Score || 0
            console.log("User is in DB with score of ", score)
            if(score === 0){
              navigate('/Instructions', { state: { userEmail: user.email } })
            }else{
              navigate('/dashboard', {state: {userEmail: user.email}})
            }
          } else {
            await setDoc(doc(db, "Users", user.email), {
              Name: user.displayName,
              Login_Time: result.user.metadata.lastSignInTime,
              T1: 0,
              T2: 0,
              picURL: user.photoURL,
              Score: 0,
            });
          }
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  return (
    <div className="landingPage">
      <div className="micromouseLogo">
        <img src={micromouseLogo} alt="The logo of MicroMouse" />
      </div>
      <div className="playpage-logo">
        <img src={tinkererLogo} alt="tinkerer logo" />
        {/* <img src={profilePicURL} alt="Profile Pic"/> */}
      </div>
      <div className="lpBox">
        <img src={mmouse} alt="Micro Mouse logo" />
        <p className="headingMM">MICROMOUSE</p>
        <p className="paraMM">loremiapsum</p>
        <div className="playpage-buttons" style={{ marginTop: "10vh" }}>
          <div className="pink-button" style={{ width: "70%" }}>
            <div className="pink-button-inner" style={{ width: "90%" }}>
              <div className="pink-button-rect" />
              <p
                style={{ fontSize: "1.5rem", width: "max-content" }}
                onClick={handleLogin}
              >
                Login
              </p>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
