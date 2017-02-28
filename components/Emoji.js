import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';

const emojiSource = {
  beginDrag() {
    return {};
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

    function Emoji(props) {
      console.log(props)
      const { connectDragSource, isDragging } = props;
      return connectDragSource(
        <div>
          {props.state.emojis.map(function (emoji) {
            return (
              <div className='emoji'>
                <img className='icon' src={emoji.icon}></img>
              </div>
            )
          })}
          </div>
      );
    }

  module.exports = DragSource(ItemTypes.EMOJI, emojiSource, collect)(Emoji)
