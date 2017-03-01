function getPieceBySquare(state, x, y) {
  var e, eObj, emojis = state.emojis;
  for ( var e in emojis ) {
    if ( emojis[e].x === x && emojis[e].y === y ) {
      eObj = emojis[e];
      eObj.id = e;
      return eObj;
    }
  }
  return false;
}

module.exports = getPieceBySquare
