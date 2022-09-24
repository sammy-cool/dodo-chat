import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdgXmvFWWu_RLyzYXxOtCqVd-BUqWUozg",
  authDomain: "dodo-chat-f92aa.firebaseapp.com",
  projectId: "dodo-chat-f92aa",
  storageBucket: "dodo-chat-f92aa.appspot.com",
  messagingSenderId: "155084233897",
  appId: "1:155084233897:web:8fd099b924834682111db8",
  measurementId: "G-D0VWJC2ZEK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

// ----------------------------------------------------------------------------------------------------------------------------------
// cloud firestore rules

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }
