import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';

const SolutionSummary = ({solution}) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-xl">
            <img className="w-full" src="https://res.cloudinary.com/di5hmgowi/image/upload/v1602314687/images/4_qhijgn.png" alt="Sunset in the mountains" />
            <div className="px-6 py-3">
                <div className="font-bold text-xl mb-2 text-blue-900">{solution.title}</div>
                <div className="flex items-center">
                    <img className="rounded-full mr-1 w-12" src={solution.photoURL} alt="Profile"/>
                    <div className="flex flex-col pl-1">
                        <span className="text-navItem">{solution.author}</span>
                        <span className="text-navItem">{moment(solution.createdAt.toDate()).startOf('day').fromNow()}</span>
                    </div>
                </div>
            </div>
            <Link to={'/solution/' + solution.id} className="block rounded-t-none mt-4 w-full bg-secondary text-white text-lg text-center px-5 py-4">View Solution</Link>
        </div>
    )
}

export default SolutionSummary
