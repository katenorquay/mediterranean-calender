import React, { Component } from 'react'
import Emoji from './Emoji'
var DropTarget = require('react-dnd').DropTarget;
import ItemTypes from './ItemTypes';
import CreateEmoji from './CreateEmoji'

var squareTarget = {
  drop: function (props, monitor) {
    props.dispatch({type: 'MOVE_EMOJI', payload: [props.x, props.y]})
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}


function Time(props) {
  var connectDropTarget = props.connectDropTarget;
      return connectDropTarget (
        <div className={'time  time-' + props.y}>
          <Emoji emoji={props.emoji}/>
        </div>
      )
}

module.exports = DropTarget(ItemTypes.EMOJI, squareTarget, collect)(Time);
