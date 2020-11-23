import React from 'react'
import { useAuth } from '../../context/AuthContext'

// custom components
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    const { currentUser, githubSignOut } = useAuth();
    const links = currentUser ? <SignedInLinks profile={currentUser.photoURL} githubSignOut={githubSignOut}  /> : <SignedOutLinks />;
    return (
        <nav className="ml-60 p-4">
                <button className="p-1 -ml-1 mr-5 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple" aria-label="Menu"><i class="fas fa-bars"></i></button>
                <ul className="flex justify-end">
                    {links}
                    {/* <li className="text-blue-800">Home</li>
                    <li>Contact</li> */}
                </ul>
        </nav>
    )
}

export default Navbar
