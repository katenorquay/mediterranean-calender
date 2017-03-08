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
        console.log('this is the api res', res.body.user.id)
        generateEmojisByUser(res.body.user.id, dispatch)
      }
    })
}
