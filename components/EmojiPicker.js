import React, { Component } from 'react'
import Emoji from './Emoji'
import getPieceBySquare from '../functions/getPieceBySquare'

function EmojiPicker({state, dispatch}) {
  return (
    <div>
      {state.emojiCon[0].times.map(function (time) {
        var emoji = getPieceBySquare(state, time.x, time.y)
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

module.exports = EmojiPicker
