import React from 'react'

// custom auth context
import { useAuth } from '../../context/AuthContext'

// custom components
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks';


const Navbar = () => {
    const { currentUser, githubSignOut } = useAuth();
    // const [loading, setLoading] = useState(false);
    const links = currentUser ? <SignedInLinks profile={currentUser.photoURL} githubSignOut={githubSignOut} /> : <SignedOutLinks bgColor="bg-gray-800" />;

    return (
        <nav className="p-5 py-8 col-start-2 col-end-3 row-start-1 row-end-2">
            <button className="p-1 -ml-1 mr-5 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple" aria-label="Menu"><i className="fas fa-bars"></i></button>
            <ul className="flex justify-end">
                <li>
                    {links}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
