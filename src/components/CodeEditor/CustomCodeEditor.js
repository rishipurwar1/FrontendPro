import { useEffect, useState } from "react"
import { emmetCSS, emmetHTML } from "emmet-monaco-es"

import { SandpackStack, useSandpack } from "@codesandbox/sandpack-react"
import Editor from "@monaco-editor/react"

import { useAuthContext } from "../../hooks/useAuthContext"
import { getLanguageOfFile } from "../../utils/shared"

import CustomTabs from "./CustomTabs"
import EditorFooter from "./EditorFooter"

const CustomCodeEditor = ({ playground, solution }) => {
  const [isDirty, setIsDirty] = useState(false)
  const [activeFile, setActiveFile] = useState("/index.html")
  const { sandpack } = useSandpack()
  const { files, updateFile } = sandpack
  const { user } = useAuthContext()
  const language = getLanguageOfFile(activeFile)

  const handleEditorDidMount = (editor, monaco) => {
    emmetHTML(monaco)
    emmetCSS(monaco)
  }

  const handleBeforeUnload = (event) => {
    if (isDirty) {
      event.preventDefault()
      event.returnValue = ""
    }
  }

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [isDirty])

  return (
    <div className="h-full flex flex-col">
      <SandpackStack
        style={{
          height: "100%",
        }}
      >
        <CustomTabs activeFile={activeFile} setActiveFile={setActiveFile} />
        <div className="bg-[#1e1e1e] h-full relative">
          <Editor
            width="100%"
            height="100%"
            language={language}
            theme="vs-dark"
            onMount={handleEditorDidMount}
            key={activeFile}
            defaultValue={files[activeFile]?.code || ""}
            loading={<div className="text-[#1e1e1e]">Loading...</div>}
            onChange={(value) => {
              updateFile(activeFile, value || "")
              setIsDirty(true)
            }}
            options={{
              minimap: {
                enabled: false,
              },
              fontSize: 14,
              readOnly: user?.uid !== solution?.userID,
            }}
          />
        </div>
        {user?.uid === solution?.userID && (
          <EditorFooter
            isCompleted={solution.completed}
            playground={playground}
            isDirty={isDirty}
            setIsDirty={setIsDirty}
          />
        )}
      </SandpackStack>
    </div>
  )
}

export default CustomCodeEditor
