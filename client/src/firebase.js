// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "webcraftai-875ca.firebaseapp.com",
  projectId: "webcraftai-875ca",
  storageBucket: "webcraftai-875ca.firebasestorage.app",
  messagingSenderId: "703032474148",
  appId: "1:703032474148:web:ecbdd5ce94416b4b86f6b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}