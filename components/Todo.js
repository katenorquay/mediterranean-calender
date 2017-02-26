import React, { Component } from 'react'
import Week from './Week'

function Todo({name, state, dispatch}) {
  return (
    <div>
      <h1>{name}</h1>
      <Week state={state}/>
    </div>
  )
}


export default Todo
