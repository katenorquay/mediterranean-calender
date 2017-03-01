import React, { Component } from 'react'
import Day from './Day'
import CreateEmojiCon from './CreateEmojiCon'

function Week({state, dispatch}) {
  return (
      <div>
        <Day state={state} dispatch={dispatch}/>
        <CreateEmojiCon state={state} dispatch={dispatch} />
      </div>
  )
}


export default Week
