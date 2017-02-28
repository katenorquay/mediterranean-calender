import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';

const emojiSource = {
  beginDrag(props) {
    return {
      id: props.id
    };
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
      const { name, connectDragSource, isDragging } = props;
      return connectDragSource(
        <div className='emoji'>
          {props.id}
          <img className='icon' src={props.icon}></img>
        </div>
      );
    }

  module.exports = DragSource(ItemTypes.EMOJI, emojiSource, collect)(Emoji)
