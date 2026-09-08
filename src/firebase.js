// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNY-GRoQJ_-6WBAZnlxYhtnS6473-cjJs",
  authDomain: "fir-project-7f155.firebaseapp.com",
  projectId: "fir-project-7f155",
  storageBucket: "fir-project-7f155.firebasestorage.app",
  messagingSenderId: "837357857141",
  appId: "1:837357857141:web:c9f9c6be9aabd3dd414b3c",
  measurementId: "G-FNBK57665N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
