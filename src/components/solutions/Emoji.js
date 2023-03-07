import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"

import { useAuthContext } from "../../hooks/useAuthContext"
import { useFirestore } from "../../hooks/useFirestore"
import SignedOutLinks from "../layouts/SignedOutLinks"
import Modal from "../reusable/Modal"

const Emoji = ({ reactions, emoji }) => {
  const [showModal, setShowModal] = useState(false)
  const { user } = useAuthContext()
  const router = useRouter()
  const { solutionId: docID } = router.query

  const { updateDocument, addSubCollectionDocumentWithCustomID } = useFirestore(
    `solutions/${docID}/reactions`
  )

  const isUserClicked = (slug) => {
    if (!reactions) return false
    return !!reactions?.[slug]?.users.includes(user.uid)
  }

  const handleClick = async (slug) => {
    const reaction = reactions?.[slug]

    if (!user) {
      setShowModal(true)
      return
    }

    if (!reactions) {
      const newReaction = {
        [emoji.slug]: {
          count: 1,
          users: [user.uid],
        },
      }
      await addSubCollectionDocumentWithCustomID(newReaction, "emojis")
      return
    }

    if (reactions && reaction?.users.includes(user.uid)) {
      updateDocument("emojis", {
        [slug]: {
          count: reaction?.count - 1,
          users: reaction?.users.filter((uid) => uid !== user.uid),
        },
      })
      return
    }
    if (reactions && !reaction?.users[user.uid]) {
      updateDocument("emojis", {
        [slug]: {
          count: reaction ? reaction?.count + 1 : 1,
          users: reaction ? [...reaction?.users, user.uid] : [user.uid],
        },
      })
    }
  }

  return (
    <>
      <span
        className={`relative cursor-pointer px-2 py-2 transition-colors ${
          user && isUserClicked(emoji.slug) && "bg-gray-700"
        } hover:bg-gray-700 rounded-lg`}
        onClick={() => handleClick(emoji.slug)}
      >
        <Image src={emoji.emoji} width={32} height={32} alt={emoji.label} />
        <span className="absolute -top-1 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-gray-700 rounded-full z-10">
          {reactions?.[emoji.slug]?.count || 0}
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
