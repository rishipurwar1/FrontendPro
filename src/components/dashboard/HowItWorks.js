import React from 'react'

// custom components
import Card from './Card'

const HowItWorks = () => {
    return (
        <div className="pt-12">
            <h2 className="pb-2 text-4xl text-center text-white font-semibold">How it works?</h2>
            <p className="text-center text-text-secondary text-base w-2/5 mx-auto">Codingspace can help you to improve your web and mobile development skills</p>
            <div className="grid grid-cols-3 gap-6 mt-8">
                <Card
                    name="Sign up for free in 30 seconds" 
                    info="Connect your GitHub account using sign in button . You'll instantly gain excess to our all the challenges"
                    image="fas fa-user-lock"
                    gradient="bg-gradient-to-br from-lightBlue-400 to-indigo-500"
                    color="text-lightBlue-200"
                />
                <Card 
                    name="Find the right challenge" 
                    info="Choose the right challenge for you and start turning the design into a live website or mobile application"
                    image="fas fa-code"
                    gradient="bg-gradient-to-br from-yellow-400 to-orange-500"
                    color="text-yellow-200"
                />
                <Card 
                    name="Share your solution" 
                    info="After completing the challenge, you can share your work with the world."
                    image="fas fa-share-alt"
                    gradient="bg-gradient-to-br from-purple-500 to-indigo-500"
                    color="text-purple-200"
                />
            </div>
        </div>
    )
}

export default HowItWorks