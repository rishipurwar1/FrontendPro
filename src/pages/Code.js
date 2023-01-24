import React from "react"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"

import ChallengeDescription from "../components/CodeEditor/ChallengeDescription"
import CustomSandpack from "../components/CodeEditor/CustomSandpack"
import Navbar from "../components/layouts/Navbar"

const Code = () => {
  return (
    <div className="relative grid grid-rows-[80px_minmax(0,_1fr)] grid-cols-1 h-screen md:gap-y-6 xxl:max-w-screen-xxl mx-auto">
      <Navbar classNames="md:col-start-1" />
      <PanelGroup
        className="flex h-full justify-between row-start-2 row-end-3"
        direction="horizontal"
      >
        <Panel className="text-white w-80 bg-slate-600" defaultSize={25}>
          <ChallengeDescription />
        </Panel>
        <PanelResizeHandle className="w-[0.25rem] bg-gray-800 transition-colors hover:bg-gray-600" />
        <Panel className="row-start-2 row-end-3 flex-1">
          <CustomSandpack />
        </Panel>
      </PanelGroup>
      {/* <Footer /> */}
    </div>
  )
}

export default Code
