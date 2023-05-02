// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnZm-U15Zj518H8tIGY2OWapb3jAVd6cU",
  authDomain: "world-top-chef.firebaseapp.com",
  projectId: "world-top-chef",
  storageBucket: "world-top-chef.appspot.com",
  messagingSenderId: "1087220983541",
  appId: "1:1087220983541:web:c0fd4fcfe3f56fabf3c7bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app