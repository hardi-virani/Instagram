// Import the functions you need from the SDKs you need
import { initializeApp , getApps , getApp  } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDENpd4VKAj9_oiwyFNrgzabZqy2_kZa-c",
  authDomain: "instagram-1-project.firebaseapp.com",
  projectId: "instagram-1-project",
  storageBucket: "instagram-1-project.appspot.com",
  messagingSenderId: "825558335304",
  appId: "1:825558335304:web:9b9c348ef766ad688cbd7d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();

export {app , db , storage}; 