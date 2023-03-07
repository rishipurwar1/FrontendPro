import { useEffect, useState } from "react"
// firebase import
import { collection, limit, onSnapshot, orderBy, query, where } from "firebase/firestore"

import { db } from "../firebase/config"

export const useCollection = (c, q, l, o, userID, openTab, challengeID) => {
  const [documents, setDocuments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ref = collection(db, c)
    if (q) {
      ref = query(ref, where(...q))
    }
    if (o) {
      ref = query(ref, orderBy(...o))
    }
    if (l) {
      ref = query(ref, limit(l))
    }

    if (userID && !openTab) {
      ref = query(
        ref,
        where("userID", "==", userID),
        where("challengeID", "==", challengeID)
      )
    }

    if (userID && openTab) {
      openTab === 1
        ? (ref = query(
            ref,
            where("userID", "==", userID),
            where("completed", "==", false)
          ))
        : (ref = query(
            ref,
            where("userID", "==", userID),
            where("completed", "==", true)
          ))
    }

    const unsubscribe = onSnapshot(ref, (snapshot) => {
      const results = []

      snapshot.docs.forEach(
        (doc) => {
          results.push({
            ...doc.data(),
            id: doc.id,
            createdAt: doc.data()?.createdAt.toMillis() || 0,
            updatedAt: doc.data()?.updatedAt?.toMillis() || 0,
          })
        },
        (error) => {
          console.log(error)
          setError("could not fetch the data")
        }
      )
      // update state
      setDocuments(results)
      setIsLoading(false)
      setError(null)
    })

    // unsubscribe to the previous listener before running the side effect again
    return () => unsubscribe()
  }, [openTab])

  return { documents, error, isLoading }
}
