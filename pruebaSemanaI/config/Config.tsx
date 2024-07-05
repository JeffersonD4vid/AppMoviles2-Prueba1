// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwofv9jgLeulpTbXwAnuZrCg9n8VZKKR4",
  authDomain: "prueba-1-8a024.firebaseapp.com",
  databaseURL: "https://prueba-1-8a024-default-rtdb.firebaseio.com",
  projectId: "prueba-1-8a024",
  storageBucket: "prueba-1-8a024.appspot.com",
  messagingSenderId: "470715900362",
  appId: "1:470715900362:web:9777dd0c346b1cd6552f33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);