import { initializeApp } from 'firebase/app'
import { browserLocalPersistence, getAuth, onAuthStateChanged, setPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
// You can initialize any service as you need in here..
export const db = getFirestore(app);
export const auth = getAuth(app);
export const persistence = setPersistence(auth, browserLocalPersistence);
export const authState = onAuthStateChanged(auth, (user) =>{
  if(user){
    console.log('User is signed in')
  }else{
    console.log('User is signed out')
  }
})