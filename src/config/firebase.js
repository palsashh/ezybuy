// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC_R3t8zCFK0nv1-i-8f153kTWM0QoYF4",
  authDomain: "busybuy-1-cd08e.firebaseapp.com",
  projectId: "busybuy-1-cd08e",
  storageBucket: "busybuy-1-cd08e.appspot.com",
  messagingSenderId: "834646703540",
  appId: "1:834646703540:web:d7dbe66e7051077a7986e1"
};

console.log(process.env);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);
export { db };
