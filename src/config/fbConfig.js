import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import { getGitHubUserData } from "../utils/getGithubUserData"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// creating user profile
export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { email, photoURL, providerData } = userAuth

    const createdAt = new Date()
    getGitHubUserData(providerData[0].uid)
      .then((gitHubUserData) => {
        const username = gitHubUserData.login
        try {
          userRef.set({
            email,
            photoURL,
            createdAt,
            displayName: providerData[0].displayName,
            username,
          })
        } catch (error) {
          console.log(error.message)
        }
      })
      .catch((err) => console.error(err))
  }
  return userRef
}

const firestore = firebase.firestore()
const auth = firebase.auth
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { firestore, auth, timestamp }
