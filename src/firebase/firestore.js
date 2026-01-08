import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore"

import { postToJSON } from "../utils/shared"

import { db } from "./config"

// Generic helper to fetch documents from a collection, ordered by "createdAt" (newest first).
// - c: collection name
// - q: optional Firestore "where" tuple, e.g. ["completed", "==", true]
// - l: optional numeric limit
export const getDocuments = async (c, q = null, l = null) => {
  const queryConstraints = []

  if (q !== null) {
    queryConstraints.push(where(...q))
  }

  // Only apply limit when a valid number is provided.
  if (typeof l === "number") {
    queryConstraints.push(limit(l))
  }

  const ref = collection(db, c)
  const docsRef = query(ref, orderBy("createdAt", "desc"), ...queryConstraints)
  const documents = (await getDocs(docsRef)).docs.map(postToJSON)
  return documents
}

export const getDocument = async (c, id) => {
  const document = postToJSON(await getDoc(doc(db, c, id)))
  return document
}
