import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";
// import { useAuth } from '../context/AuthContext';

var firebaseConfig = {
    apiKey: "AIzaSyA_q4n8k6lh0H1UmU5lA1OOnOdrBb-Gq4Y",
    authDomain: "codingspace-73ac5.firebaseapp.com",
    databaseURL: "https://codingspace-73ac5.firebaseio.com",
    projectId: "codingspace-73ac5",
    storageBucket: "codingspace-73ac5.appspot.com",
    messagingSenderId: "893452226897",
    appId: "1:893452226897:web:9ec46cef52aba85eea0370"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// creating user profile
export const createUserProfileDocument = async (userAuth) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { email, photoURL, providerData } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        photoURL,
        createdAt,
        displayName: providerData[0].displayName
      })
    } catch (error) {
      console.log(error.message);
    }
  }
  return userRef;
}

const firestore = firebase.firestore();
const auth = firebase.auth;
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firestore, auth, timestamp };