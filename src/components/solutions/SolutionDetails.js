import React from 'react'
import useFirestore from '../../hooks/useFirestore';
import moment from 'moment';
import ShowWebsite from './ShowWebsite';
import { Link } from 'react-router-dom';

const SolutionDetails = (props) => {
    const id = props.match.params.id;
    const {docs, deleteSolution} = useFirestore("solutions", id);
    console.log(docs);
    
    if(docs.length === 0) return <p className="ml-64">Loading project...</p>
        return (
            <div className="ml-64">
                <h1 className="text-center text-5xl font-semibold text-blue-900 mt-8">{docs[0].title}</h1>
                <div className="flex justify-between items-center px-5">
                    <div className="flex items-center mt-4">
                        <img className="rounded-full mr-1 w-12" src={docs[0].photoURL} alt="Profile"/>
                        <div className="flex flex-col pl-1">
                            <span className="text-navItem">{docs[0].author}</span>
                            <span className="text-navItem">{moment(docs[0].createdAt.toDate()).startOf('day').fromNow()}</span>
                        </div>
                    </div>
                    <div>
                        <Link to={`/solution/${docs[0].id}/edit`} className="text-secondary cursor-pointer pr-3"><i className="far fa-edit text-2xl"></i></Link>
                        <span className="text-red-700 cursor-pointer" onClick={() => deleteSolution(docs[0])}><i className="far fa-trash-alt text-2xl"></i></span>
                    </div>
                </div>
                <ShowWebsite url={docs[0].live_website_url} github={docs[0].github_url} title={docs[0].title} />
            </div>
        )
}

export default SolutionDetails
