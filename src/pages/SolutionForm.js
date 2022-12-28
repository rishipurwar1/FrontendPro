import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import fetchSkills from "../api"
import mainImg from "../assets/animated_illustrations/solution_animation.json"
import Hero from "../components/homepage/Hero"
import BaseInput from "../components/reusable/BaseInput"
import Button from "../components/reusable/Button"
import Modal from "../components/reusable/Modal"
import MultiSelectSearchInput from "../components/reusable/MultiSelectSearchInput"
import Icons from "../components/SvgIcons/Icons"
import { INPUTS } from "../constants"
import { useFirestore } from "../hooks/useFirestore"

const INITIAL_STATE = {
  title: "",
  githubUrl: "",
  liveWebsiteUrl: "",
  tags: [],
  feedback: "",
}

const SKILLS = [
  { name: "html" },
  { name: "css" },
  { name: "javascript" },
  { name: "bootstrap" },
  { name: "tailwind-css" },
  { name: "react" },
  { name: "vue" },
  { name: "angular" },
]

const SolutionForm = () => {
  const [formData, setFormData] = useState(INITIAL_STATE)
  const [state, setState] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()
  const { updateDocument, response } = useFirestore("solutions")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  // handle form data
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      ...formData,
      completed: true,
    }
    try {
      await updateDocument(id, data)
      if (!response.error) {
        navigate(`/solution/${id}`, { state: true })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="px-5 row-start-2 row-end-3 col-start-2 col-end-3">
      <Hero
        title="Master Web and Mobile Development by building real world projects"
        subTitle="Time to submit your solution and show it to the world 👍"
        mainImg={mainImg}
        btnTitle="Explore Solutions "
        route="/solutions"
        icon={<Icons.ArrowRight className="ml-2 -mr-1" />}
        lottie
      />
      <h2 className="text-5xl text-center text-white font-extrabold">Submit Solution</h2>
      <div className="p-4 rounded-lg shadow bg-gray-800 sm:p-5 mt-8">
        <form onSubmit={handleSubmit}>
          {INPUTS.map((input) =>
            input.type === "search" ? (
              <MultiSelectSearchInput
                key={input.name}
                onChange={setFormData}
                fetchOptions={fetchSkills}
                predefinedOptions={SKILLS}
                label={input.label}
                selectedOptions={formData.tags}
              />
            ) : (
              <BaseInput
                key={input.name}
                label={input.label}
                placeholder={input.placeholder}
                onChange={handleChange}
                type={input.type}
                {...input}
              />
            )
          )}
          <Button type="submit" className="font-medium" loading={response.isPending}>
            Submit Solution
          </Button>
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
