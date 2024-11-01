// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBfC6KReuIh6ktWobWH6_mB8UPIY6G5mKA",
  authDomain: "profilemsg.firebaseapp.com",
  databaseURL: "https://profilemsg-default-rtdb.firebaseio.com",
  projectId: "profilemsg",
  storageBucket: "profilemsg.appspot.com",
  messagingSenderId: "141772787176",
  appId: "1:141772787176:web:5a7844133478cbb7a2285d",
  measurementId: "G-71NN1JMRQT"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export const db1 = getDatabase(app);
export default app;