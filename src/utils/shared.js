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
