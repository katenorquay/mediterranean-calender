import clone from 'clone'

function reducer(state, action) {
  var newState = clone(state)
  var {type, payload} = action
  switch(type) {
    case 'RESET':
      newState.board = null
      return newState //dump everything apart from the currentUser
    default:
    return newState
  }
}

export default reducer
