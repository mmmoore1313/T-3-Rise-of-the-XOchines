'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const gameEvents = require('./games/events')
const authEvents = require('./auth/events')

const forms = require('./forms')

$(() => {
  // your JS code goes here
  // auth events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').click(function () {
    event.preventDefault()
    $('#message').html(forms.signOutHtml)
    $('#naah').click(function () {
      event.preventDefault()
      $('#message').html('')
    })
    $('#yeeah').on('click', authEvents.onSignOut)
  })
  $('#change-password').on('submit', authEvents.onChagePassword)

  // hidden until acted upon with new game
  // $('#game').hide()
  // hidden until acted upon with signup or login buttons
  $('#sign-up').hide()
  $('#sign-in').hide()
  // hidden until signed-in
  $('#sign-out').hide()
  $('#user-section').hide()
  // hidden until how to is clicked
  $('#howto').hide()
  $('#about').hide()
  $('.home').hide()
  $('#games-index').hide()
  // hidden until edit button is clicked
  $('#changepw').hide()

  // show buttons
  $('#signup').click(function () {
    event.preventDefault()
    $('#joinup').html(forms.signUpHtml)
    $('#sign-up').show()
    $('#signup').hide()
    $('#sign-in').hide()
    $('#login').show()
  })
  $('#login').click(function () {
    event.preventDefault()
    $('#joinin').html(forms.loginHtml)
    $('#sign-in').show()
    $('#sign-up').hide()
    $('#login').hide()
    $('#signup').show()
  })
  $('#edit').click(function () {
    $('#changepw').show()
    $('.home').show()
    $('#user-section').hide()
  })
  $('#how-to').click(function () {
    $('#howto').show()
    $('#front-screen').hide()
    $('.home').hide()
  })
  $('.about-us').click(function () {
    $('#about').show()
    $('#front-screen').hide()
    $('.home').hide()
  })
  $('#instructions').click(function () {
    $('#howto').show()
    $('.home').show()
    $('#user-section').hide()
    $('.front').hide()
  })
  $('#leaderboard').click(function () {
    $('#stats').show()
    $('.home').show()
    $('#games-index').show()
    $('#user-section').hide()
  })
  $('#new-game').click(function () {
    $('#game').show()
    $('.home').show()
    $('#user-section').hide()
    $('.front').hide()
  })
  $('#newgame').click(function () {
    $('#game').show()
    $('.front').show()
    $('#front-screen').hide()
  })
  // oft used buttons
  $('.home').click(function () {
    $('#user-section').show()
    $('#howto').hide()
    $('#changepw').hide()
    $('#about').hide()
    $('#stats').hide()
    $('#game').hide()
    $('.home').hide()
  })
  $('.front').click(function () {
    $('#front-screen').show()
    $('#howto').hide()
    $('#about').hide()
    $('#game').hide()
  })
  // game events
  $('#games-index').on('click', gameEvents.onIndexGames)
  $('#start').on('click', gameEvents.onNewGame)

  $('#game-board').on('click', gameEvents.userChoice)
})
