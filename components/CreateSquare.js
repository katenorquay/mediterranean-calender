import React, { Component } from 'react'
import Time from './Time'

function CreateSquare(props) {
  return (
    <div>
      {props.day.times.map(function (time) {
        return (
          <Time state={props.state} day={props.day} dispatch={props.dispatch} x={time.x} y={time.y}/>
        )
      })}
    </div>
  )
}


module.exports = BoardSquare
