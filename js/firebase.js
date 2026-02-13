// js/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJR7kIaO5R6b-mDigcaBUZbIv4lZhPd3g",
  authDomain: "reflection-diary-2026-d9b75.firebaseapp.com",
  projectId: "reflection-diary-2026-d9b75",
  storageBucket: "reflection-diary-2026-d9b75.firebasestorage.app",
  messagingSenderId: "40162654025",
  appId: "1:40162654025:web:49d152a55fced628f78c98",
  measurementId: "G-3RFHJPQV5Q" // valinnainen
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
