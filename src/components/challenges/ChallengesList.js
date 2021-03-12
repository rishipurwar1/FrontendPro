import React from 'react'

// custom components
import useFirestore from '../../hooks/useFirestore';
import Hero from '../dashboard/Hero';
import ChallengeCard from './ChallengeCard'
import challengeSVG from '../../assets/illustrations/web.svg'

const ChallengesList = () => {
    const { docs } = useFirestore('challenges');
    return (
        <div className="ml-56 px-5">
            <Hero
                title="Here are some handcrafted challenges for you. Keep Cooding! 👨‍💻"
                subTitle="Today is a great day to start a new challenge 🧑‍💻" mainImg={challengeSVG}
                btnTitle="Explore Challenges "
                logoTitle="fas fa-arrow-right"
                rotue="/challenges"
            />
            <h2 className="pb-7 text-4xl text-center text-white font-semibold">All Challenges</h2>
            <div className="grid gap-4 grid-cols-3">
                {docs && docs.map(challenge => {
                    return (
                        <ChallengeCard key={challenge.id} challenge={challenge} challengelist btnTitle="View Challenge" />
                    )
                })}
            </div>
        </div>
    )
}


export default ChallengesList
