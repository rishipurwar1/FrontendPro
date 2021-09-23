import React, { useState } from "react"
import { useSolution } from "../../hooks/useFirestore"
import { useForm } from "react-hook-form"

import mainImg from "../../assets/animated_illustrations/solution_animation.json"
import Hero from "../dashboard/Hero"
import Confetti from "react-dom-confetti"

import Modal from "../smallComponents/Modal"

const SolutionForm = (props) => {
  const [state, setState] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const id = props.match.params.id

  // getting the addSolution function
  const { updateSolution } = useSolution("solutions")

  // handle form data
  const onSubmit = (data) => {
    const formData = {
      ...data,
      completed: true,
    }
    updateSolution(formData, id)
    setState(true)
  }

  return (
    <div className="px-5 row-start-2 row-end-3 col-start-2 col-end-3">
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
        <form
          className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onSubmit)}
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
              type="text"
              placeholder="Enter Title"
              {...register("title", { required: true })}
            />
            {errors.title?.type === "required" && (
              <span className="text-red-500 text-xs">Title is required</span>
            )}
          </div>
          {/* challenge github url */}
          <div className="mb-6">
            <label
              className="block text-gray-400 text-base  font-bold mb-2"
              htmlFor="githubUrl"
            >
              Github Repository URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="githubUrl"
              type="text"
              placeholder="Github Repository URL"
              {...register("githubUrl", { required: true })}
            />
            {errors.githubUrl?.type === "required" && (
              <span className="text-red-500 text-xs">
                Github Repository URL is required
              </span>
            )}
          </div>
          {/* live website url */}
          <div className="mb-6">
            <label
              className="block text-gray-400 text-base font-bold mb-2"
              htmlFor="liveWebsiteUrl"
            >
              Live Website URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="liveWebsiteUrl"
              type="text"
              placeholder="Live Website URL"
              {...register("liveWebsiteUrl", { required: true })}
            />
            {errors.liveWebsiteUrl?.type === "required" && (
              <span className="text-red-500 text-xs">Live Website URL is required</span>
            )}
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
              type="text"
              placeholder="Ask for feedback from the community."
              {...register("feedback")}
            />
          </div>
          {/* submit button */}
          <div className="flex justify-center">
            <Confetti className="z-50" active={state} />
          </div>
          <div>
            <button className="bg-gradient-to-br from-purple-500 to-indigo-500 text-purple-200 font-bold text-base py-3 px-4 rounded focus:outline-none focus:shadow-outline block w-full">
              Submit Solution
            </button>
            {state && (
              <Modal
                setShowModal={setState}
                auth
                title="Thank You for submitting your solution."
                emoji="🙏"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default SolutionForm
