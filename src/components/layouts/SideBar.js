// library components
import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Sidebar = () => {
    return (
        <div className="container">
            <nav className="flex relative">
                <div className="w-64 bg-white fixed h-full">
                    <Link to="/" className="text-navItem uppercase text-center block m-4 mb-8 font-medium text-2xl"><i className="fas fa-rocket mr-1"></i>CodingSpace</Link>
                    <ul>
                        <li className="text-left cursor-pointer">
                            <NavLink className="block m-3 p-3 px-8 rounded-md hover:bg-blue-100 text-navItem hover:text-blue-900 text-xl" to="/challenges">
                                <i className="fas fa-code mr-3"></i>
                                Challenges
                            </NavLink>
                        </li>
                        <li className="text-left cursor-pointer">
                            <NavLink className="block m-3 p-3 px-8 rounded-md hover:bg-blue-100 text-navItem hover:text-blue-900 text-xl" to="/resources">
                                <i className="fas fa-chalkboard-teacher mr-3"></i>
                                Resources
                            </NavLink>
                        </li>
                        <li className="text-left cursor-pointer">
                            <NavLink className="block m-3 p-3 px-8 rounded-md hover:bg-blue-100 text-navItem hover:text-blue-900 text-xl" to="/solutions">
                                <i className="fas fa-laptop-code mr-3"></i>
                                Solutions
                            </NavLink>
                        </li>
                        <li className="text-left cursor-pointer">
                            <NavLink className="block m-3 p-3 px-8 rounded-md hover:bg-blue-100 text-navItem hover:text-blue-900 text-xl" to="/roadmaps">
                                <i className="fas fa-map-signs mr-3"></i>
                                Roadmaps
                            </NavLink>
                        </li>
                    </ul> 
                </div>
            </nav>
        </div>
    )
}

export default Sidebar
