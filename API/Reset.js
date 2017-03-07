import request from 'superagent'

module.exports = (dispatch, emojiId, newCoords) => {

  request
    .get(`http://localhost:3000/api/v1/emojis/edit/${emojiId}`)
    .send(newCoords)
    .withCredentials()
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        dispatch({type: 'UPDATE_EMOJI', payload: res})
      }
    })
}
