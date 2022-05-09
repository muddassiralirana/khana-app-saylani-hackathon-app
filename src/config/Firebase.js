import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL,uploadBytesResumable } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCo3wBKfQksQG23lYTzto1VKo7yB-heiM4",
  authDomain: "khanasabkliye-58ef9.firebaseapp.com",
  databaseURL: "https://khanasabkliye-58ef9-default-rtdb.firebaseio.com",
  projectId: "khanasabkliye-58ef9",
  storageBucket: "khanasabkliye-58ef9.appspot.com",
  messagingSenderId: "856824925024",
  appId: "1:856824925024:web:b9cd80d8a91bb56c6e6c05",
  measurementId: "G-KKZJ5ZB90N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export {
  app,
  db,
  auth,
  storage,
  ref,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setDoc,
  addDoc,
  signOut,
  doc,
  updateDoc,
  collection,
  getDoc,
  updatePassword,
  sendPasswordResetEmail,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable
};
