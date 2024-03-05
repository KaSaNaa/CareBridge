import { initializeApp } from "firebase/app";
import {
  browserSessionPersistence,
  deleteUser,
  getAuth,
  onAuthStateChanged,
  setPersistence,
  signOut,
  updatePassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

// You can initialize any service as you need in here..
// Initialize Firebase Firestore
export const db = getFirestore(app);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Set the persistence to local storage so that authentication state is preserved when the user refreshes the page
export const persistence = setPersistence(auth, browserSessionPersistence);

// Get the currently signed-in user
export const user = auth.currentUser;

// Listen for changes to the user's sign-in state
export const authState = onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in " + user.email + "\n UID: " + user.uid);
  } else {
    console.log("User is signed out");
  }
});

// Sign out the user
export const signOutUser = () => {
  signOut(auth)
    .then(() => {
      console.log("Sign out successful.");
      Navigate("/signin");
    })
    .catch((error) => {
      alert("An error occurred while signing out." + " " + error.message);
    });
};

// Get the user's profile information from their ID token
export const getUserProfile = () => {
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  } else {
    console.log("No user is signed in.");
  }
};
// Update user password
export const updateUserPassword = (newPassword) => {
  updatePassword(user, newPassword)
    .then(() => {
      alert("Password updated successfully.");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(
        "Error updating password: " + errorCode + "\n" + errorMessage + user
      );
    });
};

// Send a password reset email
export const sendPasswordResetEmail = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Password reset email sent successfully.");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(
        "Error sending password reset email: " + errorCode + "\n" + errorMessage
      );
    });
};

// Delete a user
export const deleteCurrentUser = () => {
  deleteUser(auth.currentUser)
    .then(() => {
      alert("User deleted successfully.");
    })
    .catch((error) => {
      alert("Error deleting user: ", error);
    });
};
