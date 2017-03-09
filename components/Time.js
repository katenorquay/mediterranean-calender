import React, { Component } from 'react'
import Emoji from './Emoji'
var DropTarget = require('react-dnd').DropTarget;
import ItemTypes from './ItemTypes';
import updateEmojiById from '../API/updateEmojiById'
import replaceEmoji from '../API/replaceEmoji'

var squareTarget = {
  drop: function (props, monitor) {
    var item = monitor.getItem();
    updateEmojiById(props.dispatch, item.id, props.x, props.y)
    replaceEmoji(props.dispatch, item.x, item.y, item.icon, item.userId)
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
  if (props.emoji) {
    return connectDropTarget (
      <div className={'hasEmoji  time  -time' + props.y}>
        <Emoji emoji={props.emoji}/>
      </div>
    )
  } else {
    return connectDropTarget(
      <div className={'time  -time' + props.y}></div>
    )
  }
}

module.exports = DropTarget(ItemTypes.EMOJI, squareTarget, collect)(Time);
