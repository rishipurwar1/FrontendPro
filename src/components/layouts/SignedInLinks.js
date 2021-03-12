import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'

const SignedInLinks = ({ profile, githubSignOut }) => {
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();

    const logout = () => {
        try {
            setLoading(true)
            githubSignOut();
            history.push("/solutions");
        } catch (error) {
            console.log(error.message);
        }
        setLoading(false)
    }
    return (
        <>
            <li>
                <Link className="float-left pr-1" to="/create">Submit Solution</Link>
            </li>
            <li className="relative">
                <button onClick={() => setIsOpen(!isOpen)} className="block h-10 w-10 rounded-full overflow-hidden border-2 border-purple-500 focus:outline-none">
                    <img className=" h-full w-full object-cover cursor-pointer" src={profile} alt="Avatar" />
                </button>
                {isOpen &&
                    (<ul className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700" aria-label="sub-menu">
                        <li>
                            <Link to="/mysolutions" className="block px-4 py-1 text-black"><i className="fas fa-user mr-1"></i>My Solutions
                            </Link>
                        </li>
                        <li>
                            <button disabled={loading} onClick={logout} className="block px-4 py-1 text-black"><i className="fas fa-sign-out-alt mr-1"></i>Logout
                            </button>
                        </li>
                    </ul>)
                }
            </li>
        </>
    )
}

export default SignedInLinks
