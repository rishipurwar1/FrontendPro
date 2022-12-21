import React, { useState } from "react"

import { useAuthContext } from "../../hooks/useAuthContext"
import { useFirestore } from "../../hooks/useFirestore"
import Button from "../reusable/Button"
import Modal from "../reusable/Modal"

const CommentForm = ({ docID }) => {
  const [newComment, setNewComment] = useState("")
  const [showModal, setShowModal] = useState(false)

  const { addDocument, response } = useFirestore(`solutions/${docID}/comments`)
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
      }
      await addDocument(commentToAdd)
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
      <div className="flex justify-between items-center border border-gray-700 bg-gray-800 rounded-lg p-4">
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
            className="bg-transparent text-white font-semibold border border-gray-700 bg-gray-800 rounded-lg w-full p-4 mt-6 outline-none transition-colors focus:bg-gray-800 mb-4"
            name="comments"
            id="comments"
            cols="30"
            rows="10"
            placeholder="Start Typing..."
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
          <Button
            type="submit"
            size="large"
            variant="primary"
            className="self-end font-medium"
            loading={response.isPending}
          >
            Comment
          </Button>
        </>
      )}
    </form>
  )
}

export default CommentForm
