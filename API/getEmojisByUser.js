import request from 'superagent'

module.exports = (userId, callback) => {
  request
    .post(`http://localhost:3000/api/v1/emojis/${userId}`)
    .withCredentials()
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        callback(res.body)
      }
    })
}
