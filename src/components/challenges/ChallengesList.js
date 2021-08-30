import React from 'react'

// custom components
import useFirestore from '../../hooks/useFirestore';
import Hero from '../dashboard/Hero';
import ChallengeCard from './ChallengeCard'
import challengeLottie from '../../assets/animated_illustrations/challenge.json'

const ChallengesList = () => {
    const { docs } = useFirestore('challenges');
    return (
        <main className="sm:ml-0 px-5 row-start-2 row-end-3 col-start-2 col-end-3">
            <Hero
                title="Here are some handcrafted challenges for you. Keep Cooding! 👨‍💻"
                subTitle="Today is a great day to start a new challenge 🧑‍💻" mainImg={challengeLottie}
                btnTitle="Explore Challenges "
                logoTitle="fas fa-arrow-right"
                rotue="/challenges"
                lottie
            />
            <h2 className="text-5xl text-center text-white font-bold  font-heading">All Challenges</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-8">
                {docs && docs.map(challenge => {
                    return (
                        <ChallengeCard key={challenge.id} challenge={challenge} challengelist btnTitle="View Challenge" />
                    )
                })}
            </div>
        </main>
    )
}


export default ChallengesList
