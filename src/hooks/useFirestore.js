import { useState, useEffect } from "react"
import { firestore } from "../config/fbConfig"
import { useAuth } from "../context/AuthContext"
import { useHistory } from "react-router-dom"

const getDoc = (doc) => ({ ...doc.data(), id: doc.id })

const useFirestore = (collection, docId, userID, openTab, completed) => {
  const [docs, setDocs] = useState([])
  const [loading, setLoading] = useState(true)
  // getting realtime data from the firebase for challenges and solutions
  useEffect(() => {
    let subject = firestore.collection(collection)

    if (docId) {
      subject = subject.doc(docId)
    } else if (userID) {
      openTab === 1
        ? (subject = subject
            .where("userID", "==", userID)
            .where("completed", "==", false))
        : (subject = subject.where("userID", "==", userID).where("completed", "==", true))
    } else if (completed) {
      subject = subject.where("completed", "==", true)
    }
    const unsubscribe = subject.onSnapshot((snapshot) => {
      const items = docId ? [getDoc(snapshot)] : snapshot.docs.map(getDoc)
      setDocs(items)
      setLoading(false)
    })
    return unsubscribe
  }, [collection, docId, openTab, loading]) // eslint-disable-line react-hooks/exhaustive-deps

  return { docs, loading }
}

export const useSolution = (collection) => {
  const history = useHistory()
  const { currentUser } = useAuth()

  // add solution to the firebase
  const addSolution = (solution) => {
    try {
      firestore.collection(collection).add({
        ...solution,
        author: currentUser.displayName,
        userID: currentUser.id,
        photoURL: currentUser.photoURL,
        completed: false,
        createdAt: new Date(),
      })
      // history.push("/solutions");
    } catch (error) {
      console.log(error)
    }
  }

  // delete a solution from the firestore db
  const deleteSolution = (solution) => {
    try {
      firestore.collection(collection).doc(solution.id).delete()
      history.push("/solutions")
    } catch (error) {
      console.log(error)
    }
  }

  // update solution
  const updateSolution = (updatedSolution, id) => {
    try {
      firestore.collection(collection).doc(id).update(updatedSolution)
    } catch (error) {
      console.log(error)
    }
  }

  return { addSolution, deleteSolution, updateSolution }
}

export default useFirestore
