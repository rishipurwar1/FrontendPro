import React from 'react'
import useFirestore from '../../hooks/useFirestore'
import moment from 'moment';
import { Link } from 'react-router-dom';

const SolutionSummary = ({solution}) => {
    const {deleteSolution} = useFirestore('solutions')
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer">
            <img className="w-full" src="https://picsum.photos/150" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{solution.title}</div>
                <div className="flex items-center">
                    <img className="rounded-full mr-1 w-12" src={solution.photoURL} alt="Profile"/>
                    <span>{solution.author}</span>
                    <span>{moment(solution.createdAt.toDate()).startOf('day').fromNow()}</span>
                </div>
                <button onClick={() => deleteSolution(solution)}>Delete</button>
                <Link to={'/solution/' + solution.id} className="block rounded-t-none mt-4 w-full bg-secondary text-white text-lg text-center px-5 py-4">View Solution</Link>
            </div>
        </div>
    )
}

export default SolutionSummary
