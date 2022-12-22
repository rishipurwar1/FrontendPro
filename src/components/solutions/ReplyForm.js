import React, { useState } from "react"
import { Timestamp } from "firebase/firestore"
import { v4 as uuidv4 } from "uuid"

import { useAuthContext } from "../../hooks/useAuthContext"
import { useFirestore } from "../../hooks/useFirestore"
import Button from "../reusable/Button"

const ReplyForm = ({
  docID,
  replyingTo,
  id,
  commentID,
  replies,
  setActiveComment,
  initialText = "",
  isReply,
  hasCancelButton = false,
}) => {
  const [newComment, setNewComment] = useState(initialText)
  const { updateDocument, response } = useFirestore(`solutions/${docID}/comments`)
  const { user } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const commentToAdd = {
        id: uuidv4(),
        content: newComment.trim(),
        reactions: [],
        replyingTo,
        parentID: id,
        user: {
          userID: user.uid,
          avatarURL: user.photoURL,
          displayName: user.displayName,
          username: user.reloadUserInfo.screenName,
        },
        createdAt: Timestamp.now(),
      }

      if (!isReply && initialText) {
        await updateDocument(id, {
          content: newComment,
        })
      } else if (isReply && initialText) {
        const reply = replies.find((reply) => reply.id === commentID)
        if (reply) reply.content = newComment
        await updateDocument(id, {
          replies: replies,
        })
      } else {
        await updateDocument(id, {
          replies: [...replies, commentToAdd],
        })
      }
      setActiveComment(null)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label htmlFor="reply">
        <textarea
          className="bg-transparent text-white font-semibold border border-gray-800 rounded w-full p-4 mt-6 outline-none focus:ring-1 focus:ring-purple-500"
          name="reply"
          id="reply"
          cols="30"
          rows="4"
          placeholder="Start Typing..."
          required
          onChange={(e) => setNewComment(e.target.value)}
          value={newComment}
        ></textarea>
      </label>
      <div className="flex mt-2">
        <Button
          loading={response.isPending}
          size="medium"
          variant="primary"
          className="self-end font-medium mr-4"
        >
          Reply
        </Button>
        {hasCancelButton && (
          <Button
            size="medium"
            variant="primary"
            className="self-end font-medium"
            onClick={() => setActiveComment(null)}
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  )
}

export default ReplyForm
