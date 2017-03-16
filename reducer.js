import clone from 'clone'

function reducer(state, action) {
  var newState = clone(state)
  var {type, payload} = action
  switch(type) {
    case 'LOGIN_INIT':
    newState.LoginInProgress = true
    return newState
    break;
    case 'LOGIN_UNSUCCESSFUL':
    newState.LoginInProgress = false
    newState.signedIn = false
    return newState
    break;
    case 'LOGIN_SUCCESSFUL':
    newState.LoginInProgress = false
    newState.signedIn = true
    return newState
    break;
    case 'EMOJIS_INIT':
    newState.emojis = payload
    return newState
    break;
    case 'UPDATE_EMOJI_POSITION':
    newState.emojis.map(function (emoji) {
      if (emoji.id === payload.id) {
        emoji.x = payload.x
        emoji.y = payload.y
      }
    })
    return newState
    break;
    case 'REPLACE_EMOJI':
    var newEmoji = {
      id: payload[0],
      userId: payload[1],
      x: payload[2],
      y: payload[3],
      icon: payload[4]
    }
    newState.emojis.push(newEmoji)
    return newState
    break;
    default:
    return newState
  }
}

export default reducer
