// js/firebase.js

// Import necessary Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// Korvaa alla olevat omilla avaimillasi
const firebaseConfig = {
  apiKey: "TÄHÄN_OMA_API_KEY",
  authDomain: "TÄHÄN_AUTH_DOMAIN",
  projectId: "TÄHÄN_PROJECT_ID",
  storageBucket: "TÄHÄN_STORAGE_BUCKET",
  messagingSenderId: "TÄHÄN_SENDER_ID",
  appId: "TÄHÄN_APP_ID",
  measurementId: "TÄHÄN_MEASUREMENT_ID" // valinnainen
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Initialize Analytics
const analytics = getAnalytics(app);

// Initialize Firestore database
const db = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Export for use in other modules
export { app, analytics, db, auth };
