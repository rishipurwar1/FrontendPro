import React from 'react'

// custom components
import SignedInLinks from '../layouts/SignedInLinks'
import heroImage from '../../assets/illustrations/web.svg'

const Hero = () => {
    return (
        <div className="mt-16 ml-64 pl-5 flex flex-wrap items-center">
            <div className="w-5/12">
                <h1 className="text-4xl font-semibold text-blue-900 leading-10 pb-2">Are you ready to improve your Web Dev skills by building real world projects?</h1>
                <p className="italic  text-blue-900">We help frontend and backend developers to improve their coding skills by providing real world coding challenges. This platform is for everyone, from beginner to expert.</p>
            <SignedInLinks classes="mt-4" />
            </div>
            <div className="w-7/12 overflow-hidden">
                <img className="ml-8" src={heroImage} alt=""/>
            </div>
        </div>
    )
}

export default Hero
