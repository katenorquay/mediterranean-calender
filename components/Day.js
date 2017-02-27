import React, { Component } from 'react'
import Time from './Time'

function Day({state, dispatch}) {
  return (
    <div>
      {state.calendar.map(function (day){
        {day.times.map(function (time){
          return ( <div className='day'>
          {day.name}
          <Time state={state} day={day} dispatch={dispatch} x={time.x} y={time.y}/>
      </div> )
    })}
    })}
    </div>
  )
}


export default Day
