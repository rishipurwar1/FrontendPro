// library components
import React from 'react'
import { Link } from 'react-router-dom'
import NavItem from './NavItem'


const Sidebar = () => {
    return (
        <div className="container">
            <nav className="flex relative">
                <div className="w-56 border-r border-gray-800 fixed h-full z-10">
                    <Link to="/" className="text-white font-heading uppercase text-center block m-4 mb-8 font-semibold text-xl"><i className="fas fa-rocket mr-1"></i>CodingSpace</Link>
                    <ul>
                        <NavItem item="dashboard" icon="fas fa-laptop-house"/>
                        <NavItem item="challenges" icon="fas fa-code mr-3"/>
                        <NavItem item="solutions" icon="fas fa-laptop-code"/>
                        <NavItem item="resources" icon="fas fa-chalkboard-teacher "/>
                        <NavItem item="roadmaps" icon="fas fa-map-signs"/>
                    </ul> 
                </div>
            </nav>
        </div>
    )
}

export default Sidebar
