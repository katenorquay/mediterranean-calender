import clone from 'clone'

function reducer(state, action) {
  var newState = clone(state)
  var {type, payload} = action
  switch(type) {
    case 'MOVE_EMOJI':
      newState.emojiPosition[0] = payload[0]
      newState.emojiPosition[1] = payload[1]
      var timeSlot = newState.calendar.map(function (day) {
        return day.times.find(function (time) {
          return time.x === payload[0] && time.y === payload[1]
        })
      })
      for (var i = 0; i < timeSlot.length; i++) {
        if (timeSlot[i] !== undefined) {
          timeSlot[i].hasEmoji = true
        } 
      }
      return newState
    case 'RESET':
      newState.board = null
      return newState
    default:
    return newState
  }
}

export default reducer
