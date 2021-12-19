// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk9uqSoot1Nt9yFhpuU9GYD7Numjh922M",
  authDomain: "digit-infosys.firebaseapp.com",
  databaseURL: "https://digit-infosys-default-rtdb.firebaseio.com",
  projectId: "digit-infosys",
  storageBucket: "digit-infosys.appspot.com",
  messagingSenderId: "331043633243",
  appId: "1:331043633243:web:1bf8bcb9a0b806ddc8e77e",
  measurementId: "G-2WFKT0M2MB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export {db, auth, provider};