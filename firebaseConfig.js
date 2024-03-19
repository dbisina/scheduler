// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq0N2cviz-ki6CkzC6Ti009QPcHLPmyzA",
  authDomain: "scheduler-f505c.firebaseapp.com",
  projectId: "scheduler-f505c",
  storageBucket: "scheduler-f505c.appspot.com",
  messagingSenderId: "1098147948175",
  appId: "1:1098147948175:web:3f2a12fac158e6b853f2fa",
  measurementId: "G-R95N9NBGKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);