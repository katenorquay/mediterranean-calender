import clone from 'clone'

function reducer(state, action) {
  var newState = clone(state)
  var {type, payload} = action
  switch(type) {
    default:
    return newState
  }
}

export default reducer
