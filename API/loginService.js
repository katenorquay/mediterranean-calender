import request from 'superagent'
import generateEmojisByUser from './generateEmojisByUser'

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
            dispatch({type: 'EMOJIS_INIT', payload: emojis})
          } else {
            generateEmojisByUser(res.body.user.id, dispatch)
          }
        })
      }
    })
}
