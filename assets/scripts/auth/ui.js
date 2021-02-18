
const store = require('./../store')

const signUpSuccess = function (response) {
  console.log('nah, yeeah')
  $('#message').text('Thank you for signing up! Please enter your login credentials')
  $('#sign-up').trigger('reset')
}

const signInSuccess = function (response) {
  store.user = response.user

  $('#message').text('Welcome back!')
  $('#sign-in').trigger('reset')

  //$('#user-section').show()

  $('#sign-up').hide()
  $('#sign-in').hide()
}

const authFailure = function (response) {
  console.log('yeeah, nah')
  $('#message').text('Something went password_confirmation')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  authFailure
}
