function getPieceBySquare(state, x, y) {
  console.log(x, y, 'the coords')
  var emojis = state.emojis
  for (var i = 0; i < emojis.length; i++) {
    if(emojis[i].x === x && emojis[i].y === y) {
      console.log('this is the selected emojis', emojis[i])
      return emojis[i]
    } else {
      return false
    }
  }
}

module.exports = getPieceBySquare
