// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt7vBh4z0ylAWeaS0FCNcz-vErYF4dSTw",
  authDomain: "portofolioku-ce3b2.firebaseapp.com",
  projectId: "portofolioku-ce3b2",
  storageBucket: "portofolioku-ce3b2.firebasestorage.app",
  messagingSenderId: "18474952062",
  appId: "1:18474952062:web:c0f0c4318508f8c0563f2f"
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
