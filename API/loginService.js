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
        getEmojisByUser(res.body.user.id, function(emojis) {
          if (emojis.length > 0) {
            console.log(emojis)
            dispatch({type: 'EMOJIS_INIT', payload: emojis})
            dispatch({type: 'LOGIN_SUCCESSFUL'})
          } else {
            console.log('the user id for login', res.body.user.id)
            generateEmojisByUser(res.body.user.id, dispatch)
          }
        })
      }
    })
}
