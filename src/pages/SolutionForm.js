import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"

import mainImg from "../assets/animated_illustrations/solution_animation.json"
import Hero from "../components/homepage/Hero"
import Modal from "../components/reusable/Modal"
import { useFirestore } from "../hooks/useFirestore"

const SolutionForm = () => {
  const [state, setState] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()
  const { updateDocument, response } = useFirestore("solutions")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  // handle form data
  const onSubmit = async (data) => {
    const formData = {
      ...data,
      completed: true,
    }
    await updateDocument(id, formData)
    if (!response.error) {
      navigate(`/solution/${id}`, { state: true })
      reset("", {
        keepValues: false,
      })
    }
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
      <h2 className="text-5xl text-center text-white font-extrabold">Submit Solution</h2>
      <div className="p-4 rounded-lg shadow bg-gray-800 sm:p-5 mt-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* challenge title */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-white" htmlFor="title">
              Challenge Title
            </label>
            <input
              className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-1 focus:ring-gray-500 focus:outline-none focus:border-gray-500"
              id="title"
              type="text"
              placeholder="Enter Title"
              {...register("title", { required: true })}
            />
            {errors.title?.type === "required" && (
              <small className="text-red-500 text-xs">Title is required</small>
            )}
          </div>
          {/* challenge github url */}
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-white"
              htmlFor="githubUrl"
            >
              Github Repository URL
            </label>
            <input
              className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-1 focus:ring-gray-500 focus:outline-none focus:border-gray-500"
              id="githubUrl"
              type="text"
              placeholder="Github Repository URL"
              {...register("githubUrl", { required: true })}
            />
            {errors.githubUrl?.type === "required" && (
              <small className="text-red-500 text-xs">
                Github Repository URL is required
              </small>
            )}
          </div>
          {/* live website url */}
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-white"
              htmlFor="liveWebsiteUrl"
            >
              Live Website URL
            </label>
            <input
              className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-1 focus:ring-gray-500 focus:outline-none focus:border-gray-500"
              id="liveWebsiteUrl"
              type="text"
              placeholder="Live Website URL"
              {...register("liveWebsiteUrl", { required: true })}
            />
            {errors.liveWebsiteUrl?.type === "required" && (
              <small className="text-red-500 text-xs">Live Website URL is required</small>
            )}
          </div>
          {/* feedback */}
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-white"
              htmlFor="feedback"
            >
              Ask for feedback
            </label>
            <input
              className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-1 focus:ring-gray-500 focus:outline-none focus:border-gray-500"
              id="feedback"
              type="text"
              placeholder="Ask for feedback from the community."
              {...register("feedback")}
            />
          </div>
          {/* submit button */}
          <button className="text-white inline-flex items-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors bg-indigo-600 hover:bg-indigo-700 focus:ring-blue-800">
            {response.isPending ? (
              <>
                <svg
                  className="animate-spin mr-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </>
            ) : (
              "Submit Solution"
            )}
          </button>
          {state && (
            <Modal
              setShowModal={setState}
              auth
              title="Thank You for submitting your solution."
              emoji="🙏"
            />
          )}
        </form>
      </div>
    </div>
  )
}

export default SolutionForm
