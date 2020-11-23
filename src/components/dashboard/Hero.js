import React from 'react'

// custom components
import hero from '../../assets/illustrations/main.svg'
import SignUpButton from '../smallComponents/SignUpButton'

const Hero = () => {
    return (
        <div className="mt-2 mb-8">
            <p className="font-heading text-lg font-medium text-white">Hello Coder,</p>
            <h2 className="font-heading text-3xl font-bold text-white">Welcome To Coding Space <span role="img" aria-label="Hello">👋</span></h2>
            <header className="mt-4 flex bg-gradient-to-br from-purple-500 to-indigo-500 rounded-3xl px-8 h-72 items-center justify-between shadow-2xl">
                <div className="w-1/3">
                    <h1 className="text-white text-2xl font-semibold font-heading pb-3">Master Web and Mobile Development by building real world projects</h1>
                    <SignUpButton color="bg-gray-900" />
                </div>
                <div className="w-96">
                    <img className="w-full" src={hero} alt="Hero"/>
                </div>
            </header>
        </div>
    )
}

export default Hero
