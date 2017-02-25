import React, { Component } from 'react'
import Week from './Week'

function Todo(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <Week/>
    </div>
  )
}


export default Todo
