import React from "react"

import { useSandpack } from "@codesandbox/sandpack-react"

import { useFirestore } from "../../hooks/useFirestore"
import Button from "../reusable/Button"

const filterVisibleFiles = (visibleFiles, files) => {
  const visibleFileSet = new Set(visibleFiles)
  return Object.keys(files)
    .filter((file) => visibleFileSet.has(file))
    .reduce((obj, key) => {
      obj[key] = files[key]
      return obj
    }, {})
}

const EditorFooter = ({ challenge }) => {
  const { sandpack } = useSandpack()
  const { files, visibleFiles } = sandpack
  const { updateDocument, response } = useFirestore("solutions")

  const handleSave = async () => {
    const data = filterVisibleFiles(visibleFiles, files)
    const updatedData = {
      ...challenge,
      files: data,
    }
    await updateDocument(challenge?.id, updatedData)
  }

  return (
    <div className="flex justify-end bg-gray-800 h-16 p-3 border-t border-gray-600">
      <Button
        className="font-semibold mr-2"
        variant="secondary"
        size="medium"
        onClick={handleSave}
        loading={response.isPending}
      >
        Save
      </Button>
      <Button
        className="font-semibold"
        variant="primary"
        size="medium"
        onClick={handleSave}
        loading={response.isPending}
      >
        Submit
      </Button>
    </div>
  )
}

export default EditorFooter
