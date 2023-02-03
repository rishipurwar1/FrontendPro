import { useState } from "react"
import { useLocation } from "react-router-dom"

import { useAuthContext } from "../../hooks/useAuthContext"
import AvatarDropdown from "../reusable/AvatarDropdown"
import ButtonExternalLink from "../reusable/ButtonExternalLink"
import Icons from "../SvgIcons/Icons"

import SignedOutLinks from "./SignedOutLinks"

const Navbar = ({ classNames }) => {
  const [banner, setBanner] = useState(true)
  const { pathname } = useLocation()
  const { user } = useAuthContext()
  const links = user ? <AvatarDropdown /> : <SignedOutLinks variant="primary" />

  return (
    <div>
      {pathname === "/" && banner && (
        <div className="hidden md:block relative bg-indigo-600 px-4 py-3 text-white">
          <p className="text-center text-sm font-medium">
            🎉Exciting News: CodingSpace is now{" "}
            <a
              href="https://www.frontendpro.dev"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-wavy underline-offset-2 transition-colors hover:decoration-slate-200 hover:text-slate-200"
            >
              FrontendPro
            </a>
            .
          </p>
          <button
            aria-label="Close"
            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
            onClick={() => setBanner(false)}
          >
            <Icons.Cross size={20} />
          </button>
        </div>
      )}
      <nav
        className={`p-5 hidden md:block md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 ${classNames}`}
      >
        <ul className="flex justify-end space-x-4 items-center">
          <li className="xs:invisible xl:visible group">
            <ButtonExternalLink
              href="https://github.com/rishipurwar1/coding-space"
              size="large"
              variant="primary"
              className="font-medium"
            >
              <Icons.Star size={18} className="mr-2 -ml-1 group-hover:fill-current" />
              Star us on GitHub
            </ButtonExternalLink>
          </li>
          <li>{links}</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
