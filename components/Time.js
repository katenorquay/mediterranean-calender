import React, { Component } from 'react'
import Emoji from './Emoji'
var DropTarget = require('react-dnd').DropTarget;
import ItemTypes from './ItemTypes';

var squareTarget = {
  drop: function (props, monitor) {
    console.log('these are the props', props)
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
  var emojiX = props.state.emojiPosition[0];
  var emojiY = props.state.emojiPosition[1];
  console.log(emojiY, emojiX)
  var connectDropTarget = props.connectDropTarget;
  return connectDropTarget(
    <div>
      {props.day.times.map(function (time){
        if(emojiX === time.x && emojiY === time.y) {
          return (
           <div className={'time  time-' + time.y + '  hasEmoji'}>
            <Emoji props={props}/>
           </div>
         )
       } else {
        return (
          <div className={'time  time-' + time.y}>
          </div>
        )
      }
      })}
    </div>
  )
}

module.exports = DropTarget(ItemTypes.EMOJI, squareTarget, collect)(Time);
