import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../smallComponents/Button';

const SignedOutLinks = ({ bgColor }) => {
    const { githubSignIn } = useAuth();
    const [loading, setLoading] = useState(false);
    const handleSubmit = async () => {
        try {
            setLoading(true)
            await githubSignIn();
            // history.push("/");
            setLoading(false);
        } catch {
            console.log('error in signing in');
        }
    }
    return (
        <Button bgColor={bgColor} handleClick={handleSubmit} disabled={loading} name="Sign up with GitHub" logo="fab fa-github ml-2" />
    )
}

export default SignedOutLinks
