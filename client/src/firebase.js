import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBURXriH3eqo4jTZ-MB_lloHzjb_fGIO4",
  authDomain: "chatify-9d71c.firebaseapp.com",
  projectId: "chatify-9d71c",
  storageBucket: "chatify-9d71c.appspot.com",
  messagingSenderId: "446908939940",
  appId: "1:446908939940:web:7bfa9c65818174d6d9f031"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();