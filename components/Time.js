import React, { Component } from 'react'
import Emoji from './Emoji'
var DropTarget = require('react-dnd').DropTarget;
import ItemTypes from './ItemTypes';
import CreateEmoji from './CreateEmoji'

var squareTarget = {
  drop: function (props, monitor) {
    var item = monitor.getItem()
    console.log('this is the item', item)
    props.dispatch({type: 'MOVE_EMOJI', payload: [item.id, props.x, props.y]})
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
        <CreateEmoji state={props.state}/>
        </div>
      )
    } else {
      return connectDropTarget (
        <div className={'time  time-' + props.y}></div>
      )
    }
}

module.exports = DropTarget(ItemTypes.EMOJI, squareTarget, collect)(Time);
