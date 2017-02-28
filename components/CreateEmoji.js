import React, { Component } from 'react'
import Emoji from './Emoji'

function CreateEmoji({state}) {
  return (
    <div>
      {state.emojis.map(function (emoji) {
        return (
          <Emoji id={emoji.id} icon={emoji.icon}/>
        )
      })}
    </div>
  )
}

module.exports = CreateEmoji
