import { useState } from "react"
import { useRouter } from "next/router"

import BaseInput from "../../../../components/reusable/BaseInput"
import Button from "../../../../components/reusable/Button"
import MultiSelectSearchInput from "../../../../components/reusable/MultiSelectSearchInput"
import { INPUTS } from "../../../../constants"
import { useFirestore } from "../../../../hooks/useFirestore"
import fetchSkills from "../../../../services"
import Header from "../../../../components/reusable/Header"

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
  const router = useRouter()
  const { id, slug } = router.query
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
        router.push({
          pathname: `/frontend-coding-challenges/${slug}/solutions/${id}`,
          query: { submit: true },
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main>
      <Header
        title="Submit Your Solution"
        description="Submit your solution and showcase your skills to the world. Get feedback, improve your skills, and take your career to the next level!"
      />
      <section className="rounded-lg bg-gray-900 border border-gray-700 p-6">
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
        </form>
      </section>
    </main>
  )
}

export default SolutionForm
