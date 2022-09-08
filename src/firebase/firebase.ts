// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAylhJBIrjqJUrn3OIIrtBW9CCC0RbMNtk",
  authDomain: "t-pro-webadmin-f48c6.firebaseapp.com",
  databaseURL: "https://t-pro-webadmin-f48c6-default-rtdb.firebaseio.com",
  projectId: "t-pro-webadmin-f48c6",
  storageBucket: "t-pro-webadmin-f48c6.appspot.com",
  messagingSenderId: "1055106881582",
  appId: "1:1055106881582:web:1a075ab831c344f001a7bf",
  measurementId: "G-6HHEH28E2X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
