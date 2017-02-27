import React, { Component } from 'react'
import Emoji from './Emoji'

function Time(props) {
  var emojiX = props.state.emojiPosition[0];
  var emojiY = props.state.emojiPosition[1];
  return (
    <div>
      {props.day.times.map(function (time){
        if(emojiX === time.x && emojiY === time.y) {
          return (
           <div className={'time  time-' + time.y + '  hasEmoji'}>
            <Emoji props={props}/>
           </div>
         )
       } else {
        return (
          <div className={'time  time-' + time.y}>
          </div>
        )
      }
      })}
    </div>
  )
}

export default Time
