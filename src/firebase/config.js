// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE-1bnUPnvnFlELQSWqe_JYrID50zonz8",
  authDomain: "offload-54f5b.firebaseapp.com",
  projectId: "offload-54f5b",
  storageBucket: "offload-54f5b.appspot.com",
  messagingSenderId: "164351172764",
  appId: "1:164351172764:web:19bcfb430c1e4b0cbdcd59",
  measurementId: "G-WV4YBCZPPX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
