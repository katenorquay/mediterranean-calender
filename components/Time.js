import React, { Component } from 'react'

function Time(props) {
  console.log('the time props', props.emoji)
    return (
      <div className='time'>{props.emoji}</div>
    )
}

module.exports = Time;
