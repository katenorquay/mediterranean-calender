import React, { Component } from 'react'
import Emoji from './Emoji'
var DropTarget = require('react-dnd').DropTarget;
import ItemTypes from './ItemTypes';

var squareTarget = {
  drop: function (props, monitor) {
    var item = monitor.getItem();
    console.log('this is the item id', item.id)
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
  var connectDropTarget = props.connectDropTarget;
      return connectDropTarget (
        <div className={'time  time-' + props.y}>
          <Emoji emoji={props.emoji}/>
        </div>
      )
}

module.exports = DropTarget(ItemTypes.EMOJI, squareTarget, collect)(Time);
