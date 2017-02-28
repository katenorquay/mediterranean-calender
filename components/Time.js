import React, { Component } from 'react'
import Emoji from './Emoji'
var DropTarget = require('react-dnd').DropTarget;
import ItemTypes from './ItemTypes';

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
  var emojiX = props.state.emojis.map(function (emoji) {
    return emoji.position[0]
  })
  var emojiY = props.state.emojis.map(function (emoji) {
    return emoji.position[1]
  })
  var connectDropTarget = props.connectDropTarget;
    if(emojiX[0] === props.x && emojiY[0] === props.y) {
      return connectDropTarget (
        <div className={'time  time-' + props.y + '  hasEmoji'}>
          <Emoji props={props} state={props.state}/>
        </div>
      )
    } else {
      return connectDropTarget (
        <div className={'time  time-' + props.y}></div>
      )
    }
}

module.exports = DropTarget(ItemTypes.EMOJI, squareTarget, collect)(Time);
