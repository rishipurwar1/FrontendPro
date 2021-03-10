import React from 'react';
// custom components
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Challenges from '../challenges/Challenges'
import heroImg from '../../assets/animated_illustrations/Blogging.json'

const Dashboard = () => {
    return (
        <div className="ml-56 px-5">
            <Hero
                title="Master Web and Mobile Development by building real world projects"
                subTitle="Welcome To Coding Space 😊"
                mainImg={heroImg}
                btnTitle="Explore Challenges "
                logoTitle="fas fa-arrow-right"
                homepage
                route="/challenges"
            />
            <HowItWorks />
            <Challenges />
        </div>
    )
}


export default Dashboard
