// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8pFiQbmM3d2j1kl-vgVbz-CjXbunZ5Mc",
  authDomain: "matale-web-devloper.firebaseapp.com",
  projectId: "matale-web-devloper",
  storageBucket: "matale-web-devloper.firebasestorage.app",
  messagingSenderId: "370172902955",
  appId: "1:370172902955:web:a433d6fd113563ed4df46e",
  measurementId: "G-6YH9TCKMK6"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase services
export {
  app,
  auth,
  db,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  deleteDoc,
  doc
};