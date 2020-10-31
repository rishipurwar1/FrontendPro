import React, {useState, useEffect} from 'react'
import { useAuth } from '../../context/AuthContext'
import useFirestore from '../../hooks/useFirestore'
import { Redirect } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import { firestore } from '../../config/fbConfig'

const SolutionEditForm = (props) => {
    //getting the addSolution function
    const { updateSolution } = useFirestore('solutions');
    const id = props.match.params.id;
    //checking user is logged in or not
    const {currentUser} = useAuth();

    const history = useHistory();
    // Initial state
    const initialState = {
        title: '',
        github_url: '',
        live_website_url: '',
        feedback: '',
    }
    
    //setting the solution form values
    const [values, setValues] = useState(initialState);

    //handling solution input change
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.id]: e.target.value
        })
    }

    //handling submit event
    const handleSubmit = (e) => {
        e.preventDefault();
        updateSolution(values, id)
        console.log(values);
        history.push("/solutions");
        setValues(initialState);
    }

    useEffect(() => {
        //Depending on useFirestore code
       const unsubscribe = firestore.collection('solutions').doc(id)
        .onSnapshot( snapshot => {
            if ( !snapshot.exists ) {
                setValues(null);
                console.log(null);
            } else {
                setValues(snapshot.data());
                console.log(snapshot.data());
            }
        });
        return unsubscribe;
    }, [id]);

    //if not redirect to homepage
    if (!currentUser) return <Redirect to='/' />

    return (
        <div className="w-full max-w-md mx-auto mt-8">
        <h1>Solution Edit #{id}</h1>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                {/* challenge title */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Challenge Title
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" onChange={handleInputChange} type="text" value={values.title} placeholder="Enter Title" />
                </div>
                {/* challenge github url */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="github_url">
                        Github Repository URL
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="github_url" onChange={handleInputChange} type="text" value={values.github_url} placeholder="Github Repository URL" />
                </div>
                {/* live website url */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="live_website_url">
                        Live Website URL
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="live_website_url" onChange={handleInputChange} type="text" value={values.live_website_url} placeholder="Live Website URL" />
                </div>
                {/* feedback */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feedback">
                        Ask for feedback
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="feedback" onChange={handleInputChange} type="text" value={values.feedback} placeholder="Ask for feedback from the community." />
                </div>
                {/* submit button */}
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Submit Solution
                    </button>
                </div>
            </form>
    </div>
    )
}

export default SolutionEditForm