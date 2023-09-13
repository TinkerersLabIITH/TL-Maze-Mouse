// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-tlPyZgW9NWFLRuykhaC7uOeiSZFWM74",
  authDomain: "tlmicromouse.firebaseapp.com",
  projectId: "tlmicromouse",
  storageBucket: "tlmicromouse.appspot.com",
  messagingSenderId: "494412364879",
  appId: "1:494412364879:web:e27f5524bef8919f007e3a",
  measurementId: "G-2CVT0P344H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
