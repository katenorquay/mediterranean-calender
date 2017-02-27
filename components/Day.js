import React, { Component } from 'react'
import CreateSquare from './CreateSquare'

function Day({state, dispatch}) {
  return (
    <div>
      {state.calendar.map(function (day){
          return <div className='day'>
          <h2>{day.name}</h2>
          <CreateSquare state={state} day={day} dispatch={dispatch} />
      </div>
    })}
    </div>
  )
}


export default Day
