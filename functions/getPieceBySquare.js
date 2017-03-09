function getPieceBySquare(state, x, y) {
  console.log(state.emojis, 'the emojis')
  console.log(x, y, 'the coords')
  var emojis = state.emojis;
    for ( var e in emojis ) {
      if ( emojis[e].x == x && emojis[e].y == y ) {
        var eObj =  emojis[e];
        return eObj;
      }
    }
    return false;
}

module.exports = getPieceBySquare
