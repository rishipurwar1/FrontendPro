import React from 'react'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Redirect } from 'react-router-dom'
import { useSolution } from '../../hooks/useFirestore'
import mainImg from '../../assets/animated_illustrations/solution_animation.json'
import Hero from '../dashboard/Hero'
import Confetti from 'react-dom-confetti';

import Modal from '../smallComponents/Modal'

const SolutionForm = (props) => {
    const [confetti, setConfetti] = useState(false);
    const [submitModal, setSubmitModal] = useState(false)

    const id = props.match.params.id;
    //getting the addSolution function
    const { updateSolution } = useSolution("solutions")

    //checking user is logged in or not
    const { currentUser } = useAuth();

    // Initial state
    const initialState = {
        title: '',
        github_url: '',
        live_website_url: '',
        feedback: '',
        completed: true
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
        setSubmitModal(true);
        setConfetti(!confetti);
        setValues(initialState);
    }


    //if not redirect to homepage
    if (!currentUser) return <Redirect to='/' />

    return (
        <div className="px-5">
            <Hero
                title="Master Web and Mobile Development by building real world projects"
                subTitle="Time to submit your solution and show it to the world 👍"
                mainImg={mainImg}
                btnTitle="Explore Solutions "
                logoTitle="fas fa-arrow-right"
                route="/solutions"
                lottie
            />
            <div className="w-full mx-auto mt-8">
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
                    <div className="flex justify-center">
                        <Confetti className="z-50" active={confetti} />
                    </div>
                    <div className="">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block w-full">
                            Submit Solution
                        </button>
                        {submitModal && <Modal setShowModal={setSubmitModal} auth confetti={confetti} title="Thank You for submitting your solution." emoji="🙏" />}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SolutionForm
