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

export const getDocuments = async (c, q = null, l) => {
  const queryConstraints = []

  if (q !== null) queryConstraints.push(where(...q))
  if (l !== null) queryConstraints.push(limit(l))

  const ref = collection(db, c)
  const docsRef = query(ref, orderBy("createdAt", "desc"), ...queryConstraints)
  const documents = (await getDocs(docsRef)).docs.map(postToJSON)
  return documents
}

export const getDocument = async (c, id) => {
  const document = postToJSON(await getDoc(doc(db, c, id)))
  return document
}
