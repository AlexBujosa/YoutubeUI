// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWbImuI7oJCTEAetmHaOUm1uLQUvt0k2s",
  authDomain: "magnetic-quasar-360119.firebaseapp.com",
  projectId: "magnetic-quasar-360119",
  storageBucket: "magnetic-quasar-360119.appspot.com",
  messagingSenderId: "35816845853",
  appId: "1:35816845853:web:4f600752bed3f1cdb60cf4",
  measurementId: "G-695KWSJZ30"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
