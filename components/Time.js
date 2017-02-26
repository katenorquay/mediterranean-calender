import React, { Component } from 'react'

function Time({state, day}) {
  return (
    <div>
      {day.times.map(function (time){
        return <div className='time'>
        {time.title}
        </div>
      })}
    </div>
  )
}


export default Time
