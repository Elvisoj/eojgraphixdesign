
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDPWZK8DQtblg6Xf86gcufIj43EwfU1clI",
  authDomain: "eojgraphix.firebaseapp.com",
  projectId: "eojgraphix",
  storageBucket: "eojgraphix.firebasestorage.app",
  messagingSenderId: "385044549603",
  appId: "1:385044549603:web:5797868bdb7068090e9ad6",
  measurementId: "G-4RM237CWWM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
