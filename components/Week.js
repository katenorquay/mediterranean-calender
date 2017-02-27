import React, { Component } from 'react'
import Day from './Day'

function Week({state}) {
  return (
      <div>
        <Day state={state}/>
      </div>
  )
}


export default Week
