import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({item, icon}) => {
    return (
        <li className="text-left cursor-pointer">
            <NavLink className="block py-4 pl-6 pr-0 my-4 mr-7 bg-gradient-to-br hover:from-purple-500 hover:to-indigo-500 rounded-tr-full rounded-br-full text-gray-400 hover:text-white text-base border-l-4 border-purple-500" to={`/${item}`}>
            <i class={`mr-3 ${icon}`}></i>
                {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
        </li>
    )
}

export default NavItem
