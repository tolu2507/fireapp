import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDawlcILGmkADVN75wbxOoJnkZaMEjRyhA",
  authDomain: "fir-tutorial-a0e1f.firebaseapp.com",
  databaseURL: "https://fir-tutorial-a0e1f-default-rtdb.firebaseio.com",
  projectId: "fir-tutorial-a0e1f",
  storageBucket: "fir-tutorial-a0e1f.appspot.com",
  messagingSenderId: "481660348198",
  appId: "1:481660348198:web:91e58c78be0f589091c3e7",
  measurementId: "G-6FZH9XB7YX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
const analytics = getAnalytics(app);
