import React, { Component } from 'react'

function Time(props) {
  console.log('the time props', props)
    return (
      <div className='time'>{props.children}</div>
    )
}

module.exports = Time;
