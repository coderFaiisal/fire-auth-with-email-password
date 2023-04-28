// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOXqFfaiWfSnIKWfHerWnziwE3ci4hA1o",
  authDomain: "fire-auth-with-email-pass.firebaseapp.com",
  projectId: "fire-auth-with-email-pass",
  storageBucket: "fire-auth-with-email-pass.appspot.com",
  messagingSenderId: "339204928967",
  appId: "1:339204928967:web:bd30fe06e037233d1895e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
