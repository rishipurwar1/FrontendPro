import React, { useRef } from "react"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { useParams } from "react-router-dom"

import ChallengeDescription from "../components/CodeEditor/ChallengeDescription"
import CodeEditorHeader from "../components/CodeEditor/CodeEditorHeader"
import CustomSandpack from "../components/CodeEditor/CustomSandpack"
import { useDocument } from "../hooks/useDocument"

const Code = () => {
  const { id } = useParams()
  const { document: challenge } = useDocument("solutions", id)
  const descriptionRef = useRef(null)
  const previewRef = useRef(null)
  const consoleRef = useRef(null)

  if (!challenge) return null
  return (
    <div className="relative grid grid-rows-[50px_minmax(0,_1fr)] grid-cols-1 h-screen xxl:max-w-screen-xxl mx-auto">
      <CodeEditorHeader
        descriptionRef={descriptionRef}
        previewRef={previewRef}
        consoleRef={consoleRef}
      />
      <PanelGroup
        className="flex h-full justify-between row-start-2 row-end-3"
        direction="horizontal"
      >
        <Panel
          collapsible
          defaultSize={25}
          className="w-80 border-t border-gray-600"
          ref={descriptionRef}
        >
          <ChallengeDescription challenge={challenge} />
        </Panel>
        <PanelResizeHandle className="w-[0.25rem] border-t border-gray-600 bg-gray-800 transition-colors hover:bg-gray-600" />
        <Panel className="row-start-2 row-end-3 flex-1">
          <CustomSandpack
            previewRef={previewRef}
            consoleRef={consoleRef}
            challenge={challenge}
          />
        </Panel>
      </PanelGroup>
      {/* <Footer /> */}
    </div>
  )
}

export default Code
