import React, { Component } from 'react'
import Time from './Time'

function Day({state}) {
  return (
    <div>
    {state.calendar.map(function (day){
      return <div className='day'>
      <h2>{day.name}</h2>
      <Time state={state} day={day}/>
      </div>
    })}
    </div>
  )
}


export default Day
