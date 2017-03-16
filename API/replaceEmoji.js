import request from 'superagent'

module.exports = (dispatch, x, y, icon, userId) => {
  var newEmoji = {
    userId: userId,
    x: x,
    y: y,
    icon: icon
  }
  request
    .post(`http://localhost:3000/api/v1/emojis`)
    .send(newEmoji)
    .withCredentials()
    .end((err, res) => {
      if (err) {
        console.log('getting an error', err)
      } else {
        dispatch({type:'REPLACE_EMOJI', payload: [res.body.emoji, userId, x, y, icon]})
      }
    })
}
