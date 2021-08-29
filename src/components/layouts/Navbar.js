import React from 'react'
import { useAuth } from '../../context/AuthContext'

// custom components
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks';


const Navbar = () => {
    const { currentUser, githubSignOut } = useAuth();
    // const [loading, setLoading] = useState(false);

    // const handleSubmit = async () => {

    //     try {
    //         setLoading(true)
    //         await githubSignIn();
    //         // history.push("/");
    //         setLoading(false);
    //     } catch {
    //         console.log('error in signing in');
    //     }
    // }
    const links = currentUser ? <SignedInLinks profile={currentUser.photoURL} githubSignOut={githubSignOut} /> : <SignedOutLinks bgColor="bg-gray-800" />;

    return (
        <nav className="ml-60 p-4">
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
