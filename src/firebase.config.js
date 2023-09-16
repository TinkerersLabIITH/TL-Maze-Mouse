// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAjufsDTNKcINqn7mMQlHUTk7fEIQUHUr8",
  authDomain: "micromouse-tl.firebaseapp.com",
  projectId: "micromouse-tl",
  storageBucket: "micromouse-tl.appspot.com",
  messagingSenderId: "728405710661",
  appId: "1:728405710661:web:fe8e946c8934b6156ed02c",
  measurementId: "G-X45P8K1E0N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
