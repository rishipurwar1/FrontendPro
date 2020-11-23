import React from 'react';

// custom components
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Challenges from '../challenges/Challenges'

const Dashboard = () => {
    return (
        <div className="ml-60 px-5">
            <Hero />
            <HowItWorks />
            <Challenges />
        </div>
    )
}


export default Dashboard
