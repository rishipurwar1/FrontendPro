import { useEffect, useReducer, useState } from "react"
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore"

import { db } from "../firebase/config"

const initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { isPending: true, document: null, success: false, error: null }
    case "ADDED_DOCUMENT":
      return { isPending: false, document: action.payload, success: true, error: null }
    case "DELETED_DOCUMENT":
      return { isPending: false, document: null, success: true, error: null }
    case "UPDATED_DOCUMENT":
      return { isPending: false, document: action.payload, success: true, error: null }
    case "ERROR":
      return { isPending: false, document: null, success: false, error: action.payload }
    default:
      return state
  }
}

export const useFirestore = (c, subCollection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  // only dispatch is not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }

  // add a document
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" })

    try {
      const createdAt = serverTimestamp()
      const addedDocument = await addDoc(collection(db, c), {
        ...doc,
        createdAt,
      })
      dispatchIfNotCancelled({ type: "ADDED_DOCUMENT", payload: addedDocument })
    } catch (error) {
      dispatchIfNotCancelled({ type: "ERROR", payload: error.message })
    }
  }

  // Add document to sub collection
  const addSubCollectionDocument = async (docID, docData) => {
    dispatch({ type: "IS_PENDING" })
    try {
      const colRef = collection(db, c, docID, subCollection)
      const addedDocument = await addDoc(colRef, docData)
      dispatch({ type: "ADDED_DOCUMENT", payload: addedDocument })
    } catch (error) {
      console.log(error)
      dispatchIfNotCancelled({ type: "ERROR", payload: error })
      return null
    }
  }

  // Add document to sub collection with a Custom document ID
  const addSubCollectionDocumentWithCustomID = async (docID, docData, customID) => {
    dispatch({ type: "IS_PENDING" })
    try {
      const docRef = doc(db, c, docID, subCollection, customID)
      const addedDocument = await setDoc(docRef, docData)
      dispatchIfNotCancelled({ type: "ADDED_DOCUMENT", payload: addedDocument })
    } catch (error) {
      console.log(error)
      dispatchIfNotCancelled({ type: "ERROR", payload: error })
      return null
    }
  }

  // update a document
  const updateDocument = async (id, updates) => {
    dispatch({ type: "IS_PENDING" })
    try {
      const updatedDocument = await updateDoc(doc(db, c, id), updates)
      dispatchIfNotCancelled({ type: "UPDATED_DOCUMENT", payload: updatedDocument })
      return updatedDocument
    } catch (error) {
      dispatchIfNotCancelled({ type: "ERROR", payload: error })
      return null
    }
  }

  const updateSubCollectionDocument = async (docID, id, updates) => {
    dispatch({ type: "IS_PENDING" })
    try {
      const updatedDocument = await updateDoc(
        doc(db, c, docID, subCollection, id),
        updates
      )
      dispatchIfNotCancelled({ type: "UPDATED_DOCUMENT", payload: updatedDocument })
      return updatedDocument
    } catch (error) {
      console.log(error)
      dispatchIfNotCancelled({ type: "ERROR", payload: error })
      return null
    }
  }

  // delete a document
  const deleteDocument = async (id) => {
    dispatch({ type: "IS_PENDING" })

    try {
      await deleteDoc(doc(db, c, id))
      dispatchIfNotCancelled({ type: "DELETED_DOCUMENT" })
    } catch (error) {
      dispatchIfNotCancelled({ type: "ERROR", payload: error })
    }
  }

  const deleteSubCollectionDocument = async (docID, id) => {
    dispatch({ type: "IS_PENDING" })

    try {
      await deleteDoc(doc(db, c, docID, subCollection, id))
      dispatchIfNotCancelled({ type: "DELETED_DOCUMENT" })
    } catch (error) {
      dispatchIfNotCancelled({ type: "ERROR", payload: error })
    }
  }

  useEffect(() => {
    setIsCancelled(true)
  }, [isCancelled])

  return {
    addDocument,
    addSubCollectionDocument,
    addSubCollectionDocumentWithCustomID,
    updateDocument,
    updateSubCollectionDocument,
    deleteDocument,
    deleteSubCollectionDocument,
    response,
  }
}
