import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';
import Week from './Week'

const emojiSource = {
  beginDrag(props) {
    return {
      id: props.id,
      board: props.week
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
          <img className='icon' src={props.icon}></img>
        </div>
      );
    }

  module.exports = DragSource(props => props.type, emojiSource, collect)(Emoji)
