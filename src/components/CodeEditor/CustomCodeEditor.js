import { emmetCSS, emmetHTML } from "emmet-monaco-es"

import {
  FileTabs,
  SandpackStack,
  useActiveCode,
  useSandpack,
} from "@codesandbox/sandpack-react"
import Editor from "@monaco-editor/react"

import { getLanguageOfFile } from "../../utils/shared"

// Using Set because Set "has" has a O(1) complexity for lookups, and Array.prototype.includes() has a O(n) complexity

const CustomCodeEditor = ({ challenge }) => {
  const { code, updateCode } = useActiveCode()
  const { sandpack } = useSandpack()
  console.log(sandpack)

  const language = getLanguageOfFile(sandpack.activeFile)
  const handleEditorDidMount = () => {
    emmetHTML(window.monaco)
    emmetCSS(window.monaco)
  }

  return (
    <SandpackStack
      style={{
        height: "calc(100% - 64px)",
      }}
    >
      <FileTabs />
      <Editor
        width="100%"
        height="100%"
        language={language}
        theme="vs-dark"
        onMount={handleEditorDidMount}
        key={sandpack.activeFile}
        defaultValue={code}
        onChange={(value) => updateCode(value || "")}
        options={{
          minimap: {
            enabled: false,
          },
          fontSize: 14,
        }}
      />
    </SandpackStack>
  )
}

export default CustomCodeEditor
