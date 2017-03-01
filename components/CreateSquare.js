import React, { Component } from 'react'
import Time from './Time'

function CreateSquare(props) {
  function getPieceBySquare(x, y) {
  var e, eObj, emojis = props.state.emojis;
  for ( var e in emojis ) {
    if ( emojis[e].x === x && emojis[e].y === y ) {
      eObj = emojis[e];
      eObj.id = e;
      return eObj;
    }
  }
  return false;
}
  return (
    <div>
      {props.day.times.map(function (time) {
        var x = time.x
        var y = time.y
        var emoji = getPieceBySquare(x, y)
        console.log(emoji)
        return (
          <Time state={props.state} day={props.day} dispatch={props.dispatch} x={x} y={y} emoji={emoji}/>
        )
      })}
    </div>
  )
}


module.exports = CreateSquare
