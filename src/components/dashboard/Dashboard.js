import React from 'react';
import { connect } from 'react-redux'

// custom components
import SignedInLinks from '../layouts/SignedInLinks'
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Challenges from './Challenges'
import Footer from './Footer';

const Dashboard = ({challenges}) => {
    return (
        <div>
            <SignedInLinks classes="mr-3 mt-4 absolute top-0 right-0" />
            <Hero />
            <HowItWorks />
            <Challenges challenges={challenges} />
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      challenges: state.challenge.challenges
    }
}

export default connect(mapStateToProps)(Dashboard)
