// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDi_niN5M8zQJ93d65OLfjihxV84Vrrr5Y",
  authDomain: "netflix-c533d.firebaseapp.com",
  projectId: "netflix-c533d",
  storageBucket: "netflix-c533d.appspot.com",
  messagingSenderId: "711536266337",
  appId: "1:711536266337:web:1522ace3e20e750cb72e20",
  measurementId: "G-PP0J2MX0PW"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);