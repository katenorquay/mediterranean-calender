import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';

const emojiSource = {
  beginDrag(props) {
    return {
      id: props.emoji.id,
      userId: props.emoji.userId,
      icon: props.emoji.icon,
      x: props.emoji.x,
      y: props.emoji.y,
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
  const { id, connectDragSource, isDragging } = props;
    return connectDragSource(
      <div className='emoji'>
        {props.emoji.icon}
      </div>
    );
}

module.exports = DragSource(ItemTypes.EMOJI, emojiSource, collect)(Emoji)
