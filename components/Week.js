import React, { Component } from 'react'
import Day from './Day'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import CreateSquare from './CreateSquare'
import Emoji from './Emoji'

function Week({state, dispatch}) {

  function movePieceTo(pid, destX, destY) {
    console.log(pid, destX, destY)
    var emojis = props.state.emojis;
    var emoji = emoji[pid];
    emoji.x = destX;
    emoji.y = destY;
    emojis[pid] = emoji;
    props.dispatch({type: 'CHANGE_EMOJIS', payload: emojis})
  }

function getPieceBySquare(x, y) {
  var e, eObj, emojis = state.emojis;
  for ( var e in emojis ) {
    if ( emojis[e].x == x && emojis[e].y == y ) {
      eObj = emojis[e];
      eObj.id = e;
      return eObj;
    }
  }
  return false;
}

function renderPieceInSquare(x, y) {
  var emoji = getPieceBySquare(x, y);
  if ( emoji ) {
    return ( <Emoji board={this} emoji={emoji.icon} id={emoji.id} /> );
  }
    return false;
  }

function renderSquare(x, y) {
  return ( <CreateSquare key={ x + y * 8 } x={x} y={y}>{renderPieceInSquare(x, y)}</CreateSquare> );
}

var squares = []

return (
  <div className='week'>
  {state.calendar.map(function (day) {
      day.times.map(function (time) {
        squares.push(renderSquare(time.x, time.y))
      })
    })
  }
  {squares}
  </div>
)}


module.exports = DragDropContext(HTML5Backend)(Week)
