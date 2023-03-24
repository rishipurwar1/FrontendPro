import { useReducer } from "react"
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore"

import { db } from "../firebase/config"
import { firestoreReducer } from "../reducers/firestoreReducer"

const initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
}

export const useFirestore = (c) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)

  // add a document
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" })

    try {
      const createdAt = Timestamp.now()
      const addedDocument = await addDoc(collection(db, c), {
        ...doc,
        createdAt,
        updatedAt: createdAt,
      })
      dispatch({ type: "ADDED_DOCUMENT", payload: addedDocument })
      return addedDocument
    } catch (error) {
      console.log(error)
      dispatch({ type: "ERROR", payload: error.message })
    }
  }

  // Add document to sub collection with a Custom document ID
  const addSubCollectionDocumentWithCustomID = async (docData, customID) => {
    dispatch({ type: "IS_PENDING" })
    try {
      const createdAt = Timestamp.now()
      const docRef = doc(db, c, customID)
      const addedDocument = await setDoc(docRef, {
        ...docData,
        createdAt,
      })
      dispatch({ type: "ADDED_DOCUMENT", payload: addedDocument })
    } catch (error) {
      console.log(error)
      dispatch({ type: "ERROR", payload: error })
      return null
    }
  }

  // update a document
  const updateDocument = async (id, updates) => {
    dispatch({ type: "IS_PENDING" })
    try {
      const updatedDocument = await updateDoc(doc(db, c, id), {
        ...updates,
        updatedAt: Timestamp.now(),
      })
      dispatch({ type: "UPDATED_DOCUMENT", payload: updatedDocument })
      return updatedDocument
    } catch (error) {
      console.log(error)
      dispatch({ type: "ERROR", payload: error })
      return null
    }
  }

  // delete a document
  const deleteDocument = async (id) => {
    dispatch({ type: "IS_PENDING" })

    try {
      await deleteDoc(doc(db, c, id))
      dispatch({ type: "DELETED_DOCUMENT" })
    } catch (error) {
      dispatch({ type: "ERROR", payload: error })
    }
  }

  return {
    addDocument,
    addSubCollectionDocumentWithCustomID,
    updateDocument,
    deleteDocument,
    response,
  }
}
