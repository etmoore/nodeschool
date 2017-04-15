function getShortMessages (messages) {
  return messages
    .map(messageObj => messageObj.message)
    .filter(message => message.length < 50)
}

module.exports = getShortMessages
