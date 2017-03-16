import React, { Component } from 'react'
import Time from './Time'
import getPieceBySquare from '../functions/getPieceBySquare'

function CreateSquare({state, day, dispatch}) {
  return (
    <div>
      {day.times.map(function (time) {
        var emoji = getPieceBySquare(state, time.x, time.y)
        return (
          <Time dispatch={dispatch} x={time.x} y={time.y} emoji={emoji}/>
        )
      })}
    </div>
  )
}


module.exports = CreateSquare
