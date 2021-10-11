import React, { useState, useEffect } from "react"
import useFirestore, { useSolution } from "../../hooks/useFirestore"
import { useHistory } from "react-router-dom"
import Hero from "../dashboard/Hero"
import mainImg from "../../assets/animated_illustrations/solution_animation.json"

const SolutionEditForm = (props) => {
  // getting the addSolution function
  const id = props.match.params.id
  const { docs } = useFirestore("solutions", id)
  const { updateSolution } = useSolution("solutions")
  // checking user is logged in or not

  const history = useHistory()
  // Initial state
  const initialState = {
    title: "",
    github_url: "",
    live_website_url: "",
    feedback: "",
  }

  // setting the solution form values
  const [values, setValues] = useState(initialState)

  // handling solution input change
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    })
  }

  // handling submit event
  const handleSubmit = (e) => {
    e.preventDefault()
    updateSolution(values, id)
    history.push("/solutions")
    setValues(initialState)
  }

  useEffect(() => {
    // Depending on useFirestore code
    if (docs.length > 0) {
      setValues(docs[0])
    } else {
      console.log("nothing found in db")
    }
  }, [docs])

  return (
    <div className="px-5 row-start-2 row-end-3 col-start-2 col-end-3">
      <Hero
        title="What's stopping you from moving forward? All the solutions you need are right here!"
        subTitle="Time to submit your solution and show it to the world 👍"
        mainImg={mainImg}
        btnTitle="Explore Solutions "
        logoTitle="fas fa-arrow-right"
        route="/solutions"
        lottie
      />
      <div className="w-full mx-auto mt-8">
        <h1>Solution Edit #{id}</h1>
        <form
          className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          {/* challenge title */}
          <div className="mb-4">
            <label
              className="block text-gray-400 text-base font-bold mb-2"
              htmlFor="title"
            >
              Challenge Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              onChange={handleInputChange}
              type="text"
              value={values.title}
              placeholder="Enter Title"
            />
          </div>
          {/* challenge github url */}
          <div className="mb-6">
            <label
              className="block text-gray-400 text-base  font-bold mb-2"
              htmlFor="github_url"
            >
              Github Repository URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="github_url"
              onChange={handleInputChange}
              type="text"
              value={values.githubUrl}
              placeholder="Github Repository URL"
            />
          </div>
          {/* live website url */}
          <div className="mb-6">
            <label
              className="block text-gray-400 text-base font-bold mb-2"
              htmlFor="live_website_url"
            >
              Live Website URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="live_website_url"
              onChange={handleInputChange}
              type="text"
              value={values.liveWebsiteUrl}
              placeholder="Live Website URL"
            />
          </div>
          {/* feedback */}
          <div className="mb-6">
            <label
              className="block text-gray-400 text-base font-bold mb-2"
              htmlFor="feedback"
            >
              Ask for feedback
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="feedback"
              onChange={handleInputChange}
              type="text"
              value={values.feedback}
              placeholder="Ask for feedback from the community."
            />
          </div>
          {/* submit button */}
          <div className="flex items-center justify-between">
            <button className="bg-gradient-to-br from-purple-500 to-indigo-500 text-purple-200 font-bold text-base py-3 px-4 rounded focus:outline-none focus:shadow-outline block w-full">
              Submit Solution
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SolutionEditForm
