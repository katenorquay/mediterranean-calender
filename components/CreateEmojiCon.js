import React, { Component } from 'react'
import Emoji from './Emoji'
import getPieceBySquare from '../functions/getPieceBySquare'

function CreateEmojiCon(props) {

  return (
    <div>
      {props.state.emojiCon[0].times.map(function (time) {
        console.log('the emojiCon', props.state.emojiCon[0].times)
        var x = time.x
        var y = time.y
        var emoji = getPieceBySquare(props.state, x, y)
        if (emoji) {
          return (
            <div>
              <Emoji emoji={emoji}/>
            </div>
          )
        } else {
          return (
            <div></div>
          )
        }
      })}
    </div>
  )
}

module.exports = CreateEmojiCon
