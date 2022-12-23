import React from "react"
import { NavLink } from "react-router-dom"

const NavItem = ({ item, icon, setIsOpen }) => {
  const toPath =
    item === "github"
      ? { pathname: "https://github.com/rishipurwar1/coding-space" }
      : `/${item}`
  const additionalAttributes =
    item === "github" ? { target: "_blank", rel: "noopener noreferrer" } : {}
  return (
    <NavLink
      className={`flex items-center p-3 mb-3 rounded-lg transition-all duration-200 hover:bg-indigo-600 focus:ring-indigo-800 text-base xs:text-left md:text-center xl:text-left relative group ${
        item === "github" && "xl:hidden"
      }`}
      to={toPath}
      aria-label={item}
      title={`This is a link to ${item}`}
      onClick={() => setIsOpen(false)}
      {...additionalAttributes}
    >
      {icon}
      <span className="xs:inline-block md:hidden xl:inline-block">
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </span>
    </NavLink>
  )
}

export default NavItem
