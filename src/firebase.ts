import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhmBsryNHyWEIjzr7JDa7Q-STdaZjlKYk",
  authDomain: "chand6907portfolio.firebaseapp.com",
  projectId: "chand6907portfolio",
  storageBucket: "chand6907portfolio.appspot.com",
  messagingSenderId: "203328975036",
  appId: "1:203328975036:web:f432282e352bea26ba60b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);