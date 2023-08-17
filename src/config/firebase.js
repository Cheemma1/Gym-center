import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: "gym-center-4baa7.firebaseapp.com",
  projectId: "gym-center-4baa7",
  storageBucket: "gym-center-4baa7.appspot.com",
  messagingSenderId: "999947669549",
  appId: "1:999947669549:web:dccc003826ea54928de8a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
