import Link from "next/link"
import React from "react"
import EmojiIcons from "../SvgIcons/EmojiIcons"
import Icons from "../SvgIcons/Icons"
import AvatarDropdown from "../reusable/AvatarDropdown"
import SignedOutLinks from "./SignedOutLinks"
import { useAuthContext } from "../../hooks/useAuthContext"
import ButtonExternalLink from "../reusable/ButtonExternalLink"
import { useSidebarContext } from "../../hooks/useSidebarContext"

const Navbar = () => {
  const { user } = useAuthContext()
  const { sidebarOpen, setSidebarOpen } = useSidebarContext()
  return (
    <nav className="z-50 w-full border-b bg-gray-900 border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm rounded-lg xl:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <Icons.Menu className="w-6 h-6" />
            </button>
            <Link
              href="/"
              className="flex ml-2 md:mr-24"
              aria-label="FrontendPro logo"
              title="frontendpro homepage"
            >
              <EmojiIcons.Rocket size={32} />
              <span className="hidden sm:inline self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white ml-3">
                FrontendPro
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <ButtonExternalLink
              href="https://github.com/rishipurwar1/coding-space"
              size="normal"
              variant="primary"
              className="font-medium hidden md:flex"
            >
              <Icons.Star size={18} className="mr-2 -ml-1 group-hover:fill-current" />
              Star us on GitHub
            </ButtonExternalLink>
            {user ? (
              <AvatarDropdown />
            ) : (
              <SignedOutLinks variant="primary" size="medium" />
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
