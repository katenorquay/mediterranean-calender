import React, { Component } from 'react'
import Time from './Time'

function Day({state, dispatch}) {
  return (
    <div>
<<<<<<< HEAD
      {state.calendar.map(function (day){
        {day.times.map(function (time){
          return ( <div className='day'>
          <h2>{day.name}</h2>
          <Time state={state} day={day} dispatch={dispatch} x={time.x} y={time.y}/>
      </div> )
    })}
    })}
    </div>
  )
}


export default Day
