import React from "react"
import { Link } from "react-router-dom"

import { useAuthContext } from "../../hooks/useAuthContext"
import AvatarDropdown from "../reusable/AvatarDropdown"
import EmojiIcons from "../SvgIcons/EmojiIcons"
import Icons from "../SvgIcons/Icons"

const CodeEditorHeader = ({ descriptionRef, previewRef, consoleRef }) => {
  const { user } = useAuthContext()

  const collapsePanel = (reference) => {
    const panel = reference.current

    if (reference === consoleRef) {
      const previewPanel = previewRef.current
      const collapsed = previewPanel.getCollapsed(previewPanel)

      if (collapsed) {
        previewPanel.expand()
        panel.expand()
        return
      }
    }

    if (panel) {
      const collapsed = panel.getCollapsed(panel)
      collapsed ? panel.expand() : panel.collapse()
    }
  }
  return (
    <nav className="row-start-1 row-end-2 px-2 py-3 bg-gray-900">
      <ul className="flex justify-between items-center">
        <Link
          to="/"
          className="text-white flex items-center space-x-1 uppercase text-center font-bold text-lg"
          aria-label="codingspace logo"
          title="This is a link to codingspace homepage"
        >
          <EmojiIcons.Rocket size={24} />
          <span className="xs:inline-block md:hidden xl:inline-block">CodingSpace</span>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <button
              className="text-gray-500 hover:text-white transition-colors"
              onClick={() => collapsePanel(descriptionRef)}
            >
              <Icons.LayoutSidebar />
            </button>
            <button
              className="text-gray-500 hover:text-white transition-colors rotate-180"
              onClick={() => collapsePanel(previewRef)}
            >
              <Icons.LayoutSidebar />
            </button>
            <button
              className="text-gray-500 hover:text-white transition-colors -rotate-90"
              onClick={() => collapsePanel(consoleRef)}
            >
              <Icons.LayoutSidebar />
            </button>
          </div>
          <AvatarDropdown profile={user} className="w-6 h-6" />
        </div>
      </ul>
    </nav>
  )
}

export default CodeEditorHeader
