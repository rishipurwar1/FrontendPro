import { useRouter } from "next/router"

import { useSandpack } from "@codesandbox/sandpack-react"

import { useFirestore } from "../../hooks/useFirestore"
import Button from "../reusable/Button"
import Icons from "../SvgIcons/Icons"

const filterVisibleFiles = (visibleFiles, files) => {
  const visibleFileSet = new Set(visibleFiles)
  return Object.keys(files)
    .filter((file) => visibleFileSet.has(file))
    .reduce((obj, key) => {
      obj[key] = files[key]
      return obj
    }, {})
}

const EditorFooter = ({ playground, isCompleted, isDirty, setIsDirty }) => {
  const router = useRouter()
  const { id, slug } = router.query
  const { sandpack } = useSandpack()
  const { files, visibleFiles } = sandpack
  const {
    addSubCollectionDocumentWithCustomID,
    updateDocument: updatePlayground,
    response: playgroundResponse,
  } = useFirestore(`solutions/${id}/playgrounds`)

  const { updateDocument: updateSolution, response: solutionResponse } =
    useFirestore("solutions")

  const handleSave = async () => {
    if (!isDirty) return
    const data = filterVisibleFiles(visibleFiles, files)
    const updatedData = {
      files: data,
    }

    if (playground) {
      await updatePlayground(playground?.id, updatedData)
    } else {
      await addSubCollectionDocumentWithCustomID(updatedData, "vanilla") // TODO: change to dynamic
    }
    setIsDirty(false)
  }

  const handleSubmit = async () => {
    const updatedData = {
      completed: !isCompleted,
    }
    try {
      if (isDirty) {
        await handleSave()
      }
      await updateSolution(id, updatedData)
      setIsDirty(false)
      if (!solutionResponse.error && !isCompleted) {
        router.push({
          pathname: `/frontend-coding-challenges/${slug}/solutions/${id}`,
          query: { submit: true },
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="absolute bottom-0 left-0 right-0">
      <div className="flex justify-end bg-gray-800 h-16 p-3 border-t border-gray-600">
        <Button
          className="font-semibold mr-2"
          variant="secondary"
          size="medium"
          onClick={handleSave}
          loading={playgroundResponse.isPending}
        >
          Save
        </Button>
        <Button
          className="font-semibold"
          variant="primary"
          size="medium"
          onClick={handleSubmit}
          loading={solutionResponse.isPending}
        >
          {isCompleted ? (
            <>
              {!solutionResponse.isPending && (
                <Icons.Check size={18} className="mr-2 -ml-1" />
              )}
              Completed
            </>
          ) : (
            "Mark as complete"
          )}
        </Button>
      </div>
    </div>
  )
}

export default EditorFooter
