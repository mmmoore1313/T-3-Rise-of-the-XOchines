
const api = require('./api')
const ui = require('./ui')

const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.authFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.authFailure)
}

const onChagePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changeSuccess)
    .catch(ui.authFailure)
}

const onSignOut = function (event){
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.authFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChagePassword
}
