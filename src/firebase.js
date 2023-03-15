
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { firebaseConfig } from './config/firebaseConfig'

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
getAnalytics(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider)
