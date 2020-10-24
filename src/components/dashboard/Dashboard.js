import React from 'react';
import { useAuth } from '../../context/AuthContext'

// custom components

import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Challenges from '../challenges/Challenges'
import Footer from './Footer';

const Dashboard = () => {
    const {currentUser} = useAuth();
    // console.log(currentUser.providerData[0].displayName);
    // console.log(JSON.stringify(currentUser));
    
    return (
        <div>
            <Hero />
            <HowItWorks />
            <Challenges />
            <Footer />
        </div>
    )
}


export default Dashboard
