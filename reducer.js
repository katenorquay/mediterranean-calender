import clone from 'clone'

function reducer(state, action) {
  var newState = clone(state)
  var {type, payload} = action
  switch(type) {
    case 'MOVE_EMOJI':
      newState.emojis.map(function (emoji) {
        return emoji.position[0] = payload[1]
      })
      newState.emojis.map(function (emoji) {
        return emoji.position[1] = payload[2]
      })
      newState.calendar.map(function (day) {
        day.times.find(function (time) {
          if (time.x === payload[1] && time.y === payload[2]) {
            time.hasEmoji = true
            time.emojiId = payload[0]
          }
          else {
            time.hasEmoji = false
            time.emojiId = null
          }
        })
      })
      return newState
    case 'RESET':
      newState.board = null
      return newState
    default:
    return newState
  }
}

export default reducer
