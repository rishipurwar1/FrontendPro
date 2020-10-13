import React, { useState,useContext } from 'react'
import { createContext } from 'react';
import { useEffect } from 'react';
import {auth} from '../config/fbConfig'

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const provider = new auth.GithubAuthProvider();
    const githubSignIn = () => {
        return auth().signInWithRedirect(provider);
    }

    const githubSignOut = () => {
        return auth().signOut();
    }

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        githubSignIn,
        githubSignOut
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

