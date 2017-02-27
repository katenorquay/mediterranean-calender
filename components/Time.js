import React, { Component } from 'react'
import Emoji from './Emoji'
var DropTarget = require('react-dnd').DropTarget;
import ItemTypes from './ItemTypes';

var squareTarget = {
  drop: function (props, monitor) {
    props.dispatch({type: 'MOVE_EMOJI', payload: [props.x, props.y, props.day]})
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}


function Time(props) {
  var emojiX = props.state.emojiPosition[0];
  var emojiY = props.state.emojiPosition[1];
  var connectDropTarget = props.connectDropTarget;
    if(emojiX === props.x && emojiY === props.y) {
      return connectDropTarget (
        <div className={'time  time-' + props.y + '  hasEmoji'}>
          <Emoji props={props}/>
        </div>
      )
    } else {
      return connectDropTarget (
        <div className={'time  time-' + props.y}></div>
      )
    }
}

module.exports = DropTarget(ItemTypes.EMOJI, squareTarget, collect)(Time);
