import request from 'superagent'

module.exports = (dispatch, emojiId, x, y) => {
  var newCoords = {
    x: x,
    y: y
  }
  request
    .post(`http://localhost:3000/api/v1/emojis/edit/${emojiId}`)
    .send(newCoords)
    .withCredentials()
    .end((err, res) => {
      if (err) {
        console.log('getting an error', err)
      } else {
        dispatch({type: 'UPDATE_EMOJI_POSITION', payload: res.body.emoji})
      }
    })
}
