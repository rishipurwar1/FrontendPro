import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react"

import { FILES } from "../../constants"
import ButtonLink from "../reusable/ButtonLink"
import Icons from "../SvgIcons/Icons"

const Hero = () => {
  return (
    <header>
      <div className="text-white mx-auto max-w-screen-xl py-32 sm:pb-32 sm:pt-24">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="block bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center animate-text">
            Become a Pro in Frontend Dev <br className="hidden sm:block" /> with
            FrontendPro.dev
          </h1>
          <h2 className="mx-auto mt-4 max-w-3xl sm:text-xl sm:leading-relaxed">
            Code your way to your dream job with our Frontend Coding Challenges and build
            real-world Frontend Projects to take your skills to the next level.
          </h2>
          <div className="mt-8 flex justify-center space-x-4">
            <ButtonLink
              variant="primary"
              size="large"
              className="font-medium flex items-center px-6 py-4 text-lg"
              to="/frontend-coding-challenges"
            >
              <span>Start Building Now</span>
              <Icons.Rocket size={20} className="ml-2 -mr-1 animate-move" />
            </ButtonLink>
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-6xl z-10">
        <div className="absolute inset-0 -top-3 bg-gradient-to-bl from-green-300 via-blue-500 to-purple-600 rounded-xl transform -rotate-1 origin-bottom-left -z-10"></div>
        <div className="bg-gray-900 flex items-center justify-between rounded-t-lg py-2 px-4 shrink-0">
          <div className="w-15 hidden sm:block">
            <span className="w-3 h-3 rounded-full inline-block bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block mx-2"></span>
            <span className="w-3 h-3 rounded-full inline-block bg-green-500"></span>
          </div>
          <div className="flex-grow flex items-center justify-center sm:ml-6 sm:mr-24 py-2 px-4 bg-gray-600 rounded-full leading-5 text-sm text-gray-200 text-center truncate">
            <div className="truncate">
              <span>Playground Demo</span> — FrontendPro.dev
            </div>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-600 rounded-b-lg overflow-hidden">
          <SandpackProvider
            template="vanilla"
            files={FILES.demo}
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
              <SandpackCodeEditor
                style={{
                  height: "500px",
                  overflowY: "scroll",
                }}
                wrapContent={true}
              />
              <SandpackPreview
                style={{
                  height: "500px",
                  overflowY: "scroll",
                }}
                showOpenInCodeSandbox={false}
                showRefreshButton={false}
              />
            </SandpackLayout>
          </SandpackProvider>
        </div>
      </div>
    </header>
  )
}

export default Hero
