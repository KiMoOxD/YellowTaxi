// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNvtYGhvlTFwgYf6QMAurxqa9Qv4wgbfs",
  authDomain: "yellowtaxi-64286.firebaseapp.com",
  projectId: "yellowtaxi-64286",
  storageBucket: "yellowtaxi-64286.appspot.com",
  messagingSenderId: "340785484943",
  appId: "1:340785484943:web:d6c1d4ea735dae016e0cfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;