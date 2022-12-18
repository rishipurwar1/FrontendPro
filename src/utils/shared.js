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
