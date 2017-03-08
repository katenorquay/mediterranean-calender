import request from 'superagent'
import loginService from './loginService'

module.exports = (userInfo, dispatch) => {
  request
    .post(`http://localhost:3000/api/v1/users/signup`)
    .send(userInfo)
    .withCredentials()
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        loginService(userInfo, dispatch)
      }
    })
}
