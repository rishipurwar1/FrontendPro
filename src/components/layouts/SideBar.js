// library components
import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"

import { useAuthContext } from "../../hooks/useAuthContext"
import useOnClickOutside from "../../hooks/useOnClickOutside"
import ButtonExternalLink from "../reusable/ButtonExternalLink"
import EmojiIcons from "../SvgIcons/EmojiIcons"

import NavItem from "./NavItem"
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useAuthContext()

  const ref = useRef()
  useOnClickOutside(ref, () => setIsOpen(false))

  const links = user ? <SignedInLinks profile={user} /> : <SignedOutLinks />
  return (
    <div className="col-start-1 col-end-3 md:col-end-2 row-start-1 row-end-2">
      <div className="relative md:flex">
        {/* <!-- mobile menu bar --> */}
        <div className="bg-gray-800 text-gray-100 flex justify-between items-center md:hidden">
          {/* <!-- mobile menu button --> */}
          <button
            className="p-4 focus:outline-none focus:bg-gray-700"
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            <i className="fas fa-bars fa-2x"></i>
          </button>
          <div className="p-4">{links}</div>
        </div>

        {/* <!-- sidebar --> */}
        <div
          ref={ref}
          className={`${
            isOpen ? null : "-translate-x-full"
          } bg-gray-900 text-white xs:w-full md:w-20 xl:w-56 space-y-6 xs:py-4 md:py-8 px-2 absolute inset-y-0 left-0 xxl:left-auto transform md:fixed md:translate-x-0 transition duration-200 ease-in-out border-r border-gray-800 z-50 min-h-screen`}
        >
          {/* <!-- logo --> */}
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="text-white flex items-center space-x-1 uppercase text-center px-3 font-bold text-xl"
              aria-label="codingspace logo"
              title="This is a link to codingspace homepage"
            >
              <EmojiIcons.Rocket size={32} />
              <span className="xs:inline-block md:hidden xl:inline-block">
                CodingSpace
              </span>
            </Link>
            <button
              className="md:hidden p-4 focus:outline-none focus:bg-gray-700"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              <i className="fas fa-times fa-2x"></i>
            </button>
          </div>

          {/* <!-- nav --> */}
          <aside className="xs:pt-4 md:pt-8 bg-gray-900">
            <NavItem item="challenges" icon="fas fa-code" setIsOpen={setIsOpen} />
            <NavItem item="solutions" icon="fas fa-laptop-code" setIsOpen={setIsOpen} />
            <NavItem
              item="resources"
              icon="fas fa-chalkboard-teacher "
              setIsOpen={setIsOpen}
            />
            <NavItem item="roadmaps" icon="fas fa-map-signs" setIsOpen={setIsOpen} />
            <NavItem item="github" icon="fab fa-github" setIsOpen={setIsOpen} />
          </aside>

          {/* <!-- discord button --> */}
          <div className="absolute bottom-10 w-full flex justify-center pr-4">
            <ButtonExternalLink
              href="https://discord.com/invite/FYSQUEw6xP"
              size="large"
              variant="primary"
            >
              <i className="fab fa-discord text-2xl mr-1 xs:mr-3 md:mr-0 xl:mr-3 xl:text-base text-center"></i>
              <span className="xs:inline-block md:hidden xl:inline-block">
                Join Discord
              </span>
            </ButtonExternalLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
