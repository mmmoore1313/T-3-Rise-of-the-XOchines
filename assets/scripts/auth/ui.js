
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

  $('#user-section').show()
  $('#sign-out').show()

  $('#sign-up').hide()
  $('#sign-in').hide()
}

const signOutSuccess = function () {
  $('#message').text('Okay, bye-bye for now!')
  store.user = null
  location.reload()
}

const changeSuccess = function (response) {
  $('#message').text("Passwords are like yesterday's pants: you changed em!")
  $('#change-password').trigger('reset')
}

const authFailure = function (response) {
  console.log('yeeah, nah')
  $('#message').text('Something went wrong. Please try again')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changeSuccess,
  authFailure
}
