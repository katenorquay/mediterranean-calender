import request from 'superagent'
import generateEmojisByUser from './generateEmojisByUser'

module.exports = (userId, dispatch) => {
  request
    .post(`http://localhost:3000/api/v1/emojis/reset`)
    .send(userId)
    .withCredentials()
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        generateEmojisByUser(userId, dispatch)
      }
    })
}
