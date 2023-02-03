import { useSandpack } from "@codesandbox/sandpack-react"

const getFileName = (filePath) => {
  const lastIndexOfSlash = filePath.lastIndexOf("/")
  return filePath.slice(lastIndexOfSlash + 1)
}

const CustomTabs = ({ activeFile, setActiveFile }) => {
  const { sandpack } = useSandpack()
  const { visibleFiles } = sandpack

  return (
    <div className="flex space-x-3 p-2 border-b border-gray-600 overflow-y-auto">
      {visibleFiles.map((name) => (
        <button
          key={name}
          className={` ${name === activeFile ? "text-purple-500" : "text-white"}`}
          onClick={() => setActiveFile(name)}
          data-active={name === activeFile}
          aria-selected={name === activeFile}
        >
          {getFileName(name)}
        </button>
      ))}
    </div>
  )
}

export default CustomTabs
