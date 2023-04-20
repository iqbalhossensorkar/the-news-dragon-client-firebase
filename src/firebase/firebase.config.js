// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi_t91ynzIZhATGw6n8HEQuTNGKounQVY",
  authDomain: "the-news-dragon-client-firebas.firebaseapp.com",
  projectId: "the-news-dragon-client-firebas",
  storageBucket: "the-news-dragon-client-firebas.appspot.com",
  messagingSenderId: "152202213273",
  appId: "1:152202213273:web:1123972f2992c9fe07c508"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;