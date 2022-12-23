import React from "react"
import moment from "moment"
import { useParams } from "react-router-dom"

import { useAuthContext } from "../../hooks/useAuthContext"
import { useFirestore } from "../../hooks/useFirestore"
import Avatar from "../reusable/Avatar"
import Icons from "../SvgIcons/Icons"

import CommentReply from "./CommentReply"
import ReplyForm from "./ReplyForm"

const Comment = ({
  comment,
  replies,
  activeComment,
  setActiveComment,
  parentId = null,
}) => {
  const { id: docID } = useParams()
  const { deleteDocument } = useFirestore(`solutions/${docID}/comments`)
  const { user } = useAuthContext()

  const isEditing =
    activeComment && activeComment.id === comment.id && activeComment.type === "editing"
  const isReplying =
    activeComment && activeComment.id === comment.id && activeComment.type === "replying"
  const replyId = parentId || comment.id

  // handle sub collection document
  const handleDelete = async () => {
    if (window.confirm("Do you really want to delete this comment?")) {
      await deleteDocument(comment.id)
    }
  }

  return (
    <div className="my-4 border border-gray-700 rounded-lg p-4">
      <div className="flex">
        <a
          href={`https://github.com/${comment.user.username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar photoURL={comment.user.avatarURL} className="ring-gray-700" />
        </a>
        <div className="ml-4 flex-1">
          <p className="text-white mb-2 text-sm">
            <a
              href={`https://github.com/${comment.user.username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {comment.user.displayName
                ? comment.user.displayName
                : comment.user.username}
            </a>
            <small className="text-gray-400 ml-3 text-sm">
              {moment(comment.createdAt.toDate()).fromNow()}
            </small>
          </p>
          {!isEditing && <p className="text-gray-400">{comment.content}</p>}
          <div className="mt-2 flex">
            {user && (
              <button
                onClick={() => setActiveComment({ id: comment.id, type: "replying" })}
                className="flex items-center text-gray-400"
              >
                <Icons.Reply size={18} />
                <small className="pl-1 font-semibold">Reply</small>
              </button>
            )}
            {user?.uid === comment.user.userID && (
              <>
                <button
                  onClick={() => setActiveComment({ id: comment.id, type: "editing" })}
                  className="flex items-center mx-4 text-gray-400"
                >
                  <Icons.Edit size={18} />
                  <small className="pl-1 font-semibold">Edit</small>
                </button>
                <button
                  className="flex items-center text-gray-400"
                  onClick={handleDelete}
                >
                  <Icons.Delete size={18} />
                  <small className="pl-1 font-semibold">Delete</small>
                </button>
              </>
            )}
          </div>
          {isReplying && (
            <ReplyForm
              docID={docID}
              replyingTo={comment.user.username}
              id={replyId}
              replies={replies}
              hasCancelButton
              setActiveComment={setActiveComment}
            />
          )}
          {isEditing && (
            <ReplyForm
              docID={docID}
              id={replyId}
              initialText={comment.content}
              hasCancelButton
              setActiveComment={setActiveComment}
            />
          )}
          {replies &&
            replies
              .sort((a, b) => a.createdAt.seconds - b.createdAt.seconds)
              .map((reply) => (
                <CommentReply
                  key={reply.id}
                  comment={reply}
                  parentReplies={replies}
                  parentId={comment.id}
                  activeComment={activeComment}
                  setActiveComment={setActiveComment}
                />
              ))}
        </div>
      </div>
    </div>
  )
}

export default Comment
