import React, { useState } from "react"

import { useAuthContext } from "../../hooks/useAuthContext"
import { useFirestore } from "../../hooks/useFirestore"
import SignedOutLinks from "../layouts/SignedOutLinks"
import Button from "../reusable/Button"
import Modal from "../reusable/Modal"
import Icons from "../SvgIcons/Icons"

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
    <>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex justify-between items-center border border-gray-700 bg-gray-800 rounded-lg p-4">
          <h3 htmlFor="comments" className="text-white font-bold text-2xl">
            Discussion
          </h3>
          {!user && (
            <Button
              variant="outline"
              size="medium"
              className="font-medium"
              onClick={() => setShowModal(true)}
            >
              <Icons.Plus className="mr-2 -ml-1" size={18} />
              Write a comment
            </Button>
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
      {showModal && !user && (
        <Modal
          setIsOpen={setShowModal}
          body={
            <>
              <span role="img" aria-label="rocket" className="text-3xl">
                🚀
              </span>
              <h2 className="mt-4 mb-2 font-medium text-base text-white">
                Join the Community and Share Your Thoughts!
              </h2>
              <p className="mb-4 text-xs text-gray-300">
                Sign up now to leave your comments and
                <br />
                feedback on the solution!
              </p>
            </>
          }
          footer={<SignedOutLinks variant="primary" size="medium" />}
        />
      )}
    </>
  )
}

export default CommentForm
