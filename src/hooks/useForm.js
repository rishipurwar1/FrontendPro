import { useState } from "react"

export const useForm = (options) => {
  const [data, setData] = useState(options?.initialValues || {})
  const [errors, setErrors] = useState({})

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validations = options?.validations

    if (validations) {
      let valid = true
      const newErrors = {}

      for (const key in validations) {
        const value = data[key]
        const validation = validations[key]

        if (validation?.required?.value && !value) {
          valid = false
          newErrors[key] = validation?.required?.message
        }
      }

      if (!valid) {
        setErrors(newErrors)
        return
      }
      setErrors({})

      if (options?.onSubmit) {
        options.onSubmit(data)
      }
    }
  }

  return {
    data,
    errors,
    handleInputChange,
    handleSubmit,
  }
}
