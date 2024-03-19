import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {initializeAuth} from "firebase/auth"

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
export const db  = getFirestore(app);
export const auth = initializeAuth(app);