// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBL_7gDw48WhVXULW8gNf_S_KnWjKHW5JQ",
  authDomain: "portofolio-arganifw.firebaseapp.com",
  projectId: "portofolio-arganifw",
  storageBucket: "portofolio-arganifw.firebasestorage.app",
  messagingSenderId: "738449564059",
  appId: "1:738449564059:web:c8ae26a93252dbd2e9013e",
  measurementId: "G-YX6Z6476RG"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
