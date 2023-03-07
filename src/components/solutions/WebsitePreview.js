import { useRouter } from "next/router"

import {
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react"

import { FILES } from "../../constants"
import { useDocument } from "../../hooks/useDocument"
import Spinner from "../reusable/Spinner"

const WebsitePreview = () => {
  const router = useRouter()
  const { solutionId } = router.query
  const { document: files, isLoading } = useDocument(
    `solutions/${solutionId}/playgrounds`,
    "vanilla"
  )

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Spinner />
      </div>
    )
  }

  return (
    <SandpackProvider
      template="vanilla"
      files={files?.files || FILES.vanilla}
      options={{
        activeFile: "index.html",
      }}
      theme={{
        colors: {
          surface1: "#1F2937",
          surface2: "#4B5563",
          surface3: "#3b3b4f",
          accent: "#A855F7",
        },
        font: {
          size: "14px",
        },
      }}
    >
      <SandpackLayout
        style={{
          border: "none",
          borderRadius: "0",
        }}
      >
        <SandpackPreview
          style={{
            height: "100vh",
            overflowY: "scroll",
          }}
          showOpenInCodeSandbox={false}
          showRefreshButton={false}
        />
      </SandpackLayout>
    </SandpackProvider>
  )
}

export default WebsitePreview
