import Icons from "../SvgIcons/Icons"
import NavItem from "./NavItem"
import NavItemButton from "./NavItemButton"
import { useRouter } from "next/router"
import BrandIcons from "../SvgIcons/BrandIcons"
import ButtonExternalLink from "../reusable/ButtonExternalLink"
import { useSidebarContext } from "../../hooks/useSidebarContext"

const NAV_ITEMS = [
  {
    href: "/challenges",
    title: "Challenges",
    submenu: true,
    submenuItems: [
      {
        href: "/frontend-coding-challenges",
        title: "Frontend Coding Challenges",
      },
      {
        href: "/javascript-coding-challenges",
        title: "JavaScript Coding Challenges",
      },
    ],
    icon: (
      <Icons.Code className="w-6 h-6 transition duration-75 text-gray-300 group-hover:text-white" />
    ),
  },
  {
    href: "/solutions",
    title: "Solutions",
    icon: (
      <Icons.MessageCode className="w-6 h-6 transition duration-75 text-gray-300 group-hover:text-white" />
    ),
  },
  {
    href: "/resources",
    title: "Resources",
    icon: (
      <Icons.BrowserCheck className="w-6 h-6 transition duration-75 text-gray-300 group-hover:text-white" />
    ),
  },
  {
    href: "/roadmaps",
    title: "Roadmaps",
    icon: (
      <Icons.RoadMap className="w-6 h-6 transition duration-75 text-gray-300 group-hover:text-white" />
    ),
  },
]

const Sidebar = () => {
  const router = useRouter()
  const { sidebarOpen } = useSidebarContext()

  return (
    <aside
      id="sidebar"
      className={`block xl:col-span-2 fixed xl:sticky left-0 xl:left-auto top-16 xl:top-3 w-full xl:w-auto z-40 h-[calc(100vh_-_64px)] xl:h-[calc(100vh_-_24px)] transition-transform border-t xl:border border-gray-700 xl:translate-x-0 bg-gray-900 rounded-none xl:rounded-lg overflow-hidden ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-label="Sidebar"
    >
      <div className="flex flex-col justify-between h-full px-3 py-8 overflow-y-auto bg-gray-900">
        <ul className="space-y-4">
          {NAV_ITEMS.map((item, index) => {
            return item?.submenu ? (
              <NavItemButton key={index} item={item} router={router} />
            ) : (
              <NavItem key={index} item={item} router={router} />
            )
          })}
        </ul>
        <ul className="self-center flex flex-col items-center space-y-4 w-full xl:w-auto">
          <li className="w-full xl:w-auto">
            <ButtonExternalLink
              href="https://discord.com/invite/FYSQUEw6xP"
              size="normal"
              variant="primary"
              className="font-medium group w-full"
            >
              <BrandIcons.Discord
                size={18}
                className="mr-2 -ml-1 group-hover:animate-rotate"
              />
              <span>Join Discord</span>
            </ButtonExternalLink>
          </li>
          <li className="block md:hidden w-full">
            <ButtonExternalLink
              href="https://github.com/rishipurwar1/coding-space"
              size="normal"
              variant="primary"
              className="font-medium group w-full"
            >
              <Icons.Star size={18} className="mr-2 -ml-1 group-hover:animate-rotate" />
              <span>Star Us On GitHub</span>
            </ButtonExternalLink>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
