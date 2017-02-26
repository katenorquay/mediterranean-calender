import React, { Component } from 'react'
import Day from './Day'

function Week({state}) {
  return (
      <div className='week'>
      <Day state={state}/>
      </div>
  )
}


export default Week
