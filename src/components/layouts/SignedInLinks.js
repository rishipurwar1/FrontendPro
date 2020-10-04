import React from 'react';
import { Link } from 'react-router-dom'

const SignedInLinks = ({classes}) => {
    return (
        <div className={classes}>
            <Link to="#" className="bg-gray-900 text-xl hover:bg-gray-800 text-white font-bold py-2 px-4 border-b-4 border-gray-800 hover:border-gray-900 rounded"><i className="fab fa-github mr-2"></i>Sign In with Github</Link>
        </div>
    )
}

export default SignedInLinks
