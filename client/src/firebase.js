// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-47f3d.firebaseapp.com",
  projectId: "mern-blog-47f3d",
  storageBucket: "mern-blog-47f3d.appspot.com",
  messagingSenderId: "154138230053",
  appId: "1:154138230053:web:a9106f9bb1868650e46ecc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);