// js/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "TÄHÄN_OMA_API_KEY",
    authDomain: "TÄHÄN_AUTH_DOMAIN",
    projectId: "TÄHÄN_PROJECT_ID",
    storageBucket: "TÄHÄN_STORAGE",
    messagingSenderId: "TÄHÄN_SENDER_ID",
    appId: "TÄHÄN_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
