import React from 'react'

// custom components
import Card from './Card'
import Heading from './Heading'

const HowItWorks = () => {
    return (
        <div className="ml-64 pt-12">
        <Heading text="How it works?" />
            <div className="flex justify-around mb-10 pt-5">
                <Card
                    name="Sign In with GitHub" 
                    info="Connect your GitHub account using sign in button . You'll instantly gain excess to our all the challenges."
                    number="1"
                    image="fas fa-user-lock text-6xl text-red-500"
                    color="red-500"
                    margin="mt-0"
                    shadow="shadow-boxFirst"
                />
                <Card 
                    name="Find the right challenge" 
                    info="Choose the right challenge for you according to your skill set and start turning the design into a real world website/web app."
                    number="2"
                    image="fas fa-code text-6xl text-gray-600"
                    color="gray-600"
                    margin="mt-6"
                    shadow="shadow-boxSecond"
                />
                <Card 
                    name="Share your solution" 
                    info="After completing the challenge, you can share your work with the world."
                    number="3"
                    image="fas fa-share-alt"
                    color="secondary"
                    margin="mt-12"
                    shadow="shadow-boxThird"
                />
            </div>
        </div>
    )
}

export default HowItWorks