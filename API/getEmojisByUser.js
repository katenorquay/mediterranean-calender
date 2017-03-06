import request from 'superagent'

module.exports = (dispatch, userId) => {

  request
    .get(`${url}/api/v1/emojis/${userId}`)
    .withCredentials()
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        dispatch({type: 'EMOJIS_INIT', payload: res})
      }
    })
}
