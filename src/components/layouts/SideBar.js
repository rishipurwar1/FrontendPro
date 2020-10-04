// library components
import React from 'react'
import { NavLink } from 'react-router-dom'

// custom components



const Navbar = () => {

    return (
    <nav className="flex relative">
        <div className="w-64 bg-white fixed h-full">
            <h2 className="text-navItem uppercase text-center m-4 mb-8 font-medium text-2xl">CodingSpace</h2>
            <ul>
                <li className="text-left cursor-pointer">
                    <NavLink className="block m-3 p-3 px-8 rounded-md hover:bg-blue-100 text-navItem hover:text-blue-900 text-xl" to="/">
                        <i class="fas fa-code mr-3"></i>
                        Challenges
                    </NavLink>
                </li>
                <li className="text-left cursor-pointer">
                    <NavLink className="block m-3 p-3 px-8 rounded-md hover:bg-blue-100 text-navItem hover:text-blue-900 text-xl" to="/">
                        <i class="fas fa-chalkboard-teacher mr-3"></i>
                        Resources
                    </NavLink>
                </li>
                <li className="text-left cursor-pointer">
                    <NavLink className="block m-3 p-3 px-8 rounded-md hover:bg-blue-100 text-navItem hover:text-blue-900 text-xl" to="/">
                        <i class="fas fa-laptop-code mr-3"></i>
                        Solutions
                    </NavLink>
                </li>
                <li className="text-left cursor-pointer">
                    <NavLink className="block m-3 p-3 px-8 rounded-md hover:bg-blue-100 text-navItem hover:text-blue-900 text-xl" to="/">
                        <i class="fas fa-map-signs mr-3"></i>
                        Roadmaps
                    </NavLink>
                </li>
            </ul> 
        </div>
    </nav>
    )
}

export default Navbar
