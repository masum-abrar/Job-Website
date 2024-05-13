// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMLDus0q5m5YGCpJj-o0hYKDxEGsYiShY",
  authDomain: "job-website-ddf69.firebaseapp.com",
  projectId: "job-website-ddf69",
  storageBucket: "job-website-ddf69.appspot.com",
  messagingSenderId: "99834766660",
  appId: "1:99834766660:web:7ee8a2a79cf75099032311"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;