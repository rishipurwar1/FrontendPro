import React from 'react'
import useFirestore from '../../hooks/useFirestore'

const SolutionSummary = ({solution}) => {
    const {deleteSolution} = useFirestore('solutions')
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer">
            <img className="w-full" src="https://picsum.photos/150" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{solution.title}</div>
                <div className="flex items-center">
                    <img className="rounded-full mr-1 w-12" src="https://picsum.photos/150" alt="Profile Photo"/>
                    <span>Rishi Purwar</span>
                </div>
                <button onClick={() => deleteSolution(solution)}>Delete</button>
            </div>
        </div>
    )
}

export default SolutionSummary
