import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';



// const firebaseConfig = {
//   apiKey: "AIzaSyA1FiCCpeA_LDoOrEjXmQUH6Jyt_tEYdcM",
//   authDomain: "e-commrce-test-878bc.firebaseapp.com",
//   projectId: "e-commrce-test-878bc",
//   storageBucket: "e-commrce-test-878bc.appspot.com",
//   messagingSenderId: "1046683075070",
//   appId: "1:1046683075070:web:1671f4935a0ce2a2a300af",
//   measurementId: "G-TW1VXFLE1Q"
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const rtdb = getDatabase(app)
export const db = getFirestore(app)

// const analytics = getAnalytics(app);