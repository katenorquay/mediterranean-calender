import clone from 'clone'

function reducer(state, action) {
  var newState = clone(state)
  var {type, payload} = action
  switch(type) {
    case 'MOVE_EMOJI':
      newState.emojiPosition[0] = payload[0]
      newState.emojiPosition[1] = payload[1]
      return newState
    case 'RESET':
      newState.board = null
      return newState
    default:
    return newState
  }
}

export default reducer
