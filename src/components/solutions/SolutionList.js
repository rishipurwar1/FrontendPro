import React from 'react'

// custom components
import useFirestore from '../../hooks/useFirestore'
import Hero from '../dashboard/Hero';
import SolutionSummary from './SolutionSummary'

const ShowSolutions = () => {
    const { docs } = useFirestore('solutions');
    return (
        <div className="ml-60 px-5">
            <Hero />
            <h1 className="text-5xl text-center p-5 font-semibold text-blue-900">Solutions</h1>
            <div className="grid grid-cols-3 gap-2">
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
