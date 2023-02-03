import React, { useRef } from "react"
import { Helmet } from "react-helmet"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { useParams } from "react-router-dom"

import rocketLoader from "../assets/animated_illustrations/rocketLoader.json"
import ChallengeDescription from "../components/CodeEditor/ChallengeDescription"
import CodeEditorHeader from "../components/CodeEditor/CodeEditorHeader"
import CustomSandpack from "../components/CodeEditor/CustomSandpack"
import LottieAnimation from "../components/reusable/LottieAnimation"
import { useDocument } from "../hooks/useDocument"

const Playground = () => {
  const { id } = useParams()
  const { document: solution } = useDocument("solutions", id)

  const descriptionRef = useRef(null)
  const previewRef = useRef(null)
  const consoleRef = useRef(null)

  if (!solution)
    return (
      <div className="flex justify-center items-center h-screen">
        <LottieAnimation animationDataFile={rocketLoader} />
      </div>
    )

  return (
    <>
      <Helmet>
        <title>FrontendPro Playground - {solution.title}</title>
        <meta content={solution.description} name="description" />
        <meta content={solution.title} property="og:title" />
        <meta content={solution.description} property="og:description" />
        {/* TODO: Add dynamic OG image */}
        <meta
          content="https://i.imgur.com/KAe5lAf.png"
          data-react-helmet="true"
          property="og:image"
        />
        <meta
          content={solution.description}
          data-react-helmet="true"
          property="og:image:alt"
        />
        <meta content={solution.title} data-react-helmet="true" name="twitter:title" />
        <meta
          content={solution.description}
          data-react-helmet="true"
          name="twitter:description"
        />
        {/* TODO: Add dynamic OG image */}
        <meta
          content="https://i.imgur.com/KAe5lAf.png"
          data-react-helmet="true"
          name="twitter:image"
        />
      </Helmet>
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
            <ChallengeDescription solution={solution} />
          </Panel>
          <PanelResizeHandle className="w-[0.25rem] border-t border-gray-600 bg-gray-800 transition-colors hover:bg-gray-600" />
          <Panel className="row-start-2 row-end-3 flex-1">
            <CustomSandpack
              previewRef={previewRef}
              consoleRef={consoleRef}
              solution={solution}
            />
          </Panel>
        </PanelGroup>
      </div>
    </>
  )
}

export default Playground
