import React from 'react'
import useFirestore from '../../hooks/useFirestore';

const SolutionDetails = (props) => {
    const {docs} = useFirestore("solutions");
    const id = props.match.params.id;
    const solutionDetails = docs && docs.filter(doc => doc.id === id);
    
    if(solutionDetails.length > 0) {
        console.log(solutionDetails);
        return (
            <div className="ml-64">
                <p>Title: {solutionDetails[0].title}</p>
                <p>GithubUrl: {solutionDetails[0].github_url}</p>
                <p>Live Website: {solutionDetails[0].live_website_url}</p>
            </div>
        )
    } else {
        return null;
    }
}

export default SolutionDetails
