// js/app.js
import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, query, where, getDocs, orderBy } from "firebase/firestore";

// --- DOM ELEMENTS ---
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const entryInput = document.getElementById("entryInput");
const addBtn = document.getElementById("addBtn");
const loadBtn = document.getElementById("loadBtn");
const entriesList = document.getElementById("entriesList");

// --- AUTH LISTENERS ---
registerBtn.addEventListener("click", async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
    alert("Rekisteröinti onnistui: " + userCredential.user.email);
  } catch (error) {
    alert("Rekisteröintivirhe: " + error.message);
  }
});

loginBtn.addEventListener("click", async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
    alert("Kirjautuminen onnistui: " + userCredential.user.email);
  } catch (error) {
    alert("Kirjautumisvirhe: " + error.message);
  }
});

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  alert("Kirjauduttu ulos");
});

// Kuuntele kirjautumisen tilaa
onAuthStateChanged(auth, user => {
  if (user) {
    console.log("Kirjautunut käyttäjä:", user.email);
  } else {
    console.log("Ei kirjautunutta käyttäjää");
  }
});

// --- FIRESTORE FUNCTIONS ---

// Lisää uusi merkintä
async function addDiaryEntry(text) {
  if (!auth.currentUser) {
    alert("Kirjaudu ensin sisään!");
    return;
  }

  await addDoc(collection(db, "diaries"), {
    userId: auth.currentUser.uid,
    text: text,
    createdAt: new Date()
  });

  alert("Merkintä lisätty!");
  entryInput.value = "";
}

// Hae kirjautuneen käyttäjän omat merkinnät
async function getMyDiaryEntries() {
  if (!auth.currentUser) {
    alert("Kirjaudu ensin sisään!");
    return;
  }

  const q = query(
    collection(db, "diaries"),
    where("userId", "==", auth.currentUser.uid),
    orderBy("createdAt", "desc")
  );

  const querySnapshot = await getDocs(q);
  entriesList.innerHTML = ""; // tyhjennä lista

  querySnapshot.forEach(doc => {
    const li = document.createElement("li");
    li.textContent = doc.data().text;
    entriesList.appendChild(li);
  });
}

// --- BUTTON LISTENERS ---
addBtn.addEventListener("click", () => {
  const text = entryInput.value.trim();
  if (text) addDiaryEntry(text);
});

loadBtn.addEventListener("click", getMyDiaryEntries);
