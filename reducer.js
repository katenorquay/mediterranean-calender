import clone from 'clone'

function reducer(state, action) {
  var newState = clone(state)
  var {type, payload} = action
  switch(type) {
    case 'MOVE_EMOJI':
      newState.emojis.map(function (emoji) {
        return emoji.position[0] = payload[0]
      })
      newState.emojis.map(function (emoji) {
        return emoji.position[1] = payload[1]
      })
      newState.calendar.map(function (day) {
        day.times.find(function (time) {
          if (time.x === payload[0] && time.y === payload[1]) {
            time.hasEmoji = true
          }
          else {
            time.hasEmoji = false
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
