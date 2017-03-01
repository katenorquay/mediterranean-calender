import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';
import Week from './Week'

const emojiSource = {
  beginDrag(props) {
    return {
      id: props.id,
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
      console.log('emoji props', props)
      return connectDragSource(
        <div className='emoji'>{props.emoji}</div>
      );
    }

  module.exports = DragSource(props => props.type, emojiSource, collect)(Emoji)
