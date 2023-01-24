import React from "react"

import { useSandpack } from "@codesandbox/sandpack-react"

import CustomSandpack from "./CustomSandpack"

const CodeEditor = () => {
  const sandpack = useSandpack()
  console.log(sandpack)
  return <div>dfaksfj</div>
}

export default CodeEditor
