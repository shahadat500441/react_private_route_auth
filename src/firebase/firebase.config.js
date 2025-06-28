// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcRlzdm5rLV1czY-NHmt5tk21OfdZbzio",
  authDomain: "pimple-firebase-26b84.firebaseapp.com",
  projectId: "pimple-firebase-26b84",
  storageBucket: "pimple-firebase-26b84.firebasestorage.app",
  messagingSenderId: "1060719661281",
  appId: "1:1060719661281:web:5c6f7c5d3128f3599c67a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;