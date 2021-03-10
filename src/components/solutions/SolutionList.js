import React from 'react'

// custom components
import useFirestore from '../../hooks/useFirestore'
import Hero from '../dashboard/Hero';
import SolutionSummary from './SolutionSummary'
import challengeSVG from '../../assets/illustrations/web.svg'

const ShowSolutions = () => {
    const { docs } = useFirestore('solutions');
    return (
        <div className="ml-56 px-5">
            <Hero
                title="Master Web and Mobile Development by building real world projects"
                subTitle="Welcome To Coding Space 😊"
                mainImg={challengeSVG}
                btnTitle="My Solutions "
                logoTitle="fas fa-arrow-right"
                route="/challenges"
            />
            <h1 className="text-5xl heading text-center p-5 font-semibold text-white pb-7">Solutions</h1>
            <div className="grid grid-cols-3 gap-4">
                {docs && docs.map(solution => {
                    return (
                        <SolutionSummary key={solution.id} solution={solution} />
                    )
                })}
            </div>
        </div>
    )
}

export default ShowSolutions
