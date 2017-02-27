import React, { Component } from 'react'
import Week from './Week'
import Emoji from './Emoji'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

function Todo(props) {
  console.log(props.state)
  return (
    <div>
      <h1>{props.name}</h1>
      <Week state={props.state} dispatch={props.dispatch}/>
    </div>
  )
}


module.exports = DragDropContext(HTML5Backend)(Todo)
