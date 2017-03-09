import request from 'superagent'
import generateEmojisByUser from './generateEmojisByUser'
import getEmojisByUser from './getEmojisByUser'

module.exports = (userInfo, dispatch) => {
  dispatch({type: 'LOGIN_INIT'})
  request
    .post(`http://localhost:3000/api/v1/users/login`)
    .send(userInfo)
    .withCredentials()
    .end((err, res) => {
      if (err) {
        console.log('this is the api error', err)
        dispatch({type: 'LOGIN_UNSUCCESSFUL'})
      } else {
        dispatch({type: 'LOGIN_SUCCESSFUL'})
        getEmojisByUser(res.body.user.id, function(emojis) {
          if (emojis.length > 0) {
            console.log(emojis)
            dispatch({type: 'EMOJIS_INIT', payload: emojis})
          } else {
            generateEmojisByUser(res.body.user.id, dispatch)
          }
        })
      }
    })
}
