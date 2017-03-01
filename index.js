import React from 'react'
import { render } from 'react-dom'
import Todo from './components/Todo'
import reducer from './reducer.js'
import {createStore} from 'redux'
import ItemTypes from './components/ItemTypes';

const initialState = {
  calendar: [
    {name: 'Monday',
    times:[
      {id:1, title:'morning', x: 0, y: 0, hasEmoji: false},
      {id:2, title: 'late morning', x: 0, y: 1, hasEmoji: false},
      {id:3, title:'lunch', x: 0, y: 2, hasEmoji: false},
      {id:4, title: 'afternoon', x: 0, y: 3, hasEmoji: false},
      {id:5, title: 'late afternoon', x: 0, y: 4, hasEmoji: false},
      {id:6, title: 'dinner', x: 0, y: 5, hasEmoji: false}
    ]},
    {name: 'Tuesday',
    times:[
      {id:1, title:'morning', x: 1, y: 0, hasEmoji: false},
      {id:2, title: 'late morning', x: 1, y: 1, hasEmoji: false},
      {id:3, title:'lunch', x: 1, y: 2, hasEmoji: false},
      {id:4, title: 'afternoon', x: 1, y: 3, hasEmoji: false},
      {id:5, title: 'late afternoon', x: 1, y: 4, hasEmoji: false},
      {id:6, title: 'dinner', x: 1, y: 5, hasEmoji: false}
    ]},
    {name: 'Wednesday',
    times:[
      {id:1, title:'morning', x: 2, y: 0, hasEmoji: false},
      {id:2, title: 'late morning', x: 2, y: 1, hasEmoji: false},
      {id:3, title:'lunch', x: 2, y: 2, hasEmoji: false},
      {id:4, title: 'afternoon', x: 2, y: 3, hasEmoji: false},
      {id:5, title: 'late afternoon', x: 2, y: 4, hasEmoji: false},
      {id:6, title: 'dinner', x: 2, y: 5, hasEmoji: false}
    ]},
    {name: 'Thursday',
    times:[
      {id:1, title:'morning',  x: 3, y: 0, hasEmoji: false},
      {id:2, title: 'late morning', x: 3, y: 1, hasEmoji: false},
      {id:3, title:'lunch', x: 3, y: 2, hasEmoji: false},
      {id:4, title: 'afternoon', x: 3, y: 3, hasEmoji: false},
      {id:5, title: 'late afternoon', x: 3, y: 4, hasEmoji: false},
      {id:6, title: 'dinner', x: 3, y: 5, hasEmoji: false}
    ]},
    {name: 'Friday',
    times: [
      {id:1, title:'morning', x: 4, y: 0, hasEmoji: false},
      {id:2, title: 'late morning', x: 4, y: 1, hasEmoji: false},
      {id:3, title:'lunch', x: 4, y: 2, hasEmoji: false},
      {id:4, title: 'afternoon', x: 4, y: 3, hasEmoji: false},
      {id:5, title: 'late afternoon', x: 4, y: 4, hasEmoji: false},
      {id:6, title: 'dinner', x: 4, y: 5, hasEmoji: false}
    ]},
    {name: 'Saturday',
    times: [
      {id:1, title:'morning', x: 5, y: 0, hasEmoji: false},
      {id:2, title: 'late morning', x: 5, y: 1, hasEmoji: false},
      {id:3, title:'lunch', x: 5, y: 2, hasEmoji: false},
      {id:4, title: 'afternoon', x: 5, y: 3, hasEmoji: false},
      {id:5, title: 'late afternoon', x: 5, y: 4, hasEmoji: false},
      {id:6, title: 'dinner', x: 5, y: 5, hasEmoji: false}
    ]},
    {name: 'Sunday',
    times: [
      {id:1, title:'morning', x: 6, y: 0, hasEmoji: false},
      {id:2, title: 'late morning', x: 6, y: 1, hasEmoji: false},
      {id:3, title:'lunch', x: 6, y: 2, hasEmoji: false},
      {id:4, title: 'afternoon', x: 6, y: 3, hasEmoji: false},
      {id:5, title: 'late afternoon', x: 6, y: 4, hasEmoji: false},
      {id:6, title: 'dinner', x: 6, y: 5, hasEmoji: false}
    ]}
  ],
  emojis: {
    1: {
      x: 3, y: 4,
      type: ItemTypes.EMOJI,
      icon: '♗'
    },
    2: {
      x: 0, y: 0,
      type: ItemTypes.EMOJI,
      icon: '♔'
    },
    3: {
      x: 2, y: 1,
      type: ItemTypes.EMOJI,
      icon: '♛'
    },
    4: {
      x: 4, y: 2,
      type: ItemTypes.EMOJI,
      icon: '♞'
    },
    5: {
      x: 6, y: 4,
      type: ItemTypes.EMOJI,
      icon: '♜'
    }
  }
}


const store = createStore(reducer, initialState)

const main = document.querySelector('main')

store.subscribe( () => {
  var state = store.getState()
  render(<Todo name='Mediterranean Calendar' state={state} dispatch={store.dispatch} />, main)
})

store.dispatch({type: 'INIT'})
