//* Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

//* Add the Web App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8T08q_v0Z2QXKlXlxFvnTy2q_UEa0UlU",
  authDomain: "todoliat-6a166.firebaseapp.com",
  projectId: "todoliat-6a166",
  storageBucket: "todoliat-6a166.appspot.com",
  messagingSenderId: "709369664664",
  appId: "1:709369664664:web:5647ce5e99d85753d2aced",
  measurementId: "G-C863SC2F59"
};

//* Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
