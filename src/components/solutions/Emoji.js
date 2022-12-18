import React, { useState } from "react"
import { useParams } from "react-router-dom"

import { useAuthContext } from "../../hooks/useAuthContext"
import { useDocument } from "../../hooks/useDocument"
import { useFirestore } from "../../hooks/useFirestore"
import { addValue, removeValue } from "../../utils/shared"
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
      {showModal && !user && (
        <Modal
          setShowModal={setShowModal}
          title="Oops! Look like you aren't logged in"
          emoji="😌"
        />
      )}
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
    </>
  )
}

export default Emoji
