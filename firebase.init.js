
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvP0nhp3WKqrZK-5nymHPsAbsYZSj0jIw",
  authDomain: "crowdcube-bfdbf.firebaseapp.com",
  projectId: "crowdcube-bfdbf",
  storageBucket: "crowdcube-bfdbf.firebasestorage.app",
  messagingSenderId: "610718221909",
  appId: "1:610718221909:web:c511d2ef5759d1c8aaf6dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)