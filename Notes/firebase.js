import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTDVUmpUrkA7mrX5_OF_8mFHroN0neH_s",
  authDomain: "react-notes-a4a49.firebaseapp.com",
  projectId: "react-notes-a4a49",
  storageBucket: "react-notes-a4a49.appspot.com",
  messagingSenderId: "596593429139",
  appId: "1:596593429139:web:9d1a61cec7b44b1f941b66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")