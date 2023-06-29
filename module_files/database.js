// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIeQ_6T0i7Wu8-c2c71Vk64KWIAxoF_ws",
  authDomain: "patygames-rpg.firebaseapp.com",
  databaseURL: "https://patygames-rpg-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "patygames-rpg",
  storageBucket: "patygames-rpg.appspot.com",
  messagingSenderId: "855829252577",
  appId: "1:855829252577:web:f0071e25c2151505b42aa0",
  measurementId: "G-17SEKGCQ74"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)