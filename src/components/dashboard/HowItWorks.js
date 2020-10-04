import React from 'react'
import Card from './Card'

const HowItWorks = () => {
    return (
        <div className="ml-64">
            <h2>How it works?</h2>
            <div>
                <Card
                    name="Sign In with GitHub" 
                    info="Connect your GitHub account using sign in button . You'll instantly gain excess to our all the challenges." 
                />
                <Card 
                    name="Find the right challenge" 
                    info="Choose the right challenge for you according to your skill set and start turning the design into a real world website/web app." 
                />
                <Card 
                    name="Share your solution" 
                    info="After completing the challenge, you can share your work with the world."
                />
            </div>
        </div>
    )
}

export default HowItWorks