
const store = require('./../store')
const forms = require('../templates/forms')
const modals = require('../templates/staticmodals')

const signUpSuccess = function (response) {
  event.preventDefault()
  $('#messages').modal().html('#heyyou').text('Thank you for signing up! Please enter your login credentials')
  $('#sign-up').trigger('reset')
  location.reload()
}

const signInSuccess = function (response) {
  store.user = response.user

  $('#messages').html(modals.messagesHtml)
  $('#heyyou').text('Welcome back!').css('color', 'green')
  $('.close').click(function () {
    $('#messages').hide()
    $('.modal-backdrop').hide()
    $('.user-section').show()
    $('.front-screen').hide()
  })

  $('#sign-in').trigger('reset')
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
  $('.error').text('Something went wrong. Please try again').css('color', 'red')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changeSuccess,
  authFailure
}
