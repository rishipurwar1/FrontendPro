import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import mainImg from "../assets/animated_illustrations/solution_animation.json"
import Hero from "../components/homepage/Hero"
import BaseInput from "../components/reusable/BaseInput"
import Button from "../components/reusable/Button"
import Modal from "../components/reusable/Modal"
import { INPUTS, validators } from "../constants"
import { useFirestore } from "../hooks/useFirestore"
import { useForm } from "../hooks/useForm"

const SolutionForm = () => {
  const [state, setState] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()
  const { updateDocument, response } = useFirestore("solutions")

  // handle form data
  const onSubmit = async (data) => {
    const formData = {
      ...data,
      completed: true,
    }
    try {
      await updateDocument(id, formData)
      if (!response.error) {
        navigate(`/solution/${id}`, { state: true })
      }
    } catch (error) {
      console.log(error)
    }
  }
  const { data, errors, handleInputChange, handleSubmit } = useForm({
    validations: validators.validations,
    onSubmit,
    initialValues: {},
  })

  return (
    <div className="px-5 row-start-2 row-end-3 col-start-2 col-end-3">
      <Hero
        title="Master Web and Mobile Development by building real world projects"
        subTitle="Time to submit your solution and show it to the world 👍"
        mainImg={mainImg}
        btnTitle="Explore Solutions "
        route="/solutions"
        lottie
      />
      <h2 className="text-5xl text-center text-white font-extrabold">Submit Solution</h2>
      <div className="p-4 rounded-lg shadow bg-gray-800 sm:p-5 mt-8">
        <form onSubmit={handleSubmit}>
          {INPUTS.map((input) => (
            <BaseInput
              key={input.name}
              label={input.label}
              placeholder={input.placeholder}
              onChange={handleInputChange}
              error={!!errors[input.name]}
              value={data[input.name] || ""}
              {...input}
            />
          ))}
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
