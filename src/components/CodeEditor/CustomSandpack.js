import { useState } from "react"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"

import {
  SandpackConsole,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react"

import { FILES } from "../../constants"

import CustomCodeEditor from "./CustomCodeEditor"
import EditorFooter from "./EditorFooter"

const CustomSandpack = ({ previewRef, consoleRef, challenge }) => {
  return (
    <SandpackProvider
      template="vanilla"
      theme={{
        colors: {
          surface1: "#1F2937",
          surface2: "#4B5563",
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
      options={{
        visibleFiles: ["index.html", "src/styles.css", "src/index.js"],
        activeFile: "index.html",
      }}
      files={challenge?.files || FILES.vanilla}
    >
      <SandpackLayout style={{ borderRadius: 0 }}>
        <div className="h-[calc(100vh-50px)] flex w-full gap-[1px]">
          <PanelGroup direction="horizontal">
            <Panel className="h-full w-full">
              <CustomCodeEditor challenge={challenge} />
              <EditorFooter challenge={challenge} />
            </Panel>
            <PanelResizeHandle className="w-1 bg-gray-800 transition-colors hover:bg-gray-600" />
            <Panel
              className="border-l border-gray-600"
              collapsible={true}
              ref={previewRef}
            >
              <PanelGroup direction="vertical">
                <Panel defaultSize={70} className="border-b border-gray-600">
                  <SandpackPreview
                    showNavigator
                    style={{
                      height: "100%",
                    }}
                  />
                </Panel>
                <PanelResizeHandle className="h-[0.25rem] bg-gray-800 transition-colors hover:bg-gray-600" />
                <Panel defaultSize={30} collapsible={true} ref={consoleRef}>
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
