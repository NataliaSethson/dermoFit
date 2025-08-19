
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBatcpVKQDTP01AfPr5ESZecywOLywR8XM",
  authDomain: "dermofiit.firebaseapp.com",
  projectId: "dermofiit",
  storageBucket: "dermofiit.firebasestorage.app",
  messagingSenderId: "1001368312909",
  appId: "1:1001368312909:web:da1ad33fc888b2067dd004"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)