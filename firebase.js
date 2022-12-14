// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
//for a user  authonticantion
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
//connect to Firestore database
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV92bqYm8XvcD2zMzLbQH5Lxhxczgs4PA",
  authDomain: "medium-clone-fddb7.firebaseapp.com",
  projectId: "medium-clone-fddb7",
  storageBucket: "medium-clone-fddb7.appspot.com",
  messagingSenderId: "422745965578",
  appId: "1:422745965578:web:dcd87cf56bdb789db0cbf3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

//export them so we can use them inside ither files
export { auth, provider, db };
