import React from 'react';
import { useState } from 'react';
import {useAuth} from '../../context/AuthContext'
import {useHistory} from 'react-router-dom'

const SignedOutLinks = ({classes="mr-3 mt-4 absolute top-0 right-0"}) => {
    const {githubSignIn} = useAuth();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async () => {

        try {
            setLoading(true)
            await githubSignIn();
            history.push("/roadmaps");
        } catch {
            console.log('signed in');
        }
        setLoading(false)
    }

    return (
        <div className={classes}>
            <button disabled={loading} onClick={handleSubmit} className="bg-gray-900 text-xl hover:bg-gray-800 text-white font-bold py-2 px-4 border-b-4 border-gray-800 hover:border-gray-900 rounded">
                <i className="fab fa-github mr-2"></i>Sign In with Github
            </button>
        </div>
    )
}

export default SignedOutLinks
