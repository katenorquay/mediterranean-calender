import request from 'superagent'

module.exports = (dispatch, userInfo) => {
  dispatch({type: 'LOGIN_INIT'})

  request
    .post(`${url}/api/v1/users/login`)
    .send(userInfo)
    .withCredentials()
    .end((err, res) => {
      if (err) {
        dispatch({type: 'LOGIN_UNSUCCESSFUL'})
      } else {
        var userId = res.body.id
        getEmojisByUser(dispatch, userId)
        dispatch({type: 'LOGIN_SUCCESSFUL', payload: res.body.user})
      }
    })
}
