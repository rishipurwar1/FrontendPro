import React from 'react'
import { useAuth } from '../../context/AuthContext'

// custom components
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    const { currentUser, githubSignOut } = useAuth();
    const links = currentUser ? <SignedInLinks profile={currentUser.photoURL} githubSignOut={githubSignOut}  /> : <SignedOutLinks />;
    return (
        <header className="ml-64 z-10 py-3 bg-white dark:bg-gray-800">
            <div className="container flex items-center sm:justify-between lg:justify-end h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                <button className="p-1 -ml-1 mr-5 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple" aria-label="Menu"><i class="fas fa-bars"></i></button>
                <ul className="flex items-center flex-shrink-0 space-x-6">
                    {links}
                    {/* <li className="text-blue-800">Home</li>
                    <li>Contact</li> */}
                </ul>
            </div>
            {/* {links} */}
        </header>
    )
}

export default Navbar
