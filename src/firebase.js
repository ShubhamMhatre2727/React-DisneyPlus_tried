// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM5mTX2snDBuzDRqNVriPK0dyEuMYA4WY",
  authDomain: "disneyplus-clone-8e0a6.firebaseapp.com",
  projectId: "disneyplus-clone-8e0a6",
  storageBucket: "disneyplus-clone-8e0a6.appspot.com",
  messagingSenderId: "277076488771",
  appId: "1:277076488771:web:5500af497ae6dd9b3cdaf6",
  measurementId: "G-N1V1Z4SED7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth =getAuth(app);
const provider = new GoogleAuthProvider(app);
const storage = getStorage();

export { auth, provider, storage };
export default db;