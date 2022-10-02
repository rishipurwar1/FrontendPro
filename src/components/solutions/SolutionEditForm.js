import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"

import mainImg from "../../assets/animated_illustrations/solution_animation.json"
import { analytics, logEvent } from "../../firebase/config"
import { useDocument } from "../../hooks/useDocument"
import { useFirestore } from "../../hooks/useFirestore"
import Hero from "../dashboard/Hero"

const SolutionEditForm = () => {
  const { id } = useParams()
  const { document } = useDocument("solutions", id)
  const navigate = useNavigate()
  // getting the addSolution function
  const { updateDocument, response } = useFirestore("solutions")

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm()

  // handle form data
  const onSubmit = async (data) => {
    try {
      if (document) {
        await updateDocument(id, data)
        navigate(`/solution/${id}`)
      }
    } catch (error) {
      console.log(error)
    }
    if (!response.error) {
      reset("", {
        keepValues: false,
      })
    }
  }

  useEffect(() => {
    if (document) {
      for (const key in document) {
        setValue(key, document[key])
      }
    }
  }, [document, setValue])

  useEffect(() => {
    logEvent(analytics, "solution_edit_page_visited")
  }, [])

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
          <div>
            <button className="inline-flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-500 text-purple-200 font-bold text-base py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full">
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
          </div>
        </form>
      </div>
    </div>
  )
}

export default SolutionEditForm
