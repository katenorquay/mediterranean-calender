import React, { Component } from 'react'
import Time from './Time'
var DropTarget = require('react-dnd').DropTarget;
import ItemTypes from './ItemTypes';

var squareTarget = {
  drop: function (props, monitor) {
    var item = monitor.getItem()
    console.log('this is the item', item)
    item.board.movePieceTo(item.id, props.x, props.y)
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

function CreateSquare(props) {
  var connectDropTarget = props.connectDropTarget;
  return connectDropTarget(
    <div className='square'>
      <Time key={props.key}/>
    </div>
  )
}


module.exports = DropTarget(ItemTypes.EMOJI, squareTarget, collect)(CreateSquare);
