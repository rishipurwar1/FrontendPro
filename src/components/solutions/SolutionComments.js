import { useState } from "react"
import { useRouter } from "next/router"

import { useCollection } from "../../hooks/useCollection"

import Comment from "./Comment"
import CommentForm from "./CommentForm"
import Image from "next/image"
import comment from "../../assets/illustrations/comment.png"

const SolutionComments = () => {
  const [activeComment, setActiveComment] = useState(null)
  const router = useRouter()
  const { solutionId: id } = router.query

  const { documents } = useCollection(`solutions/${id}/comments`, null, null, [
    "createdAt",
    "desc",
  ])

  return (
    <div className="mt-10 md:mt-0">
      <CommentForm docID={id} />
      <div className="mt-10">
        {documents &&
          documents.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              replies={comment.replies}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
            />
          ))}
        {documents.length === 0 && (
          <div className="flex flex-col items-center">
            <Image
              src={comment}
              width={150}
              height={150}
              alt="comments"
              className="-mt-4"
            />
            <p className="text-center max-w-2xl mx-auto text-gray-300 text-sm">
              Leave your feedback and upvote the solution!
              <span className="block text-xs mt-1 italic">
                Your words can make a difference in someone&apos;s coding journey.
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SolutionComments
