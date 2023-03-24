import Link from "next/link"
import React from "react"
import { useSidebarContext } from "../../hooks/useSidebarContext"

const NavItem = ({ item, submenu, router }) => {
  const isActive = router.asPath === item.href
  const { setSidebarOpen } = useSidebarContext()

  return (
    <li>
      <Link
        href={item.href}
        className={`flex items-center px-3 py-[10px] text-base rounded-lg text-white hover:bg-indigo-600  transition duration-75 font-normal group ${
          submenu && "pl-11"
        } ${isActive && "bg-indigo-600"}`}
        onClick={() => setSidebarOpen(false)}
      >
        {item?.icon && <span className="flex-shrink-0">{item?.icon}</span>}
        <span className={`${!submenu && "ml-3"}`}>{item.title}</span>
      </Link>
    </li>
  )
}

export default NavItem
