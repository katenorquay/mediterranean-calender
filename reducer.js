import clone from 'clone'

function reducer(state, action) {
  var newState = clone(state)
  var {type, payload} = action
  switch(type) {
    case 'LOGIN_INIT':
    newState.LoginInProgress = true
    return newState
    break;
    case 'LOGIN_UNSUCCESSFUL'
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
    return newState
    break;
    case 'MOVE_EMOJI':
    var emoji = newState.emojis[payload[0]]
    emoji.x = payload[1]
    emoji.y = payload[2]
    return newState
    case 'REPLACE_EMOJI':
    var newEmoji = {
      x: payload.x,
      y: payload.y,
      type: payload.type,
      icon: payload.icon
    }
    var obj = newState.emojis
    var id = Object.keys(obj).length + 1
    newState.emojis[id] = newEmoji
    return newState
    break;
    case 'RESET':
    var obj = newState.emojis
    var keys = Object.keys(obj)
    for (var i = 0; i < keys.length; i++) {
      if (obj[keys[i]].x !== 0) {
        delete obj[keys[i]]
      }
    }
    console.log(newState)
      return newState
      break;
    default:
    return newState
  }
}

export default reducer
