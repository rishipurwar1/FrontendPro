import React from 'react';

// custom components
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Challenges from '../challenges/Challenges'
import Footer from './Footer';

const Dashboard = () => {
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
