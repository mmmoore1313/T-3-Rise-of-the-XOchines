
const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Thank you for signing up! Please enter your login credentials')
  $('#sign-up').trigger('reset')
  location.reload()
}

const signInSuccess = function (response) {
  console.log('success')
  store.user = response.user

  $('#message').text('Welcome back!')
  $('#sign-in').trigger('reset')

  $('.user-section').show()
  $('#sign-out').show()

  $('.front-screen').hide()
}

const signOutSuccess = function () {
  $('#message').text('Okay, bye-bye for now!')
  store.user = null
  location.reload()
}

const changeSuccess = function (response) {
  $('#message').text("Passwords are like yesterday's pants: you changed em!")
  $('#change-password').trigger('reset')
  $('#changepw').hide()
  $('#user-section').show()
}

const authFailure = function (response) {
  $('#message').text('Something went wrong. Please try again')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changeSuccess,
  authFailure
}
