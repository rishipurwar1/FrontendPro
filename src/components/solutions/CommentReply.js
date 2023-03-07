import { useRouter } from "next/router"
import moment from "moment"

import { useAuthContext } from "../../hooks/useAuthContext"
import { useFirestore } from "../../hooks/useFirestore"
import Avatar from "../reusable/Avatar"
import Icons from "../SvgIcons/Icons"

import ReplyForm from "./ReplyForm"

const CommentReply = ({
  comment,
  parentReplies,
  activeComment,
  setActiveComment,
  parentId = null,
}) => {
  const router = useRouter()
  const { solutionId: docID } = router.query
  const { updateDocument } = useFirestore(`solutions/${docID}/comments`)

  const { user } = useAuthContext()

  const isEditing =
    activeComment && activeComment.id === comment.id && activeComment.type === "editing"
  const isReplying =
    activeComment && activeComment.id === comment.id && activeComment.type === "replying"
  const replyId = parentId || comment.id

  // handle sub collection document
  const handleDelete = async () => {
    if (window.confirm("Do you really want to delete this reply?")) {
      const updatedReplies = parentReplies.filter((reply) => reply.id !== comment.id)
      await updateDocument(parentId, {
        replies: updatedReplies,
      })
    }
  }

  return (
    <div className="my-4 border border-gray-700 rounded p-4">
      <div className="flex">
        <a
          href={`https://github.com/${comment.user.username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar photoURL={comment.user.avatarURL} className="ring-gray-700" />
        </a>
        <div className="ml-4 flex-1">
          <p className="text-gray-300 mb-2">
            <a
              href={`https://github.com/${comment.user.username}`}
              className="no-underline hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {comment.user.displayName
                ? comment.user.displayName
                : comment.user.username}
            </a>
            <small className="pl-2 text-gray-400">
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
              replies={parentReplies}
              hasCancelButton
              setActiveComment={setActiveComment}
            />
          )}
          {isEditing && (
            <ReplyForm
              docID={docID}
              id={replyId}
              commentID={comment.id}
              replies={parentReplies}
              initialText={comment.content}
              setActiveComment={setActiveComment}
              hasCancelButton
              isReply
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default CommentReply
