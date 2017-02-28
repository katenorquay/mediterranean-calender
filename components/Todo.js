import React, { Component } from 'react'
import Week from './Week'

function Todo(props) {
  console.log(props.state)
  return (
    <div>
      <h1>{props.name}</h1>
      <Week state={props.state} dispatch={props.dispatch}/>
    </div>
  )
}


module.exports = Todo
