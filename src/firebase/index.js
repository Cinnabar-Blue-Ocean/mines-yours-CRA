import { initializeApp } from 'firebase/app';
import { getAuth,GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";


const firebaseApp = initializeApp({
  apiKey: "AIzaSyDMQiT_igpgOF7V98WiDjiCbsk0W4ciWA0",
  authDomain: "mine-yours.firebaseapp.com",
  projectId: "mine-yours",
  storageBucket: "mine-yours.appspot.com",
  messagingSenderId: "151804095653",
  appId: "1:151804095653:web:5789d4eb641f2035bf314c",
  measurementId: "G-PH0YQ7F1QJ"
});

// To use import firebase/index.js const { service } = 'firebase/index.js'
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(firebaseApp);