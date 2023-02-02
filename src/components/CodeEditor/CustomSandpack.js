import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { useParams } from "react-router-dom"

import {
  SandpackConsole,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react"

import rocketLoader from "../../assets/animated_illustrations/rocketLoader.json"
import { FILES } from "../../constants"
import { useDocument } from "../../hooks/useDocument"
import LottieAnimation from "../reusable/LottieAnimation"

import CustomCodeEditor from "./CustomCodeEditor"

const CustomSandpack = ({ previewRef, consoleRef, solution }) => {
  const { id } = useParams()
  const { document: playground, isLoading } = useDocument(
    `solutions/${id}/playgrounds`,
    "vanilla"
  ) // TODO: make this dynamic

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <LottieAnimation animationDataFile={rocketLoader} />
      </div>
    )

  return (
    <SandpackProvider
      template="vanilla"
      theme={{
        colors: {
          surface1: "#1F2937",
          surface2: "#4B5563",
          surface3: "#3b3b4f",
          accent: "#A855F7",
          base: "#ffffff",
          disabled: "#858591",
          error: "#ffffff",
          errorSurface: "#3b3b4f",
        },
        font: {
          size: "14px",
        },
      }}
      options={{
        visibleFiles: ["index.html", "src/styles.css", "src/index.js"],
      }}
      files={playground?.files || FILES.vanilla}
    >
      <SandpackLayout style={{ borderRadius: 0 }}>
        <div className="h-[calc(100vh-50px)] flex w-full gap-[1px]">
          <PanelGroup direction="horizontal">
            <Panel className="h-full w-full">
              <CustomCodeEditor playground={playground} solution={solution} />
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
                    showOpenInCodeSandbox={false}
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
