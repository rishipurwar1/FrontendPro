import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import BaseInput from "../../../../components/reusable/BaseInput"
import Button from "../../../../components/reusable/Button"
import MultiSelectSearchInput from "../../../../components/reusable/MultiSelectSearchInput"
import { INPUTS, PLAYGROUND_INPUTS } from "../../../../constants"
import { useAuthContext } from "../../../../hooks/useAuthContext"
import { useDocument } from "../../../../hooks/useDocument"
import { useFirestore } from "../../../../hooks/useFirestore"
import fetchSkills from "../../../../services"
import Header from "../../../../components/reusable/Header"

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

const INITIAL_STATE = {
  title: "",
  githubUrl: "",
  liveWebsiteUrl: "",
  tags: [],
  feedback: "",
}

const SolutionEditForm = () => {
  const [formData, setFormData] = useState(INITIAL_STATE)
  const { user, authIsReady } = useAuthContext()
  const router = useRouter()
  const { id, slug } = router.query

  const { document } = useDocument("solutions", id)
  const { updateDocument, response } = useFirestore("solutions")

  const handleChange = (e) => {
    if (e.target.id === "playgroundLink") return

    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }
  // handle form data
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateDocument(id, formData)
      if (!response.error) {
        router.push(`/frontend-coding-challenges/${slug}/solutions/${id}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const renderInputs = (inputsArray) =>
    inputsArray.map((input) =>
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
          value={
            input.name === "playgroundLink"
              ? `${window.location.origin}/playground/${document?.id}`
              : formData[input.name]
          }
          placeholder={input.placeholder}
          onChange={handleChange}
          {...input}
        />
      )
    )

  useEffect(() => {
    if (authIsReady && user === null) router.push("/")
    if (document) {
      setFormData(document)
    }
  }, [document, authIsReady])

  return (
    <main>
      <Header
        title="Edit Your Solution"
        description="Easily edit and update the details of your submitted solution and showcase your best work to the world!"
      />
      <section className="rounded-lg bg-gray-900 border border-gray-700 p-6">
        <form onSubmit={handleSubmit}>
          {document?.isPlayground
            ? renderInputs(PLAYGROUND_INPUTS)
            : renderInputs(INPUTS)}
          <Button type="submit" className="font-medium" loading={response.isPending}>
            Update Solution
          </Button>
        </form>
      </section>
    </main>
  )
}

export default SolutionEditForm
