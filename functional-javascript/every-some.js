function checkUsersValid (goodUsers) {
  return function allUsersValid (submittedUsers) {
    return submittedUsers.every((submittedUser) => {
      return goodUsers.some((goodUser) => {
        return goodUser.id === submittedUser.id
      })
    })
  }
}

module.exports = checkUsersValid
