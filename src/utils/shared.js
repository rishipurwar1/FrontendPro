export const removeValue = (userObj, userID) => {
  delete userObj[userID]
  return userObj
}

export const addValue = (usersObj, newUser) => {
  usersObj[newUser.uid] = {
    userID: newUser.uid,
    avatarURL: newUser.photoURL,
    displayName: newUser.displayName,
    username: newUser.reloadUserInfo.screenName,
  }
  return usersObj
}

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
