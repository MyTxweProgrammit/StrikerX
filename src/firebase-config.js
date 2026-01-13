import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBqO7Tau8kF7Fgibz5lo8LRIgxI5KR-hcg",
  authDomain: "strikerx-b00c5.firebaseapp.com",
  projectId: "strikerx-b00c5",
  storageBucket: "strikerx-b00c5.firebasestorage.app",
  messagingSenderId: "748825446674",
  appId: "1:748825446674:web:9b8cb0a4d70e23a6578bcb",
  measurementId: "G-J04LPGN64P",
  databaseURL: "https://strikerx-b00c5-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const auth = getAuth(app);
export const db = getFirestore(app);