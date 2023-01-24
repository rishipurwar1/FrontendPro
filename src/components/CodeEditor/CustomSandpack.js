import React from "react"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"

import {
  SandpackCodeEditor,
  SandpackConsole,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react"

const CustomSandpack = () => {
  return (
    <SandpackProvider
      template="vanilla"
      theme={{
        colors: {
          surface1: "#000000",
          surface2: "#0a0a23",
          surface3: "#3b3b4f",
          clickable: "#dfdfe2",
          base: "#ffffff",
          disabled: "#858591",
          hover: "#ffffff",
          accent: "#a26cd6",
          error: "#ffffff",
          errorSurface: "#3b3b4f",
        },
        syntax: {
          plain: "#ffffff",
          comment: {
            color: "#858591",
            fontStyle: "italic",
          },
          keyword: "#a26cdd",
          tag: "#f07178",
          punctuation: "#99c9ff",
          definition: "#ffffff",
          property: "#99c9ff",
          static: "#f78c6c",
          string: "#57d1b7",
        },
        font: {
          body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
          size: "14px",
          lineHeight: "18px",
        },
      }}
      files={{
        "/index.html": {
          code: '<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Parcel Sandbox</title>\n  <meta charset="UTF-8" />\n</head>\n\n<body>\n  <div id="app">Thanks for choosing CodingSpace</div>\n\n  <script src="src/index.js">\n  </script>\n</body>\n\n</html>',
          active: true,
        },
        "/src/styles.css": {
          code: "body {\n  font-family: sans-serif;\n}\n",
        },
        "/src/index.js": {
          code: 'import "./styles.css";',
        },
      }}
    >
      <SandpackLayout>
        <div className="h-[calc(100vh-104px)] flex w-full gap-[1px]">
          <PanelGroup direction="horizontal">
            <Panel className="h-full w-1/2">
              <SandpackCodeEditor
                showTabs
                showLineNumbers={false}
                showInlineErrors
                wrapContent
                style={{
                  height: "100%",
                }}
              />
            </Panel>
            <PanelResizeHandle className="w-[0.25rem] bg-gray-800 transition-colors hover:bg-gray-600" />
            <Panel>
              <PanelGroup direction="vertical">
                <Panel defaultSize={70}>
                  <SandpackPreview
                    showNavigator
                    style={{
                      height: "100%",
                    }}
                  />
                </Panel>
                <PanelResizeHandle className="h-[0.25rem] bg-gray-800 transition-colors hover:bg-gray-600" />
                <Panel defaultSize={30} collapsible={true}>
                  <SandpackConsole
                    style={{
                      height: "100%",
                    }}
                  />
                </Panel>
              </PanelGroup>
            </Panel>
          </PanelGroup>
        </div>
      </SandpackLayout>
    </SandpackProvider>
  )
}

export default CustomSandpack
