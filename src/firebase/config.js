
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "dermofiit.firebaseapp.com",
  projectId: "dermofiit",
  storageBucket: "dermofiit.firebasestorage.app",
  messagingSenderId: "1001368312909",
  appId: "1:1001368312909:web:da1ad33fc888b2067dd004"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)