import React, { Component } from 'react'
import Emoji from './Emoji'

function CreateEmoji({state}) {
  return (
    <div>
      {state.emojis.map(({id, icon}, index) =>
          <Emoji id={id} icon={icon} key={index}/>
      })
    </div>
  )
}

module.exports = CreateEmoji
