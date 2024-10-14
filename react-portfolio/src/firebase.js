
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCaxbuZbgl2yIv1NIfkOupld_SH1Pa7lPM",
  authDomain: "react-portfolio-dashboar-d9c15.firebaseapp.com",
  projectId: "react-portfolio-dashboar-d9c15",
  storageBucket: "react-portfolio-dashboar-d9c15.appspot.com",
  messagingSenderId: "756471222357",
  appId: "1:756471222357:web:8df1370323b4107872c4dc",
  measurementId: "G-ZQL2D9NSES"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const signInWithGoogle = () => signInWithPopup(auth, provider);


