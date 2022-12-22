export const VALIDATORS = {
  validations: {
    title: {
      required: {
        value: true,
        message: "Challenge Title is required",
      },
    },
    repository: {
      required: {
        value: true,
        message: "Github Repository URL is required",
      },
    },
    website: {
      required: {
        value: true,
        message: "Live Website URL is required",
      },
    },
  },
}

export const INPUTS = [
  {
    label: "Challenge Title",
    placeholder: "Challenge Title",
    errorText: "Challenge Title is required",
    name: "title",
  },
  {
    label: "Github Repository URL",
    placeholder: "Github Repository URL",
    errorText: "Github Repository URL is required",
    name: "repository",
  },
  {
    label: "Live Website URL",
    placeholder: "Live Website URL",
    errorText: "Live Website URL is required",
    name: "website",
  },
  {
    label: "Ask for feedback",
    placeholder: "Ask for feedback",
    name: "feedback",
  },
]
