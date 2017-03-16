import React, { Component } from 'react'
import Day from './Day'

function Week({state, dispatch}) {
  return (
      <div>
        <Day state={state} dispatch={dispatch}/>
      </div>
  )
}


export default Week
