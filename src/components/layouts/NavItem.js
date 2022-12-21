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
      className={`block p-3 mb-3 rounded-lg transition-all duration-200 hover:bg-indigo-600 focus:ring-indigo-800 text-base xs:text-left md:text-center xl:text-left relative ${
        item === "github" && "xl:hidden"
      }`}
      to={toPath}
      aria-label={item}
      title={`This is a link to ${item}`}
      onClick={() => setIsOpen(false)}
      {...additionalAttributes}
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
