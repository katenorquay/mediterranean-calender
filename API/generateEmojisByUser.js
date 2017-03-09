import request from 'superagent'

module.exports = (userId, dispatch) => {
  request
    .post(`http://localhost:3000/api/v1/emojis/init`)
    .send(userId)
    .withCredentials()
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        console.log(res.body)
        dispatch({type: 'EMOJIS_INIT', payload: res.body})
        dispatch({type: 'LOGIN_SUCCESSFUL'})
      }
    })
}
