// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0boW3jzYVgcxGuytI16ESFzKcJItsrAs",
  authDomain: "proyecto-integrador-3vs2.firebaseapp.com",
  projectId: "proyecto-integrador-3vs2",
  storageBucket: "proyecto-integrador-3vs2.firebasestorage.app",
  messagingSenderId: "105175203263",
  appId: "1:105175203263:web:6ed6b01793e15e6b2f750a",
  measurementId: "G-ZFRMK46MJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };