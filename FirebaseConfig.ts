import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiA1ZZLVsyDIj2_gKSOpN-ypk0PKNmO6w",
  authDomain: "smi-app-f4c87.firebaseapp.com",
  projectId: "smi-app-f4c87",
  storageBucket: "smi-app-f4c87.firebasestorage.app",
  messagingSenderId: "922496243470",
  appId: "1:922496243470:web:bc5ad66c2b3cb1f6da695f"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);