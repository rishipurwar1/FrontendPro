import { useNavigate } from "react-router-dom"

import { FILES } from "../../constants"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useCollection } from "../../hooks/useCollection"
import { useFirestore } from "../../hooks/useFirestore"

import Button from "./Button"

const StartCodingButton = ({ document, setIsOpen }) => {
  const { user } = useAuthContext()
  const { addDocument, response } = useFirestore("solutions")
  const navigate = useNavigate()

  // rename the id property to challengeID
  const solutionDetails = [document].map(({ id, ...r }) => {
    r.challengeID = id
    return r
  })

  const { documents } = useCollection(
    "solutions",
    null,
    null,
    null,
    user.uid,
    null,
    solutionDetails[0].challengeID
  )

  const initializeCodeEditor = async () => {
    if (documents.length > 0) {
      // Todo: Replace this with a toast notification
      setIsOpen(false)
      navigate(`/code/${documents[0].id}`)
    } else {
      const addedDocument = await addDocument({
        ...solutionDetails[0],
        author:
          user.displayName !== null ? user.displayName : user.reloadUserInfo.screenName,
        userID: user.uid,
        photoURL: user.photoURL,
        completed: false,
        files: FILES.vanilla,
      })

      if (addedDocument) {
        setIsOpen(false)
        const id = addedDocument.id
        navigate(`/code/${id}`)
      }
    }
  }

  return (
    <Button
      className="font-medium"
      variant="primary"
      size="medium"
      onClick={initializeCodeEditor}
      loading={response.isPending}
    >
      Start coding online
    </Button>
  )
}

export default StartCodingButton
