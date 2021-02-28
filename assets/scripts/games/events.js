'use strict'
const store = require('./../store')
const api = require('./api')
const ui = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)

const onIndexGames = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}

const onNewGame = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.onError)
}

const userChoice = function () {
  //
  //$('#3').hide()
}

module.exports = {
  userChoice,
  onIndexGames,
  onNewGame
}
