import React from "react"
import { NavLink } from "react-router-dom"

const NavItem = ({ item, icon, setIsOpen }) => {
  return (
    <NavLink
      className="block p-3 mb-3 rounded transition-all  duration-200 bg-gradient-to-br hover:from-purple-500 hover:to-indigo-500 hover:text-white text-base xs:text-left md:text-center xl:text-left relative"
      to={`/${item}`}
      aria-label={item}
      title={`This is a link to ${item}`}
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    >
      <i
        className={`xs:mr-3 md:mr-0 xl:mr-3 ${icon} text-xl xl:text-base text-center`}
      ></i>
      <span className="xs:inline-block md:hidden xl:inline-block">
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </span>
    </NavLink>
  )
}

export default NavItem
