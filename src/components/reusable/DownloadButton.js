import { useAuthContext } from "../../hooks/useAuthContext"
import { useCollection } from "../../hooks/useCollection"
import { useFirestore } from "../../hooks/useFirestore"

import Button from "./Button"

const DownloadButton = ({
  document,
  setIsOpen,
  variant = "outline",
  size = "medium",
}) => {
  const { user } = useAuthContext()
  const { addDocument, response } = useFirestore("solutions")

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

  const downloadAssets = async () => {
    if (documents.length > 0) {
      // Todo: Replace this with a toast notification
      console.log("You have already downloaded the starter code for this challenge.")
    } else {
      await addDocument({
        ...solutionDetails[0],
        author:
          user.displayName !== null ? user.displayName : user.reloadUserInfo.screenName,
        userID: user.uid,
        photoURL: user.photoURL,
        completed: false,
      })
      setIsOpen(false)
    }
    window.open(solutionDetails[0].challengeAssets, "_blank", "noopener,noreferrer")
  }

  return (
    <Button
      variant={variant}
      size={size}
      className="font-medium"
      onClick={downloadAssets}
      loading={response.isPending}
    >
      Download starter code
    </Button>
  )
}

export default DownloadButton
