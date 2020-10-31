import React from 'react'
import useFirestore from '../../hooks/useFirestore';
import moment from 'moment';
import ShowWebsite from './ShowWebsite';
import { Link } from 'react-router-dom';

const SolutionDetails = (props) => {
    const {docs, deleteSolution} = useFirestore("solutions");
    const id = props.match.params.id;
    const solutionDetails = docs && docs.filter(doc => doc.id === id);
    
    if(solutionDetails.length > 0) {
        return (
            <div className="ml-64">
                <h1 className="text-center text-5xl font-semibold text-blue-900 mt-8">{solutionDetails[0].title}</h1>
                <div className="flex justify-between items-center px-5">
                    <div className="flex items-center mt-4">
                        <img className="rounded-full mr-1 w-12" src={solutionDetails[0].photoURL} alt="Profile"/>
                        <div className="flex flex-col pl-1">
                            <span className="text-navItem">{solutionDetails[0].author}</span>
                            <span className="text-navItem">{moment(solutionDetails[0].createdAt.toDate()).startOf('day').fromNow()}</span>
                        </div>
                    </div>
                    <div>
                        <Link to={`/solution/${solutionDetails[0].id}/edit`} className="text-secondary cursor-pointer pr-3"><i className="far fa-edit text-2xl"></i></Link>
                        <span className="text-red-700 cursor-pointer" onClick={() => deleteSolution(solutionDetails[0])}><i className="far fa-trash-alt text-2xl"></i></span>
                    </div>
                </div>
                <ShowWebsite url={solutionDetails[0].live_website_url} github={solutionDetails[0].github_url} title={solutionDetails[0].title} />
            </div>
        )
    } else {
        return null;
    }
}

export default SolutionDetails
