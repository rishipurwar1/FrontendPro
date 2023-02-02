import React from "react"
import { useLocation } from "react-router-dom"

import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react"

const WebsitePreview = ({ files }) => {
  const { pathname } = useLocation()

  return (
    <SandpackProvider
      template="vanilla"
      files={files}
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
        {pathname === "/" && (
          <SandpackCodeEditor
            style={{
              height: "500px",
              overflowY: "scroll",
            }}
            wrapContent={true}
          />
        )}
        <SandpackPreview
          style={{
            height: pathname === "/" ? "500px" : "100vh",
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
