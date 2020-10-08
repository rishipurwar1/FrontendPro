import React from 'react'
import ChallengeCard from './ChallengeCard'
import Heading from './Heading'
import image2 from '../../assets/sample/2.jpg'
import image3 from '../../assets/sample/3.jpg'
import image4 from '../../assets/sample/4.png'

const Challenges = () => {
    return (
        <div className="ml-64 pt-12">
            <Heading text="Latest Challenges" />
            <div className="grid gap-4 ml-4 grid-cols-3">
                <ChallengeCard 
                name="Random Quote Generator" 
                about="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quam magni eos beatae porro tempora." 
                image={image2}
                tags={['HTML','CSS','JS']}
                />
                <ChallengeCard 
                name="Movie App" 
                about="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quam magni eos beatae porro tempora." 
                image={image3}
                tags={['HTML','CSS','JS','API']}
                />
                <ChallengeCard 
                name="Meme Generator" 
                about="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quam magni eos beatae porro tempora." 
                image={image4}
                tags={['HTML','CSS','JS','API']}
                />
                <ChallengeCard 
                name="Random Quote Generator" 
                about="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quam magni eos beatae porro tempora." 
                image={image2}
                tags={['HTML','CSS','JS']}
                />
                <ChallengeCard 
                name="Movie App" 
                about="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quam magni eos beatae porro tempora." 
                image={image3}
                tags={['HTML','CSS','JS','API']}
                />
                <ChallengeCard 
                name="Meme Generator" 
                about="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quam magni eos beatae porro tempora." 
                image={image4}
                tags={['HTML','CSS','JS','API']}
                />
            </div>
        </div>
    )
}

export default Challenges
