import clone from 'clone'

function reducer(state, action) {
  var newState = clone(state)
  var {type, payload} = action
  switch(type) {
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
