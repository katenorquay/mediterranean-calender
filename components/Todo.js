import React, { Component } from 'react'
import Week from './Week'
import Emoji from './Emoji'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

function Todo(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <Week state={props.state} dispatch={props.dispatch}/>
      <button onClick={() =>{props.dispatch({type: 'RESET'})}}>Reset</button>
    </div>
  )
}


module.exports = DragDropContext(HTML5Backend)(Todo)
