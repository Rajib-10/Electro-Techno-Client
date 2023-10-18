// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdbehpVvgCeqL_V7Yqm8n_8ZzeXOp89vw",
  authDomain: "electro-techno.firebaseapp.com",
  projectId: "electro-techno",
  storageBucket: "electro-techno.appspot.com",
  messagingSenderId: "746608836780",
  appId: "1:746608836780:web:f25f4d64c4040168b5df09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;