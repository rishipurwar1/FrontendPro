export const trimString = (string, length) => {
  return string.length > length ? string.substring(0, length) + "..." : string
}

export function debounce(callback, delay) {
  let timerID

  return function (...args) {
    clearTimeout(timerID)

    timerID = setTimeout(() => {
      callback.apply(this, args)
      timerID = null
    }, delay)
  }
}

export const getLanguageOfFile = (filePath) => {
  const extensionDotIndex = filePath.lastIndexOf(".")
  const extension = filePath.slice(extensionDotIndex + 1)

  switch (extension) {
    case "js":
    case "jsx":
    case "ts":
    case "tsx":
      return "javascript"
    case "vue":
    case "html":
      return "html"
    case "css":
    case "scss":
    case "less":
      return "css"
    default:
      return "javascript"
  }
}

export function postToJSON(doc) {
  const data = doc.data()

  return {
    ...data,
    id: doc.id,
    createdAt: data?.createdAt?.toMillis() || 0,
    updatedAt: data?.updatedAt?.toMillis() || 0,
  }
}

export function createSlug(title, id) {
  const trimmedTitle = title.trim().toLowerCase()
  const trimmedId = id.trim()

  const titleSlug = trimmedTitle.replace(/ /g, "-")

  const finalSlug = `${titleSlug}-${trimmedId}`

  return finalSlug
}
