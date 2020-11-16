import React from 'react';

// custom components
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Challenges from '../challenges/Challenges'
import Footer from './Footer';
import Navbar from '../layouts/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <HowItWorks />
            <Challenges />
            <Footer />
        </div>
    )
}


export default Dashboard
