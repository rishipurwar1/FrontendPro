import React, { useState } from "react"
import { useParams } from "react-router-dom"

import { useAuthContext } from "../../hooks/useAuthContext"
import { useDocument } from "../../hooks/useDocument"
import { useFirestore } from "../../hooks/useFirestore"
import { addValue, removeValue } from "../../utils/shared"
import SignedOutLinks from "../layouts/SignedOutLinks"
import Modal from "../reusable/Modal"

const Emoji = ({ emoji }) => {
  const [showModal, setShowModal] = useState(false)
  const { user } = useAuthContext()
  const { id: docID } = useParams()
  const { document: reaction } = useDocument(`solutions/${docID}/reactions`, emoji.slug)
  const { updateDocument, addSubCollectionDocumentWithCustomID } = useFirestore(
    `solutions/${docID}/reactions`
  )

  const isUserClicked = () => {
    if (!reaction) return false
    return !!reaction?.users[user.uid]
  }

  const handleClick = async (label) => {
    if (!user) {
      setShowModal(true)
      return
    }

    if (!reaction) {
      const newReaction = {
        label: label,
        count: 1,
        users: {
          [user.uid]: {
            userID: user.uid,
            avatarURL: user.photoURL,
            displayName: user.displayName,
            username: user.reloadUserInfo.screenName,
          },
        },
      }

      await addSubCollectionDocumentWithCustomID(newReaction, emoji.slug)
      return
    }
    if (reaction && reaction?.users[user.uid]) {
      updateDocument(emoji.slug, {
        count: reaction?.count - 1,
        users: removeValue(reaction?.users, reaction?.users[user.uid].userID),
      })
      return
    }
    if (reaction && !reaction?.users[user.uid]) {
      updateDocument(emoji.slug, {
        count: reaction?.count + 1,
        users: addValue(reaction?.users, user),
      })
    }
  }
  return (
    <>
      <span
        key={emoji.label}
        className={`relative cursor-pointer px-2 py-2 transition-colors ${
          user && isUserClicked() && "bg-gray-700"
        } hover:bg-gray-700 rounded-lg`}
        onClick={() => handleClick(emoji.label)}
      >
        <emoji.emoji width={32} height={32} />
        <span className="absolute -top-1 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-gray-700 rounded-full z-10">
          {reaction?.count || 0}
        </span>
      </span>
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

export default Emoji
