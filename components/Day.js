import React, { Component } from 'react'
import BoardSquare from './BoardSquare'

function Day({state, dispatch}) {
  return (
    <div>
      {state.calendar.map(function (day){
          return <div className='day'>
          <h2>{day.name}</h2>
          <BoardSquare state={state} day={day} dispatch={dispatch} />
      </div>
    })}
    </div>
  )
}


export default Day
