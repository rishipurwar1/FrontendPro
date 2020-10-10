import React from 'react';

// custom components
import SignedInLinks from '../layouts/SignedInLinks'
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Challenges from './Challenges'
import Footer from './Footer';

const Dashboard = () => {

    return (
        <div>
            <SignedInLinks classes="mr-3 mt-4 absolute top-0 right-0" />
            <Hero />
            <HowItWorks />
            <Challenges />
            <Footer />
        </div>
    )
}


export default Dashboard
