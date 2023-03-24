import React, { useEffect, useState } from "react"
import NavItem from "./NavItem"
import Icons from "../SvgIcons/Icons"

const NavItemButton = ({ item, router }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  const handleSubmenuClose = () => {
    if (
      router.asPath !== "/frontend-coding-challenges" &&
      router.asPath !== "/javascript-coding-challenges"
    ) {
      setIsSubmenuOpen(false)
    }
  }
  useEffect(handleSubmenuClose, [router.asPath])

  return (
    <li>
      <button
        className="flex items-center w-full p-3 text-base font-normal transition duration-75 rounded-lg group text-white hover:bg-indigo-600 group"
        onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
      >
        <span className="flex-shrink-0">{item?.icon}</span>
        <span className="ml-3">{item.title}</span>
        <Icons.ChevronDown
          className={`hidden group-hover:inline ml-auto flex-shrink-0 transform transition-transform duration-200 ease-in-out ${
            isSubmenuOpen ? "rotate-180" : "rotate-0"
          }`}
          strokeWidth={2.5}
          size={20}
        />
      </button>
      <ul
        className={`py-2 space-y-2 transition-opacity duration-1000 ease-in-out ${
          item.submenu && isSubmenuOpen ? "opacity-100 block" : "opacity-0 hidden"
        }`}
      >
        {item.submenuItems.map((item, index) => (
          <NavItem key={index} item={item} submenu={true} router={router} />
        ))}
      </ul>
    </li>
  )
}

export default NavItemButton
