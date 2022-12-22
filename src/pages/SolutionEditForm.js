import { useNavigate, useParams } from "react-router-dom"

import mainImg from "../assets/animated_illustrations/solution_animation.json"
import Hero from "../components/homepage/Hero"
import BaseInput from "../components/reusable/BaseInput"
import Button from "../components/reusable/Button"
import Icons from "../components/SvgIcons/Icons"
import { INPUTS, VALIDATORS } from "../constants"
import { useDocument } from "../hooks/useDocument"
import { useFirestore } from "../hooks/useFirestore"
import { useForm } from "../hooks/useForm"

const SolutionEditForm = () => {
  const { id } = useParams()
  const { document } = useDocument("solutions", id)
  const { updateDocument, response } = useFirestore("solutions")
  const navigate = useNavigate()

  // handle form data
  const onSubmit = async (data) => {
    try {
      await updateDocument(id, data)
      if (!response.error) {
        navigate(`/solution/${id}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const { data, errors, handleInputChange, handleSubmit } = useForm({
    validations: VALIDATORS.validations,
    onSubmit,
    initialValues: document,
  })

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
      <div className="w-full mx-auto mt-8">
        <form
          className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
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
          {/* update button */}
          <div>
            <Button type="submit" className="font-medium" loading={response.isPending}>
              Update Solution
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SolutionEditForm
