import clone from 'clone'

function reducer(state, action) {
  var newState = clone(state)
  var {type, payload} = action
  switch(type) {
    case 'MOVE_EMOJI':
      newState.emojiPosition[0] = payload[0]
      newState.emojiPosition[1] = payload[1]
      var something = newState.calendar.map(function (day) {
        return day.times.map(function (time) {
          return time.x === payload[0] && time.y === payload[1]
        })
      })
      something.hasEmoji = true
      return newState
    case 'RESET':
      newState.board = null
      return newState
    default:
    return newState
  }
}

export default reducer
