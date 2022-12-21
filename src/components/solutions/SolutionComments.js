import React, { useState } from "react"
import { useParams } from "react-router-dom"

import { useCollection } from "../../hooks/useCollection"

import Comment from "./Comment"
import CommentForm from "./CommentForm"

const SolutionComments = () => {
  const [activeComment, setActiveComment] = useState(null)
  const { id } = useParams()
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
      </div>
    </div>
  )
}

export default SolutionComments
