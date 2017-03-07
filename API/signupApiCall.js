import request from 'superagent'

module.exports = (userInfo, dispatch) => {
  dispatch({type: 'LOGIN_INIT'})
  request
    .post(`http://localhost:3000/api/v1/users/signup`)
    .send(userInfo)
    .end((err, res) => {
      if (err) {
        console.log('this is the api error', err)
        dispatch({type: 'LOGIN_UNSUCCESSFUL'})
      } else {
        console.log('this is the api res', res.body)
        dispatch({type: 'LOGIN_SUCCESSFUL', payload: res.body.user})
      }
    })
}
