import React, { useState } from "react"
import { Timestamp } from "firebase/firestore"

import { useAuthContext } from "../../hooks/useAuthContext"
import { useFirestore } from "../../hooks/useFirestore"
import Modal from "../reusable/Modal"

const CommentForm = ({ docID }) => {
  const [newComment, setNewComment] = useState("")
  const [showModal, setShowModal] = useState(false)

  const { addSubCollectionDocument, response } = useFirestore("solutions", "comments")
  const { user } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const commentToAdd = {
        content: newComment.trim(),
        reactions: [],
        parentID: null,
        user: {
          userID: user.uid,
          avatarURL: user.photoURL,
          displayName: user.displayName,
          username: user.reloadUserInfo.screenName,
        },
        replies: [],
        createdAt: Timestamp.now(),
      }
      await addSubCollectionDocument(docID, commentToAdd)
      setNewComment("")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      {showModal && !user && (
        <Modal
          setShowModal={setShowModal}
          title="Oops! Look like you aren't logged in"
          emoji="😌"
        />
      )}
      <div className="flex justify-between items-center bg-gray-800 border-2 border-gray-700 rounded p-4">
        <h3 htmlFor="comments" className="text-white font-bold text-2xl">
          Discussion
        </h3>
        {!user && (
          <button
            onClick={() => setShowModal(true)}
            type="button"
            className="px-4 py-2 text-base font-medium leading-6 text-purple-500 whitespace-no-wrap border border-purple-500 rounded-md shadow-sm hover:bg-opacity-5 hover:bg-purple-50 focus:outline-none focus:shadow-none"
          >
            <i className="fas fa-plus mr-2"></i>
            <span>Write a comment</span>
          </button>
        )}
      </div>
      {user && (
        <>
          <textarea
            className="bg-transparent text-white font-semibold border-2 border-gray-700 rounded w-full p-4 mt-6 outline-none transition-colors focus:bg-gray-800"
            name="comments"
            id="comments"
            cols="30"
            rows="10"
            placeholder="Start Typing..."
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
          <button
            className={`inline-flex items-center justify-center self-end ${
              response.isPending
                ? "bg-indigo-500 cursor-not-allowed"
                : "bg-purple-800 transition-all duration-200 bg-gradient-to-br hover:from-purple-500 hover:to-indigo-500"
            } mt-4 p-4 text-white text-base font-heading font-semibold shadow-md rounded focus:outline-none`}
            disabled={response.isPending}
          >
            Comment
          </button>
        </>
      )}
    </form>
  )
}

export default CommentForm
