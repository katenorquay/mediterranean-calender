function getPieceBySquare(state, x, y) {
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
