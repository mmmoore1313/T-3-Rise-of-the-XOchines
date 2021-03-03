
const config = require('../config')
const store = require('../store')

const index = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Autorization: 'Token token=' + store.user.token
    }
  })
}



module.exports = {
  index
}
