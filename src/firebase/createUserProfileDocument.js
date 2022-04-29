import {
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore"

import { db } from "./config"

export const createUserProfileDocument = async (user) => {
  const q = query(collection(db, "users"), where("uid", "==", user.uid))
  const { docs } = await getDocs(q)
  if (docs.length === 0) {
    const { uid, displayName, email, photoURL, reloadUserInfo } = user
    const docRef = doc(db, `users/${uid}`)
    await setDoc(docRef, {
      displayName,
      email,
      photoURL,
      username: reloadUserInfo.screenName,
      skills: [], // array of strings or objects
      learning: "",
      bio: "",
      badges: [], // array of strings
      followers: [], // array of objects
      points: 0,
      reputation: 0,
      location: "",
      socialLinks: [], // array of objects
      createdAt: serverTimestamp(),
    })
  }
}
