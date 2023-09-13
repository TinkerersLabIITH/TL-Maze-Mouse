// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS__QBG9EAIJoiZP-FhKEXbSzDrskZTe0",
  authDomain: "tl-micromouse.firebaseapp.com",
  projectId: "tl-micromouse",
  storageBucket: "tl-micromouse.appspot.com",
  messagingSenderId: "695518199308",
  appId: "1:695518199308:web:2847824fc1e1d693497829",
  measurementId: "G-8V5Q2JHD83"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
