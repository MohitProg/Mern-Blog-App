// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm-4NwPERhBy0B3WZBwF6V_0lG5dHotMY",
  authDomain: "mern-blogapp-d63e5.firebaseapp.com",
  projectId: "mern-blogapp-d63e5",
  storageBucket: "mern-blogapp-d63e5.appspot.com",
  messagingSenderId: "422205568168",
  appId: "1:422205568168:web:d42f4ea15fc9a2b202fe9d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);