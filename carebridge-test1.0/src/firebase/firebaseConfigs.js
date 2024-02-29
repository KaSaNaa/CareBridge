// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoySGmF2diNPus2u0bGEFwvXjMGPUDISk",
  authDomain: "carebridge-a901d.firebaseapp.com",
  projectId: "carebridge-a901d",
  storageBucket: "carebridge-a901d.appspot.com",
  messagingSenderId: "581751974818",
  appId: "1:581751974818:web:2ef335c076764cc20e20fb",
  measurementId: "G-NCKKNMQ7EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app