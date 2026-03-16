import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";

import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3Cl6Jwsyq28U0P-edWZ25LQjS_OPZK8A",
  authDomain: "tradingjournalapp-d1d42.firebaseapp.com",
  projectId: "tradingjournalapp-d1d42",
  storageBucket: "tradingjournalapp-d1d42.firebasestorage.app",
  messagingSenderId: "194760660554",
  appId: "1:194760660554:web:277e3f313ef0f49c769f4f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);