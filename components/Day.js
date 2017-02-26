import React, { Component } from 'react'
import Time from './Time'

function Day({state}) {
  return (
    <div>
    {state.calendar.map(function (day){
      return <div className='day'>
      <Time state={state} day={day}/>
      {day.name}
      </div>
    })}
    </div>
  )
}


export default Day
