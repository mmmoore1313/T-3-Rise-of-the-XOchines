
const config = require('../config')

const index = function () {
  return $.ajax({
    method: 'GET',
    url: 'https://tic-tac-toe-api-production.herokuapp.com/games/'
  })
}



module.exports = {
  index
}
