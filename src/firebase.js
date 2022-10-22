import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyClerQ6j7ucKDP7I4Y9pVlDLQ3FQEEoRwQ",
  authDomain: "chat-app-f145c.firebaseapp.com",
  projectId: "chat-app-f145c",
  storageBucket: "chat-app-f145c.appspot.com",
  messagingSenderId: "504065096088",
  appId: "1:504065096088:web:f283497b67f1e3fb59d3ed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();