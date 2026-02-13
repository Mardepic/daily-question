// Lisää uusi merkintä
async function addDiaryEntry(text) {
  if (!auth.currentUser) {
    console.error("Kirjaudu ensin sisään!");
    return;
  }

  await addDoc(collection(db, "diaries"), {
    userId: auth.currentUser.uid,
    text: text,
    createdAt: new Date()
  });

  console.log("Merkintä lisätty!");
}

// Hae kirjautuneen käyttäjän omat merkinnät
async function getMyDiaryEntries() {
  if (!auth.currentUser) {
    console.error("Kirjaudu ensin sisään!");
    return [];
  }

  const q = query(
    collection(db, "diaries"),
    where("userId", "==", auth.currentUser.uid),
    orderBy("createdAt", "desc")
  );

  const querySnapshot = await getDocs(q);
  const entries = [];
  querySnapshot.forEach(doc => {
    entries.push({ id: doc.id, ...doc.data() });
  });

  return entries;
}
