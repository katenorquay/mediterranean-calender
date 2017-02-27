import React, { Component } from 'react'
import Time from './Time'

function Day({state}) {
  return (
    <div>
    {state.calendar.map(function (day){
      return <div className='day'>
      {day.name}
      <Time state={state} day={day}/>
      </div>
    })}
    </div>
  )
}


export default Day
