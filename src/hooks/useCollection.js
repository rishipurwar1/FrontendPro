import { useEffect, useRef, useState } from "react"
// firebase import
import { collection, limit, onSnapshot, orderBy, query, where } from "firebase/firestore"

import { db } from "../firebase/config"

export const useCollection = (c, _q, _l, _o, userID, openTab, challengeID) => {
  const [documents, setDocuments] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  const q = useRef(_q).current
  const o = useRef(_o).current

  useEffect(() => {
    let ref = collection(db, c)

    if (q) {
      ref = query(ref, where(...q))
    }
    if (o) {
      ref = query(ref, orderBy(...o))
    }
    if (_l) {
      ref = query(ref, limit(_l))
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
          results.push({ ...doc.data(), id: doc.id })
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

    // unsubscribe on unmount
    return () => unsubscribe()
  }, [c, q, _l, o, isLoading, openTab, challengeID])

  return { documents, error, isLoading }
}
