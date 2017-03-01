import React, { Component } from 'react'
import Time from './Time'
import getPieceBySquare from '../functions/getPieceBySquare'

function CreateSquare(props) {
  return (
    <div>
      {props.day.times.map(function (time) {
        var x = time.x
        var y = time.y
        var emoji = getPieceBySquare(props.state, x, y)
        return (
          <Time state={props.state} day={props.day} dispatch={props.dispatch} x={x} y={y} emoji={emoji}/>
        )
      })}
    </div>
  )
}


module.exports = CreateSquare
