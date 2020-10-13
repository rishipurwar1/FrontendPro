import React from 'react';
import {useAuth} from '../../context/AuthContext'

// custom components
import SignedOutLinks from '../layouts/SignedOutLinks'
import SignedInLinks from '../layouts/SignedInLinks'
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Challenges from './Challenges'
import Footer from './Footer';

const Dashboard = () => {
    const {currentUser} = useAuth();
    // console.log(currentUser.uid);
    const links = currentUser && currentUser.uid ? <SignedInLinks profile={currentUser.photoURL} /> : <SignedOutLinks />;
    return (
        <div>
            {links}
            <Hero />
            <HowItWorks />
            <Challenges />
            <Footer />
        </div>
    )
}


export default Dashboard
