import React from 'react'
import { useState } from 'react'
import useFirestore from '../../hooks/useFirestore'
import SolutionSummary from './SolutionSummary'

const ShowSolutions = () => {
    const [loading, setLoading] = useState(true)
    const { docs } = useFirestore('solutions');
    console.log(docs)
    return (
        <div className="ml-64 p-4">
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
